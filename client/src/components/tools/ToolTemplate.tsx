import { Button } from "@/components/ui/button";
import { Template } from "@/data/templates";
import { useState } from "react";
import ShareButtons from "../shared/ShareButtons";

interface ToolTemplateProps {
  template: Template;
}

// Helper function to get template URL based on category
const getTemplateUrl = (template: Template): string => {
  // Map of category to real-world template resources
  const templateLinks: Record<string, string> = {
    "Project Planning": "https://www.projectmanagement.com/contentPages/downloadTemplate.cfm?ID=327&thisPageURL=/templates/327/project-management-plan-template",
    "Risk Management": "https://www.smartsheet.com/content/risk-management-templates",
    "Communication": "https://asana.com/templates/for/communications",
    "Quality Management": "https://www.projectmanager.com/templates/quality-management-plan-template",
    "Monitoring and Evaluation": "https://www.betterevaluation.org/resources/template/monitoring_evaluation_plan_template",
    "Budget Management": "https://www.template.net/business/budget-templates/project-budget/",
    "Stakeholder Management": "https://www.projectmanager.com/templates/stakeholder-management-plan-template",
    "Planning Templates": "https://www.projectmanager.com/templates/project-planning-templates"
  };
  
  // Default to a general templates collection if specific category not found
  return templateLinks[template.category] || "https://www.projectmanager.com/templates";
};

// Helper function to get project management information link based on template title/category
const getProjectManagementInfoLink = (template: Template): string => {
  // Key information links for project management knowledge areas
  const pmInfoLinks: Record<string, string> = {
    "Integration Management": "https://www.sprintzeal.com/blog/project-integration-management",
    "Scope Management": "https://www.whizlabs.com/blog/project-scope-management/",
    "Schedule Management": "https://www.edureka.co/blog/project-schedule-management/",
    "Cost Management": "https://www.migso-pcubed.com/blog/cost-management/the-4-step-cost-management-process/",
    "Quality Management": "https://www.qualitygurus.com/quality-management-what-it-is/",
    "Resource Management": "https://www.shopify.com/blog/what-is-resource-management",
    "Communication Management": "https://www.culturemonkey.io/employee-engagement/management-communication/",
    "Risk Management": "https://www.mega.com/blog/what-is-risk-management-process",
    "Procurement Management": "https://docshipper.com/guest-blogging/steps-procurement-management-optimize-processes/",
    "Stakeholder Management": "https://www.brentnalls-sa.com.au/the-importance-of-stakeholder-management",
    "Change Management": "https://whatfix.com/change-management/",
    "Benefit Management": "https://ipma.world/guide-effective-benefits-management/",
    "Project Management": "https://projectmanagement.ie/blog/what-is-project-management/"
  };
  
  // Try to match based on title keywords
  if (template.title.includes("Charter")) {
    return "https://asana.com/resources/project-integration-management";
  } else if (template.title.includes("WBS") || template.title.includes("Scope")) {
    return "https://kissflow.com/project/project-scope-management/";
  } else if (template.title.includes("Schedule") || template.title.includes("Gantt")) {
    return "https://www.projectmanager.com/blog/schedule-management-tips";
  } else if (template.title.includes("Budget") || template.title.includes("Cost")) {
    return "https://www.techtarget.com/whatis/definition/cost-management";
  } else if (template.title.includes("Risk")) {
    return "https://projectmanagement.ie/blog/project-risk-management/";
  } else if (template.title.includes("Stakeholder")) {
    return "https://projectmanagement.ie/blog/what-is-stakeholder-management/";
  }
  
  // Default to general PM info if no specific match
  return "https://projectmanagement.ie/blog/what-is-project-management/";
};

// Get a relevant image for each template category
const getTemplateImage = (template: Template): string => {
  // Map of category to relevant images
  const templateImages: Record<string, string> = {
    "Project Planning": "https://images.unsplash.com/photo-1460794418188-1bb7dba2720d?w=600&auto=format&fit=crop&q=60",
    "Risk Management": "https://images.unsplash.com/photo-1606189455660-927d4564efb5?w=600&auto=format&fit=crop&q=60", 
    "Communication": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&auto=format&fit=crop&q=60",
    "Quality Management": "https://images.unsplash.com/photo-1568430462989-44163eb1b109?w=600&auto=format&fit=crop&q=60",
    "Monitoring and Evaluation": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=60",
    "Budget Management": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&auto=format&fit=crop&q=60",
    "Stakeholder Management": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=60",
    "Planning Templates": "https://images.unsplash.com/photo-1581574919402-5b7d733224d6?w=600&auto=format&fit=crop&q=60",
    "Strategic Planning": "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&auto=format&fit=crop&q=60"
  };
  
  // For templates that don't match exact categories, try to match by title
  if (!templateImages[template.category]) {
    if (template.title.includes("Charter")) {
      return "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&auto=format&fit=crop&q=60"; // Project Charter
    } else if (template.title.includes("WBS")) {
      return "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&auto=format&fit=crop&q=60"; // WBS
    } else if (template.title.includes("Risk")) {
      return "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=600&auto=format&fit=crop&q=60"; // Risk Register
    } else if (template.title.includes("Gantt")) {
      return "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=600&auto=format&fit=crop&q=60"; // Gantt Chart
    } else if (template.title.includes("Budget")) {
      return "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=600&auto=format&fit=crop&q=60"; // Budget
    }
  }
  
  // Default image if category and title-based matching both fail
  return templateImages[template.category] || "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=600&auto=format&fit=crop&q=60";
};

const ToolTemplate = ({ template }: ToolTemplateProps) => {
  const [isDownloading, setIsDownloading] = useState(false);

  // Function to handle external link redirect for templates
  const handleTemplateAccess = () => {
    setIsDownloading(true);
    
    // Simulate tracking
    setTimeout(() => {
      // Open the external resource in a new tab
      window.open(getTemplateUrl(template), '_blank');
      setIsDownloading(false);
    }, 500);
  };
  
  // Function to handle info link redirect
  const handleInfoAccess = () => {
    // Open the project management info resource in a new tab
    window.open(getProjectManagementInfoLink(template), '_blank');
  };

  return (
    <div className="bg-neutral-50 dark:bg-neutral-700 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-600">
      {/* Template image */}
      <div className="h-64 w-full bg-neutral-200 overflow-hidden">
        <img 
          src={getTemplateImage(template)} 
          alt={`${template.category} template image`} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-heading font-medium text-xl flex items-center">
            <span className="material-icons text-primary-500 mr-2">{template.icon}</span>
            {template.title}
          </h3>
          <div className="flex items-center space-x-2">
            <ShareButtons title={template.title} path={`/tools-and-templates?template=${template.id}`} />
          </div>
        </div>
        
        <p className="text-neutral-700 dark:text-neutral-300 mb-4">
          {template.description}
        </p>
        
        <div className="mb-4">
          <h4 className="font-medium text-sm text-neutral-500 dark:text-neutral-400 uppercase mb-2">Details</h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <span className="font-medium">Category:</span> {template.category}
            </div>
            <div>
              <span className="font-medium">Format:</span> {template.format}
            </div>
            <div>
              <span className="font-medium">Size:</span> {template.size}
            </div>
            <div>
              <span className="font-medium">Last Updated:</span> {template.lastUpdated}
            </div>
          </div>
        </div>
        
        <div className="bg-neutral-100 dark:bg-neutral-600 p-4 rounded-lg mb-4">
          <h4 className="font-medium text-sm text-neutral-600 dark:text-neutral-300 mb-2">Project Management Knowledge</h4>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
            This template relates to important project management concepts and methodologies.
            Click below to learn more about the project management principles behind this template.
          </p>
          <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400 mb-2">
            <span className="material-icons text-xs mr-1">school</span>
            <span className="truncate">{getProjectManagementInfoLink(template)}</span>
          </div>
          <button 
            onClick={handleInfoAccess}
            className="text-primary-500 hover:text-primary-600 text-sm flex items-center mt-2"
          >
            <span className="material-icons mr-1 text-sm">info</span>
            Learn about Project Management
          </button>
        </div>
        
        <div className="bg-neutral-100 dark:bg-neutral-600 p-4 rounded-lg mb-4">
          <h4 className="font-medium text-sm text-neutral-600 dark:text-neutral-300 mb-2">Template Resource</h4>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
            This template provides a comprehensive framework for {template.category.toLowerCase()} in your organization.
            For more information on how to use and implement this template, click the link below.
          </p>
          <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400">
            <span className="material-icons text-xs mr-1">link</span>
            <span className="truncate">{getTemplateUrl(template)}</span>
          </div>
        </div>
        
        <div className="flex justify-end">
          <Button 
            onClick={handleTemplateAccess}
            disabled={isDownloading}
            className="bg-primary-500 hover:bg-primary-600 text-white"
          >
            {isDownloading ? (
              <>
                <span className="material-icons animate-spin mr-2 text-sm">refresh</span>
                Redirecting...
              </>
            ) : (
              <>
                <span className="material-icons mr-2 text-sm">open_in_new</span>
                For More Info Go There
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ToolTemplate;
