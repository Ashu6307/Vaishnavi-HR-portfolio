import { ExternalLink, Mail, MapPin } from "lucide-react";
import { navigationItems } from "@/data/navigation";
import { profile } from "@/data/profile";
import { siteConfig } from "@/data/site";
import { socialLinks } from "@/data/social-links";
import { LinkButton } from "@/components/ui/Button";
import { isConfigured } from "@/lib/utils";

export function Footer() {
  const emailAvailable = isConfigured(siteConfig.contact.email);
  const linkedInAvailable = isConfigured(siteConfig.contact.linkedinUrl);

  return (
    <footer className="border-t border-border bg-[rgb(var(--color-surface)/0.8)]">
      <div className="container-shell py-14">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <p className="font-serif text-3xl font-semibold text-ink">{profile.fullName}</p>
            <p className="mt-3 max-w-md text-muted">{profile.headline}</p>
            <div className="mt-6 grid gap-3 text-sm text-muted">
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
              {linkedInAvailable ? (
                <a
                  className="flex gap-2 hover:text-accent"
                  href={siteConfig.contact.linkedinUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <ExternalLink className="mt-1 size-4 shrink-0 text-accent" aria-hidden />
                  <span>LinkedIn profile</span>
                </a>
              ) : null}
            </div>
            <p className="mt-6 rounded-2xl border border-border bg-elevated p-4 text-sm font-semibold text-ink">
              Complete career details are available on the Professional Profile page.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <FooterGroup title="Navigate" items={navigationItems.slice(0, 4)} />
            <FooterGroup title="Profile" items={navigationItems.slice(4)} />
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-ink">Connect</h2>
              <div className="mt-4 grid gap-3">
                {socialLinks.map((link) => (
                  <a
                    className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-accent"
                    href={link.href}
                    key={link.label}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    target={link.external ? "_blank" : undefined}
                  >
                    {link.label}
                    {link.external ? <ExternalLink className="size-3.5" aria-hidden /> : null}
                  </a>
                ))}
                <LinkButton href="/contact" variant="secondary">
                  Contact
                </LinkButton>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {profile.fullName}. {siteConfig.footerText}</p>
          <a className="font-semibold hover:text-accent" href="/privacy">
            Privacy Notice
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterGroup({ title, items }: { title: string; items: Array<{ label: string; href: string }> }) {
  return (
    <div>
      <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-ink">{title}</h2>
      <ul className="mt-4 grid gap-3">
        {items.map((item) => (
          <li key={item.href}>
            <a className="text-sm font-semibold text-muted hover:text-accent" href={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
