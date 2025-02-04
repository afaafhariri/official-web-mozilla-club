"use client"

import { useEffect, useRef } from "react"

interface MovingBannerProps {
  text: string
}

export function MovingBanner({ text }: MovingBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const content = contentRef.current
    if (!container || !content) return

    // Clone the content for seamless scrolling
    const clone = content.cloneNode(true) as HTMLDivElement
    container.appendChild(clone)

    const scrollSpeed = 50 // Lower is faster
    let progress = 0

    function animate() {
      progress += 1
      if (progress >= content.offsetWidth) {
        progress = 0
      }
      container.style.transform = `translateX(-${progress}px)`
      requestAnimationFrame(animate)
    }

    const animation = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animation)
  }, [])

  const messages = [
    "Join Mozilla Campus Club SLIIT - Where Innovation Meets Open Source 🚀",
    "Learn, Build, and Grow with the Mozilla Community 💡",
    "Empowering Students Through Technology and Open Source 🌟",
    "Be Part of Something Bigger - Join Us Today! 🌐"
  ]

  const combinedText = messages.join(" • ")

  return (
    <div className="bg-orange-400 overflow-hidden py-3">
      <div ref={containerRef} className="whitespace-nowrap">
        <div ref={contentRef} className="inline-block">
          <span className="text-primary font-medium px-4">{combinedText}</span>
        </div>
      </div>
    </div>
  )
}