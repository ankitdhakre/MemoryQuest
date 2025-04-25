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
      await generatePdf(template);
    } catch (error) {
      console.error("Failed to generate PDF:", error);
    } finally {
      setIsGenerating(false);
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
