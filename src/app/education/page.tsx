import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Section, SectionHeading } from "@/components/ui/Section";
import { TagList } from "@/components/ui/TagList";
import { academicProject, education } from "@/data/education";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Education & Professional Development | Vaishnavi Jaiswal",
  "Education, HR academic focus areas, and professional development profile for Vaishnavi Jaiswal.",
  "/education"
);

export default function EducationPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Education" }]} />
      <Section>
        <SectionHeading
          eyebrow="Education"
          level="h1"
          title="Education and professional development."
          intro="Academic background and safe, high-level learning areas connected to a Human Resources and recruitment career."
        />
        <div className="grid gap-6">
          {education.map((item) => (
            <article className="surface-card rounded-[1.25rem] p-7" key={item.institution}>
              <p className="label-text">{item.dateRange}</p>
              <h2 className="mt-3 font-serif text-4xl font-semibold text-ink">{item.qualification}</h2>
              <p className="mt-2 text-xl font-semibold text-accent">{item.specialization}</p>
              <p className="mt-3 text-muted">{item.institution}</p>
              {item.location ? <p className="mt-1 text-sm text-subtle">{item.location}</p> : null}
              {item.relevantAreas ? (
                <div className="mt-5">
                  <p className="mb-3 font-semibold text-ink">Relevant academic areas</p>
                  <TagList items={item.relevantAreas} />
                </div>
              ) : null}
            </article>
          ))}
        </div>
        <article className="surface-card mt-8 rounded-[1.25rem] p-7">
          <p className="label-text">{academicProject.date}</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-ink">{academicProject.title}</h2>
          <p className="mt-4 text-muted">{academicProject.overview}</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {academicProject.sections.map((section) => (
              <div className="rounded-2xl border border-border bg-elevated p-5" key={section.title}>
                <h3 className="font-serif text-2xl font-semibold text-ink">{section.title}</h3>
                <p className="mt-2 text-muted">{section.description}</p>
              </div>
            ))}
          </div>
        </article>
      </Section>
    </>
  );
}
