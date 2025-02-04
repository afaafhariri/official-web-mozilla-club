"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // If the user has scrolled even slightly, set isScrolled to true
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      // Sticky positions the element relative to its nearest scrolling ancestor
      // top-0 keeps it pinned to the top
      // z-50 ensures it stays above most other elements
      // Also, conditionally apply classes based on scroll state
      className={`sticky top-0 z-50 border-b transition-colors 
        ${isScrolled ? "shadow-md bg-white/80 backdrop-blur-sm" : "bg-white"}
      `}
    >
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/assets/Mozilla-logo.png"
            alt="Mozilla Logo"
            className="h-6 w-auto"
          />
        </Link>
        <div className="ml-auto flex items-center space-x-6">
          <Link href="/about" className="text-sm font-semibold transition-colors hover:text-primary">
            About
          </Link>
          <Link href="/events" className="text-sm font-semibold transition-colors hover:text-primary">
            Events
          </Link>
          <Link href="/blog" className="text-sm font-semibold transition-colors hover:text-primary">
            Blog
          </Link>
          <Link href="/contact" className="text-sm font-semibold transition-colors hover:text-primary">
            Contact Us
          </Link>
          <Button>Join SLIIT Mozilla!</Button>
        </div>
      </div>
    </nav>
  )
}
