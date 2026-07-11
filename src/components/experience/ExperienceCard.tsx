import { Accordion } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import { MotionArticle, MotionStaggerItem, MotionTimeline } from "@/components/motion/MotionReveal";
import { TagList } from "@/components/ui/TagList";
import type { CompanyExperience, RoleProgression } from "@/types/content";

export function ExperienceCard({ experience, compact = false }: { experience: CompanyExperience; compact?: boolean }) {
  const visibleSkillLimit = compact ? 5 : 6;

  return (
    <MotionArticle className="surface-card min-w-0 max-w-full rounded-[1.25rem] p-5 md:p-8">
      <div className="grid gap-3">
        <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
          <p className="label-text">{experience.dateRange}</p>
          <div className="flex flex-nowrap items-center gap-2 whitespace-nowrap">
            <Badge>{experience.employmentType}</Badge>
            <Badge>{experience.workMode}</Badge>
          </div>
        </div>
        <h3 className="text-balance font-serif text-3xl font-semibold leading-tight text-ink md:text-[2rem]">
          {experience.company}
        </h3>
        {experience.designation ? (
          <p className="text-lg font-semibold text-muted">{experience.designation}</p>
        ) : (
          <p className="text-lg font-semibold text-muted">Internal role progression</p>
        )}
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
        <div className="mt-7">
          <p className="text-sm font-bold uppercase tracking-[0.11em] text-accent">Internal Role Progression</p>
          <MotionTimeline className="role-timeline mt-5 grid gap-5">
            {experience.roleProgression.map((role) => (
              <MotionStaggerItem className="role-timeline__item" key={`${role.designation}-${role.dateRange}`}>
                <RoleCard compact={compact} role={role} visibleSkillLimit={visibleSkillLimit} />
              </MotionStaggerItem>
            ))}
          </MotionTimeline>
        </div>
      ) : null}

      {experience.competencies ? (
        <div className="mt-5">
          <TagList items={experience.competencies} limit={visibleSkillLimit} />
        </div>
      ) : null}
      {experience.tools ? (
        <p className="mt-4 text-sm text-muted">
          <span className="font-semibold text-ink">Relevant tools:</span> {experience.tools.join(", ")}
        </p>
      ) : null}
    </MotionArticle>
  );
}

function RoleCard({
  role,
  compact,
  visibleSkillLimit
}: {
  role: RoleProgression;
  compact: boolean;
  visibleSkillLimit: number;
}) {
  return (
    <article className="role-card grid min-w-0 max-w-full grid-cols-[24px_minmax(0,1fr)] gap-x-5 pb-1">
      <span className="role-timeline__marker mt-2" aria-hidden />
      <div className="min-w-0">
        <div className="grid gap-1 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:gap-4">
          <h4 className="text-balance font-serif text-[1.4rem] font-semibold leading-tight text-ink">
            {role.designation}
          </h4>
          <span className="role-date text-sm font-bold text-accent">{role.dateRange}</span>
        </div>
        {role.summary ? <p className="mt-3 text-muted">{role.summary}</p> : null}
        <div className="mt-4">
          <Accordion title="Responsibilities" defaultOpen={!compact}>
            <ResponsibilityList items={role.responsibilities} />
          </Accordion>
        </div>
        <div className="mt-4">
          <TagList items={role.competencies} limit={visibleSkillLimit} />
        </div>
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
