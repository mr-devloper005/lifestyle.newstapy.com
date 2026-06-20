import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Filter } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { TaskListClient } from '@/components/tasks/task-list-client'
import { SchemaJsonLd } from '@/components/seo/schema-jsonld'
import { fetchTaskPosts } from '@/lib/task-data'
import { CATEGORY_OPTIONS, normalizeCategory } from '@/lib/categories'
import { SITE_CONFIG } from '@/lib/site-config'
import { buildTaskMetadata } from '@/lib/seo'

export const revalidate = 3

export const generateMetadata = async (): Promise<Metadata> => buildTaskMetadata('mediaDistribution')

export default async function UpdatesPage({
  searchParams,
}: {
  searchParams?: Promise<{ category?: string | string[] }>
}) {
  const params = searchParams ? await searchParams : undefined
  const categoryParam = Array.isArray(params?.category) ? params?.category[0] : params?.category
  const normalizedCategory = categoryParam ? normalizeCategory(categoryParam) : 'all'
  const posts = await fetchTaskPosts('mediaDistribution', 30)

  return (
    <div className="min-h-screen bg-[#050608] text-white">
      <NavbarShell />

      <main className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <SchemaJsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: `Updates | ${SITE_CONFIG.name}`,
            url: `${SITE_CONFIG.baseUrl.replace(/\/$/, '')}/updates`,
            description: 'Latest press and media distribution updates.',
          }}
        />

        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(130deg,#151742_0%,#251f64_35%,#6a1450_70%,#d41468_100%)] p-8 sm:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:52px_52px] opacity-40" />
          <div className="relative">
            <h1 className="max-w-5xl text-4xl font-black uppercase leading-[0.92] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
              Latest Updates,
              <span className="ml-3 text-[#f6b60f]">Announcements</span>, and Press Wins.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
              Track every campaign rollout, product update, and coverage milestone from one clean newsroom feed.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#f6b60f] px-5 py-3 text-sm font-black uppercase tracking-[0.08em] text-black transition hover:bg-[#ffc83f]"
              >
                Book Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-black uppercase tracking-[0.08em] text-white transition hover:bg-white/15"
              >
                Contact Team
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <div className="mb-5 flex items-center justify-between gap-3">
            <form action="/updates" className="inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/[0.03] p-2">
              <Filter className="ml-1 h-4 w-4 text-white/60" />
              <select
                name="category"
                defaultValue={normalizedCategory}
                className="updates-category-select h-9 rounded-lg border border-white/10 bg-black/30 px-3 text-sm text-white outline-none"
              >
                <option value="all">All categories</option>
                {CATEGORY_OPTIONS.map((item) => (
                  <option key={item.slug} value={item.slug}>
                    {item.name}
                  </option>
                ))}
              </select>
              <button
                type="submit"
                className="rounded-lg bg-[#d41468] px-3 py-2 text-xs font-bold uppercase tracking-[0.08em] text-white hover:bg-[#ea1f77]"
              >
                Apply
              </button>
            </form>
          </div>
        </section>

        <section className="mt-12">
          <div className="mb-5">
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-white/55">All updates</p>
            <h2 className="mt-1 text-3xl font-black uppercase tracking-[-0.03em] sm:text-4xl">Newsroom Feed</h2>
          </div>
          <TaskListClient task="mediaDistribution" initialPosts={posts} category={normalizedCategory} verticalScrollable />
        </section>
      </main>

      <Footer />
    </div>
  )
}
