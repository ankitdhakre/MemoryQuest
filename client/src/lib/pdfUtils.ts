import { jsPDF } from "jspdf";
import "jspdf-autotable";

interface PdfContent {
  title: string;
  content: any;
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
  
  // Handle different content types
  if (content.content.type === "checklist" && Array.isArray(content.content.items)) {
    // For checklists
    doc.text("Checklist Items:", 20, 55);
    
    content.content.items.forEach((item, index) => {
      doc.text(`□ ${item}`, 25, 65 + (index * 8));
    });
  } else if (content.content.type === "template" && content.content.sections) {
    // For templates with sections
    let yPos = 55;
    
    Object.entries(content.content.sections).forEach(([section, items]: [string, any]) => {
      doc.setFontSize(14);
      doc.text(section, 20, yPos);
      yPos += 8;
      
      doc.setFontSize(12);
      if (Array.isArray(items)) {
        items.forEach((item) => {
          doc.text(`• ${item}`, 25, yPos);
          yPos += 8;
        });
      } else if (typeof items === "string") {
        doc.text(items, 25, yPos);
        yPos += 8;
      }
      
      yPos += 5; // Add spacing between sections
    });
  } else if (typeof content.content === "string") {
    // For simple string content
    const splitText = doc.splitTextToSize(content.content, 170);
    doc.text(splitText, 20, 55);
  } else {
    // For general object content
    let yPos = 55;
    
    Object.entries(content.content).forEach(([key, value]: [string, any]) => {
      if (typeof value === "string") {
        doc.setFontSize(14);
        doc.text(key, 20, yPos);
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
