import { NavbarShell } from '@/components/shared/navbar-shell'
import { FooterNewsNaviPressClean as Footer } from '@/components/shared/footer-clean'
import { SITE_CONFIG } from '@/lib/site-config'

const sections = [
  {
    title: 'Use of Service',
    body: `By using ${SITE_CONFIG.name}, you agree to use the platform lawfully, respectfully, and in line with these terms.`,
  },
  {
    title: 'Accounts & Responsibility',
    body: 'You are responsible for your account access, posted content, and any activity that occurs under your profile.',
  },
  {
    title: 'Content Rights',
    body: 'You keep ownership of your submitted content, and grant us a limited license to host, display, and distribute it on the platform.',
  },
  {
    title: 'Prohibited Conduct',
    body: 'Spam, impersonation, malware distribution, abusive behavior, and unlawful content are strictly prohibited.',
  },
  {
    title: 'Service Availability',
    body: 'We may update, suspend, or discontinue portions of the platform to improve performance, security, or reliability.',
  },
  {
    title: 'Contact',
    body: 'Questions about these terms can be sent through the contact page. We aim to respond as quickly as possible.',
  },
]

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#050608] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(246,182,15,0.12),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(210,20,104,0.14),transparent_45%),radial-gradient(circle_at_50%_100%,rgba(37,34,102,0.2),transparent_60%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px] opacity-35" />

      <NavbarShell />

      <main className="mx-auto max-w-6xl px-4 pb-20 pt-14 sm:px-6 lg:px-8">
        <section className="rounded-3xl border border-white/15 bg-white/[0.04] p-8 sm:p-12">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.34em] text-[#d41468]">Legal</p>
          <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] sm:text-6xl">Terms Of Service</h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            These terms explain the rules, responsibilities, and usage conditions for accessing and using {SITE_CONFIG.name}.
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
