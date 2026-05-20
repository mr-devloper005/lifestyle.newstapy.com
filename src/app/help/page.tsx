import Link from 'next/link'
import { ArrowRight, CircleHelp, FileText, LifeBuoy, Mail } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { FooterNewsNaviPressClean as Footer } from '@/components/shared/footer-clean'

const guides = [
  {
    title: 'Getting Started',
    body: 'Create your account, set up your profile, and publish your first update from the dashboard.',
  },
  {
    title: 'Publishing Workflow',
    body: 'Use create-post tools, draft quality checks, and structured publishing paths for better reach.',
  },
  {
    title: 'Account & Access',
    body: 'Manage login details, profile updates, and account preferences from your settings pages.',
  },
]

const faq = [
  {
    question: 'How quickly can I publish a post?',
    answer: 'Most posts can be created and published in minutes once your account setup is complete.',
  },
  {
    question: 'Where can I edit existing posts?',
    answer: 'You can manage and edit posts from your dashboard after logging in.',
  },
  {
    question: 'How do I contact support?',
    answer: 'For support, billing, or technical help, use the contact page and include your account email.',
  },
]

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-[#050608] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(246,182,15,0.12),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(210,20,104,0.14),transparent_45%),radial-gradient(circle_at_50%_100%,rgba(37,34,102,0.2),transparent_60%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px] opacity-35" />

      <NavbarShell />

      <main className="mx-auto max-w-6xl px-4 pb-20 pt-14 sm:px-6 lg:px-8">
        <section className="rounded-3xl border border-white/15 bg-white/[0.04] p-8 sm:p-12">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.34em] text-[#d41468]">Support</p>
          <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] sm:text-6xl">Help Center</h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            Find practical guides, quick answers, and direct support channels to keep your publishing workflow moving.
          </p>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-3">
          {guides.map((item) => (
            <article key={item.title} className="rounded-2xl border border-white/15 bg-white/[0.04] p-6">
              <FileText className="h-5 w-5 text-[#f6b60f]" />
              <h2 className="mt-4 text-2xl font-black uppercase tracking-[-0.02em]">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{item.body}</p>
            </article>
          ))}
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-2xl border border-white/15 bg-white/[0.04] p-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white/70">
              <CircleHelp className="h-4 w-4 text-[#f6b60f]" />
              Frequently Asked Questions
            </div>
            <div className="mt-5 space-y-4">
              {faq.map((item) => (
                <div key={item.question} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <h3 className="text-base font-bold">{item.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{item.answer}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-white/15 bg-white/[0.04] p-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white/70">
              <LifeBuoy className="h-4 w-4 text-[#f6b60f]" />
              Need Direct Help?
            </div>
            <h2 className="mt-4 text-2xl font-black uppercase tracking-[-0.02em]">Contact Support Team</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              If your question is urgent or account-specific, send your details through contact and our team will assist you.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-[#f6b60f] px-6 py-3 text-sm font-black uppercase tracking-[0.1em] text-black transition hover:bg-[#ffc83f]"
            >
              Contact Page
              <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-white/65">
              <Mail className="h-4 w-4 text-[#f6b60f]" />
              Include your account email for faster response.
            </p>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  )
}
