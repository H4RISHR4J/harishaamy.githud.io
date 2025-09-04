// Sections: Hero, About, Projects, Contact.

import { IntroHero } from "@/components/intro-hero"
import { Section } from "@/components/section"
import { ProjectCard } from "@/components/project-card"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { siteData } from "@/lib/site-data"
import { Mail, Instagram } from "lucide-react"

export default function HomePage() {
  return (
    <main className="font-sans">
      <SiteHeader />
      <IntroHero />

      <Section id="about" title="About">
        <div className="prose prose-invert prose-slate max-w-none">
          <p className="text-slate-400">{siteData.bio}</p>
          {siteData.location ? <p className="mt-3 text-slate-500">Based in {siteData.location}.</p> : null}
          {Array.isArray(siteData.skills) && siteData.skills.length > 0 ? (
            <p className="mt-3 text-slate-500">Skills &amp; interests: {siteData.skills.join(", ")}.</p>
          ) : null}
        </div>
      </Section>

      <Section id="projects" title="Projects">
        {siteData.projects.length === 0 ? (
          <p className="text-slate-500">Projects coming soon.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {siteData.projects.map((p, index) => (
              <div key={p.title} style={{ animationDelay: `${index * 100}ms` }}>
                <ProjectCard title={p.title} description={p.description} tags={p.tags} link={p.link} repo={p.repo} />
              </div>
            ))}
          </div>
        )}
      </Section>

      <Section id="contact" title="Contact">
        <div className="space-y-2">
          <p className="text-slate-500 flex items-center gap-2">
            <Mail className="h-4 w-4 text-white/80" aria-hidden="true" />
            <span>
              Reach me at <span className="font-medium text-white/90">{siteData.email}</span>
            </span>
          </p>
          {siteData.instagramHandle ? (
            <p className="text-slate-500 flex items-center gap-2">
              <Instagram className="h-4 w-4 text-white/80" aria-hidden="true" />
              <span>
                Instagram: <span className="font-medium text-white/90">@{siteData.instagramHandle}</span>
              </span>
            </p>
          ) : null}
        </div>
      </Section>

      <Footer />
    </main>
  )
}
