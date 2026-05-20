import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Award, CheckCircle, Globe2, Lightbulb, Target, TrendingUp, Users } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { FooterNewsNaviPressClean as Footer } from '@/components/shared/footer-clean'
import { SchemaJsonLd } from '@/components/seo/schema-jsonld'
import { SITE_CONFIG } from '@/lib/site-config'
import { buildPageMetadata } from '@/lib/seo'

export const revalidate = 300

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/about',
    title: 'About Us - NewsNaviPress',
    description: 'Learn about NewsNaviPress, the leading press release distribution platform helping businesses share their news with global media outlets.',
    openGraphTitle: 'About Us - NewsNaviPress',
    openGraphDescription: 'Learn about NewsNaviPress, the leading press release distribution platform helping businesses share their news with global media outlets.',
    image: SITE_CONFIG.defaultOgImage,
    keywords: ['about', 'press release distribution', 'media outreach', 'company'],
  })
}

const stats = [
  { label: 'Press Releases Distributed', value: '50,000+', icon: Globe2 },
  { label: 'Media Outlets', value: '5,000+', icon: Users },
  { label: 'Client Satisfaction', value: '98%', icon: CheckCircle },
  { label: 'Years in Business', value: '15+', icon: Award },
]

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'We help businesses of all sizes amplify their story with strategic, measurable distribution.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We continuously evolve our stack and workflows to improve targeting, delivery, and reporting.',
  },
  {
    icon: Users,
    title: 'Client-Centric',
    description: 'Every campaign is structured around outcomes, timelines, and the audience that matters most.',
  },
]

const timeline = [
  { year: '2009', title: 'Foundation', description: 'Launched with the goal of making press distribution accessible for growing businesses.' },
  { year: '2014', title: 'Expansion', description: 'Scaled media relationships and introduced structured campaign analytics.' },
  { year: '2019', title: 'Transformation', description: 'Deployed smarter targeting and faster campaign optimization workflows.' },
  { year: '2024', title: 'Global Scale', description: 'Serving 10,000+ clients with reach across 100+ countries and verticals.' },
]

const team = [
  { name: 'Sarah Johnson', role: 'CEO & Founder', bio: 'Built NewsNaviPress to democratize media distribution for modern teams.' },
  { name: 'Michael Chen', role: 'CTO', bio: 'Leads platform innovation and campaign performance infrastructure.' },
  { name: 'Emily Rodriguez', role: 'Head of Operations', bio: 'Ensures operational excellence and reliable campaign execution.' },
  { name: 'David Kim', role: 'Head of Sales', bio: 'Partners with clients to design scalable visibility programs.' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050608] text-white">
      <NavbarShell />

      <main className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(130deg,#151742_0%,#251f64_35%,#6a1450_70%,#d41468_100%)] p-8 sm:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:52px_52px] opacity-40" />
          <div className="relative">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.34em] text-white/70">About NewsNaviPress</p>
            <h1 className="max-w-5xl text-4xl font-black uppercase leading-[0.92] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
              We Build Distribution Systems
              <span className="text-[#f6b60f]"> That Earn Real Attention.</span>
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
              From strategy to publishing to performance, we help teams share updates that reach the right media and create long-term trust.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/updates" className="inline-flex items-center gap-2 rounded-xl bg-[#f6b60f] px-5 py-3 text-sm font-black uppercase tracking-[0.08em] text-black transition hover:bg-[#ffc83f]">
                View Services
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-black uppercase tracking-[0.08em] text-white transition hover:bg-white/15">
                Contact Team
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <article key={stat.label} className="rounded-2xl border border-white/12 bg-white/[0.03] p-5">
              <stat.icon className="h-5 w-5 text-[#f6b60f]" />
              <p className="mt-4 text-sm uppercase tracking-[0.2em] text-white/60">{stat.label}</p>
              <p className="mt-1 text-2xl font-black tracking-tight">{stat.value}</p>
            </article>
          ))}
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <article className="rounded-3xl border border-white/12 bg-white/[0.03] p-7 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/55">Our Story</p>
            <h2 className="mt-3 text-4xl font-black uppercase tracking-[-0.03em] sm:text-5xl">Built For Clarity, Reach, and Trust.</h2>
            <p className="mt-5 text-base leading-relaxed text-white/75">
              NewsNaviPress started with one conviction: important updates should not get lost because distribution is expensive, fragmented, or unclear.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/75">
              Over 15 years, we evolved into a full visibility partner that combines editorial precision, media routing, and actionable reporting.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/75">
              Today we support teams worldwide with campaign systems that publish faster, perform better, and compound over time.
            </p>
            <Link href="/updates" className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.08em] text-[#f6b60f]">
              Explore Updates
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
          <div className="grid gap-4">
            {values.map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/12 bg-white/[0.03] p-6">
                <item.icon className="h-5 w-5 text-[#f6b60f]" />
                <h3 className="mt-4 text-2xl font-black uppercase tracking-[-0.02em]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-white/55">Journey</p>
          <h2 className="text-4xl font-black uppercase tracking-[-0.03em] sm:text-5xl">Milestones That Shaped Our Platform.</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {timeline.map((event) => (
              <article key={event.year} className="rounded-2xl border border-white/12 bg-white/[0.03] p-6">
                <p className="text-xl font-black text-[#f6b60f]">{event.year}</p>
                <h3 className="mt-2 text-xl font-black uppercase tracking-[-0.02em]">{event.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{event.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* <section className="mt-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-white/55"></p>
          <h2 className="text-4xl font-black uppercase tracking-[-0.03em] sm:text-5xl"></h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <article key={member.name} className="rounded-2xl border border-white/12 bg-white/[0.03] p-6">
                <div className="mb-4 h-12 w-12 rounded-full bg-white/10" />
                <h3 className="text-xl font-black tracking-[-0.02em]">{member.name}</h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.08em] text-[#f6b60f]">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{member.bio}</p>
              </article>
            ))}
          </div>
        </section> */}

        <section className="mt-12 rounded-3xl border border-white/12 bg-white/[0.03] p-8 text-center sm:p-10">
          <h2 className="text-4xl font-black uppercase tracking-[-0.03em] sm:text-5xl">Ready To Amplify Your Message?</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            Join teams using NewsNaviPress to launch stronger narratives, improve media pickup, and build reliable visibility loops.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/updates" className="inline-flex items-center gap-2 rounded-xl bg-[#f6b60f] px-5 py-3 text-sm font-black uppercase tracking-[0.08em] text-black transition hover:bg-[#ffc83f]">
              Browse Updates
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-black uppercase tracking-[0.08em] text-white transition hover:bg-white/15">
              Talk To Team
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      <SchemaJsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About Us - NewsNaviPress',
          description:
            'Learn about NewsNaviPress, the leading press release distribution platform helping businesses share their news with global media outlets.',
          url: `${SITE_CONFIG.baseUrl}/about`,
          mainEntity: {
            '@type': 'Organization',
            name: 'NewsNaviPress',
            url: SITE_CONFIG.baseUrl,
            foundingDate: '2009',
            description:
              'Leading press release distribution platform helping businesses share their stories with global media outlets.',
          },
        }}
      />
    </div>
  )
}
