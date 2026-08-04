import { useLang } from '../i18n'
import { academic, education, ui } from '../data/content'
import { Timeline } from './Timeline'
import { T } from './T'

export function Education() {
  const { lang } = useLang()
  return (
    <section id="education">
      <div className="wrap">
        <span className="eyebrow">{ui.education.eyebrow[lang]}</span>
        <T as="h2" value={ui.education.h2} />

        <div className="edu-grid">
          <div className="edu-col">
            <h3 className="exp-title">{ui.eduTitles[0][lang]}</h3>
            <Timeline items={education} />
          </div>
          <div className="edu-col">
            <h3 className="exp-title">{ui.eduTitles[1][lang]}</h3>
            <Timeline items={academic} />
          </div>
        </div>
      </div>
    </section>
  )
}
