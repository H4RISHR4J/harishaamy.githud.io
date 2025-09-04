import Link from "next/link"
import { siteData } from "@/lib/site-data"

export function Footer() {
  return (
    <footer className="mx-auto mt-8 w-full border-t border-slate-800">
      <div className="mx-auto max-w-3xl px-4 py-6 text-sm text-slate-400">
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {siteData.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {siteData.socials.github ? (
              <Link
                href={siteData.socials.github}
                className="hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
            ) : null}
            {siteData.socials.linkedin ? (
              <Link
                href={siteData.socials.linkedin}
                className="hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Link>
            ) : null}
            {siteData.socials.twitter ? (
              <Link
                href={siteData.socials.twitter}
                className="hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </footer>
  )
}
