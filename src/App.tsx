import { useLang } from './i18n'
import { ui } from './data/content'
import { useHeroSplit } from './hooks/useHeroSplit'
import { useDrift } from './hooks/useDrift'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Brands } from './components/Brands'
import { Works } from './components/Works'
import { Contact } from './components/Contact'

export default function App() {
  const { lang } = useLang()
  useHeroSplit()
  useDrift()

  return (
    <>
      <div className="bg" aria-hidden="true" />
      <span className="side-label side-left" aria-hidden="true">
        {ui.sideLabels[0][lang]}
      </span>
      <span className="side-label side-right" aria-hidden="true">
        {ui.sideLabels[1][lang]}
      </span>

      <Nav />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Brands />
      <Works />
      <Contact />

      <footer>{ui.footer[lang]}</footer>
    </>
  )
}
