import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, Compass, Gauge, Megaphone, Sparkles, TrendingUp } from 'lucide-react'
import { SchemaJsonLd } from '@/components/seo/schema-jsonld'
import { SITE_CONFIG } from '@/lib/site-config'
import { buildPageMetadata } from '@/lib/seo'
import { siteContent } from '@/config/site.content'

export const revalidate = 300

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/',
    title: siteContent.home.metadata.title,
    description: siteContent.home.metadata.description,
    openGraphTitle: siteContent.home.metadata.openGraphTitle,
    openGraphDescription: siteContent.home.metadata.openGraphDescription,
    image: SITE_CONFIG.defaultOgImage,
    keywords: [...siteContent.home.metadata.keywords],
  })
}

const navItems = [
  { label: 'Press', href: '/updates' },
  // { label: 'Insights', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Help', href: '/help' },
]


const stats = [
  { value: '18+', label: 'campaigns delivered monthly' },
  { value: '100%', label: 'editorial + media distribution team' },
  { value: '24h', label: 'average release publishing window' },
  { value: '4x', label: 'higher pickup on optimized releases' },
]

const method = [
  {
    step: '01',
    title: 'Position',
    body: 'We define story angle, audience, and publication hierarchy before distribution begins.',
    icon: Compass,
  },
  {
    step: '02',
    title: 'Build',
    body: 'Release copy, assets, links, and metadata are assembled into one press-ready package.',
    icon: Gauge,
  },
  {
    step: '03',
    title: 'Prove',
    body: 'Live links, visibility logs, and pickup reports are shared so your team can verify results quickly.',
    icon: Check,
  },
  {
    step: '04',
    title: 'Improve',
    body: 'Each cycle refines headline style, targeting, and media mix using performance signals.',
    icon: TrendingUp,
  },
]

const capabilities = [
  {
    step: '01',
    title: 'Brand & Story',
    desc: 'Narrative framing, pitch angle, and authority positioning for stronger coverage.',
    tone: 'bg-[#f6b60f] text-[#1f2169]',
  },
  {
    step: '02',
    title: 'Build & Scale',
    desc: 'Press pages, newsroom architecture, and distribution funnels that support repeat launches.',
    tone: 'bg-[#252266] text-white',
  },
  {
    step: '03',
    title: 'Visibility & Media',
    desc: 'Wire distribution, targeted outreach, and cross-channel amplification.',
    tone: 'bg-[#d41468] text-white',
  },
]

const caseStudies = [
  { id: '01', title: 'Regional Healthcare Expansion', tag: 'Press Release', blurb: 'From local launch to national pickup in 72 hours.', href: '/updates' },
  { id: '02', title: 'SaaS Product Update Campaign', tag: 'Media Relations', blurb: 'Feature rollout earned tier-1 tech mentions and backlinks.', href: '/blog' },
  { id: '03', title: 'Education Network Announcement', tag: 'Thought Leadership', blurb: 'Leadership op-ed + distribution sequence increased branded search.', href: '/news' },
  { id: '04', title: 'Funding News Distribution', tag: 'Investor Comms', blurb: 'Multi-region visibility with localized versions and reporting.', href: '/updates' },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#050608] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(246,182,15,0.12),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(210,20,104,0.14),transparent_45%),radial-gradient(circle_at_50%_100%,rgba(37,34,102,0.2),transparent_60%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px] opacity-40" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/65 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-md bg-white p-1">
              <img
                src="/favicon.png?v=20260520"
                alt={`${SITE_CONFIG.name} logo`}
                width="40"
                height="40"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <p className="text-xl font-extrabold tracking-tight">{SITE_CONFIG.name}</p>
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/55">{SITE_CONFIG.tagline}</p>
            </div>
          </Link>
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="text-sm font-semibold text-white/75 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login" className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 hover:bg-white/10">
              Login
            </Link>
            <Link href="/register" className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 hover:bg-white/10">
              Sign Up
            </Link>
            {/* <Link href="/contact" className="rounded-2xl bg-[#d41468] px-6 py-3 text-sm font-bold uppercase tracking-wide transition hover:bg-[#ea1f77]">
              Consult
            </Link> */}
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-7xl px-4 pb-12 pt-18 sm:px-6 lg:px-8 lg:pb-16 lg:pt-24">
          <div className="text-center">
            <h1 className="mx-auto max-w-6xl text-balance text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              We Build
              <span className="ml-3 bg-gradient-to-r from-[#d41468] via-[#f5532a] to-[#f6b60f] bg-clip-text text-transparent">Press Systems</span>
              <br />
              That Move Real Attention.
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/75 sm:text-xl">
              A premium newsroom-style growth engine for businesses that need trusted coverage, distribution, and reporting in one connected workflow.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/updates" className="rounded-2xl bg-[#f6b60f] px-8 py-4 text-sm font-black uppercase tracking-[0.12em] text-black transition hover:translate-y-[-2px] hover:bg-[#ffc83f]">
                Plan My Campaign
              </Link>
              <Link href="/updates" className="rounded-2xl border border-white/20 bg-white/5 px-8 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:border-white/45 hover:bg-white/10">
                Explore Newsroom
              </Link>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-black/45">
          <div className="mx-auto grid max-w-7xl gap-0 divide-y divide-white/10 px-4 sm:px-6 md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4 lg:px-8">
            {stats.map((item) => (
              <div key={item.label} className="py-7">
                <p className="text-4xl font-black tracking-tight text-[#f6b60f]">{item.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-white/60">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
          <p className="mb-10 text-center text-xs font-bold uppercase tracking-[0.42em] text-[#d41468]">trusted by growth teams</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Fintech', 'Healthcare', 'Manufacturing', 'Education', 'Consulting', 'Consumer Brands', 'SaaS', 'Hospitality'].map((chip) => (
              <span key={chip} className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/75">
                {chip}
              </span>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-white/65">the method</p>
            <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] sm:text-6xl">
              One Distribution
              <br />
              System.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70">
              Most services only post and leave. We engineer your narrative, optimize format, route distribution, and validate traction so each campaign compounds.
            </p>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-[#f6b60f] px-6 py-3 text-sm font-black uppercase tracking-[0.1em] text-black transition hover:bg-[#ffc83f]">
              Start Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid overflow-hidden rounded-3xl border border-white/15 sm:grid-cols-2">
            {method.map((item) => (
              <article key={item.step} className="border-b border-white/10 p-6 sm:border-r sm:p-7 [&:nth-child(2n)]:sm:border-r-0 [&:nth-last-child(-n+2)]:border-b-0">
                <div className="mb-8 flex items-center justify-between">
                  <item.icon className="h-5 w-5 text-[#f6b60f]" />
                  <span className="text-sm font-bold text-white/70">{item.step}</span>
                </div>
                <h3 className="text-3xl font-black uppercase tracking-[-0.02em]">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-white/70">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-14 grid max-w-[1600px] border-y border-white/10 md:grid-cols-3">
          {capabilities.map((item) => (
            <article key={item.step} className={`${item.tone} min-h-[340px] p-8 sm:p-10`}>
              <p className="text-sm font-bold tracking-[0.36em]">{item.step}</p>
              <h3 className="mt-18 text-5xl font-black uppercase leading-[0.9] tracking-[-0.03em]">{item.title}</h3>
              <p className="mt-8 max-w-sm border-t border-current/25 pt-5 text-base font-semibold leading-relaxed">{item.desc}</p>
            </article>
          ))}
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-[#d41468]">selected work</p>
          <div className="mb-10 flex items-end justify-between gap-4">
            <h2 className="text-5xl font-black uppercase tracking-[-0.04em] sm:text-6xl">Case Studies</h2>
            <Link href="/updates" className="hidden text-sm font-bold uppercase tracking-[0.14em] text-white/65 transition hover:text-white sm:block">
              View Newsroom
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {caseStudies.map((item) => (
              <article key={item.id} className="group overflow-hidden rounded-3xl border border-white/18 bg-white/[0.04] p-7 transition hover:-translate-y-1.5 hover:border-white/35 hover:bg-white/[0.06]">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-sm font-bold tracking-[0.22em] text-white/65">{item.id}</span>
                  <span className="rounded-full border border-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">{item.tag}</span>
                </div>
                <h3 className="text-3xl font-black tracking-[-0.02em]">{item.title}</h3>
                <p className="mt-3 text-base text-white/70">{item.blurb}</p>
                <Link href={item.href} className="mt-8 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.14em] text-[#f6b60f]">
                  
                  {/* <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /> */}
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-22 sm:px-6 lg:px-8">
          <div className="mb-10 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
            <h2 className="text-5xl font-black uppercase leading-[0.92] tracking-[-0.04em] sm:text-6xl">
              Pick The Right
              <br />
              Entry Point.
            </h2>
            <p className="max-w-xl self-end text-lg leading-relaxed text-white/70">
              No forced retainers on day one. Start where momentum is needed and scale through data-backed visibility cycles.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ['01', 'Press Foundation Sprint', ['Core message', 'Release architecture', 'Media list mapping']],
              ['02', 'Website & Funnel Build', ['Press page UX', 'Search readiness', 'Enquiry routing']],
              ['03', 'Monthly Visibility Desk', ['Content calendar', 'Creative testing', 'Reporting rhythm']],
              ['04', 'Full Brand System', ['Strategy + copy', 'Distribution + PR', 'Performance loop']],
            ].map(([step, title, items]) => (
              <article key={step} className="rounded-3xl border border-white/15 bg-white/[0.03] p-6">
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-sm font-bold tracking-[0.22em] text-white/65">{step}</span>
                  <ArrowRight className="h-4 w-4 text-white/50" />
                </div>
                <h3 className="text-2xl font-black uppercase leading-tight tracking-[-0.02em]">{title}</h3>
                <ul className="mt-6 space-y-2.5 text-sm text-white/70">
                  {(items as string[]).map((entry) => (
                    <li key={entry} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#d41468]" />
                      <span>{entry}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/60">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-md bg-white p-1">
                <img
                  src="/favicon.png?v=20260520"
                  alt={`${SITE_CONFIG.name} logo`}
                  width="40"
                  height="40"
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="text-xl font-extrabold tracking-tight">{SITE_CONFIG.name}</p>
            </div>
            <h3 className="max-w-xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.03em]">
              Build News That
              <span className="text-[#d41468]"> People Trust.</span>
            </h3>
            <div className="mt-8 space-y-2 text-white/80">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/50"></p>
              <p className="text-xl font-bold"></p>
              <p className="text-sm text-white/60"></p>
            </div>
          </div>
          <div className="grid content-start gap-6 rounded-3xl border border-white/15 bg-white/[0.03] p-8">
            <p className="text-xs font-bold uppercase tracking-[0.34em] text-white/60">ready for your next release?</p>
            <p className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em]">Book Consultation</p>
            <Link href="/contact" className="inline-flex w-fit items-center gap-2 rounded-2xl bg-[#f6b60f] px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-black transition hover:bg-[#ffc83f]">
              Talk To Team
              <Megaphone className="h-4 w-4" />
            </Link>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/55">
              <Link href="/contact" className="rounded-full border border-white/15 px-3 py-1.5 hover:text-white">Contact us</Link>
              <Link href="/about" className="rounded-full border border-white/15 px-3 py-1.5 hover:text-white">About us</Link>
              <Link href="/careers" className="rounded-full border border-white/15 px-3 py-1.5 hover:text-white">Carrer Page</Link>
              <Link href="/help" className="rounded-full border border-white/15 px-3 py-1.5 hover:text-white">Help Page</Link>
              <Link href="/terms" className="rounded-full border border-white/15 px-3 py-1.5 hover:text-white">Terms Page</Link>
              <Link href="/privacy" className="rounded-full border border-white/15 px-3 py-1.5 hover:text-white">Privacy page</Link>
            </div>
          </div>
        </div>
      </footer>

      <SchemaJsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: SITE_CONFIG.name,
          description: 'Premium press release distribution and media visibility platform',
          url: SITE_CONFIG.baseUrl,
        }}
      />
    </div>
  )
}
