import { useLang } from '../i18n'
import { ui } from '../data/content'
import { T } from './T'

export function Contact() {
  const { lang } = useLang()
  return (
    <section className="contact-sec" id="contact">
      <div className="wrap">
        <div className="contact-inner">
          <span className="eyebrow">{ui.contact.eyebrow[lang]}</span>
          {/* Заголовок содержит <br> */}
          <T as="h2" value={ui.contact.h2} />
          <p className="contact-sub">{ui.contact.sub[lang]}</p>
          <a className="email-link" href={`mailto:${ui.email}`}>
            {ui.email}
          </a>
          <ul className="socials">
            {ui.socials.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
