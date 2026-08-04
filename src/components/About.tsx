import { useLang } from '../i18n'
import { about, portrait } from '../data/content'
import { T } from './T'

export function About() {
  const { lang } = useLang()

  return (
    <section id="about">
      <div className="wrap reveal-rise" id="aboutReveal">
        <span className="eyebrow">{about.eyebrow[lang]}</span>
        <h2>{about.h2[lang]}</h2>
        <div className="about-grid">
          <div className="about-side">
            <figure className="portrait">
              <img src={portrait} alt="Andrey Reshetnikov" loading="lazy" />
              <span className="float-ring fr-1" data-float="26" aria-hidden="true" />
              <span className="float-ring fr-2" data-float="-34" aria-hidden="true" />
              <span className="float-ring fr-3" data-float="18" aria-hidden="true" />
            </figure>
            <div className="portrait-note">
              <ul className="note-list">
                {about.notes.map((n, i) => (
                  <li key={i}>{n[lang]}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="about-text">
            <p>{about.intro[lang]}</p>

            <div className="facts">
              {about.facts.map((f, i) => (
                <div className="fact" key={i}>
                  <b>{f.value}</b>
                  <span>{f.label[lang]}</span>
                </div>
              ))}
            </div>

            {about.skillsets.map((group, gi) => (
              <div className="skills-group" key={gi}>
                <h3 className="exp-title skills-title">{group.title[lang]}</h3>
                <ul className={group.type === 'lang' ? 'skills lang' : 'skills'}>
                  {group.items.map((item, ii) =>
                    group.type === 'lang' ? (
                      <T key={ii} as="li" value={item} />
                    ) : (
                      <li key={ii}>{item[lang]}</li>
                    ),
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
