import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { StructuredData } from "@/components/seo/StructuredData";
import { LinkButton } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { TagList } from "@/components/ui/TagList";
import { caseStudies } from "@/data/case-studies";
import { siteConfig } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { canonicalUrl } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

const processSnapshotLabels: Record<string, string[]> = {
  "end-to-end-non-it-recruitment": [
    "Clarify hiring need",
    "Define screening filters",
    "Align role language",
    "Build candidate pipeline"
  ],
  "candidate-sourcing-market-mapping": [
    "Set search direction",
    "Map candidate profile",
    "Select sourcing channels",
    "Review pipeline quality"
  ],
  "structured-employee-onboarding": [
    "Guide pre-joining",
    "Track joining records",
    "Support orientation",
    "Update HR handoff"
  ],
  "recruitment-operations-tracking": [
    "Register requirement",
    "Structure candidate view",
    "Monitor stage movement",
    "Share role-level updates"
  ]
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) {
    return pageMetadata("Case Study Not Found", "The requested case study could not be found.", "/work");
  }
  return pageMetadata(`${study.title} | Vaishnavi Jaiswal`, study.summary, `/work/${study.slug}`);
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) notFound();
  const currentIndex = caseStudies.findIndex((item) => item.slug === study.slug);
  const previousStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextStudy = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;
  const snapshotLabels =
    processSnapshotLabels[study.slug] ?? study.sections.slice(0, 4).map((section) => section.title);

  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: study.title,
          description: study.summary,
          url: canonicalUrl(siteConfig.siteUrl, `/work/${study.slug}`)
        }}
      />
      <Breadcrumbs items={[{ label: "Work", href: "/work" }, { label: study.title }]} />
      <Section>
        <article className="mx-auto max-w-4xl">
          <p className="label-text">Anonymized HR Workflow</p>
          <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight text-ink md:text-6xl">
            {study.title}
          </h1>
          <p className="mt-6 text-xl leading-8 text-muted">{study.summary}</p>
          <div className="mt-8 grid gap-3 rounded-[1.25rem] border border-border bg-elevated p-4 sm:grid-cols-3">
            <SummaryItem label="Format" value="Anonymized workflow" />
            <SummaryItem label="Focus" value={study.skills.slice(0, 2).join(" + ")} />
            <SummaryItem label="Tools" value={study.tools.slice(0, 2).join(" + ")} />
          </div>
          <div className="surface-card mt-8 rounded-[1.25rem] p-6">
            <h2 className="font-serif text-3xl font-semibold text-ink">Hiring Context</h2>
            <p className="mt-3 text-muted">{study.context}</p>
          </div>
          <div className="mt-8 rounded-[1.25rem] border border-border bg-elevated p-5">
            <h2 className="font-serif text-3xl font-semibold text-ink">Process Snapshot</h2>
            <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {snapshotLabels.map((label, index) => (
                <li className="rounded-2xl border border-border bg-surface p-4" key={label}>
                  <span className="text-sm font-bold text-accent">{String(index + 1).padStart(2, "0")}</span>
                  <p className="mt-2 font-semibold leading-snug text-ink">{label}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-8 grid gap-5">
            {study.sections.map((section, index) => (
              <section className="surface-card rounded-[1.25rem] p-6" key={section.title}>
                <p className="text-sm font-bold text-accent">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="mt-2 font-serif text-3xl font-semibold text-ink">{section.title}</h2>
                <ul className="mt-4 grid gap-3 text-muted">
                  {section.items.map((item) => (
                    <li className="flex gap-3" key={item}>
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-elevated p-6">
              <h2 className="font-serif text-3xl font-semibold text-ink">Tools</h2>
              <div className="mt-4">
                <TagList items={study.tools} />
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-elevated p-6">
              <h2 className="font-serif text-3xl font-semibold text-ink">Skills</h2>
              <div className="mt-4">
                <TagList items={study.skills} />
              </div>
            </div>
          </div>
          <div className="surface-card mt-8 rounded-[1.25rem] p-6">
            <h2 className="font-serif text-3xl font-semibold text-ink">Professional Learning</h2>
            <p className="mt-3 text-muted">{study.learning}</p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/work" variant="secondary">
              Back to Work
            </LinkButton>
            <a className="inline-flex items-center justify-center font-semibold text-accent hover:underline" href="/contact">
              Discuss a professional opportunity
            </a>
          </div>
          <nav
            aria-label="Related work navigation"
            className="mt-8 grid gap-4 border-t border-border pt-8 md:grid-cols-2"
          >
            {previousStudy ? (
              <RelatedWorkLink
                direction="Previous"
                href={`/work/${previousStudy.slug}`}
                icon={<ArrowLeft className="size-4" aria-hidden />}
                title={previousStudy.title}
              />
            ) : (
              <div />
            )}
            {nextStudy ? (
              <RelatedWorkLink
                direction="Next"
                href={`/work/${nextStudy.slug}`}
                icon={<ArrowRight className="size-4" aria-hidden />}
                title={nextStudy.title}
              />
            ) : null}
          </nav>
        </article>
      </Section>
    </>
  );
}

function SummaryItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">{label}</p>
      <p className="mt-1 font-semibold leading-snug text-ink">{value}</p>
    </div>
  );
}

function RelatedWorkLink({
  direction,
  href,
  icon,
  title
}: {
  direction: "Previous" | "Next";
  href: string;
  icon: ReactNode;
  title: string;
}) {
  return (
    <a
      className="surface-card flex min-h-24 items-center gap-3 rounded-[1.25rem] p-5 font-semibold text-ink hover:text-accent"
      href={href}
    >
      {direction === "Previous" ? icon : null}
      <span className={direction === "Next" ? "ml-auto text-right" : undefined}>
        <span className="block text-xs font-bold uppercase tracking-[0.14em] text-accent">
          {direction} workflow
        </span>
        <span className="mt-1 block">{title}</span>
      </span>
      {direction === "Next" ? icon : null}
    </a>
  );
}
