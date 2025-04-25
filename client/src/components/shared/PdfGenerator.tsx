import { Button } from "@/components/ui/button";
import { useState } from "react";
import { generatePdf } from "@/lib/pdfUtils";

interface PdfGeneratorProps {
  title: string;
  data: any;
  filename?: string;
}

const PdfGenerator = ({ title, data, filename }: PdfGeneratorProps) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGeneratePdf = async () => {
    setIsGenerating(true);
    try {
      await generatePdf({ title, content: data }, filename);
    } catch (error) {
      console.error("Failed to generate PDF:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Button
      onClick={handleGeneratePdf}
      disabled={isGenerating}
      variant="outline"
      className="flex items-center"
    >
      {isGenerating ? (
        <>
          <span className="material-icons animate-spin mr-2 text-sm">refresh</span>
          Generating PDF...
        </>
      ) : (
        <>
          <span className="material-icons mr-2 text-sm">download</span>
          Export as PDF
        </>
      )}
    </Button>
  );
};

export default PdfGenerator;
