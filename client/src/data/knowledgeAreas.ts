export interface KnowledgeArea {
  id: number;
  title: string;
  slug: string;
  icon: string;
  shortDescription: string;
  description: string;
  keyPoints: string[];
  tools: {
    title: string;
    description: string;
    templateId?: number;
  }[];
  realWorldApplication: string;
  additionalResources: {
    title: string;
    link: string;
  }[];
}

export const knowledgeAreas: KnowledgeArea[] = [
  {
    id: 1,
    title: "Integration Management",
    slug: "integration-management",
    icon: "integration_instructions",
    shortDescription: "Learn how to coordinate all elements of your project to ensure everything works together seamlessly.",
    description: "Integration Management involves unifying, consolidating, articulating, and coordinating all the basic project management processes and activities within the Project Management Process Groups. It ensures that various elements of the project are properly coordinated to achieve project objectives.",
    keyPoints: [
      "Developing the Project Charter",
      "Developing the Project Management Plan",
      "Directing and Managing Project Work",
      "Managing Project Knowledge",
      "Monitoring and Controlling Project Work",
      "Performing Integrated Change Control",
      "Closing Project or Phase"
    ],
    tools: [
      {
        title: "Project Charter Template",
        description: "A document that formally authorizes the existence of a project and provides the project manager with the authority to apply organizational resources to project activities.",
        templateId: 1
      },
      {
        title: "Change Request Form",
        description: "A formal document to request changes to project scope, schedule, or budget.",
        templateId: 5
      }
    ],
    realWorldApplication: "A small charity planning a fundraising event can use integration management to ensure all aspects of the event (venue, entertainment, ticketing, marketing) work together cohesively.",
    additionalResources: [
      {
        title: "Change Management for SMEs",
        link: "/resources/change-management-smes"
      },
      {
        title: "Project Charter Guide",
        link: "/resources/project-charter-guide"
      }
    ]
  },
  {
    id: 2,
    title: "Scope Management",
    slug: "scope-management",
    icon: "domain",
    shortDescription: "Define what is (and isn't) included in your project to prevent scope creep and stay focused.",
    description: "Scope Management includes the processes required to ensure that the project includes all the work required, and only the work required, to complete the project successfully. It's primarily concerned with defining and controlling what is and is not included in the project.",
    keyPoints: [
      "Planning Scope Management",
      "Collecting Requirements",
      "Defining Scope",
      "Creating Work Breakdown Structure (WBS)",
      "Validating Scope",
      "Controlling Scope"
    ],
    tools: [
      {
        title: "Scope Statement Template",
        description: "A document that describes the project scope, deliverables, assumptions, constraints, and acceptance criteria.",
        templateId: 2
      },
      {
        title: "WBS Template",
        description: "A hierarchical decomposition of the total scope of work to be carried out by the project team.",
        templateId: 3
      }
    ],
    realWorldApplication: "A small business redesigning their website can use scope management to clearly define what pages will be updated, what functionality will be added, and what is out of scope to prevent budget overruns.",
    additionalResources: [
      {
        title: "Requirements Gathering Guide",
        link: "/resources/requirements-gathering"
      },
      {
        title: "Scope Creep Prevention",
        link: "/resources/scope-creep-prevention"
      }
    ]
  },
  {
    id: 3,
    title: "Schedule Management",
    slug: "schedule-management",
    icon: "schedule",
    shortDescription: "Develop realistic timelines and manage resources effectively to deliver projects on time.",
    description: "Schedule Management includes the processes required to manage the timely completion of the project. It involves defining activities, sequencing them, estimating durations, developing and controlling the schedule.",
    keyPoints: [
      "Planning Schedule Management",
      "Defining Activities",
      "Sequencing Activities",
      "Estimating Activity Durations",
      "Developing the Schedule",
      "Controlling the Schedule"
    ],
    tools: [
      {
        title: "Gantt Chart Template",
        description: "A bar chart that illustrates a project schedule, showing the start and finish dates of project elements.",
        templateId: 4
      },
      {
        title: "Activity Duration Estimating Worksheet",
        description: "A worksheet to help estimate how long activities will take based on available resources and constraints.",
        templateId: 7
      }
    ],
    realWorldApplication: "A nonprofit organization planning a community clean-up event can use schedule management to ensure all pre-event activities, the event itself, and post-event tasks are properly timed and staffed.",
    additionalResources: [
      {
        title: "Time Management Techniques",
        link: "/resources/time-management-techniques"
      },
      {
        title: "Critical Path Method Simplified",
        link: "/resources/critical-path-simplified"
      }
    ]
  },
  {
    id: 4,
    title: "Cost Management",
    slug: "cost-management",
    icon: "payments",
    shortDescription: "Plan, estimate, and control project costs to complete your project within the approved budget.",
    description: "Cost Management includes the processes involved in planning, estimating, budgeting, financing, funding, managing, and controlling costs so that the project can be completed within the approved budget.",
    keyPoints: [
      "Planning Cost Management",
      "Estimating Costs",
      "Determining Budget",
      "Controlling Costs"
    ],
    tools: [
      {
        title: "Budget Template",
        description: "A structured document for planning and tracking project expenses.",
        templateId: 8
      },
      {
        title: "Cost Variance Analysis Template",
        description: "A tool to track and analyze differences between planned and actual costs.",
        templateId: 9
      }
    ],
    realWorldApplication: "A small retail business opening a new location can use cost management to establish a realistic budget for renovations, inventory, staffing, and marketing.",
    additionalResources: [
      {
        title: "Cost Estimation Techniques",
        link: "/resources/cost-estimation"
      },
      {
        title: "Budget Management for Non-profits",
        link: "/resources/nonprofit-budget-management"
      }
    ]
  },
  {
    id: 5,
    title: "Quality Management",
    slug: "quality-management",
    icon: "verified",
    shortDescription: "Ensure your project meets the required quality standards and satisfies stakeholder expectations.",
    description: "Quality Management includes the processes for incorporating the organization's quality policy regarding planning, managing, and controlling project and product quality requirements to meet stakeholders' expectations.",
    keyPoints: [
      "Planning Quality Management",
      "Managing Quality",
      "Controlling Quality"
    ],
    tools: [
      {
        title: "Quality Management Plan Template",
        description: "A document outlining how the project team will implement quality policies.",
        templateId: 10
      },
      {
        title: "Quality Checklist Template",
        description: "A structured tool to verify that a set of required steps has been performed.",
        templateId: 11
      }
    ],
    realWorldApplication: "A charity developing a new program can use quality management to establish clear metrics for success and procedures to ensure consistent service delivery.",
    additionalResources: [
      {
        title: "Quality Assurance vs. Quality Control",
        link: "/resources/qa-vs-qc"
      },
      {
        title: "Customer Satisfaction Measurement",
        link: "/resources/customer-satisfaction"
      }
    ]
  },
  {
    id: 6,
    title: "Resource Management",
    slug: "resource-management",
    icon: "groups",
    shortDescription: "Identify, allocate, and manage the people and materials needed for project success.",
    description: "Resource Management includes the processes to identify, acquire, and manage the resources needed for the successful completion of the project. It helps ensure that the right resources are available to the project manager and project team at the right time and place.",
    keyPoints: [
      "Planning Resource Management",
      "Estimating Activity Resources",
      "Acquiring Resources",
      "Developing Team",
      "Managing Team",
      "Controlling Resources"
    ],
    tools: [
      {
        title: "Resource Assignment Matrix",
        description: "A chart that shows the relationship between activities/tasks and project team members.",
        templateId: 12
      },
      {
        title: "Team Performance Assessment",
        description: "A tool to evaluate individual and team performance on the project.",
        templateId: 13
      }
    ],
    realWorldApplication: "A small technology company developing a new product can use resource management to allocate developers, designers, and testers effectively across project phases.",
    additionalResources: [
      {
        title: "Volunteer Management Guide",
        link: "/resources/volunteer-management"
      },
      {
        title: "Resource Leveling Techniques",
        link: "/resources/resource-leveling"
      }
    ]
  },
  {
    id: 7,
    title: "Communication Management",
    slug: "communication-management",
    icon: "forum",
    shortDescription: "Develop effective communication plans to ensure all stakeholders stay informed and engaged.",
    description: "Communication Management includes the processes required to ensure timely and appropriate planning, collection, creation, distribution, storage, retrieval, management, control, monitoring, and ultimate disposition of project information.",
    keyPoints: [
      "Planning Communication Management",
      "Managing Communications",
      "Monitoring Communications"
    ],
    tools: [
      {
        title: "Communication Plan Template",
        description: "A document that defines the communication requirements and approaches for the project.",
        templateId: 14
      },
      {
        title: "Stakeholder Communication Matrix",
        description: "A tool to track what information needs to be communicated to which stakeholders.",
        templateId: 15
      }
    ],
    realWorldApplication: "A nonprofit organization launching a community initiative can use communication management to ensure donors, volunteers, beneficiaries, and the public receive appropriate information.",
    additionalResources: [
      {
        title: "Effective Meeting Facilitation",
        link: "/resources/meeting-facilitation"
      },
      {
        title: "Crisis Communication Planning",
        link: "/resources/crisis-communication"
      }
    ]
  },
  {
    id: 8,
    title: "Risk Management",
    slug: "risk-management",
    icon: "warning",
    shortDescription: "Identify, analyze, and respond to project risks to minimize threats and maximize opportunities.",
    description: "Risk Management includes the processes of conducting risk management planning, identification, analysis, response planning, response implementation, and monitoring risk on a project. The objective is to increase the probability and/or impact of positive risks and decrease the probability and/or impact of negative risks.",
    keyPoints: [
      "Planning Risk Management",
      "Identifying Risks",
      "Performing Qualitative Risk Analysis",
      "Performing Quantitative Risk Analysis",
      "Planning Risk Responses",
      "Implementing Risk Responses",
      "Monitoring Risks"
    ],
    tools: [
      {
        title: "Risk Register Template",
        description: "A document where information about identified risks is recorded.",
        templateId: 16
      },
      {
        title: "Risk Impact Assessment Matrix",
        description: "A tool to evaluate the potential impact of identified risks.",
        templateId: 17
      }
    ],
    realWorldApplication: "A small event planning business can use risk management to identify and mitigate potential issues such as weather disruptions, vendor cancellations, or lower-than-expected attendance.",
    additionalResources: [
      {
        title: "Practical Risk Response Strategies",
        link: "/resources/risk-response-strategies"
      },
      {
        title: "Risk Management on a Budget",
        link: "/resources/risk-management-budget"
      }
    ]
  },
  {
    id: 9,
    title: "Procurement Management",
    slug: "procurement-management",
    icon: "shopping_cart",
    shortDescription: "Plan and manage purchases of products or services from external vendors to meet project needs.",
    description: "Procurement Management includes the processes necessary to purchase or acquire products, services, or results needed from outside the project team. It includes contract management and change control processes required to develop and administer contracts or purchase orders.",
    keyPoints: [
      "Planning Procurement Management",
      "Conducting Procurements",
      "Controlling Procurements"
    ],
    tools: [
      {
        title: "Vendor Evaluation Matrix",
        description: "A structured approach to assessing and selecting vendors.",
        templateId: 18
      },
      {
        title: "Procurement Statement of Work Template",
        description: "A document that describes the work to be performed by a vendor.",
        templateId: 19
      }
    ],
    realWorldApplication: "A charity organizing a fundraising gala can use procurement management to select and manage vendors for catering, venue, entertainment, and decorations.",
    additionalResources: [
      {
        title: "Contract Negotiation Guide",
        link: "/resources/contract-negotiation"
      },
      {
        title: "Ethical Procurement Practices",
        link: "/resources/ethical-procurement"
      }
    ]
  },
  {
    id: 10,
    title: "Stakeholder Management",
    slug: "stakeholder-management",
    icon: "people",
    shortDescription: "Identify and engage with people affected by your project to ensure their needs are addressed.",
    description: "Stakeholder Management includes the processes required to identify the people, groups, or organizations that could impact or be impacted by the project, analyze stakeholder expectations and their impact on the project, and develop appropriate management strategies for effectively engaging stakeholders in project decisions and execution.",
    keyPoints: [
      "Identifying Stakeholders",
      "Planning Stakeholder Engagement",
      "Managing Stakeholder Engagement",
      "Monitoring Stakeholder Engagement"
    ],
    tools: [
      {
        title: "Stakeholder Register Template",
        description: "A document that lists and categorizes project stakeholders and their interests.",
        templateId: 20
      },
      {
        title: "Stakeholder Engagement Assessment Matrix",
        description: "A tool to assess current and desired stakeholder engagement levels.",
        templateId: 21
      }
    ],
    realWorldApplication: "A small business implementing a new customer service system can use stakeholder management to ensure customers, employees, and management are all engaged appropriately during the transition.",
    additionalResources: [
      {
        title: "Stakeholder Communication Strategies",
        link: "/resources/stakeholder-communication"
      },
      {
        title: "Managing Difficult Stakeholders",
        link: "/resources/difficult-stakeholders"
      }
    ]
  },
  {
    id: 11,
    title: "Change Management",
    slug: "change-management",
    icon: "swap_horiz",
    shortDescription: "Implement structured approaches to manage transitions and organizational changes effectively.",
    description: "Change Management involves the processes and tools for managing the people side of change to achieve required outcomes. It focuses on helping individuals and teams transition from their current state to their future state as a result of a project or initiative.",
    keyPoints: [
      "Creating a Change Management Strategy",
      "Assessing Change Impact and Readiness",
      "Developing Change Management Plans",
      "Executing Change Management Activities",
      "Measuring Change Management Effectiveness"
    ],
    tools: [
      {
        title: "Change Impact Assessment Template",
        description: "A tool to assess how a change will affect different parts of an organization.",
        templateId: 22
      },
      {
        title: "Change Readiness Assessment Template",
        description: "A tool to evaluate how prepared an organization is for a proposed change.",
        templateId: 23
      }
    ],
    realWorldApplication: "A nonprofit merging with another organization can use change management to help staff adjust to new roles, processes, and cultural shifts.",
    additionalResources: [
      {
        title: "Change Communication Planning",
        link: "/resources/change-communication"
      },
      {
        title: "Resistance Management Guide",
        link: "/resources/resistance-management"
      }
    ]
  },
  {
    id: 12,
    title: "Benefits Management",
    slug: "benefits-management",
    icon: "trending_up",
    shortDescription: "Identify, optimize, and track the benefits that result from implementing projects.",
    description: "Benefits Management ensures that benefits are identified, defined, planned, tracked, and realized from projects and programs. It focuses on ensuring that projects deliver the intended business benefits and value to the organization.",
    keyPoints: [
      "Identifying Benefits",
      "Developing Benefits Management Plan",
      "Executing Benefits Management Plan",
      "Measuring and Evaluating Benefits",
      "Sustaining Benefits"
    ],
    tools: [
      {
        title: "Benefits Mapping Template",
        description: "A visual representation of how project outputs lead to business benefits.",
        templateId: 24
      },
      {
        title: "Benefits Tracking Template",
        description: "A tool to track and report on the realization of benefits over time.",
        templateId: 25
      }
    ],
    realWorldApplication: "A small manufacturing company investing in new equipment can use benefits management to track improvements in production efficiency, product quality, and cost savings.",
    additionalResources: [
      {
        title: "Benefits Realization Guide",
        link: "/resources/benefits-realization"
      },
      {
        title: "Measuring Project ROI",
        link: "/resources/measuring-roi"
      }
    ]
  }
];
