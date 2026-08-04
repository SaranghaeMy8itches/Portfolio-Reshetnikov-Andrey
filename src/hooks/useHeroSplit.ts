import { useEffect } from 'react'

/**
 * Ports the hero name-split + About reveal scroll animation from the original
 * inline script. Drives CSS custom properties directly for an identical result.
 */
export function useHeroSplit() {
  useEffect(() => {
    const hero = document.getElementById('top')
    const solid = document.querySelector<HTMLElement>('.name-solid')
    const line = document.querySelector<HTMLElement>('.name-outline')
    const role = document.querySelector<HTMLElement>('.hero-role')
    const rings = Array.from(document.querySelectorAll<HTMLElement>('.hero-ring'))
    const reveal = document.getElementById('aboutReveal')
    if (!hero || !solid || !line) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const easeInOut = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

    let cur = 0
    let target = 0
    let ticking = false
    let pending = false

    const solidTo = { x: -125, y: -135 }
    const lineTo = { x: 125, y: 135 }
    const ringTo = [
      { x: -120, y: 120 },
      { x: 125, y: -115 },
      { x: -130, y: 130 },
      { x: 135, y: -125 },
    ]

    function readProgress() {
      const el = hero as HTMLElement
      const h = el.offsetHeight - window.innerHeight
      const p = h > 0 ? Math.min(1, Math.max(0, -el.getBoundingClientRect().top / h)) : 0
      target = p
      pending = true
      if (!ticking) {
        ticking = true
        requestAnimationFrame(frame)
      }
    }

    function frame() {
      cur += (target - cur) * 0.1
      const settling = Math.abs(target - cur) >= 0.0005
      if (!settling) cur = target

      const raw = cur
      const e = easeInOut(raw)
      const vw = window.innerWidth / 100
      const vh = window.innerHeight / 100

      solid!.style.setProperty('--nx', (solidTo.x * e * vw).toFixed(1) + 'px')
      solid!.style.setProperty('--ny', (solidTo.y * e * vh).toFixed(1) + 'px')
      line!.style.setProperty('--nx', (lineTo.x * e * vw).toFixed(1) + 'px')
      line!.style.setProperty('--ny', (lineTo.y * e * vh).toFixed(1) + 'px')

      const nameOp = raw < 0.9 ? 1 : 1 - (raw - 0.9) / 0.1
      solid!.style.opacity = nameOp.toFixed(3)
      line!.style.opacity = nameOp.toFixed(3)

      if (role) {
        role.style.setProperty('--ry', (95 * e * vh).toFixed(1) + 'px')
        role.style.setProperty('--ropacity', (1 - Math.min(1, e * 1.5)).toFixed(3))
      }
      rings.forEach((r, i) => {
        const t = ringTo[i] || ringTo[0]
        r.style.setProperty('--cx', (t.x * e * vw).toFixed(1) + 'px')
        r.style.setProperty('--cy', (t.y * e * vh).toFixed(1) + 'px')
        r.style.opacity = (raw < 0.92 ? 1 : 1 - (raw - 0.92) / 0.08).toFixed(3)
      })

      if (reveal) {
        const rp = Math.min(1, Math.max(0, (raw - 0.28) / 0.34))
        const re = easeInOut(rp)
        reveal.style.setProperty('--rise-scale', (0.94 + 0.06 * re).toFixed(4))
        reveal.style.setProperty('--rise-op', re.toFixed(3))
        reveal.style.setProperty('--rise-blur', ((1 - re) * 16).toFixed(1) + 'px')
      }

      if (settling || pending) {
        pending = false
        requestAnimationFrame(frame)
      } else {
        ticking = false
      }
    }

    window.addEventListener('scroll', readProgress, { passive: true })
    window.addEventListener('resize', readProgress)
    readProgress()

    return () => {
      window.removeEventListener('scroll', readProgress)
      window.removeEventListener('resize', readProgress)
    }
  }, [])
}
