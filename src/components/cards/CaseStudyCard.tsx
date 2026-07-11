import { ArrowRight } from "lucide-react";
import { MotionArticle } from "@/components/motion/MotionReveal";
import { TagList } from "@/components/ui/TagList";
import type { CaseStudy } from "@/types/content";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <MotionArticle className="surface-card flex h-full flex-col rounded-[1.25rem] p-6">
      <p className="label-text">Anonymized Workflow</p>
      <h3 className="mt-3 font-serif text-3xl font-semibold leading-tight text-ink">{study.title}</h3>
      <p className="mt-4 flex-1 text-muted">{study.summary}</p>
      <div className="mt-5">
        <TagList items={study.skills.slice(0, 4)} />
      </div>
      <a
        className="mt-6 inline-flex items-center gap-2 font-semibold text-accent hover:underline"
        href={`/work/${study.slug}`}
      >
        View workflow <ArrowRight className="size-4" aria-hidden />
      </a>
    </MotionArticle>
  );
}
