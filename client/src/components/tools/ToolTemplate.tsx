import { Button } from "@/components/ui/button";
import { Template } from "@/data/templates";
import { useState } from "react";
import ShareButtons from "../shared/ShareButtons";

interface ToolTemplateProps {
  template: Template;
}

// Helper function to get project management information link based on template title/category
const getProjectManagementInfoLink = (template: Template): string => {
  // Key information links for project management knowledge areas
  const pmInfoLinks: Record<string, string> = {
    "Integration Management": "https://asana.com/resources/project-integration-management",
    "Scope Management": "https://kissflow.com/project/project-scope-management/",
    "Schedule Management": "https://www.projectmanager.com/blog/schedule-management-tips",
    "Cost Management": "https://www.techtarget.com/whatis/definition/cost-management",
    "Quality Management": "https://www.forecast.app/blog/what-is-project-quality-management",
    "Resource Management": "https://projectmanagement.ie/blog/resource-management/",
    "Communication Management": "https://www.projectmanagement.com/blog-post/21224/project-communication-management#_",
    "Risk Management": "https://projectmanagement.ie/blog/project-risk-management/",
    "Procurement Management": "https://tipalti.com/resources/learn/guide-to-procurement-management/",
    "Stakeholder Management": "https://projectmanagement.ie/blog/what-is-stakeholder-management/",
    "Change Management": "https://whatfix.com/change-management/",
    "Benefit Management": "https://www.apm.org.uk/resources/what-is-project-management/what-is-benefits-management-and-project-success/",
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
  } else if (template.title.includes("Quality")) {
    return "https://www.forecast.app/blog/what-is-project-quality-management";
  } else if (template.title.includes("Resource")) {
    return "https://projectmanagement.ie/blog/resource-management/";
  } else if (template.title.includes("Communication")) {
    return "https://www.projectmanagement.com/blog-post/21224/project-communication-management#_";
  } else if (template.title.includes("Risk")) {
    return "https://projectmanagement.ie/blog/project-risk-management/";
  } else if (template.title.includes("Procurement")) {
    return "https://tipalti.com/resources/learn/guide-to-procurement-management/";
  } else if (template.title.includes("Stakeholder")) {
    return "https://projectmanagement.ie/blog/what-is-stakeholder-management/";
  } else if (template.title.includes("Change")) {
    return "https://whatfix.com/change-management/";
  } else if (template.title.includes("Benefit")) {
    return "https://www.apm.org.uk/resources/what-is-project-management/what-is-benefits-management-and-project-success/";
  }
  
  // Default to general PM info if no specific match
  return "https://projectmanagement.ie/blog/what-is-project-management/";
};

// Get a relevant image for each template category
const getTemplateImage = (template: Template): string => {
  // Direct mapping to topic-specific images based on PM knowledge area
  const pmImages: Record<string, string> = {
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
    "Change Management": "https://www.istockphoto.com/photos/change-management",
    "Benefit Management": "https://ipma.world/guide-effective-benefits-management/"
  };
  
  // Category-based image matching for fallback
  const templateImages: Record<string, string> = {
    "Project Planning": "https://www.sprintzeal.com/blog/project-integration-management",
    "Risk Management": "https://www.mega.com/blog/what-is-risk-management-process", 
    "Communication": "https://www.culturemonkey.io/employee-engagement/management-communication/",
    "Quality Management": "https://www.qualitygurus.com/quality-management-what-it-is/",
    "Monitoring and Evaluation": "https://www.whizlabs.com/blog/project-scope-management/",
    "Budget Management": "https://www.migso-pcubed.com/blog/cost-management/the-4-step-cost-management-process/",
    "Stakeholder Management": "https://www.brentnalls-sa.com.au/the-importance-of-stakeholder-management",
    "Planning Templates": "https://www.sprintzeal.com/blog/project-integration-management",
    "Strategic Planning": "https://www.edureka.co/blog/project-schedule-management/"
  };
  
  // For templates that don't match exact categories, try to match by title
  if (template.title.includes("Charter") || template.title.includes("Integration")) {
    return "https://www.sprintzeal.com/blog/project-integration-management"; // Integration Management
  } else if (template.title.includes("WBS") || template.title.includes("Scope")) {
    return "https://www.whizlabs.com/blog/project-scope-management/"; // Scope Management
  } else if (template.title.includes("Schedule") || template.title.includes("Gantt")) {
    return "https://www.edureka.co/blog/project-schedule-management/"; // Schedule Management
  } else if (template.title.includes("Budget") || template.title.includes("Cost")) {
    return "https://www.migso-pcubed.com/blog/cost-management/the-4-step-cost-management-process/"; // Cost Management
  } else if (template.title.includes("Quality")) {
    return "https://www.qualitygurus.com/quality-management-what-it-is/"; // Quality Management
  } else if (template.title.includes("Resource")) {
    return "https://www.shopify.com/blog/what-is-resource-management"; // Resource Management
  } else if (template.title.includes("Communication")) {
    return "https://www.culturemonkey.io/employee-engagement/management-communication/"; // Communication Management
  } else if (template.title.includes("Risk")) {
    return "https://www.mega.com/blog/what-is-risk-management-process"; // Risk Management
  } else if (template.title.includes("Procurement")) {
    return "https://docshipper.com/guest-blogging/steps-procurement-management-optimize-processes/"; // Procurement Management
  } else if (template.title.includes("Stakeholder")) {
    return "https://www.brentnalls-sa.com.au/the-importance-of-stakeholder-management"; // Stakeholder Management
  } else if (template.title.includes("Change")) {
    return "https://www.istockphoto.com/photos/change-management"; // Change Management
  } else if (template.title.includes("Benefit")) {
    return "https://ipma.world/guide-effective-benefits-management/"; // Benefit Management
  }
  
  // Default image if all matching attempts fail
  return templateImages[template.category] || "https://www.sprintzeal.com/blog/project-integration-management";
};

const ToolTemplate = ({ template }: ToolTemplateProps) => {
  // Function to handle info link redirect
  const handleInfoAccess = () => {
    // Open the project management info resource in a new tab
    window.open(getProjectManagementInfoLink(template), '_blank');
  };

  return (
    <div className="bg-neutral-50 dark:bg-neutral-700 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-600">
      {/* PM Knowledge Image */}
      <div className="h-64 w-full bg-neutral-200 overflow-hidden">
        <img 
          src={getTemplateImage(template)} 
          alt={`${template.title} knowledge area image`} 
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback image if the dynamic one fails to load
            e.currentTarget.src = "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=600&auto=format&fit=crop&q=60";
          }}
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-heading font-medium text-xl flex items-center">
            <span className="material-icons text-primary-500 mr-2">{template.icon}</span>
            {template.title.replace('Template', 'Knowledge')}
          </h3>
          <div className="flex items-center space-x-2">
            <ShareButtons title={template.title.replace('Template', 'Knowledge')} path={`/tools-and-templates?template=${template.id}`} />
          </div>
        </div>
        
        <p className="text-neutral-700 dark:text-neutral-300 mb-4">
          {template.description.replace('template', 'resource').replace('Template', 'Resource')}
        </p>
        
        <div className="bg-neutral-100 dark:bg-neutral-600 p-4 rounded-lg mb-4">
          <h4 className="font-medium text-sm text-neutral-600 dark:text-neutral-300 mb-2">Project Management Information</h4>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3">
            This resource provides in-depth information about project management concepts and methodologies.
            Click below to learn more about these important project management principles.
          </p>
          <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400 mb-3">
            <span className="material-icons text-xs mr-1">school</span>
            <span className="truncate">{getProjectManagementInfoLink(template)}</span>
          </div>
          <div className="flex justify-center">
            <Button 
              onClick={handleInfoAccess}
              className="bg-primary-500 hover:bg-primary-600 text-white"
            >
              <span className="material-icons mr-2 text-sm">open_in_new</span>
              For More Info Go There
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolTemplate;
