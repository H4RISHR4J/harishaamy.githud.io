"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

type Props = {
  title: string
  description: string
  tags?: string[]
  link?: string
  repo?: string
}

export function ProjectCard({ title, description, tags, link, repo }: Props) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <Card
      ref={ref}
      className={`transition-all duration-500 ease-out hover:border-black/40 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <CardHeader>
        <CardTitle className="text-base font-semibold text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-slate-400">{description}</p>

        {tags && tags.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <Badge key={t} variant="secondary" className="bg-white text-black hover:bg-white/90">
                {t}
              </Badge>
            ))}
          </div>
        ) : null}

        {(link || repo) && (
          <div className="flex gap-4 pt-1">
            {link ? (
              <Link
                href={link}
                className="text-sm font-medium text-black bg-white rounded px-1 hover:bg-white/90"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </Link>
            ) : null}
            {repo ? (
              <Link
                href={repo}
                className="text-sm text-slate-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </Link>
            ) : null}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
