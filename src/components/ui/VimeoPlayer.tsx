"use client"

import { useEffect, useRef } from "react"
import Player from "@vimeo/player"

interface VimeoPlayerProps {
  vimeoId: string
  className?: string
}

export function VimeoPlayer({ vimeoId, className }: VimeoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const playerRef = useRef<Player | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Clean up previous player if it exists
    if (playerRef.current) {
      playerRef.current.destroy()
    }

    playerRef.current = new Player(containerRef.current, {
      id: parseInt(vimeoId),
      autoplay: false,
      byline: false,
      title: false,
      portrait: false,
      responsive: true,
    })

    // Set initial volume to 50%
    playerRef.current.setVolume(0.5).catch((error) => {
      console.error("Error setting volume:", error)
    })

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy()
      }
    }
  }, [vimeoId])

  return (
    <div 
      ref={containerRef} 
      className={className}
    />
  )
}
