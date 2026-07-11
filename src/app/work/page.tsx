import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { StructuredData } from "@/components/seo/StructuredData";
import { Section, SectionHeading } from "@/components/ui/Section";
import { caseStudies } from "@/data/case-studies";
import { siteConfig } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { canonicalUrl } from "@/lib/utils";

export const metadata = pageMetadata(
  "Anonymized HR Workflows & Recruitment Case Studies",
  "Process-based, anonymized HR case studies covering Non-IT recruitment, sourcing, onboarding, and recruitment tracking.",
  "/work"
);

export default function WorkPage() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: caseStudies.map((study, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: study.title,
            url: canonicalUrl(siteConfig.siteUrl, `/work/${study.slug}`)
          }))
        }}
      />
      <Breadcrumbs items={[{ label: "Work" }]} />
      <Section>
        <SectionHeading
          eyebrow="Work"
          level="h1"
          title="Anonymized HR workflows and recruitment case studies."
          intro="These process-based examples share recruitment thinking, tracking structures, and onboarding workflows without confidential company, client, candidate, salary, or internal document details."
        />
        {caseStudies.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        ) : (
          <div className="surface-card rounded-[1.25rem] p-6">
            <p className="text-muted">No work examples are currently available.</p>
          </div>
        )}
      </Section>
    </>
  );
}
