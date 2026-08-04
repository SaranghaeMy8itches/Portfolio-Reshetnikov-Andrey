import { useLang, type Localized } from '../i18n'

/**
 * Renders a localized string. Some source strings contain inline markup
 * (a <br> in titles, or <span class="lvl"> in language rows), so we render
 * via dangerouslySetInnerHTML. Content is static and authored by us.
 */
export function T({ value, as = 'span', className }: { value: Localized; as?: keyof JSX.IntrinsicElements; className?: string }) {
  const { lang } = useLang()
  const Tag = as as 'span'
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: value[lang] }} />
}

/** Plain-text localized value (no markup). */
export function useTx() {
  const { lang } = useLang()
  return (value: Localized) => value[lang]
}
