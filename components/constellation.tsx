"use client"

import { useEffect, useRef } from "react"

// Lightweight animated constellation background for the hero.
// Color system (4 total):
// - Primary accent: black
// - Neutrals: black, white, gray
// No gradients; subtle, performant.

export function Constellation() {
  const ref = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let raf = 0
    const DPR = Math.min(2, window.devicePixelRatio || 1)

    const points = Array.from({ length: 60 }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0006,
      vy: (Math.random() - 0.5) * 0.0006,
    }))

    function resize() {
      const { clientWidth, clientHeight } = canvas
      canvas.width = Math.floor(clientWidth * DPR)
      canvas.height = Math.floor(clientHeight * DPR)
      ctx.scale(DPR, DPR)
    }

    function step() {
      const { width, height } = canvas
      // Clear
      ctx.clearRect(0, 0, width, height)

      // Background dots
      ctx.fillStyle = "rgba(255,255,255,0.03)"
      for (let i = 0; i < 80; i++) {
        const x = ((i * 97) % width) + ((i * 13) % 7)
        const y = ((i * 61) % height) + ((i * 17) % 7)
        ctx.beginPath()
        ctx.arc(x, y, 1, 0, Math.PI * 2)
        ctx.fill()
      }

      // Update and draw points
      const screenW = canvas.clientWidth
      const screenH = canvas.clientHeight

      // Points
      ctx.fillStyle = "rgba(255,255,255,0.5)"
      for (const p of points) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > 1) p.vx *= -1
        if (p.y < 0 || p.y > 1) p.vy *= -1

        const px = p.x * screenW
        const py = p.y * screenH

        ctx.beginPath()
        ctx.arc(px, py, 1.2, 0, Math.PI * 2)
        ctx.fill()
      }

      // Lines
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const a = points[i]
          const b = points[j]
          const dx = (a.x - b.x) * screenW
          const dy = (a.y - b.y) * screenH
          const dist = Math.hypot(dx, dy)
          if (dist < 140) {
            const alpha = 1 - dist / 140
            ctx.strokeStyle = `rgba(0,0,0,${0.18 * alpha})` // black with low alpha
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x * screenW, a.y * screenH)
            ctx.lineTo(b.x * screenW, b.y * screenH)
            ctx.stroke()
          }
        }
      }

      raf = requestAnimationFrame(step)
    }

    const onResize = () => {
      // Reset scale before resizing to avoid compounding
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      resize()
    }

    onResize()
    step()
    window.addEventListener("resize", onResize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return (
    <div className="absolute inset-0 -z-10">
      <canvas ref={ref} className="h-full w-full" aria-hidden="true" />
    </div>
  )
}
