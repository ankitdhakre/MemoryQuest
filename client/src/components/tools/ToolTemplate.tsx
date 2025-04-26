import { Button } from "@/components/ui/button";
import { Template } from "@/data/templates";
import { generatePdf } from "@/lib/pdfUtils";
import { useState } from "react";
import ShareButtons from "../shared/ShareButtons";

interface ToolTemplateProps {
  template: Template;
}

const ToolTemplate = ({ template }: ToolTemplateProps) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    setIsGenerating(true);
    try {
      // Generate template-specific sample content based on the template category
      const templateSpecificContent = getTemplateSpecificContent(template);
      
      // Create a properly formatted PdfContent object with TemplateContent type
      const pdfContent = {
        title: template.title,
        content: {
          type: "template" as const, // Using 'as const' to make TypeScript recognize this as a literal
          sections: {
            "Overview": template.description,
            ...templateSpecificContent
          }
        }
      };
      await generatePdf(pdfContent, `${template.title.replace(/\s+/g, '-').toLowerCase()}.pdf`);
    } catch (error) {
      console.error("Failed to generate PDF:", error);
    } finally {
      setIsGenerating(false);
    }
  };
  
  // Helper function to generate content specific to the template category
  const getTemplateSpecificContent = (template: Template) => {
    switch(template.category) {
      case "Project Planning":
        return {
          "Project Definition": [
            "Project title and description",
            "Business case and project justification",
            "Project objectives and success criteria",
            "Key stakeholders and their expectations"
          ],
          "Scope Management": [
            "Project deliverables and exclusions",
            "Constraints and assumptions",
            "Work breakdown structure (WBS)",
            "Scope change control procedures"
          ],
          "Time Management": [
            "Project schedule/timeline",
            "Key milestones and dependencies",
            "Resource allocation timeline",
            "Schedule management approach"
          ],
          "Resource Planning": [
            "Team structure and roles",
            "External resource requirements",
            "Budget allocation and financial considerations",
            "Equipment and materials needed"
          ]
        };
      
      case "Risk Management":
        return {
          "Risk Identification": [
            "Potential risks and their sources",
            "Risk categories (strategic, operational, financial, compliance)",
            "Risk assessment methodology",
            "Risk register template"
          ],
          "Risk Analysis": [
            "Probability and impact assessment",
            "Risk prioritization matrix",
            "Qualitative and quantitative analysis techniques",
            "Risk exposure calculation"
          ],
          "Risk Response Planning": [
            "Risk mitigation strategies",
            "Risk avoidance approaches",
            "Risk transfer options",
            "Risk acceptance criteria"
          ],
          "Risk Monitoring": [
            "Risk tracking mechanisms",
            "Early warning indicators",
            "Reporting structures",
            "Response effectiveness evaluation"
          ]
        };
        
      case "Communication":
        return {
          "Stakeholder Analysis": [
            "Stakeholder identification and mapping",
            "Power/interest grid",
            "Engagement level assessment",
            "Stakeholder priorities and concerns"
          ],
          "Communication Strategy": [
            "Communication objectives and success criteria",
            "Key messages by stakeholder group",
            "Communication channels and frequency",
            "Feedback mechanisms"
          ],
          "Communication Matrix": [
            "Who needs what information",
            "When information should be distributed",
            "How information will be delivered",
            "Who is responsible for communication"
          ],
          "Reporting Structure": [
            "Progress reporting format and schedule",
            "Escalation procedures",
            "Meeting cadence and participants",
            "Documentation requirements"
          ]
        };
        
      case "Quality Management":
        return {
          "Quality Planning": [
            "Quality standards and requirements",
            "Quality metrics and acceptance criteria",
            "Quality assurance approach",
            "Quality control processes"
          ],
          "Quality Assurance": [
            "Process audit schedules",
            "Standards compliance checklist",
            "Training requirements",
            "Continuous improvement mechanisms"
          ],
          "Quality Control": [
            "Testing and inspection procedures",
            "Defect tracking methodology",
            "Correction and prevention actions",
            "Verification and validation approach"
          ],
          "Quality Tools": [
            "Root cause analysis techniques",
            "Statistical quality control methods",
            "Quality reviews and inspections",
            "Documentation practices"
          ]
        };
        
      case "Monitoring and Evaluation":
        return {
          "Performance Metrics": [
            "Key performance indicators (KPIs)",
            "Data collection methodology",
            "Baseline measurements",
            "Target values and thresholds"
          ],
          "Evaluation Framework": [
            "Evaluation questions and criteria",
            "Evaluation methods and tools",
            "Timing and frequency of evaluations",
            "Roles and responsibilities"
          ],
          "Reporting System": [
            "Report types and formats",
            "Reporting schedule",
            "Information dissemination plan",
            "Data visualization approaches"
          ],
          "Learning and Adaptation": [
            "Lessons learned documentation",
            "Continuous improvement process",
            "Knowledge management system",
            "Feedback incorporation mechanisms"
          ]
        };
        
      default:
        // Default generic content if category doesn't match
        return {
          "Template Information": [
            `Category: ${template.category}`,
            `Format: ${template.format}`,
            `Size: ${template.size}`,
            `Last Updated: ${template.lastUpdated}`
          ],
          "Instructions": [
            "Download and customize this template to fit your specific needs",
            "Fill in all required sections with your project information",
            "Share with relevant stakeholders for review and input",
            "Update regularly throughout your project lifecycle"
          ]
        };
    }
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
      
      <div className="flex justify-between items-center">
        <div className="text-sm text-neutral-500 dark:text-neutral-400">
          <span className="material-icons text-xs inline-block mr-1">cloud_download</span>
          {template.downloads} downloads
        </div>
        <Button 
          onClick={handleDownload}
          disabled={isGenerating}
          className="bg-primary-500 hover:bg-primary-600 text-white"
        >
          {isGenerating ? (
            <>
              <span className="material-icons animate-spin mr-2 text-sm">refresh</span>
              Generating...
            </>
          ) : (
            <>
              <span className="material-icons mr-2 text-sm">download</span>
              Download PDF
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default ToolTemplate;
