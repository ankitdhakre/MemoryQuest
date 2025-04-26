import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Helmet } from "react-helmet";
import Breadcrumb from "@/components/layout/Breadcrumb";
import ToolTemplate from "@/components/tools/ToolTemplate";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { templates, Template } from "@/data/templates";

// Get a relevant image for each template category
const getTemplateImage = (template: Template): string => {
  // Map of category to relevant images (unchanged)
  const templateImages: Record<string, string> = {
    "Project Planning":
      "https://images.unsplash.com/photo-1460794418188-1bb7dba2720d?w=500&auto=format&fit=crop&q=60",
    "Risk Management":
      "https://images.unsplash.com/photo-1606189455660-927d4564efb5?w=500&auto=format&fit=crop&q=60",
    Communication:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&auto=format&fit=crop&q=60",
    "Quality Management":
      "https://images.unsplash.com/photo-1568430462989-44163eb1b109?w=500&auto=format&fit=crop&q=60",
    "Monitoring and Evaluation":
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60",
    "Budget Management":
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&auto=format&fit=crop&q=60",
    "Stakeholder Management":
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop&q=60",
    "Planning Templates":
      "https://images.unsplash.com/photo-1581574919402-5b7d733224d6?w=500&auto=format&fit=crop&q=60",
    "Strategic Planning":
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500&auto=format&fit=crop&q=60",
  };

  // For templates that don't match exact categories, try to match by title (unchanged)
  if (!templateImages[template.category]) {
    if (template.title.includes("Charter")) {
      return "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=500&auto=format&fit=crop&q=60"; // Project Charter
    } else if (template.title.includes("WBS")) {
      return "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&auto=format&fit=crop&q=60"; // WBS
    } else if (template.title.includes("Risk")) {
      return "https://images.unsplash.com/photo-1658197813572-67become0050?w=500&auto=format&fit=crop&q=60"; // Risk Register
    } else if (template.title.includes("Gantt")) {
      return "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop&q=60"; // Gantt Chart
    } else if (template.title.includes("Budget")) {
      return "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=500&auto=format&fit=crop&q=60"; // Budget
    }
  }

  // Default image if category and title-based matching both fail
  return (
    templateImages[template.category] ||
    "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=500&auto=format&fit=crop&q=60"
  );
};

const ToolsAndTemplates = () => {
  const [location, setLocation] = useLocation();
  const [searchParams, setSearchParams] = useState(
    new URLSearchParams(window.location.search),
  );
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    null,
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  const categories = Array.from(new Set(templates.map((t) => t.category)));

  // Filter templates based on search term and category
  const filteredTemplates = templates.filter((template) => {
    const matchesSearch =
      template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter && categoryFilter !== "all"
        ? template.category === categoryFilter
        : true;
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    // Get URL parameters
    const params = new URLSearchParams(window.location.search);
    setSearchParams(params);

    // Check if there's a template ID in the URL
    const templateId = params.get("template");
    console.log("Template ID from URL:", templateId);

    if (templateId) {
      const templateIdNum = parseInt(templateId);
      console.log("Looking for template with ID:", templateIdNum);

      // Find the template by ID
      const template = templates.find((t) => t.id === templateIdNum);
      console.log("Found template:", template);

      if (template) {
        // Successfully found the template, display it
        setSelectedTemplate(template);
        console.log("Setting selected template:", template);
      } else {
        console.log("Template not found, clearing parameter");
        // If template not found, clear the parameter
        const cleanParams = new URLSearchParams(params);
        cleanParams.delete("template");
        setLocation(`/tools-and-templates?${cleanParams.toString()}`);
      }
    } else {
      console.log("No template ID in URL, showing list view");
      // No template ID in URL, show the list view
      setSelectedTemplate(null);
    }
  }, [location, setLocation]);

  // Debug: Log when selectedTemplate changes
  useEffect(() => {
    console.log("selectedTemplate state changed:", selectedTemplate);
  }, [selectedTemplate]);

  const handleSelectCategory = (value: string) => {
    setCategoryFilter(value);
  };

  const handleSelectTemplate = (template: Template) => {
    console.log("Template selected:", template);
    const params = new URLSearchParams(searchParams);
    params.set("template", template.id.toString());
    setLocation(`/tools-and-templates?${params.toString()}`);
  };

  const closeSelectedTemplate = () => {
    console.log("Closing template view");
    const params = new URLSearchParams(searchParams);
    params.delete("template");
    setLocation(`/tools-and-templates?${params.toString()}`);
  };

  return (
    <>
      <Helmet>
        <title>Tools & Templates - ProjectWise</title>
        <meta
          name="description"
          content="Download free project management templates and resources for small businesses and charities."
        />
      </Helmet>

      <Breadcrumb
        items={[
          {
            label: "Tools & Templates",
            path: "/tools-and-templates",
            isCurrent: true,
          },
        ]}
      />

      <div className="bg-white dark:bg-neutral-800 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-center">
              Tools & Templates
            </h1>
            <p className="text-neutral-700 dark:text-neutral-300 text-center mb-10">
              Ready-to-use resources to help you implement project management
              principles in your organization.
            </p>

            {/* Debug information */}
            {process.env.NODE_ENV === "development" && (
              <div className="mb-4 p-2 bg-yellow-100 border border-yellow-300 rounded text-sm">
                <div>
                  Debug: selectedTemplate is {selectedTemplate ? "SET" : "NULL"}
                </div>
                {selectedTemplate && (
                  <div>
                    Selected template ID: {selectedTemplate.id}, Title:{" "}
                    {selectedTemplate.title}
                  </div>
                )}
              </div>
            )}

            {selectedTemplate ? (
              <div className="mb-8">
                <button
                  onClick={closeSelectedTemplate}
                  className="flex items-center text-primary-500 hover:text-primary-600 mb-4"
                >
                  <span className="material-icons mr-1">arrow_back</span>
                  <span>Back to all templates</span>
                </button>

                {/* Fallback content in case ToolTemplate fails */}
                <div className="mb-4">
                  <h2 className="font-heading font-bold text-2xl mb-2">
                    {selectedTemplate.title}
                  </h2>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {selectedTemplate.description}
                  </p>
                </div>

                {/* The actual template component */}
                <ToolTemplate template={selectedTemplate} />
              </div>
            ) : (
              <>
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                  <div className="md:flex-1 relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <span className="material-icons text-neutral-400">
                        search
                      </span>
                    </span>
                    <Input
                      type="text"
                      placeholder="Search templates..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>

                  <div className="md:w-1/3">
                    <Select
                      value={categoryFilter}
                      onValueChange={handleSelectCategory}
                    >
                      <SelectTrigger className="border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800">
                        <SelectValue placeholder="Filter by category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {filteredTemplates.length > 0 ? (
                  <div className="grid grid-cols-1 gap-6">
                    {filteredTemplates.map((template) => (
                      <div
                        key={template.id}
                        className="bg-neutral-50 dark:bg-neutral-700 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-600 hover:shadow-md transition-shadow cursor-pointer"
                        onClick={() => handleSelectTemplate(template)}
                      >
                        {/* Template image */}
                        <div className="h-40 w-full bg-neutral-200 overflow-hidden">
                          <img
                            src={getTemplateImage(template)}
                            alt={`${template.category} template`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              // Fallback image if the dynamic one fails to load
                              e.currentTarget.src =
                                "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=500&auto=format&fit=crop&q=60";
                            }}
                          />
                        </div>

                        <div className="p-5">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                              <span className="material-icons text-primary-500 mr-2">
                                {template.icon}
                              </span>
                              <h3 className="font-heading font-medium text-lg">
                                {template.title}
                              </h3>
                            </div>
                            <span className="text-sm text-neutral-500 dark:text-neutral-400">
                              {template.category}
                            </span>
                          </div>
                          <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3">
                            {template.description}
                          </p>
                          <div className="flex justify-end">
                            <button className="text-primary-500 hover:text-primary-600 flex items-center text-sm">
                              <span>For More Info Go There</span>
                              <span className="material-icons text-sm ml-1">
                                arrow_forward
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-10">
                    <span className="material-icons text-4xl text-neutral-400 mb-2">
                      search_off
                    </span>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-2">
                      No templates found matching your criteria
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-500">
                      Try different keywords or clear filters
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ToolsAndTemplates;
