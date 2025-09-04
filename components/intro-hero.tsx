"use client"

import Link from "next/link"
import { siteData } from "@/lib/site-data"
import { Button } from "@/components/ui/button"
import { Constellation } from "@/components/constellation"
import { Code, Gavel, Link2 } from "lucide-react"
import { useMemo } from "react"

function Icon({ name }: { name?: "gavel" | "code" | "link" }) {
  if (name === "gavel") return <Gavel className="mr-2 h-4 w-4" />
  if (name === "code") return <Code className="mr-2 h-4 w-4" />
  return <Link2 className="mr-2 h-4 w-4" />
}

// Color palette (4 total):
// - Primary: black (accent)
// - Neutrals: black (bg), white (text), slate-400 (muted)
// No gradients to follow design rules; strong focus on typography.

export function IntroHero() {
  const buttons = useMemo(() => siteData.heroButtons?.slice(0, 2) || [], [])

  // Build "X by day, Y by night" if exactly two roles are provided
  const rolesLine =
    siteData.roles && siteData.roles.length === 2
      ? `${siteData.roles[0]} by day, ${siteData.roles[1]} by night`
      : siteData.role || siteData.tagline

  return (
    <section className="relative mx-auto flex min-h-[80svh] max-w-4xl flex-col items-center justify-center px-4 text-center">
      <Constellation />
      {/* Removed decorative gradient to respect 'no gradients unless asked' */}
      <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl">{siteData.name}</h1>
      <p className="mt-4 inline-block rounded px-2 py-0.5 text-lg font-medium text-black bg-white">{rolesLine}</p>
      <p className="mt-3 max-w-2xl text-pretty text-slate-300">{siteData.tagline}</p>

      {buttons.length > 0 ? (
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {buttons.map((b) => (
            // Button accent to black
            <Button key={b.label} asChild className="rounded-full bg-black text-white hover:bg-black/80">
              <Link href={b.href}>
                <Icon name={b.icon} />
                {b.label}
              </Link>
            </Button>
          ))}
        </div>
      ) : null}

      <p className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-slate-400">
        © {new Date().getFullYear()} {siteData.name}. All rights reserved.
      </p>
    </section>
  )
}
