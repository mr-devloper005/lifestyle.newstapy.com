import Link from 'next/link'
import { FOOTER_OVERRIDE_ENABLED, FooterOverride } from '@/overrides/footer'
import { FooterNewsNaviPressClean as FooterNewsNaviPress } from '@/components/shared/footer-clean'

export function Footer() {
  if (FOOTER_OVERRIDE_ENABLED) {
    return <FooterOverride />
  }

  return <FooterNewsNaviPress />
}
