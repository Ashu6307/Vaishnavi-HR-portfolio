import type { SiteConfig } from "@/types/content";
import { profile } from "@/data/profile";

export const siteConfig: SiteConfig = {
  name: "Vaishnavi Jaiswal",
  title: "Vaishnavi Jaiswal | Human Resources Executive",
  description:
    "Professional portfolio of Vaishnavi Jaiswal, a Human Resources Executive experienced in Non-IT recruitment, Talent Acquisition, onboarding, recruitment operations, and HR support.",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://vaishnavi-hr-portfolio.pages.dev",
  footerText: "All rights reserved.",
  contact: {
    email: "vaishnavi.jaiswal@pciinfra.in",
    phone: "",
    linkedinUrl: "https://www.linkedin.com/in/vaishnavi-jais27",
    location: profile.location
  }
};