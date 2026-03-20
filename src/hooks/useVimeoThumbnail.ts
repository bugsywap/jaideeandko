"use client"

import { useState, useEffect } from "react"

const cache = new Map<string, string>()

/**
 * Fetches the highest-resolution thumbnail for a Vimeo video
 * using Vimeo's oEmbed API. Results are cached in memory.
 * Falls back to vumbnail on error.
 */
export function useVimeoThumbnail(vimeoId: string | undefined): string | null {
  const [url, setUrl] = useState<string | null>(
    vimeoId ? (cache.get(vimeoId) ?? `https://vumbnail.com/${vimeoId}_large.jpg`) : null
  )

  useEffect(() => {
    if (!vimeoId) return
    if (cache.has(vimeoId)) {
      setUrl(cache.get(vimeoId)!)
      return
    }

    // Use Vimeo oEmbed – returns thumbnail_url like https://i.vimeocdn.com/video/XXX_640.jpg
    // We bump the size to 1280 for crisp display
    fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${vimeoId}&width=1280`)
      .then(r => r.json())
      .then(data => {
        // thumbnail_url looks like: https://i.vimeocdn.com/video/1234567890_640x360.jpg
        // We swap the size suffix for a much larger one
        const raw: string = data.thumbnail_url ?? ""
        const hires = raw.replace(/_\d+x\d+\.jpg$/, "_1280.jpg")
        const final = hires || `https://vumbnail.com/${vimeoId}_large.jpg`
        cache.set(vimeoId, final)
        setUrl(final)
      })
      .catch(() => {
        const fallback = `https://vumbnail.com/${vimeoId}_large.jpg`
        cache.set(vimeoId, fallback)
        setUrl(fallback)
      })
  }, [vimeoId])

  return url
}
