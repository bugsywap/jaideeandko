"use client"

import React from "react"

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[200] bg-background flex flex-col">
      {/* Header Skeleton */}
      <div className="w-full h-20 border-b border-border/50 flex items-center justify-between px-6 lg:px-8">
        <div className="h-8 w-32 bg-muted rounded-lg animate-pulse" />
        <div className="hidden lg:flex gap-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-4 w-16 bg-muted rounded animate-pulse" />
          ))}
        </div>
        <div className="h-10 w-32 bg-primary/20 rounded-full animate-pulse" />
      </div>

      {/* Hero Skeleton */}
      <div className="flex-1 container mx-auto px-6 max-w-7xl pt-24">
        <div className="flex flex-col items-center gap-8">
          <div className="h-6 w-24 bg-primary/10 rounded-full animate-pulse" />
          <div className="h-16 w-full max-w-3xl bg-muted rounded-2xl animate-pulse" />
          <div className="h-6 w-full max-w-xl bg-muted rounded animate-pulse" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-16">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-video bg-muted rounded-[2rem] animate-pulse relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  )
}
