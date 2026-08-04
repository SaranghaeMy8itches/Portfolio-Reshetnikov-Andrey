import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type Lang = 'ru' | 'en'
export type Localized = Record<Lang, string>

const STORAGE_KEY = 'portfolio-lang'

const TITLES: Record<Lang, string> = {
  ru: 'Andrey Reshetnikov — мультидисциплинарный дизайнер',
  en: 'Andrey Reshetnikov — multidisciplinary designer',
}

interface LangContextValue {
  lang: Lang
  toggle: () => void
}

const LangContext = createContext<LangContextValue | null>(null)

function readStored(): Lang {
  try {
    const s = localStorage.getItem(STORAGE_KEY)
    if (s === 'ru' || s === 'en') return s
  } catch {
    /* storage blocked — default to English */
  }
  return 'en'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(readStored)

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = TITLES[lang]
    document.body.classList.toggle('is-en', lang === 'en')
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* ignore write failures */
    }
  }, [lang])

  const toggle = useCallback(() => setLang((p) => (p === 'ru' ? 'en' : 'ru')), [])
  const value = useMemo(() => ({ lang, toggle }), [lang, toggle])

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}
