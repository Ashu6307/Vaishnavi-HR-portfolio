import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Accordion } from "@/components/ui/Accordion";
import { Section, SectionHeading } from "@/components/ui/Section";
import { resources } from "@/data/resources";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "HR Resources, Checklists & Recruitment Structures",
  "Original HR resources for screening, interview evaluation, onboarding, hiring intake, follow-up, and joining status tracking.",
  "/resources"
);

export default function ResourcesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Resources" }]} />
      <Section>
        <SectionHeading
          eyebrow="Resources"
          level="h1"
          title="Original HR checklists and recruitment structures."
          intro="Practical frameworks for screening, interview evaluation, hiring intake, follow-up, and joining activity."
        />
        {resources.length > 0 ? (
          <div className="grid gap-5">
            {resources.map((resource) => (
              <article className="surface-card rounded-[1.25rem] p-6" key={resource.slug}>
                <p className="label-text mb-3">HR Resource</p>
                <h2 className="font-serif text-3xl font-semibold text-ink">{resource.title}</h2>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <InfoBlock title="Purpose" text={resource.purpose} />
                  <InfoBlock title="When to use it" text={resource.whenToUse} />
                </div>
                <div className="mt-5 grid gap-4">
                  <Accordion title="Suggested fields">
                    <List items={resource.suggestedFields} />
                  </Accordion>
                  <Accordion title="Checklist">
                    <List items={resource.checklist} />
                  </Accordion>
                  <Accordion title="Practical notes">
                    <List items={resource.practicalNotes} />
                  </Accordion>
                </div>
                <p className="mt-5 rounded-2xl border border-border bg-elevated p-4 text-sm font-semibold text-ink">
                  {resource.confidentialityNote}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <div className="surface-card rounded-[1.25rem] p-6">
            <p className="text-muted">No resources are currently available.</p>
          </div>
        )}
      </Section>
    </>
  );
}

function InfoBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-border bg-elevated p-5">
      <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-accent">{title}</h3>
      <p className="mt-2 text-muted">{text}</p>
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 text-muted">
      {items.map((item) => (
        <li className="flex gap-3" key={item}>
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
