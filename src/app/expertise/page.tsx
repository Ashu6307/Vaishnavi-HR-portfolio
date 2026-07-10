import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Section, SectionHeading } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Talent Acquisition, Recruitment & HR Operations Expertise",
  "Recruitment expertise across sourcing, screening, interview coordination, onboarding, documentation, and HR operations support.",
  "/expertise"
);

const expertiseAreas = [
  "End-to-End Recruitment",
  "Non-IT Talent Acquisition",
  "Candidate Sourcing",
  "Recruitment Research",
  "Market Mapping",
  "Candidate Screening",
  "Candidate Shortlisting",
  "Preliminary Interviews",
  "Interview Coordination",
  "Hiring Manager Coordination",
  "Client Coordination",
  "Recruitment Documentation",
  "Offer and Joining Coordination",
  "Employee Onboarding",
  "Background Verification Coordination",
  "HR Operations Support",
  "Candidate Communication",
  "Recruitment Tracking",
  "Candidate Database Management",
  "Campus Recruitment"
];

const toolsByArea: Record<string, string[]> = {
  "Candidate Sourcing": ["LinkedIn", "Naukri", "Job Portals", "Candidate Databases"],
  "Recruitment Research": ["LinkedIn", "Social Media", "Job Portals", "Internal Databases"],
  "Market Mapping": ["LinkedIn", "Naukri", "Search Keywords", "Candidate Databases"],
  "Employee Onboarding": ["Microsoft Office", "HR Software", "Documentation Checklists"],
  "Recruitment Tracking": ["Microsoft Excel", "Recruitment Trackers", "Candidate Databases"],
  "Candidate Database Management": ["Candidate Databases", "Microsoft Excel"]
};

export default function ExpertisePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Expertise" }]} />
      <Section>
        <SectionHeading
          eyebrow="Expertise"
          level="h1"
          title="Practical HR expertise across recruitment coordination and onboarding support."
          intro="Each area explains the professional approach without claiming unverified payroll, statutory compliance, compensation, HRBP, grievance, or industrial-relations expertise."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {expertiseAreas.map((area) => (
            <article className="surface-card rounded-[1.25rem] p-6" key={area}>
              <h2 className="font-serif text-3xl font-semibold text-ink">{area}</h2>
              <div className="mt-5 grid gap-4">
                <Block
                  title="What it means"
                  text={`${area} supports a structured hiring or HR operations step within Non-IT recruitment and employee integration workflows.`}
                />
                <Block
                  title="Professional approach"
                  text="Clarify the requirement, keep communication organized, document status changes, and move the process forward with practical follow-up."
                />
                <Block
                  title="Typical activities"
                  text={activityFor(area)}
                />
                <Block
                  title="Related tools"
                  text={(toolsByArea[area] || ["Microsoft Office", "Microsoft Excel", "LinkedIn", "Naukri"]).join(", ")}
                />
                <Block
                  title="Related experience"
                  text="Connected to responsibilities across PCI Infraprojects Pvt. Ltd., APTO Management Services Pvt. Ltd., and CINCOONI Systems."
                />
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}

function Block({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-accent">{title}</h3>
      <p className="mt-1 text-muted">{text}</p>
    </div>
  );
}

function activityFor(area: string) {
  if (area.includes("Onboarding")) {
    return "Coordinate joining documentation, induction support, office orientation, new-joiner queries, and HR record updates.";
  }
  if (area.includes("Sourcing") || area.includes("Mapping") || area.includes("Research")) {
    return "Use role mapping, search keywords, job portals, LinkedIn sourcing, referral channels, and internal database search.";
  }
  if (area.includes("Interview") || area.includes("Screening") || area.includes("Shortlisting")) {
    return "Review candidate profiles, conduct preliminary screening, coordinate schedules, and maintain candidate communication.";
  }
  if (area.includes("Documentation") || area.includes("Offer") || area.includes("Background")) {
    return "Support offer letters, Letters of Intent, appointment-letter coordination, BGV coordination, and documentation follow-up.";
  }
  return "Coordinate stakeholders, maintain process visibility, track status, and support recruitment delivery.";
}
