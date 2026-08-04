import { useLang } from '../i18n'
import { brands, ui } from '../data/content'

function Group({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="marquee-group" aria-hidden={hidden || undefined}>
      {brands.map((b, i) => (
        <img
          key={i}
          src={b.src}
          className={b.cls || undefined}
          alt={b.alt}
          loading="lazy"
        />
      ))}
    </div>
  )
}

export function Brands() {
  const { lang } = useLang()
  return (
    <section className="brands" aria-label={ui.brandsTitle[lang]}>
      <p className="brands-title">{ui.brandsTitle[lang]}</p>
      <div className="marquee">
        {/* Один трек с двумя одинаковыми группами — бесшовная петля при сдвиге на -50% */}
        <div className="marquee-track">
          <Group />
          <Group hidden />
        </div>
      </div>
    </section>
  )
}
