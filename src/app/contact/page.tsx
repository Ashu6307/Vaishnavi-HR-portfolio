import { ExternalLink, Linkedin, Mail, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import { CopyEmailButton } from "@/components/contact/CopyEmailButton";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { LinkButton } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { siteConfig } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { isConfigured } from "@/lib/utils";

export const metadata = pageMetadata(
  "Contact Vaishnavi Jaiswal | HR and Talent Acquisition",
  "Connect with Vaishnavi Jaiswal for professional opportunities, Talent Acquisition discussions, HR collaboration, or professional networking.",
  "/contact"
);

export default function ContactPage() {
  const emailAvailable = isConfigured(siteConfig.contact.email);
  const linkedInAvailable = isConfigured(siteConfig.contact.linkedinUrl);
  const emailHref = emailAvailable
    ? `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent("Professional enquiry for Vaishnavi Jaiswal")}`
    : "";

  return (
    <>
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <Section>
        <SectionHeading
          eyebrow="Direct Contact"
          level="h1"
          title="Let's Connect"
          intro="For professional opportunities, Talent Acquisition discussions, HR collaboration, or professional networking, connect directly through email or LinkedIn."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {emailAvailable ? (
            <article className="surface-card rounded-[1.25rem] p-6 md:p-7">
              <ContactIcon icon={<Mail className="size-5" aria-hidden />} />
              <p className="mt-5 text-sm font-bold uppercase tracking-[0.14em] text-accent">Email</p>
              <h2 className="safe-wrap mt-2 font-serif text-3xl font-semibold text-ink">
                {siteConfig.contact.email}
              </h2>
              <p className="mt-3 text-muted">
                Best for professional opportunities, Talent Acquisition conversations, HR
                collaboration, and formal recruitment-related enquiries.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <LinkButton href={emailHref}>
                  <Mail className="size-4" aria-hidden />
                  Send an Email
                </LinkButton>
                <CopyEmailButton email={siteConfig.contact.email} />
              </div>
            </article>
          ) : null}

          {linkedInAvailable ? (
            <article className="surface-card rounded-[1.25rem] p-6 md:p-7">
              <ContactIcon icon={<Linkedin className="size-5" aria-hidden />} />
              <p className="mt-5 text-sm font-bold uppercase tracking-[0.14em] text-accent">
                LinkedIn
              </p>
              <h2 className="mt-2 font-serif text-3xl font-semibold text-ink">
                Professional networking
              </h2>
              <p className="mt-3 text-muted">
                Suitable for HR networking, Talent Acquisition discussions, and professional
                introductions connected to recruitment or HR operations.
              </p>
              <a
                className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-strong bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                href={siteConfig.contact.linkedinUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                View LinkedIn Profile
                <ExternalLink className="size-4" aria-hidden />
                <span className="sr-only">opens in a new tab</span>
              </a>
            </article>
          ) : null}

          <ContactInfoCard
            icon={<MapPin className="size-5" aria-hidden />}
            title="Location"
            text={siteConfig.contact.location}
            description={`Based in ${siteConfig.contact.location}, with a professional focus on HR, Talent Acquisition, and recruitment coordination.`}
          />

          <article className="surface-card rounded-[1.25rem] p-6 md:p-7">
            <ContactIcon icon={<Sparkles className="size-5" aria-hidden />} />
            <p className="mt-5 text-sm font-bold uppercase tracking-[0.14em] text-accent">
              Professional Focus
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-ink">
              HR and recruitment discussions
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Human Resources",
                "Talent Acquisition",
                "Non-IT Recruitment",
                "Recruitment Operations",
                "Employee Onboarding",
                "HR Operations"
              ].map((item) => (
                <span
                  className="rounded-full border border-border bg-elevated px-3 py-1 text-xs font-semibold text-muted"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-8 rounded-[1.25rem] border border-border bg-elevated p-5 text-sm text-muted">
          <div className="flex gap-3">
            <ShieldCheck className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden />
            <p>
              Please include the role, organization, and purpose of communication in your email for
              better context.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

function ContactIcon({ icon }: { icon: ReactNode }) {
  return (
    <span className="grid size-12 place-items-center rounded-full border border-strong text-accent">
      {icon}
    </span>
  );
}

function ContactInfoCard({
  icon,
  title,
  text,
  description
}: {
  icon: ReactNode;
  title: string;
  text: string;
  description: string;
}) {
  return (
    <article className="surface-card rounded-[1.25rem] p-6 md:p-7">
      <ContactIcon icon={icon} />
      <p className="mt-5 text-sm font-bold uppercase tracking-[0.14em] text-accent">{title}</p>
      <h2 className="mt-2 font-serif text-3xl font-semibold text-ink">{text}</h2>
      <p className="mt-3 text-muted">{description}</p>
    </article>
  );
}
