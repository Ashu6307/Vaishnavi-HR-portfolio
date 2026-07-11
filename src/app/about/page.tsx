import { Linkedin, Mail, MapPin } from "lucide-react";
import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { StructuredData } from "@/components/seo/StructuredData";
import { LinkButton } from "@/components/ui/Button";
import { ProfileImage } from "@/components/ui/ProfileImage";
import { Section } from "@/components/ui/Section";
import { TagList } from "@/components/ui/TagList";
import { academicProject, education } from "@/data/education";
import { experiences } from "@/data/experience";
import { industries } from "@/data/industries";
import { profile } from "@/data/profile";
import { siteConfig } from "@/data/site";
import { coreCompetencies, skillCategories, workingApproach } from "@/data/skills";
import { locationToPostalAddress } from "@/lib/location";
import { pageMetadata } from "@/lib/seo";
import { canonicalUrl, isConfigured } from "@/lib/utils";

export const metadata = pageMetadata(
  "Professional Profile | Vaishnavi Jaiswal",
  "Complete professional profile for Vaishnavi Jaiswal, including HR experience, competencies, education, tools, and professional strengths.",
  "/about"
);

export default function AboutPage() {
  const emailAvailable = isConfigured(siteConfig.contact.email);
  const linkedInAvailable = isConfigured(siteConfig.contact.linkedinUrl);

  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          mainEntity: {
            "@type": "Person",
            name: profile.fullName,
            jobTitle: profile.designation,
            worksFor: profile.currentCompany,
            address: locationToPostalAddress(profile.location),
            image: canonicalUrl(siteConfig.siteUrl, profile.profileImage)
          }
        }}
      />
      <Breadcrumbs items={[{ label: "Professional Profile" }]} />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start">
          <aside className="surface-card min-w-0 rounded-[1.5rem] p-6 min-[1180px]:sticky min-[1180px]:top-28">
            <ProfileImage className="mx-auto max-w-[230px]" />
            <h1 className="mt-6 text-balance font-serif text-[2.15rem] font-semibold leading-tight text-ink">
              Professional Profile
            </h1>
            <p className="mt-3 font-semibold text-accent">{profile.fullName}</p>
            <p className="mt-1 text-muted">{profile.designation}</p>
            <p className="mt-1 text-sm font-semibold text-muted">{profile.currentCompany}</p>
            <div className="mt-5 grid gap-3 text-sm text-muted">
              <p className="flex gap-2">
                <MapPin className="mt-1 size-4 shrink-0 text-accent" aria-hidden />
                {profile.location}
              </p>
              {emailAvailable ? (
                <a className="flex gap-2 hover:text-accent" href={`mailto:${siteConfig.contact.email}`}>
                  <Mail className="mt-1 size-4 shrink-0 text-accent" aria-hidden />
                  <span className="safe-wrap">{siteConfig.contact.email}</span>
                </a>
              ) : null}
              {linkedInAvailable ? (
                <a
                  className="flex gap-2 hover:text-accent"
                  href={siteConfig.contact.linkedinUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Linkedin className="mt-1 size-4 shrink-0 text-accent" aria-hidden />
                  LinkedIn
                </a>
              ) : null}
            </div>
            <SidebarGroup title="Core HR Skills" items={coreCompetencies.slice(0, 6)} />
          </aside>

          <div className="grid min-w-0 grid-cols-[minmax(0,1fr)] gap-8">
            <header className="surface-card rounded-[1.5rem] p-7 md:p-10">
              <p className="label-text">Career journey, HR competencies, experience, education, tools, and strengths.</p>
              <h2 className="mt-4 max-w-4xl font-serif text-5xl font-semibold leading-tight text-ink">
                Professional profile across Non-IT recruitment, onboarding, and HR operations.
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted">{profile.summary}</p>
            </header>

            <ProfileSection title="Career Direction">
              <p className="text-lg leading-8 text-muted">{profile.careerDirection}</p>
            </ProfileSection>

            <ProfileSection title="Core Competencies">
              <div className="grid gap-3 sm:grid-cols-2">
                {coreCompetencies.map((item) => (
                  <div className="rounded-2xl border border-border bg-elevated p-4 font-semibold text-ink" key={item}>
                    {item}
                  </div>
                ))}
              </div>
            </ProfileSection>

            <ProfileSection title="Complete Work Experience">
              <div className="grid gap-5">
                {experiences.map((experience) => (
                  <ExperienceCard compact experience={experience} key={experience.company} />
                ))}
              </div>
            </ProfileSection>

            <ProfileSection title="Education">
              <div className="grid gap-4">
                {education.map((item) => (
                  <article className="rounded-2xl border border-border bg-elevated p-5" key={item.institution}>
                    <p className="label-text">{item.dateRange}</p>
                    <h3 className="mt-2 font-serif text-2xl font-semibold text-ink">{item.qualification}</h3>
                    <p className="mt-1 font-semibold text-accent">{item.specialization}</p>
                    <p className="mt-2 text-muted">{item.institution}</p>
                    {item.location ? <p className="mt-1 text-sm text-subtle">{item.location}</p> : null}
                    {item.relevantAreas ? (
                      <div className="mt-4">
                        <p className="mb-2 text-sm font-semibold text-ink">Relevant academic areas</p>
                        <TagList items={item.relevantAreas} />
                      </div>
                    ) : null}
                  </article>
                ))}
              </div>
              <LinkButton className="mt-5" href="/education" variant="secondary">
                View Education
              </LinkButton>
            </ProfileSection>

            <ProfileSection title="Academic Project">
              <article className="rounded-2xl border border-border bg-elevated p-5">
                <p className="label-text">{academicProject.date}</p>
                <h3 className="mt-2 font-serif text-2xl font-semibold text-ink">{academicProject.title}</h3>
                <p className="mt-3 text-muted">{academicProject.overview}</p>
                <div className="mt-5 grid gap-3">
                  {academicProject.sections.map((section) => (
                    <div key={section.title}>
                      <h4 className="font-semibold text-ink">{section.title}</h4>
                      <p className="text-muted">{section.description}</p>
                    </div>
                  ))}
                </div>
              </article>
            </ProfileSection>

            <ProfileSection title="Recruitment Tools and Platforms">
              <TagList items={skillCategories[4].skills} />
            </ProfileSection>

            <ProfileSection title="Industry Exposure">
              <TagList items={industries.map((industry) => industry.title)} />
            </ProfileSection>

            <ProfileSection title="Professional Strengths">
              <TagList items={skillCategories[5].skills} label="professional strengths" limit={8} />
            </ProfileSection>

            <ProfileSection title="Working Approach">
              <div className="grid gap-3 sm:grid-cols-2">
                {workingApproach.map((item, index) => (
                  <div className="rounded-2xl border border-border bg-elevated p-4" key={item}>
                    <span className="text-sm font-bold text-accent">{String(index + 1).padStart(2, "0")}</span>
                    <p className="mt-2 font-semibold text-ink">{item}</p>
                  </div>
                ))}
              </div>
            </ProfileSection>

            <ProfileSection title="Professional Values">
              <div className="grid gap-4 sm:grid-cols-2">
                {profile.values.map((value) => (
                  <article className="rounded-2xl border border-border bg-elevated p-5" key={value.title}>
                    <h3 className="font-serif text-2xl font-semibold text-ink">{value.title}</h3>
                    <p className="mt-2 text-muted">{value.description}</p>
                  </article>
                ))}
              </div>
            </ProfileSection>

            <div className="surface-card rounded-[1.5rem] p-7">
              <h2 className="font-serif text-3xl font-semibold text-ink">Professional Contact</h2>
              <p className="mt-3 text-muted">
                For HR job opportunities, talent acquisition roles, recruitment collaboration, or
                professional networking, connect directly through email or LinkedIn.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                {emailAvailable ? (
                  <LinkButton href={`mailto:${siteConfig.contact.email}`}>
                    <Mail className="size-4" aria-hidden />
                    Send an Email
                  </LinkButton>
                ) : null}
                {linkedInAvailable ? (
                  <LinkButton href={siteConfig.contact.linkedinUrl} variant="secondary">
                    <Linkedin className="size-4" aria-hidden />
                    LinkedIn
                  </LinkButton>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function SidebarGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mt-6">
      <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-ink">{title}</h2>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <span className="rounded-full border border-border bg-elevated px-3 py-1 text-xs font-semibold text-muted" key={item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProfileSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="surface-card rounded-[1.5rem] p-7">
      <h2 className="font-serif text-3xl font-semibold text-ink">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}
