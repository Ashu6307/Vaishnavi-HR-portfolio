import { Linkedin, Mail } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { isConfigured } from "@/lib/utils";

export function FinalCTA() {
  const hasEmail = isConfigured(siteConfig.contact.email);
  const hasLinkedIn = isConfigured(siteConfig.contact.linkedinUrl);

  return (
    <section className="border-y border-border bg-surface">
      <div className="container-shell grid gap-6 py-14 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="label-text">Professional Connection</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-ink">
            Open to HR opportunities, talent acquisition roles, recruitment collaboration, and
            professional networking.
          </h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          {hasEmail ? (
            <LinkButton href={`mailto:${siteConfig.contact.email}`}>
              <Mail className="size-4" aria-hidden />
              Send Email
            </LinkButton>
          ) : null}
          {hasLinkedIn ? (
            <LinkButton href={siteConfig.contact.linkedinUrl} variant="secondary">
              <Linkedin className="size-4" aria-hidden />
              Connect on LinkedIn
            </LinkButton>
          ) : null}
        </div>
      </div>
    </section>
  );
}
