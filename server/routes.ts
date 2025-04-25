import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Search API
  app.get("/api/search", async (req, res) => {
    const query = req.query.q as string;
    if (!query || query.length < 2) {
      return res.json([]);
    }

    // In a production app, this would search the database
    // For this prototype, we're returning mock search results
    const results = [
      {
        title: "Integration Management",
        excerpt: "Learn how to coordinate all elements of your project to ensure everything works together seamlessly.",
        path: "/knowledge-areas/integration-management",
        type: "knowledge_area",
        category: "Knowledge Area"
      },
      {
        title: "Project Charter Template",
        excerpt: "A document that formally authorizes the existence of a project and provides the project manager with the authority to apply organizational resources to project activities.",
        path: "/tools-and-templates?template=1",
        type: "template",
        category: "Planning Templates"
      },
      {
        title: "Community Garden Project",
        excerpt: "How a neighborhood nonprofit planned and executed a community garden with limited resources.",
        path: "/real-examples/community-garden-project",
        type: "example",
        category: "Nonprofit"
      }
    ].filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase()) || 
      item.excerpt.toLowerCase().includes(query.toLowerCase())
    );

    res.json(results);
  });

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message, source = "contact_form" } = req.body;
      
      // In a production app, we would store this in a database and/or send an email
      // For this prototype, we'll just validate and return success
      if (!email || (source === "contact_form" && (!name || !subject || !message))) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      // Create contact entry
      const contactEntry = await storage.createContactEntry({
        name: name || "Anonymous",
        email,
        subject: subject || "Message from website",
        message: message || "",
        source,
        createdAt: new Date()
      });

      res.status(201).json({ 
        message: "Contact message received", 
        id: contactEntry.id 
      });
    } catch (error) {
      console.error("Contact form submission error:", error);
      res.status(500).json({ message: "Failed to process contact submission" });
    }
  });

  // PDF generation - handled entirely on the client side with jsPDF

  const httpServer = createServer(app);

  return httpServer;
}
