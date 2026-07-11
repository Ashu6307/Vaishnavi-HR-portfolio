import { Linkedin, Mail } from "lucide-react";
import { MotionStagger, MotionStaggerItem } from "@/components/motion/MotionReveal";
import { LinkButton } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { isConfigured } from "@/lib/utils";

export function FinalCTA() {
  const hasEmail = isConfigured(siteConfig.contact.email);
  const hasLinkedIn = isConfigured(siteConfig.contact.linkedinUrl);

  return (
    <section className="border-y border-border bg-surface">
      <MotionStagger className="container-shell grid gap-6 py-14 lg:grid-cols-[1fr_auto] lg:items-center">
        <MotionStaggerItem>
          <p className="label-text">Professional Connection</p>
          <h2 className="mt-3 max-w-4xl text-balance font-serif text-3xl font-semibold leading-tight text-ink md:text-[2.4rem]">
            Open to HR opportunities, Talent Acquisition roles, recruitment collaboration, and
            professional networking.
          </h2>
        </MotionStaggerItem>
        <MotionStaggerItem className="flex flex-col gap-3 sm:flex-row lg:justify-end">
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
        </MotionStaggerItem>
      </MotionStagger>
    </section>
  );
}
