import { TaskListPage } from '@/components/tasks/task-list-page'
import { buildTaskMetadata } from '@/lib/seo'

export const revalidate = 3
export const generateMetadata = () => buildTaskMetadata('mediaDistribution')

export default async function UpdatesPage({
  searchParams,
}: {
  searchParams?: Promise<{ category?: string | string[] }>
}) {
  const params = searchParams ? await searchParams : undefined
  const categoryParam = Array.isArray(params?.category) ? params?.category[0] : params?.category
  return <TaskListPage task="mediaDistribution" category={categoryParam} />
}
