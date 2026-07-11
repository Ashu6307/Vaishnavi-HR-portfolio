import { ExternalLink, Linkedin, Mail, MapPin } from "lucide-react";
import { MotionStagger, MotionStaggerItem } from "@/components/motion/MotionReveal";
import { navigationItems } from "@/data/navigation";
import { profile } from "@/data/profile";
import { siteConfig } from "@/data/site";
import { isConfigured } from "@/lib/utils";

const exploreLinks = navigationItems.filter((item) =>
  ["Home", "About", "Experience", "Expertise", "Work"].includes(item.label)
);

const moreLinks = navigationItems.filter((item) =>
  ["Education", "Resources", "Contact"].includes(item.label)
);

export function Footer() {
  const emailAvailable = isConfigured(siteConfig.contact.email);
  const linkedInAvailable = isConfigured(siteConfig.contact.linkedinUrl);

  return (
    <footer className="border-t border-border bg-[rgb(var(--color-surface)/0.86)]">
      <div className="container-shell py-12 md:py-14">
        <MotionStagger className="grid gap-9 md:grid-cols-2 lg:grid-cols-[minmax(280px,1.5fr)_minmax(130px,0.75fr)_minmax(130px,0.75fr)_minmax(180px,0.9fr)] lg:items-start">
          <MotionStaggerItem>
            <p className="font-serif text-3xl font-semibold leading-tight text-ink">{profile.fullName}</p>
            <p className="mt-2 font-semibold text-accent">{profile.designation}</p>
            <p className="mt-3 max-w-md text-[0.98rem] leading-7 text-muted">
              Human Resources Executive focused on Non-IT recruitment, Talent Acquisition,
              onboarding, and HR operations.
            </p>
            <div className="mt-5 grid gap-3 text-[0.96rem] text-muted">
              <p className="flex gap-2">
                <MapPin className="mt-1 size-4 shrink-0 text-accent" aria-hidden />
                <span>{siteConfig.contact.location}</span>
              </p>
              {emailAvailable ? (
                <a className="flex gap-2 hover:text-accent" href={`mailto:${siteConfig.contact.email}`}>
                  <Mail className="mt-1 size-4 shrink-0 text-accent" aria-hidden />
                  <span className="safe-wrap">{siteConfig.contact.email}</span>
                </a>
              ) : null}
            </div>
          </MotionStaggerItem>

          <FooterGroup title="Explore" items={exploreLinks} />
          <FooterGroup title="More" items={moreLinks} />

          <MotionStaggerItem>
            <h2 className="footer-heading">Connect</h2>
            <div className="mt-4">
              {linkedInAvailable ? (
                <a
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-strong bg-surface px-4 py-2 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  href={siteConfig.contact.linkedinUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Linkedin className="size-4" aria-hidden />
                  Connect on LinkedIn
                  <ExternalLink className="size-3.5" aria-hidden />
                  <span className="sr-only">opens in a new tab</span>
                </a>
              ) : null}
            </div>
          </MotionStaggerItem>
        </MotionStagger>

        <div className="mt-10 border-t border-border pt-5 text-sm text-muted">
          <p>
            © {new Date().getFullYear()} {profile.fullName}. {siteConfig.footerText}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterGroup({ title, items }: { title: string; items: Array<{ label: string; href: string }> }) {
  return (
    <MotionStaggerItem>
      <h2 className="footer-heading">{title}</h2>
      <ul className="mt-4 grid gap-3">
        {items.map((item) => (
          <li key={item.href}>
            <a className="text-[0.96rem] font-semibold text-muted hover:text-accent" href={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </MotionStaggerItem>
  );
}
