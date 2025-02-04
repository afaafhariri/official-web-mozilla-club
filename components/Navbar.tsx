"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Detect current path
  const pathname = usePathname()

  // Helper to check if link is active
  const isActive = (path: string) => pathname === path

  return (
    <nav
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
          <div className="relative group inline-block">
            <Link
              href="/about"
              className={`
                text-sm font-medium transition-colors
                ${isActive("/about") ? "font-bold text-black" : "hover:text-primary"}
                `}
            >
              About
            </Link>
            <span
              className="
                absolute left-0 bottom-0
                h-[2px] w-0
                bg-current
                group-hover:w-full
                transition-all duration-300
              "
            />
          </div>

          <div className="relative group inline-block">
            <Link
              href="/events"
              className={`
                text-sm font-medium transition-colors
                ${isActive("/events") ? "font-bold text-black" : "hover:text-primary"}
              `}
            >
              Events
            </Link>
            <span
              className="
                absolute left-0 bottom-0
                h-[2px] w-0
                bg-current
                group-hover:w-full
                transition-all duration-300
              "
            />
          </div>

          <div className="relative group inline-block">
            <Link
              href="/blog"
              className={`
                text-sm font-medium transition-colors
                ${isActive("/blog") ? "font-bold text-black" : "hover:text-primary"}
              `}
            >
              Blog
            </Link>
            <span
              className="
                absolute left-0 bottom-0
                h-[2px] w-0
                bg-current
                group-hover:w-full
                transition-all duration-300
              "
            />
          </div>

          <div className="relative group inline-block">
            <Link
              href="/contact"
              className={`
                text-sm font-medium transition-colors
                ${isActive("/contact") ? "font-bold text-black" : "hover:text-primary"}
              `}
            >
              Contact Us
            </Link>
            <span
              className="
                absolute left-0 bottom-0
                h-[2px] w-0
                bg-current
                group-hover:w-full
                transition-all duration-300
              "
            />
          </div>

          <Button
            className="
              border border-transparent
              transition-colors duration-300
              hover:border-black
              hover:bg-white
              hover:text-black
            "
          >
            Join SLIIT Mozilla!
          </Button>
        </div>
      </div>
    </nav>
  )
}
