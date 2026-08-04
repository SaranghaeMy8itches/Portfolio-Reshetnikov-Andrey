import { useLang } from '../i18n'
import type { TimelineItem } from '../data/content'

export function Timeline({ items, wide = false }: { items: TimelineItem[]; wide?: boolean }) {
  const { lang } = useLang()
  return (
    <ul className={'timeline' + (wide ? ' timeline-wide' : '')}>
      {items.map((it, i) => (
        <li key={i}>
          <span className="years">{it.years[lang]}</span>
          <div>
            <h4>{it.title[lang]}</h4>
            <p>{it.place[lang]}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
