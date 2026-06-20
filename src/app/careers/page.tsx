import Link from 'next/link'
import { ArrowRight, BriefcaseBusiness, Mail } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { FooterNewsNaviPressClean as Footer } from '@/components/shared/footer-clean'
import { SITE_CONFIG } from '@/lib/site-config'

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#050608] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(246,182,15,0.12),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(210,20,104,0.14),transparent_45%),radial-gradient(circle_at_50%_100%,rgba(37,34,102,0.2),transparent_60%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px] opacity-35" />

      <NavbarShell />

      <main className="mx-auto max-w-6xl px-4 pb-20 pt-14 sm:px-6 lg:px-8">
        <section className="rounded-3xl border border-white/15 bg-white/[0.04] p-8 text-center sm:p-12">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.34em] text-[#d41468]">Careers</p>
          <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] sm:text-6xl">
            We Are Not Hiring
            <br />
            <span className="text-[#f6b60f]">At The Moment</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            Thank you for your interest in joining {SITE_CONFIG.name}. While we do not have open roles currently, we are always happy to hear from talented people.
          </p>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-white/15 bg-white/[0.04] p-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white/70">
              <BriefcaseBusiness className="h-4 w-4 text-[#f6b60f]" />
              Future Openings
            </div>
            <h2 className="mt-4 text-2xl font-black uppercase tracking-[-0.02em]">Want To Be Considered Later?</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Send us your profile, portfolio, and the role you are interested in. We will keep your details on file for upcoming opportunities.
            </p>
          </article>

          <article className="rounded-2xl border border-white/15 bg-white/[0.04] p-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white/70">
              <Mail className="h-4 w-4 text-[#f6b60f]" />
              Contact
            </div>
            <h2 className="mt-4 text-2xl font-black uppercase tracking-[-0.02em]">Send Your Details</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Share your resume and a short intro through our contact page, and our team will review it when relevant positions open.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-[#f6b60f] px-6 py-3 text-sm font-black uppercase tracking-[0.1em] text-black transition hover:bg-[#ffc83f]"
            >
              Go To Contact Page
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  )
}
