import { ArrowRight, Building2, CheckCircle2, Mail, MapPin } from "lucide-react";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { StructuredData } from "@/components/seo/StructuredData";
import { LinkButton } from "@/components/ui/Button";
import { ProfileImage } from "@/components/ui/ProfileImage";
import { Section, SectionHeading } from "@/components/ui/Section";
import { TagList } from "@/components/ui/TagList";
import { caseStudies } from "@/data/case-studies";
import { experiences } from "@/data/experience";
import { industries } from "@/data/industries";
import { profile } from "@/data/profile";
import { siteConfig } from "@/data/site";
import { coreCompetencies, workingApproach } from "@/data/skills";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, isConfigured } from "@/lib/utils";

export const metadata = pageMetadata(
  "Vaishnavi Jaiswal | Human Resources Executive & Talent Acquisition",
  "Portfolio of Vaishnavi Jaiswal, Human Resources Executive specializing in Non-IT recruitment, talent acquisition, onboarding, and HR operations.",
  "/"
);

export default function HomePage() {
  const emailAvailable = isConfigured(siteConfig.contact.email);
  const emailHref = emailAvailable
    ? `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent("Professional enquiry for Vaishnavi Jaiswal")}`
    : "/contact";

  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.fullName,
          jobTitle: profile.designation,
          worksFor: {
            "@type": "Organization",
            name: profile.currentCompany
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Greater Noida",
            addressRegion: "Delhi NCR",
            addressCountry: "IN"
          },
          image: absoluteUrl(siteConfig.siteUrl, profile.profileImage),
          sameAs: siteConfig.contact.linkedinUrl,
          alumniOf: [
            "GNIOT Institute of Management Studies",
            "Mahatma Gandhi Kashi Vidyapith, Varanasi"
          ]
        }}
      />
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteConfig.name,
          url: siteConfig.siteUrl,
          description: siteConfig.description
        }}
      />

      <section className="relative overflow-hidden">
        <div className="container-shell grid min-h-[calc(100vh-5rem)] gap-10 py-16 lg:grid-cols-[1.05fr_0.8fr] lg:items-center">
          <div>
            <p className="label-text">Human Resources • Talent Acquisition • HR Operations</p>
            <h1 className="mt-5 max-w-4xl text-balance font-serif text-5xl font-semibold leading-[0.95] text-ink md:text-7xl">
              {profile.fullName}
            </h1>
            <p className="mt-5 text-xl font-semibold text-accent md:text-2xl">{profile.designation}</p>
            <p className="mt-6 max-w-3xl text-balance text-2xl font-semibold leading-snug text-ink md:text-4xl">
              Supporting structured recruitment journeys from sourcing to onboarding.
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              Supporting structured hiring processes from candidate sourcing and screening to
              interview coordination, documentation, onboarding, and employee integration.
            </p>
            <div className="mt-6 grid gap-3 text-sm font-semibold text-muted sm:grid-cols-3">
              <p className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-accent" aria-hidden />
                Human Resources Executive
              </p>
              <p className="flex items-center gap-2">
                <Building2 className="size-4 text-accent" aria-hidden />
                {profile.currentCompany}
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="size-4 text-accent" aria-hidden />
                Greater Noida, India
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton href="/experience">Explore Experience</LinkButton>
              <LinkButton href={emailHref} variant="secondary">
                <Mail className="size-4" aria-hidden />
                Email Me
              </LinkButton>
              <LinkButton href="/about" variant="text">
                View Professional Profile <ArrowRight className="size-4" aria-hidden />
              </LinkButton>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-4 top-8 hidden h-40 w-40 rounded-full border border-strong lg:block" />
            <ProfileImage className="mx-auto max-w-[360px]" priority />
            <div className="surface-card mx-auto mt-4 max-w-sm rounded-[1.25rem] p-5 text-sm font-semibold text-ink">
              <p>{profile.alternativeHeroLine}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface/80">
        <div className="container-shell flex flex-wrap gap-3 py-6">
          {[
            "End-to-End Recruitment",
            "Non-IT Talent Acquisition",
            "Candidate Sourcing",
            "Employee Onboarding",
            "HR Operations",
            "Candidate Experience"
          ].map((item) => (
            <span
              className="rounded-full border border-strong px-4 py-2 text-sm font-bold text-ink"
              key={item}
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading
            eyebrow="Professional Introduction"
            title="Structured hiring support from sourcing to employee integration."
            intro="Vaishnavi supports hiring cycles with requirement clarity, candidate communication, documentation discipline, and onboarding coordination."
          />
          <div className="surface-card rounded-[1.25rem] p-7">
            <p className="text-lg leading-8 text-muted">{profile.summary}</p>
            <a className="mt-6 inline-flex font-semibold text-accent hover:underline" href="/about">
              Read the complete professional profile
            </a>
          </div>
        </div>
      </Section>

      <Section className="bg-surface/60">
        <SectionHeading
          eyebrow="Core Competencies"
          title="Recruitment and HR operations capabilities."
          intro="A compact view of the HR skills most relevant to Non-IT recruitment, sourcing, documentation, onboarding, and stakeholder coordination."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {coreCompetencies.slice(0, 10).map((item) => (
            <article className="surface-card rounded-2xl p-5" key={item}>
              <CheckCircle2 className="mb-4 size-6 text-accent" aria-hidden />
              <h3 className="font-serif text-2xl font-semibold text-ink">{item}</h3>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Industry Exposure"
          title="Recruitment exposure across Non-IT sectors."
          intro="The portfolio communicates recruitment exposure across industries without implying technical engineering expertise."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.slice(0, 7).map((industry) => (
            <article className="rounded-2xl border border-border bg-elevated p-5" key={industry.title}>
              <h3 className="font-serif text-2xl font-semibold text-ink">{industry.title}</h3>
              <p className="mt-2 text-sm text-muted">{industry.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-surface/60">
        <SectionHeading
          eyebrow="Career Journey"
          title="Role progression across HR, talent acquisition, and recruitment research."
        />
        <div className="grid gap-5">
          {experiences.map((experience) => (
            <ExperienceCard compact experience={experience} key={experience.company} />
          ))}
        </div>
        <LinkButton className="mt-8" href="/experience" variant="secondary">
          View Complete Experience
        </LinkButton>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Recruitment Workflow"
          title="A practical hiring process from requirement to onboarding."
        />
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-5">
          {workingApproach.map((step, index) => (
            <article className="relative rounded-2xl border border-border bg-surface p-5" key={step}>
              <span className="text-sm font-bold text-accent">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 font-semibold text-ink">{step}</h3>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-surface/60">
        <SectionHeading
          eyebrow="Selected Work"
          title="Anonymized process case studies."
          intro="Workflow-driven examples that avoid confidential company, client, salary, and candidate information."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {caseStudies.slice(0, 2).map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
        <LinkButton className="mt-8" href="/work" variant="secondary">
          See More Workflows
        </LinkButton>
      </Section>

      <Section>
        <SectionHeading eyebrow="Professional Values" title="A process-led and privacy-conscious working style." />
        <TagList items={profile.values.map((value) => value.title)} />
      </Section>
    </>
  );
}
