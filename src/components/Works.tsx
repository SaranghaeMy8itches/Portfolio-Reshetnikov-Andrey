import { useLang } from '../i18n'
import { works, ui, type Work } from '../data/content'
import { Gallery } from './Gallery'
import { T } from './T'

function WorkCard({ work }: { work: Work }) {
  const { lang } = useLang()
  const single = work.imgs.length === 1

  return (
    <article className="work" data-speed={work.speed} data-rot={work.rot}>
      <div className="work-visual">
        {single ? (
          <img
            className={work.imgs[0].cls}
            src={work.imgs[0].src}
            alt={work.imgs[0].alt}
            loading="lazy"
          />
        ) : (
          <Gallery imgs={work.imgs} />
        )}
      </div>
      <div className="work-body">
        {/* Заголовок может содержать <br> */}
        <T as="h3" className={work.h3Long ? 'h3-long' : undefined} value={work.title} />
        <p>{work.desc[lang]}</p>
        <details>
          <summary>{ui.process[lang]}</summary>
          <ol>
            {work.steps.map((s, i) => (
              <li key={i}>{s[lang]}</li>
            ))}
          </ol>
        </details>
      </div>
    </article>
  )
}

export function Works() {
  const { lang } = useLang()
  return (
    <section id="works">
      <div className="wrap">
        <div className="works-head">
          <div>
            <span className="eyebrow">{ui.works.eyebrow[lang]}</span>
            <h2>{ui.works.h2[lang]}</h2>
          </div>
        </div>
        <div className="works-flow">
          {works.map((w, i) => (
            <WorkCard key={i} work={w} />
          ))}
        </div>
      </div>
    </section>
  )
}
