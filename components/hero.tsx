import Link from "next/link"
import { siteData } from "@/lib/site-data"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const mailto = `mailto:${siteData.email}?subject=${encodeURIComponent("Hello!")}`

  return (
    <section aria-label="Hero" className="mx-auto max-w-3xl px-4 pb-8 pt-10 sm:pt-14">
      <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{siteData.role}</h1>
      <p className="mt-3 text-pretty text-base text-slate-600">{siteData.tagline}</p>
      <p className="mt-4 text-pretty text-slate-600">{siteData.bio}</p>

      <div className="mt-6 flex items-center gap-3">
        <Button asChild className="bg-blue-600 text-white hover:bg-blue-700">
          <Link href={mailto}>
            <Mail className="mr-2 h-4 w-4" />
            Contact me
          </Link>
        </Button>
        {siteData.socials.website ? (
          <Button variant="outline" asChild>
            <Link href={siteData.socials.website} target="_blank" rel="noopener noreferrer">
              Visit website
            </Link>
          </Button>
        ) : null}
      </div>
    </section>
  )
}
