import type { Resource } from "@/types/content";

export const resources: Resource[] = [
  {
    slug: "candidate-screening-checklist",
    title: "Candidate Screening Checklist",
    purpose: "Keep preliminary screening consistent before shortlisting.",
    whenToUse: "Use before sending profiles to a hiring manager or recruitment stakeholder.",
    suggestedFields: [
      "Role requirement",
      "Candidate source",
      "Relevant experience",
      "Location fit",
      "Notice period",
      "Communication notes",
      "Screening status"
    ],
    checklist: [
      "Confirm role match against must-have criteria.",
      "Review candidate profile for relevant industry or functional exposure.",
      "Check location and work-mode alignment.",
      "Capture key candidate communication notes.",
      "Mark shortlisted, hold, or not aligned with a clear reason."
    ],
    practicalNotes: [
      "Keep notes professional and role-relevant.",
      "Use consistent status labels across the tracker."
    ],
    confidentialityNote:
      "Do not share candidate contact details, salary information, or private notes outside approved recruitment channels."
  },
  {
    slug: "interview-evaluation-scorecard",
    title: "Interview Evaluation Scorecard",
    purpose: "Capture interview observations in a consistent review format.",
    whenToUse: "Use during preliminary interviews or after a candidate discussion.",
    suggestedFields: [
      "Role",
      "Candidate profile reference",
      "Communication",
      "Role understanding",
      "Experience relevance",
      "Availability",
      "Interviewer notes",
      "Next step"
    ],
    checklist: [
      "Assess candidate communication with role context.",
      "Capture job-readiness observations.",
      "Record areas that need hiring-manager review.",
      "Document next-step recommendation.",
      "Avoid subjective or personal comments unrelated to the role."
    ],
    practicalNotes: [
      "Use clear language that can be understood by another recruiter.",
      "Separate observations from final hiring decisions."
    ],
    confidentialityNote:
      "Store interview feedback only in approved recruitment records and share it on a need-to-know basis."
  },
  {
    slug: "new-employee-onboarding-checklist",
    title: "New Employee Onboarding Checklist",
    purpose: "Guide a smoother joining and induction experience.",
    whenToUse: "Use from pre-joining communication through first-day orientation.",
    suggestedFields: [
      "New-joiner name",
      "Joining date",
      "Documents pending",
      "BGV status",
      "Orientation status",
      "Induction support",
      "Query status"
    ],
    checklist: [
      "Send pre-joining document guidance.",
      "Track completed and pending documentation.",
      "Coordinate background verification where applicable.",
      "Plan office orientation and induction support.",
      "Record new-joiner queries and follow-up status."
    ],
    practicalNotes: [
      "Make document status easy to review.",
      "Keep communication calm and specific for new employees."
    ],
    confidentialityNote:
      "Protect identity documents, BGV information, and employee records from unauthorized access."
  },
  {
    slug: "hiring-requirement-intake-checklist",
    title: "Hiring Requirement Intake Checklist",
    purpose: "Clarify workforce requirements before recruitment begins.",
    whenToUse: "Use when a new role is opened or an existing requirement changes.",
    suggestedFields: [
      "Role title",
      "Department or function",
      "Location",
      "Work mode",
      "Must-have criteria",
      "Preferred criteria",
      "Interview process",
      "Stakeholder owner"
    ],
    checklist: [
      "Confirm role expectations and responsibilities.",
      "Separate must-have criteria from preferences.",
      "Clarify interview stages and decision owners.",
      "Align job-description language before publishing or sourcing.",
      "Record priority and follow-up cadence."
    ],
    practicalNotes: [
      "Better intake reduces sourcing mismatch.",
      "Review criteria if the pipeline quality is low."
    ],
    confidentialityNote:
      "Do not publish confidential company, client, or compensation information in public job descriptions."
  },
  {
    slug: "candidate-follow-up-tracker-structure",
    title: "Candidate Follow-Up Tracker Structure",
    purpose: "Maintain visibility across candidate communication and pending actions.",
    whenToUse: "Use throughout sourcing, screening, interview scheduling, and joining follow-up.",
    suggestedFields: [
      "Candidate reference",
      "Role",
      "Source",
      "Current status",
      "Last contact date",
      "Next follow-up date",
      "Owner",
      "Notes"
    ],
    checklist: [
      "Record the current candidate stage.",
      "Update last contact date after every communication.",
      "Assign ownership for pending follow-ups.",
      "Keep notes short and professional.",
      "Review stale follow-ups regularly."
    ],
    practicalNotes: [
      "Use status labels that are easy to filter.",
      "Avoid duplicate entries for the same candidate and role."
    ],
    confidentialityNote:
      "Keep tracker access limited and avoid sharing candidate personal data in unapproved formats."
  },
  {
    slug: "offer-and-joining-status-checklist",
    title: "Offer and Joining Status Checklist",
    purpose: "Track offer documentation, joining communication, and document completion.",
    whenToUse: "Use after selection coordination and before employee onboarding begins.",
    suggestedFields: [
      "Role",
      "Offer status",
      "Letter of Intent status",
      "Appointment letter status",
      "Joining date",
      "Documentation status",
      "BGV status",
      "Pending follow-up"
    ],
    checklist: [
      "Confirm selected candidate status.",
      "Track offer-letter or Letter of Intent preparation.",
      "Coordinate joining documents.",
      "Update background-verification status where applicable.",
      "Confirm joining communication and onboarding handoff."
    ],
    practicalNotes: [
      "Separate offer status from joining status.",
      "Document pending actions before the joining date."
    ],
    confidentialityNote:
      "Offer, appointment, BGV, and joining records should remain confidential and shared only with authorized stakeholders."
  }
];
