import type { Education, Project } from "@/types/content";

export const education: Education[] = [
  {
    institution: "GNIOT Institute of Management Studies",
    qualification: "Post Graduate Diploma in Management",
    specialization: "Human Resources",
    dateRange: "July 2023 to April 2025",
    location: "Noida, Uttar Pradesh, India",
    relevantAreas: [
      "Human Resource Management",
      "Recruitment and Selection",
      "Organizational Behaviour",
      "Talent Management",
      "Business Communication",
      "Management Principles"
    ]
  },
  {
    institution: "Mahatma Gandhi Kashi Vidyapith, Varanasi",
    qualification: "Bachelor of Commerce",
    specialization: "Business and Commerce",
    dateRange: "July 2020 to July 2023"
  }
];

export const academicProject: Project = {
  title: "Live Project on Marketing Strategy",
  date: "July 2024",
  overview:
    "An academic live project focused on observing marketing strategy at a high level, understanding market context, organizing research notes, and presenting professional findings.",
  sections: [
    {
      title: "Project overview",
      description:
        "Explored how marketing strategy can be understood through market context, customer-facing positioning, and structured observation."
    },
    {
      title: "Market understanding",
      description:
        "Focused on identifying the broader market environment and translating observations into clear discussion points."
    },
    {
      title: "Research approach",
      description:
        "Organized project learning through practical research, note-taking, and clear synthesis."
    },
    {
      title: "Presentation and reporting",
      description:
        "Prepared professional project observations in a format suitable for academic and business communication."
    },
    {
      title: "Key professional learning",
      description:
        "Strengthened business communication, analytical thinking, presentation, and documentation habits relevant to HR work."
    }
  ]
};
