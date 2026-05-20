import { TaskListPage } from "@/components/tasks/task-list-page";
import { buildTaskMetadata } from "@/lib/seo";

export const revalidate = 3;
export const generateMetadata = () => buildTaskMetadata("pdf");

export default async function PdfLibraryPage({ searchParams }: { searchParams?: Promise<{ category?: string | string[] }> }) {
  const params = searchParams ? await searchParams : undefined;
  const categoryParam = Array.isArray(params?.category) ? params?.category[0] : params?.category;
  return <TaskListPage task="pdf" category={categoryParam} />;
}
