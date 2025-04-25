export interface Example {
  id: number;
  title: string;
  slug: string;
  organization: string;
  description: string;
  sector: string;
  icon: string;
  challenge: string;
  solution: string;
  outcome: string;
  knowledgeAreasApplied: number[];
  templatesUsed: number[];
}

export const examples: Example[] = [
  {
    id: 1,
    title: "Community Garden Project",
    slug: "community-garden-project",
    organization: "Green Community Coalition",
    description: "How a neighborhood nonprofit planned and executed a community garden with limited resources.",
    sector: "Nonprofit",
    icon: "local_florist",
    challenge: "The Green Community Coalition wanted to transform an abandoned lot into a productive community garden, but had limited funding, volunteers with varying availability, and needed to coordinate with multiple stakeholders including local government, donors, and community members.",
    solution: "The team implemented a structured project management approach focusing on scope definition, stakeholder engagement, and resource management. They created a clear project charter, developed a WBS to break down the work, established a realistic timeline accounting for volunteer availability, and implemented regular communication channels with all stakeholders.",
    outcome: "The community garden was completed within budget and only 2 weeks behind the original schedule. The project engaged 45 volunteers, secured additional funding through grants identified during the planning process, and created 20 garden plots that are now maintained by local families. The garden has become a community hub and provides fresh produce to a local food bank.",
    knowledgeAreasApplied: [1, 2, 6, 7, 10],
    templatesUsed: [1, 2, 3, 12, 15, 20]
  },
  {
    id: 2,
    title: "Retail Store Expansion",
    slug: "retail-store-expansion",
    organization: "Maple Street Boutique",
    description: "How a small retail business successfully planned and executed a store expansion project.",
    sector: "Small Business",
    icon: "store",
    challenge: "Maple Street Boutique, a successful small clothing shop, needed to expand into an adjacent retail space. The owner needed to manage construction, inventory expansion, staffing increases, and marketing while keeping the original store operational throughout the process.",
    solution: "The owner applied project management principles by developing a detailed project schedule that minimized disruption to normal business, creating a risk management plan to address potential construction delays, implementing a phased approach to the expansion, and developing a comprehensive budget with contingency funds.",
    outcome: "The expansion was completed on schedule and only 5% over budget (within the planned contingency). Sales increased by 35% in the three months following the expansion, and the business was able to add two new product lines. The project also improved the store's visibility and customer experience, leading to positive reviews and increased foot traffic.",
    knowledgeAreasApplied: [3, 4, 8, 9, 11],
    templatesUsed: [4, 8, 9, 16, 17, 18]
  },
  {
    id: 3,
    title: "Website Redesign Project",
    slug: "website-redesign-project",
    organization: "Youth Education Foundation",
    description: "How a small nonprofit managed a complete website overhaul with volunteer resources.",
    sector: "Nonprofit",
    icon: "computer",
    challenge: "The Youth Education Foundation needed to completely redesign their outdated website to better showcase their programs, improve donation capabilities, and provide resources to the communities they serve. They had a very limited budget and were relying primarily on volunteer technical expertise.",
    solution: "The foundation implemented a thorough requirements gathering process with their stakeholders, created a detailed project scope statement to prevent scope creep, developed a quality management plan with clear acceptance criteria, and established a communication schedule to keep volunteers engaged and aligned throughout the project.",
    outcome: "The new website launched with only a 3-week delay from the original timeline. Online donations increased by 75% in the first quarter after launch, and program registration became significantly more efficient. The foundation also built lasting relationships with skilled volunteers who continue to support their technical needs.",
    knowledgeAreasApplied: [2, 5, 7, 10],
    templatesUsed: [2, 5, 10, 11, 14, 15]
  },
  {
    id: 4,
    title: "Volunteer Training Program Development",
    slug: "volunteer-training-program",
    organization: "Animal Rescue Society",
    description: "How an animal shelter developed and implemented a structured volunteer training program.",
    sector: "Nonprofit",
    icon: "pets",
    challenge: "The Animal Rescue Society struggled with inconsistent volunteer performance and high turnover. They needed to develop a comprehensive training program that would standardize procedures, improve animal care quality, and increase volunteer retention.",
    solution: "The organization applied project management methodologies by conducting a needs assessment, developing clear learning objectives, creating standardized training materials, establishing a mentorship component, and implementing a phased rollout approach with feedback loops for continuous improvement.",
    outcome: "Six months after implementation, volunteer retention increased by 40%, and incidents related to improper animal handling decreased by 60%. The shelter was able to expand its operating hours due to having more reliable volunteer coverage, leading to an increase in adoptions. The program has become a model for other animal welfare organizations in the region.",
    knowledgeAreasApplied: [5, 6, 7, 12],
    templatesUsed: [10, 12, 13, 14, 24, 25]
  },
  {
    id: 5,
    title: "Charity Fundraising Gala",
    slug: "charity-fundraising-gala",
    organization: "Children's Medical Fund",
    description: "How a medical charity planned and executed their largest annual fundraising event.",
    sector: "Nonprofit",
    icon: "celebration",
    challenge: "The Children's Medical Fund needed to organize their annual gala, which accounts for 40% of their yearly funding. The event required coordination of vendors, sponsors, volunteers, entertainment, auction items, and marketing while staying within a strict budget.",
    solution: "The team implemented a comprehensive project management approach including detailed procurement management for vendors, risk management strategies for contingencies (such as weather issues for the outdoor portion), stakeholder management to engage sponsors effectively, and cost management to ensure maximum return on their investment.",
    outcome: "The gala exceeded its fundraising target by 15%, attracted 50 new donors, and reduced costs by 7% compared to the previous year. The event received positive coverage in local media, strengthening the organization's community presence. Vendor relationships were strengthened through the clear communication and professional management approach.",
    knowledgeAreasApplied: [4, 8, 9, 10],
    templatesUsed: [8, 9, 16, 17, 18, 19, 20, 21]
  },
  {
    id: 6,
    title: "Cafe Point-of-Sale System Implementation",
    slug: "cafe-pos-implementation",
    organization: "Sunrise Coffee Shop",
    description: "How a small independent cafe successfully transitioned to a new digital point-of-sale system.",
    sector: "Small Business",
    icon: "coffee",
    challenge: "Sunrise Coffee Shop needed to replace their outdated cash register system with a modern POS system that would integrate inventory management, employee scheduling, and customer loyalty programs. The transition needed to happen with minimal disruption to daily operations and required staff training.",
    solution: "The owner applied change management and project management principles by involving staff in the selection process, developing a detailed implementation schedule during low-traffic periods, creating comprehensive training materials, establishing a backup system during the transition, and planning a phased feature rollout.",
    outcome: "The new system was implemented on schedule with only one day of reduced service hours. Transaction times decreased by 25%, inventory accuracy improved to 98%, and the new customer loyalty program enrolled 200 members in the first month. Staff quickly adapted to the new system due to their early involvement in the process and comprehensive training.",
    knowledgeAreasApplied: [3, 6, 11, 12],
    templatesUsed: [4, 12, 13, 22, 23, 24, 25]
  }
];
