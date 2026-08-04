import { useLang } from '../i18n'
import { ui } from '../data/content'

const ARIA: Record<'ru' | 'en', string> = {
  ru: 'Переключить язык на английский',
  en: 'Switch language to Russian',
}

export function Nav() {
  const { lang, toggle } = useLang()

  return (
    <nav>
      <div className="nav-inner">
        <a className="logo" href="#top">
          Andrey Reshetnikov
        </a>
        <div className="nav-right">
          <ul className="nav-links">
            {ui.nav.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label[lang]}</a>
              </li>
            ))}
          </ul>
          <button
            className="lang-switch"
            id="langSwitch"
            role="switch"
            aria-checked={lang === 'en'}
            aria-label={ARIA[lang]}
            title="RU / EN"
            onClick={toggle}
          >
            <span className="lang-track" aria-hidden="true">
              <span className="lang-thumb" />
            </span>
            <span className="lang-code lang-ru" aria-hidden="true">
              RU
            </span>
            <span className="lang-code lang-en" aria-hidden="true">
              EN
            </span>
          </button>
        </div>
      </div>
    </nav>
  )
}
