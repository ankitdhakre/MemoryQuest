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
    "Stakeholder Management": "https://www.projectmanager.com/templates/stakeholder-management-plan-template"
  };
  
  // Default to a general templates collection if specific category not found
  return templateLinks[template.category] || "https://www.projectmanager.com/templates";
};

const ToolTemplate = ({ template }: ToolTemplateProps) => {
  const [isDownloading, setIsDownloading] = useState(false);

  // Function to handle external link redirect with download tracking
  const handleDownload = () => {
    setIsDownloading(true);
    
    // Simulate download tracking
    setTimeout(() => {
      // Open the external resource in a new tab
      window.open(getTemplateUrl(template), '_blank');
      setIsDownloading(false);
    }, 500);
  };

  return (
    <div className="bg-neutral-50 dark:bg-neutral-700 rounded-lg p-6 border border-neutral-200 dark:border-neutral-600">
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
        <h4 className="font-medium text-sm text-neutral-600 dark:text-neutral-300 mb-2">Template Preview</h4>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
          This template provides a comprehensive framework for {template.category.toLowerCase()} in your organization.
          Click the download button below to access professional templates from trusted project management resources.
        </p>
        <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400">
          <span className="material-icons text-xs mr-1">link</span>
          <span className="truncate">{getTemplateUrl(template)}</span>
        </div>
      </div>
      
      <div className="flex justify-end">
        <Button 
          onClick={handleDownload}
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
              Access Template
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default ToolTemplate;
