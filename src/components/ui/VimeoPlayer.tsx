"use client"

import { useEffect, useRef, useState, useImperativeHandle, forwardRef } from "react"
import Player from "@vimeo/player"
import { cn } from "@/lib/utils"

interface VimeoPlayerProps {
  vimeoId: string
  className?: string
}

export interface VimeoPlayerRef {
  play: () => void
  pause: () => void
}

export const VimeoPlayer = forwardRef<VimeoPlayerRef, VimeoPlayerProps>(
  ({ vimeoId, className }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const playerRef = useRef<Player | null>(null)
    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
      if (!containerRef.current) return

      if (playerRef.current) {
        playerRef.current = null;
      }

      const player = new Player(containerRef.current, {
        id: parseInt(vimeoId),
        autoplay: false,
        loop: false,
        background: false,
        transparent: true,
        muted: false, // Normal mode
      })

      playerRef.current = player

      player.ready().then(() => {
        setIsReady(true)
      }).catch(() => setIsReady(true))

      return () => {
        if (playerRef.current) {
          // Do not call .destroy() as it triggers a race condition in the vimeo/player 
          // postMessage listener during rapid Next.js unmounting, causing a hard crash.
          // React DOM unmounting perfectly handles dropping the iframe anyway.
          playerRef.current = null;
        }
      }
    }, [vimeoId])

    useImperativeHandle(ref, () => ({
      play: () => {
        if (playerRef.current) {
          playerRef.current.play().catch((err) => {
            console.warn("Manual play failed:", err)
          })
        }
      },
      pause: () => {
        if (playerRef.current) {
          playerRef.current.pause().catch(() => {})
        }
      }
    }), [isReady])

    return (
      <div 
        ref={containerRef} 
        className={cn(
          "vimeo-player-container w-full h-full transition-opacity duration-700",
          isReady ? "opacity-100" : "opacity-0",
          className
        )}
      />
    )
  }
)

VimeoPlayer.displayName = "VimeoPlayer"
