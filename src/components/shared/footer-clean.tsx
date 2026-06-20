import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'

const links = {
  company: [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookies', href: '/cookies' },
  ],
}

export function FooterNewsNaviPressClean() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-black/65 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-md bg-white text-black text-sm font-black">NP</div>
            <div>
              <p className="text-xl font-extrabold tracking-tight">{SITE_CONFIG.name}</p>
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/55">{SITE_CONFIG.tagline}</p>
            </div>
          </div>
          <h3 className="max-w-xl text-4xl font-black uppercase leading-[0.94] tracking-[-0.03em]">
            Build Distribution
            <span className="text-[#d41468]"> That Converts.</span>
          </h3>
          <p className="mt-5 max-w-xl text-sm text-white/68">
            Strategy, publishing, and visibility reporting crafted as one focused system for consistent media momentum.
          </p>
          <div className="mt-6 space-y-2 text-sm">
            {/* <div className="inline-flex items-center gap-2 text-white/78">
              <Phone className="h-4 w-4 text-[#f6b60f]" />
              +1 888-880-9539
            </div> */}
            <div className="block" />
            <div className="inline-flex items-center gap-2 text-white/78">
              {/* <Mail className="h-4 w-4 text-[#f6b60f]" /> */}
              
            </div>
          </div>
        </div>

        <div className="grid gap-6 rounded-3xl border border-white/15 bg-white/[0.03] p-6 sm:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-white/60">Company</p>
            <div className="space-y-2">
              {links.company.map((link) => (
                <Link key={link.href} href={link.href} className="block text-sm text-white/75 transition hover:text-white">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-white/60">Legal</p>
            <div className="space-y-2">
              {links.legal.map((link) => (
                <Link key={link.href} href={link.href} className="block text-sm text-white/75 transition hover:text-white">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
      </div>
    </footer>
  )
}
