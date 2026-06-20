import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { ContentImage } from '@/components/shared/content-image'
import { fetchTaskPostBySlug } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import type { SitePost } from '@/lib/site-connector'
import { SITE_CONFIG } from '@/lib/site-config'
import { formatRichHtml, RichContent } from '@/components/shared/rich-content'
import { CATEGORY_OPTIONS, normalizeCategory } from '@/lib/categories'

export const TASK_DETAIL_PAGE_OVERRIDE_ENABLED = true

const isValidImageUrl = (value?: string | null) =>
  typeof value === 'string' && (value.startsWith('/') || /^https?:\/\//i.test(value))

const getContent = (post: SitePost) => {
  const content = post.content && typeof post.content === 'object' ? post.content : {}
  return content as Record<string, unknown>
}

const getImageUrls = (post: SitePost, content: Record<string, unknown>) => {
  const media = Array.isArray(post.media) ? post.media : []
  const mediaImages = media.map((item) => item?.url).filter((url): url is string => isValidImageUrl(url))
  const contentImages = Array.isArray(content.images)
    ? content.images.filter((url): url is string => typeof url === 'string' && isValidImageUrl(url))
    : []
  const merged = [...mediaImages, ...contentImages]
  if (merged.length) return merged
  if (isValidImageUrl(content.logo as string)) return [content.logo as string]
  return []
}

const getCategoryLabel = (post: SitePost, content: Record<string, unknown>) => {
  const raw =
    (typeof content.category === 'string' && content.category.trim()) ||
    (Array.isArray(post.tags) ? post.tags.find((tag) => typeof tag === 'string' && tag !== 'mediaDistribution') : '') ||
    ''
  if (!raw || typeof raw !== 'string') return 'Press releases'
  const normalized = normalizeCategory(raw)
  return CATEGORY_OPTIONS.find((item) => item.slug === normalized)?.name || raw.trim()
}

export async function TaskDetailPageOverride({ slug }: { task: TaskKey; slug: string }) {
  const post = await fetchTaskPostBySlug('mediaDistribution', slug)
  if (!post) notFound()

  const content = getContent(post)
  const rawBody =
    (typeof content.body === 'string' && content.body.trim()) ||
    (typeof content.description === 'string' && content.description.trim()) ||
    post.summary ||
    ''
  const html = formatRichHtml(rawBody, '')
  const images = getImageUrls(post, content)
  const hero = images[0]
  const archivePath = SITE_CONFIG.taskViews.mediaDistribution || '/updates'
  const categoryLabel = getCategoryLabel(post, content)

  return (
    <div className="min-h-screen bg-[#040509] text-[#f6f0dc]">
      <NavbarShell />

      <article className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:pt-12">
        <section className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-[radial-gradient(circle_at_20%_20%,rgba(246,182,15,0.18),transparent_38%),radial-gradient(circle_at_85%_15%,rgba(212,20,104,0.24),transparent_42%),linear-gradient(145deg,#0d1220_0%,#12162a_48%,#180f26_100%)] p-6 sm:p-8 lg:p-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] opacity-35" />
          <div className="relative">
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#f3df9b]">
              <Link href={archivePath} className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-white/90 hover:bg-white/15">
                <ArrowLeft className="h-3.5 w-3.5" />
                Back to updates
              </Link>
              <span className="rounded-full border border-[#f6b60f]/40 bg-[#f6b60f]/12 px-3 py-1.5 text-[#ffd770]">{categoryLabel}</span>
            </div>
            <h1 className="max-w-5xl text-3xl font-black uppercase leading-[0.95] tracking-[-0.03em] text-white sm:text-4xl lg:text-6xl">{post.title}</h1>
            {post.summary ? (
              <p className="mt-5 max-w-4xl text-base leading-relaxed text-[#efe2bd] sm:text-lg">{post.summary}</p>
            ) : null}
          </div>
        </section>

        <div className="mt-8">
          <div className="min-w-0 space-y-6">
            {hero ? (
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[1.6rem] border border-[#f6b60f]/25 bg-black/45 shadow-[0_28px_60px_rgba(0,0,0,0.45)]">
                <ContentImage src={hero} alt={post.title} fill className="object-cover" priority />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.3)_100%)]" />
              </div>
            ) : null}

            <div className="rounded-[1.6rem] border border-[#f6b60f]/20 bg-[linear-gradient(180deg,rgba(12,16,26,0.96)_0%,rgba(8,11,18,0.98)_100%)] p-6 sm:p-8">
              <RichContent
                html={html}
                className="article-content max-w-none text-[1.03rem] leading-[1.82] text-[#e8ddbd] prose-invert prose-headings:text-white prose-a:text-[#f6c53a]"
              />
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
