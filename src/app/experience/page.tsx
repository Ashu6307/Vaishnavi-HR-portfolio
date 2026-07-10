import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { StructuredData } from "@/components/seo/StructuredData";
import { Section, SectionHeading } from "@/components/ui/Section";
import { experiences } from "@/data/experience";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "HR & Talent Acquisition Experience | Vaishnavi Jaiswal",
  "Detailed Human Resources, talent acquisition, recruitment research, onboarding, and HR operations experience.",
  "/experience"
);

export default function ExperiencePage() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: experiences.map((experience, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: experience.company,
            description: experience.summary
          }))
        }}
      />
      <Breadcrumbs items={[{ label: "Experience" }]} />
      <Section>
        <SectionHeading
          eyebrow="Experience"
          level="h1"
          title="HR, talent acquisition, recruitment research, and onboarding experience."
          intro="A company-based career timeline covering responsibilities, internal role progression, competencies, industry context, and relevant tools."
        />
        <div className="mb-10 grid gap-4 md:grid-cols-3">
          {experiences.map((experience) => (
            <article className="rounded-2xl border border-border bg-elevated p-5" key={experience.company}>
              <p className="label-text">{experience.dateRange}</p>
              <h2 className="mt-2 font-serif text-2xl font-semibold text-ink">{experience.company}</h2>
              <p className="mt-2 text-sm font-semibold text-muted">
                {experience.designation || "Role progression"}
              </p>
            </article>
          ))}
        </div>
        <div className="grid gap-6">
          {experiences.map((experience) => (
            <ExperienceCard experience={experience} key={experience.company} />
          ))}
        </div>
      </Section>
    </>
  );
}
