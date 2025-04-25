export interface Template {
  id: number;
  title: string;
  description: string;
  category: string;
  icon: string;
  format: string;
  size: string;
  downloads: number;
  lastUpdated: string;
  relatedKnowledgeAreas: number[];
}

export const templates: Template[] = [
  {
    id: 1,
    title: "Project Charter Template",
    description: "A comprehensive template for creating a project charter that formally authorizes the project and outlines initial requirements and stakeholder expectations.",
    category: "Planning Templates",
    icon: "description",
    format: "PDF",
    size: "256 KB",
    downloads: 2547,
    lastUpdated: "2023-09-15",
    relatedKnowledgeAreas: [1]
  },
  {
    id: 2,
    title: "Scope Statement Template",
    description: "A detailed template for defining project scope, including deliverables, acceptance criteria, exclusions, constraints, and assumptions.",
    category: "Planning Templates",
    icon: "domain",
    format: "PDF",
    size: "215 KB",
    downloads: 1982,
    lastUpdated: "2023-10-02",
    relatedKnowledgeAreas: [2]
  },
  {
    id: 3,
    title: "WBS Template",
    description: "A Work Breakdown Structure template that helps break down the project scope into manageable work packages.",
    category: "Planning Templates",
    icon: "account_tree",
    format: "PDF",
    size: "189 KB",
    downloads: 1845,
    lastUpdated: "2023-08-28",
    relatedKnowledgeAreas: [2]
  },
  {
    id: 4,
    title: "Gantt Chart Template",
    description: "A simple Gantt chart template for small projects to visualize timelines, dependencies, and milestones.",
    category: "Planning Templates",
    icon: "timeline",
    format: "PDF",
    size: "320 KB",
    downloads: 3156,
    lastUpdated: "2023-11-05",
    relatedKnowledgeAreas: [3]
  },
  {
    id: 5,
    title: "Change Request Form",
    description: "A standard form for requesting, evaluating, and approving changes to project scope, schedule, or budget.",
    category: "Monitoring & Control Templates",
    icon: "compare_arrows",
    format: "PDF",
    size: "185 KB",
    downloads: 1358,
    lastUpdated: "2023-09-20",
    relatedKnowledgeAreas: [1, 2]
  },
  {
    id: 6,
    title: "Project Status Report Template",
    description: "A template for creating clear, concise project status reports for stakeholders and team members.",
    category: "Monitoring & Control Templates",
    icon: "analytics",
    format: "PDF",
    size: "230 KB",
    downloads: 2041,
    lastUpdated: "2023-10-15",
    relatedKnowledgeAreas: [1, 7]
  },
  {
    id: 7,
    title: "Activity Duration Estimating Worksheet",
    description: "A worksheet to help estimate realistic durations for project activities based on available resources and constraints.",
    category: "Planning Templates",
    icon: "schedule",
    format: "PDF",
    size: "198 KB",
    downloads: 1476,
    lastUpdated: "2023-09-08",
    relatedKnowledgeAreas: [3]
  },
  {
    id: 8,
    title: "Budget Template",
    description: "A comprehensive template for planning and tracking project expenses, suitable for small to medium projects.",
    category: "Planning Templates",
    icon: "payments",
    format: "PDF",
    size: "245 KB",
    downloads: 2789,
    lastUpdated: "2023-11-12",
    relatedKnowledgeAreas: [4]
  },
  {
    id: 9,
    title: "Cost Variance Analysis Template",
    description: "A tool to track, analyze, and report variances between planned and actual project costs.",
    category: "Monitoring & Control Templates",
    icon: "trending_up",
    format: "PDF",
    size: "210 KB",
    downloads: 1524,
    lastUpdated: "2023-10-05",
    relatedKnowledgeAreas: [4]
  },
  {
    id: 10,
    title: "Quality Management Plan Template",
    description: "A template for creating a quality management plan that defines quality standards, metrics, and assurance activities.",
    category: "Planning Templates",
    icon: "verified",
    format: "PDF",
    size: "228 KB",
    downloads: 1342,
    lastUpdated: "2023-09-17",
    relatedKnowledgeAreas: [5]
  },
  {
    id: 11,
    title: "Quality Checklist Template",
    description: "A customizable checklist template for verifying that quality requirements have been met.",
    category: "Monitoring & Control Templates",
    icon: "checklist",
    format: "PDF",
    size: "175 KB",
    downloads: 1685,
    lastUpdated: "2023-10-28",
    relatedKnowledgeAreas: [5]
  },
  {
    id: 12,
    title: "Resource Assignment Matrix",
    description: "A matrix to clearly assign responsibilities for project activities to team members.",
    category: "Planning Templates",
    icon: "groups",
    format: "PDF",
    size: "190 KB",
    downloads: 1879,
    lastUpdated: "2023-08-15",
    relatedKnowledgeAreas: [6]
  },
  {
    id: 13,
    title: "Team Performance Assessment",
    description: "A tool for evaluating individual and team performance throughout the project lifecycle.",
    category: "Monitoring & Control Templates",
    icon: "assessment",
    format: "PDF",
    size: "205 KB",
    downloads: 1247,
    lastUpdated: "2023-11-03",
    relatedKnowledgeAreas: [6]
  },
  {
    id: 14,
    title: "Communication Plan Template",
    description: "A template for planning what, when, and how to communicate with project stakeholders.",
    category: "Planning Templates",
    icon: "forum",
    format: "PDF",
    size: "215 KB",
    downloads: 2156,
    lastUpdated: "2023-10-22",
    relatedKnowledgeAreas: [7]
  },
  {
    id: 15,
    title: "Stakeholder Communication Matrix",
    description: "A matrix to track communication requirements for different stakeholder groups.",
    category: "Planning Templates",
    icon: "people",
    format: "PDF",
    size: "198 KB",
    downloads: 1754,
    lastUpdated: "2023-09-30",
    relatedKnowledgeAreas: [7, 10]
  },
  {
    id: 16,
    title: "Risk Register Template",
    description: "A comprehensive template for identifying, assessing, and tracking project risks.",
    category: "Planning Templates",
    icon: "warning",
    format: "PDF",
    size: "235 KB",
    downloads: 2457,
    lastUpdated: "2023-11-08",
    relatedKnowledgeAreas: [8]
  },
  {
    id: 17,
    title: "Risk Impact Assessment Matrix",
    description: "A matrix for evaluating the potential impact and probability of project risks.",
    category: "Planning Templates",
    icon: "priority_high",
    format: "PDF",
    size: "185 KB",
    downloads: 1842,
    lastUpdated: "2023-10-14",
    relatedKnowledgeAreas: [8]
  },
  {
    id: 18,
    title: "Vendor Evaluation Matrix",
    description: "A structured approach to assessing and selecting vendors based on defined criteria.",
    category: "Procurement Templates",
    icon: "shopping_cart",
    format: "PDF",
    size: "210 KB",
    downloads: 1354,
    lastUpdated: "2023-09-12",
    relatedKnowledgeAreas: [9]
  },
  {
    id: 19,
    title: "Procurement Statement of Work Template",
    description: "A template for creating a clear statement of work for vendors and contractors.",
    category: "Procurement Templates",
    icon: "description",
    format: "PDF",
    size: "195 KB",
    downloads: 1156,
    lastUpdated: "2023-10-18",
    relatedKnowledgeAreas: [9]
  },
  {
    id: 20,
    title: "Stakeholder Register Template",
    description: "A template for identifying and categorizing project stakeholders and their interests.",
    category: "Planning Templates",
    icon: "people",
    format: "PDF",
    size: "205 KB",
    downloads: 1865,
    lastUpdated: "2023-11-01",
    relatedKnowledgeAreas: [10]
  },
  {
    id: 21,
    title: "Stakeholder Engagement Assessment Matrix",
    description: "A tool to assess current and desired stakeholder engagement levels throughout the project.",
    category: "Monitoring & Control Templates",
    icon: "people_alt",
    format: "PDF",
    size: "192 KB",
    downloads: 1458,
    lastUpdated: "2023-10-05",
    relatedKnowledgeAreas: [10]
  },
  {
    id: 22,
    title: "Change Impact Assessment Template",
    description: "A template for evaluating how organizational changes will impact different departments and roles.",
    category: "Change Management Templates",
    icon: "swap_horiz",
    format: "PDF",
    size: "220 KB",
    downloads: 1547,
    lastUpdated: "2023-09-22",
    relatedKnowledgeAreas: [11]
  },
  {
    id: 23,
    title: "Change Readiness Assessment Template",
    description: "A tool to evaluate how prepared an organization is to implement a proposed change.",
    category: "Change Management Templates",
    icon: "sync",
    format: "PDF",
    size: "208 KB",
    downloads: 1358,
    lastUpdated: "2023-10-30",
    relatedKnowledgeAreas: [11]
  },
  {
    id: 24,
    title: "Benefits Mapping Template",
    description: "A visual template for mapping how project outputs lead to business benefits and strategic objectives.",
    category: "Benefits Management Templates",
    icon: "trending_up",
    format: "PDF",
    size: "215 KB",
    downloads: 1254,
    lastUpdated: "2023-11-07",
    relatedKnowledgeAreas: [12]
  },
  {
    id: 25,
    title: "Benefits Tracking Template",
    description: "A template for tracking and reporting on the realization of project benefits over time.",
    category: "Benefits Management Templates",
    icon: "insights",
    format: "PDF",
    size: "198 KB",
    downloads: 1158,
    lastUpdated: "2023-10-12",
    relatedKnowledgeAreas: [12]
  }
];
