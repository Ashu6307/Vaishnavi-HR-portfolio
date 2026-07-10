import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import type { ReactNode } from "react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Privacy Notice | Vaishnavi Jaiswal Portfolio",
  "Privacy notice for the static professional portfolio of Vaishnavi Jaiswal.",
  "/privacy"
);

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Privacy" }]} />
      <Section>
        <SectionHeading
          eyebrow="Privacy"
          level="h1"
          title="Privacy notice for this static professional portfolio."
          intro="This website is designed to present professional information and contact options without collecting confidential recruitment or candidate data."
        />
        <div className="surface-card grid gap-6 rounded-[1.25rem] p-7 text-muted">
          <Policy title="Static website">
            This portfolio uses static pages and does not require a database, authentication, admin
            panel, server actions, or private environment variables.
          </Policy>
          <Policy title="Direct contact">
            This website does not process direct form submissions. Professional enquiries are
            handled through the displayed email address or LinkedIn profile.
          </Policy>
          <Policy title="Professional information">
            The website presents professional profile information, experience, education, skills,
            resources, and anonymized HR workflows. It does not publish candidate details, client
            names, salaries, confidential documents, employee records, or private recruitment data.
          </Policy>
          <Policy title="Third-party services">
            LinkedIn links open outside this website and are governed by LinkedIn&apos;s own privacy
            practices. Hosting providers may process standard technical logs such as IP address,
            browser information, requested URL, and timestamp for security and reliability.
          </Policy>
          <Policy title="Local preferences">
            The theme selector may store a light, dark, or system preference in the visitor&apos;s
            browser localStorage. This preference is used only to keep the chosen visual theme.
          </Policy>
          <Policy title="No sale of personal data">
            This portfolio is not designed to sell personal data. Visitors should avoid sending
            candidate, employee, or confidential hiring information through public channels.
          </Policy>
        </div>
      </Section>
    </>
  );
}

function Policy({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-serif text-3xl font-semibold text-ink">{title}</h2>
      <p className="mt-2">{children}</p>
    </section>
  );
}
