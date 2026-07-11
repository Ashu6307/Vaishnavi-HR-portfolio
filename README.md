# Vaishnavi Jaiswal Professional Portfolio

Static multipage portfolio website for Vaishnavi Jaiswal, Human Resources Executive, focused on Non-IT talent acquisition, recruitment coordination, employee onboarding, and HR operations.

The portfolio intentionally has no downloadable resume, no resume route, and no resume document section. Complete career details are presented on the About page as a professional profile.

## Technology Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- ESLint
- Static export with `output: "export"`
- Local typed data files
- Lucide React icons
- `next/font` typography

## Commands

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run test:e2e
npm run build
npm run preview
```

The production static output is generated in `out/`.

## Development QA

The branded loader appears on full document loads, direct URL entries, new tabs, and hard refreshes for at least 800ms, with a 1300ms safety timeout and smooth exit fade. It does not replay during same-tab internal navigation, theme changes, menu interactions, accordions, tag expansion, or back-to-top clicks. For visual QA, append `?showLoader=1` to force the loader on a same-origin test navigation without adding visible debug UI.

## Static Architecture

The site is fully static:

- No database
- No authentication
- No admin panel
- No API routes
- No server actions
- No middleware
- No CMS dependency
- No runtime server dependency
- No direct submission endpoint

Dynamic work pages under `/work/[slug]` are generated from static parameters in `src/data/case-studies.ts`.

## Editing Profile Data

Personal and professional information is centralized:

- `src/data/site.ts`: site URL, email, LinkedIn URL, location, and footer text
- `src/data/profile.ts`: name, designation, company, headline, summary, and image path
- `src/data/experience.ts`: company experience and role progression dates
- `src/data/education.ts`: education and academic project
- `src/data/skills.ts`: skills, tools, strengths, and working approach
- `src/data/industries.ts`: industry exposure
- `src/data/case-studies.ts`: anonymized HR workflow case studies
- `src/data/resources.ts`: HR checklists and resources

## Contact Configuration

Direct contact details are edited in `src/data/site.ts`.

Current configured public contact fields:

- Email: `vaishnavi.jaiswal@pciinfra.in`
- LinkedIn: `https://www.linkedin.com/in/vaishnavi-jais27`
- Location: `Noida, Uttar Pradesh, India`

The site does not include a direct submission form.

Set only safe public values in `.env.example` and deployment settings:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

## Profile Image

Expected image path:

- `public/images/vaishnavi-jaiswal-profile.png`

If the profile photograph is missing, the UI shows a premium `VJ` initials placeholder and preserves layout dimensions.

After adding the profile photograph, set `profileImageAvailable: true` in `src/data/profile.ts`.

## SEO

SEO metadata is defined per route, with canonical URLs, Open Graph metadata, Twitter card metadata, sitemap, robots, and JSON-LD structured data for Person, WebSite, ProfilePage, ItemList, and Article pages.

Update `NEXT_PUBLIC_SITE_URL` before production deployment so canonical URLs and sitemap links use the live domain.

## Deployment

Build command:

```bash
npm run build
```

Output directory:

```text
out
```

Compatible with:

- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages

For GitHub Pages under a repository subpath, configure `basePath` and asset prefix carefully in `next.config.ts`, then rebuild and verify all internal links.

## APTO Date-Overlap Note

The supplied professional profile contains overlapping dates between:

- Account Manager - Talent Acquisition: June 2025 to October 2025
- Talent Acquisition Specialist: April 2025 to July 2025

These dates are preserved exactly in `src/data/experience.ts` and can be edited centrally if needed.

## Troubleshooting

- Missing profile image: add the PNG file at the expected path or keep the initials fallback.
- Canonical URLs show `https://example.com`: set `NEXT_PUBLIC_SITE_URL`.
- Static export fails for work pages: confirm every case study has a unique `slug`.
- Direct contact is outdated: update `src/data/site.ts`.
