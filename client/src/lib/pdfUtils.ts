import { jsPDF } from "jspdf";
import "jspdf-autotable";

interface ChecklistContent {
  type: "checklist";
  items: string[];
}

interface TemplateContent {
  type: "template";
  sections: Record<string, string | string[]>;
}

interface GenericContent {
  [key: string]: string | number | boolean;
}

type ContentType = ChecklistContent | TemplateContent | GenericContent | string;

interface PdfContent {
  title: string;
  content: ContentType;
}

export const generatePdf = async (content: PdfContent, customFilename?: string) => {
  // Create a new PDF document
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  // Set document properties
  doc.setProperties({
    title: content.title,
    subject: "ProjectWise Project Management Resource",
    author: "ProjectWise",
    creator: "ProjectWise PDF Generator",
  });

  // Add logo and title
  doc.setFontSize(24);
  doc.setTextColor(25, 118, 210); // primary-500 color
  doc.text("ProjectWise", 20, 20);
  
  // Add horizontal line
  doc.setDrawColor(200, 200, 200);
  doc.setLineWidth(0.5);
  doc.line(20, 25, 190, 25);
  
  // Add title
  doc.setFontSize(18);
  doc.setTextColor(0, 0, 0);
  doc.text(content.title, 20, 35);
  
  // Add date
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  const date = new Date().toLocaleDateString();
  doc.text(`Generated on: ${date}`, 20, 42);
  
  // Add content
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  
  // Ensure content exists before trying to access properties
  if (!content.content) {
    // Simple fallback if content object is empty or undefined
    doc.text("No content available", 20, 55);
  } 
  // Handle different content types based on their structure
  else if (typeof content.content === "string") {
    // For simple string content
    const splitText = doc.splitTextToSize(content.content, 170);
    doc.text(splitText, 20, 55);
  }
  // Check if content is an object with a type property 
  else if (typeof content.content === "object" && "type" in content.content) {
    if (content.content.type === "checklist" && "items" in content.content) {
      // For checklists
      doc.text("Checklist Items:", 20, 55);
      
      const checklist = content.content as ChecklistContent;
      checklist.items.forEach((item: string, index: number) => {
        doc.text(`□ ${item}`, 25, 65 + (index * 8));
      });
    } 
    else if (content.content.type === "template" && "sections" in content.content) {
      // For templates with sections
      let yPos = 55;
      
      const template = content.content as TemplateContent;
      Object.entries(template.sections).forEach(([section, items]: [string, string | string[]]) => {
        doc.setFontSize(14);
        doc.text(section, 20, yPos);
        yPos += 8;
        
        doc.setFontSize(12);
        if (Array.isArray(items)) {
          items.forEach((item: string) => {
            doc.text(`• ${item}`, 25, yPos);
            yPos += 8;
          });
        } else if (typeof items === "string") {
          doc.text(items, 25, yPos);
          yPos += 8;
        }
        
        yPos += 5; // Add spacing between sections
      });
    }
  }
  // Fall back to generic object handling
  else {
    // For general object content (like template details)
    let yPos = 55;
    
    Object.entries(content.content as GenericContent).forEach(([key, value]) => {
      if (typeof value === "string") {
        doc.setFontSize(14);
        doc.text(key.charAt(0).toUpperCase() + key.slice(1), 20, yPos); // Capitalize first letter
        yPos += 7;
        
        doc.setFontSize(12);
        const splitText = doc.splitTextToSize(value, 170);
        doc.text(splitText, 20, yPos);
        yPos += splitText.length * 7 + 5;
      }
    });
  }
  
  // Add footer
  const pageCount = doc.getNumberOfPages();
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.text(`Page ${i} of ${pageCount} | ProjectWise - Project Management Guide for SMEs and Charities`, 20, 287);
  }
  
  // Save the PDF
  const filename = customFilename || `${content.title.replace(/\s+/g, '-').toLowerCase()}.pdf`;
  doc.save(filename);
  
  return filename;
};