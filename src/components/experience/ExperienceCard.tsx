import { Accordion } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import { TagList } from "@/components/ui/TagList";
import type { CompanyExperience, RoleProgression } from "@/types/content";

export function ExperienceCard({ experience, compact = false }: { experience: CompanyExperience; compact?: boolean }) {
  return (
    <article className="surface-card min-w-0 max-w-full rounded-[1.25rem] p-5 md:p-7">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="label-text">{experience.dateRange}</p>
          <h3 className="mt-2 font-serif text-3xl font-semibold leading-tight text-ink">
            {experience.company}
          </h3>
          {experience.designation ? (
            <p className="mt-2 text-lg font-semibold text-muted">{experience.designation}</p>
          ) : null}
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge>{experience.employmentType}</Badge>
          <Badge>{experience.workMode}</Badge>
        </div>
      </div>
      <p className="mt-4 text-muted">{experience.summary}</p>
      <p className="mt-3 text-sm font-semibold text-subtle">{experience.location}</p>

      {experience.responsibilities ? (
        <div className="mt-5">
          <Accordion title="Key HR responsibilities" defaultOpen={!compact}>
            <ResponsibilityList items={experience.responsibilities} />
          </Accordion>
        </div>
      ) : null}

      {experience.roleProgression ? (
        <div className="mt-6 grid gap-4">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-accent">Internal Role Progression</p>
          {experience.roleProgression.map((role) => (
            <RoleCard key={`${role.designation}-${role.dateRange}`} role={role} compact={compact} />
          ))}
        </div>
      ) : null}

      {experience.competencies ? (
        <div className="mt-5">
          <TagList items={experience.competencies} />
        </div>
      ) : null}
      {experience.tools ? (
        <p className="mt-4 text-sm text-muted">
          <span className="font-semibold text-ink">Relevant tools:</span> {experience.tools.join(", ")}
        </p>
      ) : null}
    </article>
  );
}

function RoleCard({ role, compact }: { role: RoleProgression; compact: boolean }) {
  return (
    <article className="min-w-0 max-w-full rounded-2xl border border-border bg-elevated p-5">
      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
        <h4 className="font-serif text-2xl font-semibold text-ink">{role.designation}</h4>
        <span className="text-sm font-bold text-accent">{role.dateRange}</span>
      </div>
      {role.summary ? <p className="mt-3 text-muted">{role.summary}</p> : null}
      <div className="mt-4">
        <Accordion title="Responsibilities" defaultOpen={!compact}>
          <ResponsibilityList items={role.responsibilities} />
        </Accordion>
      </div>
      <div className="mt-4">
        <TagList items={role.competencies} />
      </div>
    </article>
  );
}

export function ResponsibilityList({ items }: { items: string[] }) {
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
