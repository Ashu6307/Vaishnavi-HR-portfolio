import type { CaseStudy } from "@/types/content";

export const caseStudies: CaseStudy[] = [
  {
    slug: "end-to-end-non-it-recruitment",
    title: "End-to-End Non-IT Recruitment Workflow",
    summary:
      "A process view of a structured Non-IT hiring cycle from requirement understanding to onboarding handoff.",
    context:
      "This anonymized workflow explains how a recruitment requirement can be moved through sourcing, screening, interview coordination, documentation, and joining follow-up without exposing candidate, client, or company-confidential information.",
    sections: [
      {
        title: "Hiring context",
        items: [
          "Clarify workforce requirement and role expectations.",
          "Understand location, work mode, experience range, and screening priorities.",
          "Confirm communication ownership before sourcing begins."
        ]
      },
      {
        title: "Requirement understanding",
        items: [
          "Discuss role expectations with the hiring manager or recruitment stakeholder.",
          "Capture must-have criteria separately from flexible preferences.",
          "Translate the requirement into practical sourcing filters."
        ]
      },
      {
        title: "Job-description alignment",
        items: [
          "Review role responsibilities and candidate-fit expectations.",
          "Align job-description language with realistic search terms.",
          "Keep documentation clear for follow-up and interview coordination."
        ]
      },
      {
        title: "Candidate sourcing",
        items: [
          "Use job portals, LinkedIn, referral channels, and internal databases.",
          "Map candidate profiles against the role requirement.",
          "Maintain sourcing notes for pipeline review."
        ]
      },
      {
        title: "Screening to onboarding handoff",
        items: [
          "Screen and shortlist profiles before interview coordination.",
          "Track candidate communication, offer documentation, and joining follow-up.",
          "Support onboarding handoff with required documentation and status updates."
        ]
      }
    ],
    tools: ["LinkedIn", "Naukri", "Job Portals", "Microsoft Excel", "Candidate Databases"],
    skills: [
      "End-to-End Recruitment",
      "Candidate Screening",
      "Interview Coordination",
      "Offer Documentation",
      "Joining Follow-Up"
    ],
    learning:
      "A reliable hiring workflow depends on requirement clarity, organized candidate tracking, respectful follow-up, and accurate documentation."
  },
  {
    slug: "candidate-sourcing-market-mapping",
    title: "Candidate Sourcing and Market Mapping Process",
    summary:
      "A sourcing workflow for identifying candidate pools through role mapping, search keywords, portals, and referral channels.",
    context:
      "This anonymized process shows how market mapping can support Non-IT recruitment without publishing candidate details or confidential employer information.",
    sections: [
      {
        title: "Requirement analysis",
        items: [
          "Clarify role responsibilities, location, and industry exposure needs.",
          "Identify must-have skills and searchable profile indicators.",
          "Prepare practical search phrases for each sourcing channel."
        ]
      },
      {
        title: "Candidate persona and role mapping",
        items: [
          "Define profile type, current role titles, industry context, and likely career path.",
          "Map adjacent titles that may match the role requirement.",
          "Separate strong-fit profiles from possible-fit profiles."
        ]
      },
      {
        title: "Sourcing channels",
        items: [
          "Use LinkedIn sourcing for profile discovery and role mapping.",
          "Use Naukri and job portals for active candidate discovery.",
          "Use referral mapping and internal database search where applicable."
        ]
      },
      {
        title: "Pipeline tracking",
        items: [
          "Categorize candidates by fit, interest, communication stage, and follow-up status.",
          "Keep notes concise and recruitment-relevant.",
          "Review pipeline quality before sharing shortlists."
        ]
      }
    ],
    tools: ["LinkedIn", "Naukri", "Job Portals", "Candidate Databases", "Microsoft Excel"],
    skills: ["Market Mapping", "Candidate Sourcing", "LinkedIn Sourcing", "Naukri Sourcing"],
    learning:
      "Sourcing becomes stronger when search keywords, candidate categories, and follow-up ownership are organized before outreach scales."
  },
  {
    slug: "structured-employee-onboarding",
    title: "Structured Employee Onboarding Workflow",
    summary:
      "A practical onboarding workflow for pre-joining communication, documentation, induction, and new-joiner support.",
    context:
      "This anonymized workflow focuses on process steps that help new employees move from selection to workplace integration.",
    sections: [
      {
        title: "Pre-joining communication",
        items: [
          "Share joining expectations and required document guidance.",
          "Track pending documents without exposing private information.",
          "Maintain communication until the joining date."
        ]
      },
      {
        title: "Document and BGV coordination",
        items: [
          "Maintain a joining documentation checklist.",
          "Coordinate background verification steps where required.",
          "Update status records for pending and completed items."
        ]
      },
      {
        title: "Joining and orientation",
        items: [
          "Support offer, joining, and appointment-letter coordination.",
          "Welcome new employees through office orientation and induction support.",
          "Address new-joiner queries and support employee integration."
        ]
      },
      {
        title: "HR record updates",
        items: [
          "Update joining status and document completion records.",
          "Keep follow-up ownership visible.",
          "Support a clean handoff into regular HR operations."
        ]
      }
    ],
    tools: ["Microsoft Office", "Microsoft Excel", "HR Software"],
    skills: [
      "Employee Onboarding",
      "Joining Documentation",
      "Background Verification Coordination",
      "Induction Support"
    ],
    learning:
      "A structured onboarding experience reduces confusion for new joiners and supports cleaner HR documentation."
  },
  {
    slug: "recruitment-operations-tracking",
    title: "Recruitment Operations and Candidate Tracking Structure",
    summary:
      "A recruitment tracker structure for requirement status, candidate movement, interview status, and joining follow-up.",
    context:
      "This anonymized case study explains a process-based tracker structure without sharing candidate contact details, salaries, internal documents, or client names.",
    sections: [
      {
        title: "Requirement register",
        items: [
          "Record role title, department or function, location, work mode, and priority.",
          "Capture requirement owner and follow-up rhythm.",
          "Keep requirement notes clear and recruitment-specific."
        ]
      },
      {
        title: "Candidate profile structure",
        items: [
          "Track candidate name internally only where appropriate and secure.",
          "Record source channel, screening status, interview status, and follow-up date.",
          "Avoid unnecessary sensitive fields in shared views."
        ]
      },
      {
        title: "Status tracking",
        items: [
          "Track sourcing, screening, interview, selection, offer, joining, and documentation stages.",
          "Use consistent statuses for clear reporting.",
          "Maintain follow-up ownership to reduce pending loops."
        ]
      },
      {
        title: "Reporting structure",
        items: [
          "Summarize stage movement without exposing confidential details.",
          "Share role-level updates with stakeholders.",
          "Use structured notes to support recruitment delivery."
        ]
      }
    ],
    tools: ["Microsoft Excel", "Candidate Databases", "Microsoft Office"],
    skills: ["Recruitment Tracking", "Recruitment Documentation", "Candidate Follow-Up"],
    learning:
      "Recruitment operations become easier to manage when every requirement, candidate stage, and follow-up owner is visible in a disciplined tracker."
  }
];
