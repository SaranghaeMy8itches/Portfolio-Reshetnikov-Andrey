import { useEffect } from 'react'

/**
 * Ports the "chaotic" scroll drift for work cards and the floating rings around
 * the portrait. Reads data-speed / data-rot / data-float from the DOM.
 */
export function useDrift() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const cards = Array.from(document.querySelectorAll<HTMLElement>('.work')).map((el) => ({
      el,
      speed: parseFloat(el.dataset.speed || '') || 0,
      rot: parseFloat(el.dataset.rot || '') || 0,
      y: 0,
      r: 0,
    }))

    const rings = Array.from(document.querySelectorAll<HTMLElement>('.float-ring')).map((el) => ({
      el,
      speed: parseFloat(el.dataset.float || '') || 0,
      y: 0,
    }))

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t
    let raf = 0

    function frame() {
      const vh = window.innerHeight
      for (const c of cards) {
        const rect = c.el.getBoundingClientRect()
        const p = Math.max(-1, Math.min(1, (rect.top + rect.height / 2 - vh / 2) / vh))
        c.y = lerp(c.y, p * c.speed, 0.08)
        c.r = lerp(c.r, p * c.rot, 0.08)
        c.el.style.transform = `translate3d(0, ${c.y.toFixed(2)}px, 0) rotate(${c.r.toFixed(3)}deg)`
      }
      for (const c of rings) {
        const rect = c.el.getBoundingClientRect()
        const p = Math.max(-1, Math.min(1, (rect.top + rect.height / 2 - vh / 2) / vh))
        c.y = lerp(c.y, p * c.speed, 0.07)
        c.el.style.transform = `translate3d(0, ${c.y.toFixed(2)}px, 0)`
      }
      raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)

    return () => cancelAnimationFrame(raf)
  }, [])
}
