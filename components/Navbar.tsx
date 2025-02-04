"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PillIcon as MozillaIcon } from "lucide-react"

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <MozillaIcon className="h-6 w-6" />
          <span className="font-bold">Mozilla Campus Club SLIIT</span>
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