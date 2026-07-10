import type { SiteConfig } from "@/types/content";

export const siteConfig: SiteConfig = {
  name: "Vaishnavi Jaiswal",
  title: "Vaishnavi Jaiswal | Human Resources Executive & Talent Acquisition",
  description:
    "Premium professional portfolio for Vaishnavi Jaiswal, Human Resources Executive focused on Non-IT recruitment, talent acquisition, onboarding, and HR operations.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  footerText: "Professional HR portfolio for talent acquisition and recruitment opportunities.",
  contact: {
    email: "vaishnavi.jaiswal@pciinfra.in",
    phone: "",
    linkedinUrl: "https://www.linkedin.com/in/vaishnavi-jais27",
    location: "Greater Noida / Greater Delhi Area, India"
  }
};
