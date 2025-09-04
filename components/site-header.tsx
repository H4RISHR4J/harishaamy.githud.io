"use client"

import Link from "next/link"
import { siteData } from "@/lib/site-data"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

// Color system (4 total):
// - Primary: blue-600
// - Neutrals: white, slate-900, slate-600
// - Accent: amber-500

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  const NavLinks = () => (
    <nav className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
      <a href="#about" className="text-sm text-slate-400 hover:text-white">
        About
      </a>
      <a href="#projects" className="text-sm text-slate-400 hover:text-white">
        Projects
      </a>
      <a href="#contact" className="text-sm text-slate-400 hover:text-white">
        Contact
      </a>
      {siteData.socials.github ? (
        <Link
          href={siteData.socials.github}
          className="text-sm text-slate-400 hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
      ) : null}
      {siteData.socials.linkedin ? (
        <Link
          href={siteData.socials.linkedin}
          className="text-sm text-slate-400 hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Link>
      ) : null}
    </nav>
  )

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-black/50 backdrop-blur supports-[backdrop-filter]:bg-black/30">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-medium text-white">
          {siteData.name}
          <span className="sr-only">Home</span>
        </Link>

        <div className="hidden md:block">
          <NavLinks />
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-slate-300 hover:text-white"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {open ? (
        <div className="border-t border-slate-800 bg-black px-4 py-3 md:hidden">
          <NavLinks />
        </div>
      ) : null}
    </header>
  )
}
