import { ArrowRight } from "lucide-react";
import { MotionArticle } from "@/components/motion/MotionReveal";
import { TagList } from "@/components/ui/TagList";
import type { CaseStudy } from "@/types/content";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <MotionArticle className="case-study-card surface-card flex h-full flex-col rounded-[1.25rem] p-6">
      <p className="label-text">Anonymized Workflow</p>
      <h3 className="case-study-card__title mt-3 text-balance font-serif text-3xl font-semibold leading-[1.08] text-ink">
        <RecruitmentTitle text={study.title} />
      </h3>
      <p className="mt-4 flex-1 text-muted">{study.summary}</p>
      <div className="mt-5">
        <TagList items={study.skills.slice(0, 4)} />
      </div>
      <a
        className="mt-6 inline-flex w-fit items-center gap-2 font-semibold text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        href={`/work/${study.slug}`}
      >
        View workflow <ArrowRight className="size-4" aria-hidden />
      </a>
    </MotionArticle>
  );
}

function RecruitmentTitle({ text }: { text: string }) {
  return text.split(/(End-to-End|Non-IT)/g).map((part, index) =>
    part === "End-to-End" || part === "Non-IT" ? (
      <span className="whitespace-nowrap" key={`${part}-${index}`}>
        {part}
      </span>
    ) : (
      part
    )
  );
}
