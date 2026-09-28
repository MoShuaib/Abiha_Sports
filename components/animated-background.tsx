'use client'

import { useEffect, useRef } from 'react'

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = (canvas.width = window.innerWidth)
    let h = (canvas.height = window.innerHeight)

    const particles: any[] = []
    const particleCount = 70

    // Warm wood/amber/accent colors matching the brand
    const colors = [
      'rgba(217, 119, 6, 0.7)', // amber-600
      'rgba(245, 158, 11, 0.5)', // amber-500
      'rgba(180, 83, 9, 0.6)', // amber-700
      'rgba(251, 191, 36, 0.4)', // amber-400
    ]

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        z: Math.random() * 200, // Depth
        radius: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3 - 0.2, // drifting upwards
      })
    }

    let animationFrameId: number

    const render = () => {
      ctx.clearRect(0, 0, w, h)

      particles.forEach((p) => {
        p.z -= 0.3 // move towards viewer

        // Reset particle when it comes too close
        if (p.z <= 1) {
          p.z = 200
          p.x = Math.random() * w
          p.y = h + 20 // start from bottom
        }

        // Pseudo 3D perspective projection
        const fov = 150
        const scale = fov / (fov + p.z)
        const x2d = (p.x - w / 2) * scale + w / 2
        const y2d = (p.y - h / 2) * scale + h / 2

        p.x += p.vx
        p.y += p.vy

        // Wrap edges X
        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0

        ctx.beginPath()
        ctx.arc(x2d, y2d, p.radius * scale, 0, Math.PI * 2)
        ctx.fillStyle = p.color

        // Glow effect
        ctx.shadowBlur = 12 * scale
        ctx.shadowColor = p.color

        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    const handleResize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-70 dark:mix-blend-screen" />
      {/* 3D animated gradient blobs for depth */}
      <div 
        className="absolute -left-[10%] top-[20%] h-[50vw] w-[50vw] animate-pulse rounded-full bg-orange-600/20 blur-[120px]" 
        style={{ animationDuration: '8s' }} 
      />
      <div 
        className="absolute right-[5%] top-[40%] h-[40vw] w-[40vw] animate-pulse rounded-full bg-amber-600/10 blur-[100px]" 
        style={{ animationDuration: '12s', animationDelay: '2s' }} 
      />
    </div>
  )
}
