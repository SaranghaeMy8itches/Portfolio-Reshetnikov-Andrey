import { useRef, useState } from 'react'
import type { KeyboardEvent, TouchEvent } from 'react'
import type { WorkImage } from '../data/content'

export function Gallery({ imgs }: { imgs: WorkImage[] }) {
  const [i, setI] = useState(0)
  const x0 = useRef<number | null>(null)
  const count = imgs.length
  const go = (n: number) => setI(((n % count) + count) % count)

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      go(i - 1)
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      go(i + 1)
    }
  }
  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    x0.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (x0.current === null) return
    const dx = e.changedTouches[0].clientX - x0.current
    if (Math.abs(dx) > 40) go(dx < 0 ? i + 1 : i - 1)
    x0.current = null
  }

  return (
    <div
      className="gallery"
      data-gallery
      tabIndex={0}
      onKeyDown={onKey}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="gallery-track" style={{ transform: `translateX(${-i * 100}%)` }}>
        {imgs.map((im, n) => (
          <img key={n} className={im.cls} src={im.src} alt={im.alt} loading="lazy" />
        ))}
      </div>
      <button
        className="gal-btn gal-prev"
        type="button"
        aria-label="Предыдущее изображение"
        onClick={(e) => {
          e.stopPropagation()
          go(i - 1)
        }}
      >
        &#8249;
      </button>
      <button
        className="gal-btn gal-next"
        type="button"
        aria-label="Следующее изображение"
        onClick={(e) => {
          e.stopPropagation()
          go(i + 1)
        }}
      >
        &#8250;
      </button>
      <div className="gal-dots" role="tablist" aria-label="Слайды">
        {imgs.map((_, n) => (
          <button
            key={n}
            type="button"
            role="tab"
            aria-label={'Слайд ' + (n + 1)}
            aria-selected={n === i}
            onClick={(e) => {
              e.stopPropagation()
              go(n)
            }}
          />
        ))}
      </div>
    </div>
  )
}
