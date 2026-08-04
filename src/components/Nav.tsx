import { useEffect, useState } from 'react'
import { useLang } from '../i18n'
import { ui } from '../data/content'

const ARIA: Record<'ru' | 'en', string> = {
  ru: 'Переключить язык на английский',
  en: 'Switch language to Russian',
}

const MENU_ARIA: Record<'ru' | 'en', { open: string; close: string }> = {
  ru: { open: 'Открыть меню', close: 'Закрыть меню' },
  en: { open: 'Open menu', close: 'Close menu' },
}

export function Nav() {
  const { lang, toggle } = useLang()
  const [open, setOpen] = useState(false)

  // Закрываем меню по Escape и блокируем прокрутку фона, пока открыто
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.classList.add('nav-open')
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.classList.remove('nav-open')
    }
  }, [open])

  return (
    <nav className={open ? 'is-open' : undefined}>
      <div className="nav-inner">
        <a className="logo" href="#top" onClick={() => setOpen(false)}>
          Andrey Reshetnikov
        </a>
        <div className="nav-right">
          <ul className="nav-links">
            {ui.nav.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  {l.label[lang]}
                </a>
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
          <button
            className="nav-burger"
            type="button"
            aria-label={open ? MENU_ARIA[lang].close : MENU_ARIA[lang].open}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>
    </nav>
  )
}
