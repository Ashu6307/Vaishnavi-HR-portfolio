import { siteConfig } from "@/data/site";
import { isConfigured } from "@/lib/utils";
import type { SocialLink } from "@/types/content";

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: siteConfig.contact.linkedinUrl,
    external: true
  }
].filter((link) => isConfigured(link.href));
