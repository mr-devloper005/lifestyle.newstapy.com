"use client";

import { useEffect, useMemo, useState } from "react";
import { TaskPostCard } from "@/components/shared/task-post-card";
import { buildPostUrl } from "@/lib/task-data";
import { normalizeCategory, isValidCategory } from "@/lib/categories";
import type { TaskKey } from "@/lib/site-config";
import type { SitePost } from "@/lib/site-connector";
import { getLocalPostsForTask } from "@/lib/local-posts";

type Props = {
  task: TaskKey;
  initialPosts: SitePost[];
  category?: string;
  horizontal?: boolean;
  verticalScrollable?: boolean;
};

export function TaskListClient({ task, initialPosts, category, horizontal, verticalScrollable }: Props) {
  const [localPosts, setLocalPosts] = useState<SitePost[]>([]);

  useEffect(() => {
    setLocalPosts(getLocalPostsForTask(task));
  }, [task]);

  const merged = useMemo(() => {
    const bySlug = new Set<string>();
    const combined: Array<SitePost & { localOnly?: boolean; task?: TaskKey }> = [];

    localPosts.forEach((post) => {
      if (post.slug) {
        bySlug.add(post.slug);
      }
      combined.push(post);
    });

    initialPosts.forEach((post) => {
      if (post.slug && bySlug.has(post.slug)) return;
      combined.push(post);
    });

    const normalizedCategory = category ? normalizeCategory(category) : "all";
    if (normalizedCategory === "all") {
      return combined.filter((post) => {
        const content = post.content && typeof post.content === "object" ? post.content : {};
        const value = typeof (content as any).category === "string" ? (content as any).category : "";
        return !value || isValidCategory(value);
      });
    }

    return combined.filter((post) => {
      const content = post.content && typeof post.content === "object" ? post.content : {};
      const value =
        typeof (content as any).category === "string"
          ? normalizeCategory((content as any).category)
          : "";
      return value === normalizedCategory;
    });
  }, [category, initialPosts, localPosts]);

  if (!merged.length) {
    return (
      <div className="rounded-2xl border border-dashed border-border p-10 text-center text-muted-foreground">
        No posts yet for this section.
      </div>
    );
  }

  if (horizontal) {
    return (
      <div className="overflow-x-auto pb-2">
        <div className="flex min-w-max gap-5">
          {merged.map((post) => {
            const localOnly = (post as any).localOnly;
            const href = localOnly
              ? `/local/${task}/${post.slug}`
              : buildPostUrl(task, post.slug);
            return (
              <div key={post.id} className="w-[320px] shrink-0 sm:w-[360px] lg:w-[390px]">
                <TaskPostCard post={post} href={href} taskKey={task} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (verticalScrollable) {
    return (
      <div className="max-h-[78vh] overflow-y-auto pr-1">
        <div className="flex flex-col gap-5">
          {merged.map((post) => {
            const localOnly = (post as any).localOnly;
            const href = localOnly
              ? `/local/${task}/${post.slug}`
              : buildPostUrl(task, post.slug);
            return <TaskPostCard key={post.id} post={post} href={href} taskKey={task} />;
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {merged.map((post) => {
        const localOnly = (post as any).localOnly;
        const href = localOnly
          ? `/local/${task}/${post.slug}`
          : buildPostUrl(task, post.slug);
        return <TaskPostCard key={post.id} post={post} href={href} taskKey={task} />;
      })}
    </div>
  );
}
