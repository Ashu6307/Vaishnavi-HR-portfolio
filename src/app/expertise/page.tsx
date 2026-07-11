import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Section, SectionHeading } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Talent Acquisition, Recruitment & HR Operations Expertise",
  "Recruitment expertise across sourcing, screening, interview coordination, onboarding, documentation, and HR operations support.",
  "/expertise"
);

const expertiseAreas = [
  {
    title: "End-to-End Non-IT Recruitment",
    meaning:
      "Supporting hiring from manpower requirement understanding through sourcing, screening, interview coordination, selection support, and joining follow-up.",
    approach:
      "Start with role clarity, keep the candidate pipeline organized, and maintain timely communication with hiring stakeholders.",
    activities:
      "Requirement gathering, job-description alignment, candidate sourcing, shortlisting, interview scheduling, offer coordination, and recruitment status tracking.",
    tools: ["LinkedIn", "Naukri", "Job Portals", "Microsoft Excel"],
    experience: "Applied across PCI Infraprojects and APTO Management Services responsibilities."
  },
  {
    title: "Candidate Sourcing and Market Mapping",
    meaning:
      "Identifying relevant Non-IT candidate profiles through structured search, role mapping, referral channels, and candidate databases.",
    approach:
      "Use clear search keywords, compare profiles against role expectations, and separate active prospects from future pipeline profiles.",
    activities:
      "LinkedIn sourcing, Naukri sourcing, job portal search, referral mapping, social media research, and candidate categorization.",
    tools: ["LinkedIn", "Naukri", "Job Portals", "Candidate Databases"],
    experience: "Connected to APTO Talent Acquisition Specialist and Recruitment Researcher roles."
  },
  {
    title: "Candidate Screening and Shortlisting",
    meaning:
      "Reviewing profiles against role requirements before moving candidates into interviews or stakeholder review.",
    approach:
      "Check role fit, communication readiness, availability, and basic alignment while keeping screening notes consistent.",
    activities:
      "Profile review, preliminary screening, candidate assessment, shortlist preparation, and follow-up communication.",
    tools: ["Microsoft Excel", "Candidate Databases", "Recruitment Trackers"],
    experience: "Used across recruitment, campus hiring, and candidate pipeline support work."
  },
  {
    title: "Interview and Hiring Coordination",
    meaning:
      "Keeping interviews, hiring-manager communication, candidate follow-up, and stakeholder updates moving in a structured way.",
    approach:
      "Confirm availability early, communicate clearly, track interview status, and reduce avoidable coordination gaps.",
    activities:
      "Interview scheduling, candidate follow-up, stakeholder updates, hiring manager coordination, and candidate progress tracking.",
    tools: ["Microsoft Office", "Microsoft Excel", "Email", "Recruitment Trackers"],
    experience: "Relevant to PCI, APTO, and CINCOONI Systems recruitment coordination work."
  },
  {
    title: "Client and Stakeholder Coordination",
    meaning:
      "Understanding hiring requirements, sharing recruitment updates, and supporting professional communication with internal or external stakeholders.",
    approach:
      "Clarify expectations, keep updates factual, and align recruitment activity with the requirement rather than overpromising outcomes.",
    activities:
      "Requirement discussions, recruitment planning, client updates, hiring manager coordination, and team follow-ups.",
    tools: ["Microsoft Office", "Microsoft Excel", "Recruitment Trackers"],
    experience: "Supported through APTO Account Manager - Talent Acquisition responsibilities."
  },
  {
    title: "Recruitment Documentation",
    meaning:
      "Maintaining accurate recruitment records and coordinating offer-related and joining-related documentation.",
    approach:
      "Keep document status visible, follow up on pending items, and avoid gaps between selection, offer, and joining stages.",
    activities:
      "Offer Letter coordination, Letter of Intent preparation, appointment-letter coordination, joining documentation, and documentation follow-up.",
    tools: ["Microsoft Office", "HR Software", "Documentation Checklists"],
    experience: "Part of PCI Infraprojects HR Executive responsibilities."
  },
  {
    title: "Employee Onboarding and Induction Support",
    meaning:
      "Helping new employees move from joining documentation into orientation, induction, and early employee integration.",
    approach:
      "Prepare the joining flow, support office orientation, answer new-joiner queries, and update HR records accurately.",
    activities:
      "Joining communication, onboarding support, office tours, induction coordination, onboarding kits where applicable, and new-joiner query handling.",
    tools: ["Microsoft Office", "HR Software", "Onboarding Checklists"],
    experience: "Connected to PCI Infraprojects onboarding and HR operations work."
  },
  {
    title: "Background Verification Coordination",
    meaning:
      "Coordinating background-verification steps and documentation follow-up as part of the joining and onboarding process.",
    approach:
      "Track required documents, communicate pending items clearly, and maintain confidentiality around employee information.",
    activities:
      "BGV coordination, document checklist tracking, joining-status updates, and HR record maintenance.",
    tools: ["Documentation Checklists", "Microsoft Excel", "HR Software"],
    experience: "Handled as part of HR Executive responsibilities at PCI Infraprojects."
  },
  {
    title: "Recruitment Tracking and Candidate Databases",
    meaning:
      "Keeping candidate, requirement, interview, offer, and joining status visible for recruitment follow-up.",
    approach:
      "Use clear tracker fields, update status consistently, and preserve useful sourcing history for future requirements.",
    activities:
      "Candidate database management, recruitment status tracking, pipeline updates, follow-up ownership, and reporting structure.",
    tools: ["Microsoft Excel", "Candidate Databases", "Recruitment Trackers"],
    experience: "Used across recruitment research, sourcing, and HR operations responsibilities."
  },
  {
    title: "Campus Recruitment Coordination",
    meaning:
      "Supporting campus hiring activity through candidate interviews, scheduling, evaluation records, and candidate progress tracking.",
    approach:
      "Coordinate with colleges and hiring teams, keep evaluation records organized, and support consistent preliminary interviews.",
    activities:
      "Campus drive coordination, preliminary interviews, communication assessment, interview scheduling, and feedback record maintenance.",
    tools: ["Microsoft Office", "Interview Evaluation Notes", "Candidate Trackers"],
    experience: "Connected to CINCOONI Systems Human Resources Internship responsibilities."
  }
];

export default function ExpertisePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Expertise" }]} />
      <Section>
        <SectionHeading
          eyebrow="Expertise"
          level="h1"
          title="Practical HR expertise across recruitment coordination and onboarding support."
          intro="Focused capabilities across Talent Acquisition, Non-IT recruitment, candidate communication, documentation, onboarding, and HR operations support."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {expertiseAreas.map((area) => (
            <article className="surface-card rounded-[1.25rem] p-6" key={area.title}>
              <h2 className="font-serif text-3xl font-semibold text-ink">{area.title}</h2>
              <div className="mt-5 grid gap-4">
                <Block title="What it involves" text={area.meaning} />
                <Block title="Professional approach" text={area.approach} />
                <Block title="Typical activities" text={area.activities} />
                <Block title="Tools and channels" text={area.tools.join(", ")} />
                <Block title="Related experience" text={area.experience} />
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
