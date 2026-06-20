import { NavbarShell } from '@/components/shared/navbar-shell'
import { FooterNewsNaviPressClean as Footer } from '@/components/shared/footer-clean'
import { SITE_CONFIG } from '@/lib/site-config'

const sections = [
  {
    title: 'Information We Collect',
    body: 'We may collect profile details, contact information, submitted content, and usage events necessary to operate the platform.',
  },
  {
    title: 'How We Use Information',
    body: 'Your information is used to provide features, improve platform quality, maintain security, and communicate critical account updates.',
  },
  {
    title: 'Data Sharing',
    body: 'We do not sell personal information. Data may be shared with trusted service providers only when required for operations.',
  },
  {
    title: 'Cookies & Analytics',
    body: 'We use cookies and analytics tools to understand usage trends, improve reliability, and personalize parts of your experience.',
  },
  {
    title: 'Your Controls',
    body: 'You can request updates or deletion of account data through support channels, subject to legal and operational retention requirements.',
  },
  {
    title: 'Policy Updates',
    body: 'We may revise this policy over time. Significant changes will be reflected on this page with an updated effective date.',
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#050608] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(246,182,15,0.12),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(210,20,104,0.14),transparent_45%),radial-gradient(circle_at_50%_100%,rgba(37,34,102,0.2),transparent_60%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px] opacity-35" />

      <NavbarShell />

      <main className="mx-auto max-w-6xl px-4 pb-20 pt-14 sm:px-6 lg:px-8">
        <section className="rounded-3xl border border-white/15 bg-white/[0.04] p-8 sm:p-12">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.34em] text-[#d41468]">Legal</p>
          <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] sm:text-6xl">Privacy Policy</h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            This policy describes how {SITE_CONFIG.name} collects, uses, stores, and protects personal and account-related information.
          </p>
        </section>

        <section className="mt-10 grid gap-4">
          {sections.map((section) => (
            <article key={section.title} className="rounded-2xl border border-white/15 bg-white/[0.04] p-6">
              <h2 className="text-2xl font-black uppercase tracking-[-0.02em]">{section.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">{section.body}</p>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  )
}
