import { useLang } from '../i18n'
import { experience, ui } from '../data/content'
import { Timeline } from './Timeline'

export function Experience() {
  const { lang } = useLang()
  return (
    <section id="experience">
      <div className="wrap">
        <span className="eyebrow">{ui.experience.eyebrow[lang]}</span>
        <h2>{ui.experience.h2[lang]}</h2>
        <Timeline items={experience} wide />
      </div>
    </section>
  )
}
