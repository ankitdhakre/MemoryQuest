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
    const matchesCategory = categoryFilter && categoryFilter !== "all"
      ? template.category === categoryFilter
      : true;
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSearchParams(params);
    
    // Check if there's a template ID in the URL
    const templateId = params.get("template");
    console.log("Template ID from URL:", templateId);
    
    if (templateId) {
      const templateIdNum = parseInt(templateId);
      console.log("Looking for template with ID:", templateIdNum);
      
      const template = templates.find((t) => t.id === templateIdNum);
      console.log("Found template:", template);
      
      if (template) {
        setSelectedTemplate(template);
      } else {
        console.log("Template not found, clearing parameter");
        // If template not found, clear the parameter
        const cleanParams = new URLSearchParams(params);
        cleanParams.delete("template");
        setLocation(`/tools-and-templates?${cleanParams.toString()}`);
      }
    } else {
      setSelectedTemplate(null);
    }
  }, [location, templates, setLocation]);

  const handleSelectCategory = (value: string) => {
    setCategoryFilter(value);
  };

  const handleSelectTemplate = (template: Template) => {
    const params = new URLSearchParams(searchParams);
    params.set("template", template.id.toString());
    setLocation(`/tools-and-templates?${params.toString()}`);
  };

  const closeSelectedTemplate = () => {
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

            {selectedTemplate ? (
              <div className="mb-8">
                <button
                  onClick={closeSelectedTemplate}
                  className="flex items-center text-primary-500 hover:text-primary-600 mb-4"
                >
                  <span className="material-icons mr-1">arrow_back</span>
                  <span>Back to all templates</span>
                </button>

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
                        className="bg-neutral-50 dark:bg-neutral-700 rounded-lg p-5 border border-neutral-200 dark:border-neutral-600 hover:shadow-md transition-shadow cursor-pointer"
                        onClick={() => handleSelectTemplate(template)}
                      >
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
                            <span>View template</span>
                            <span className="material-icons text-sm ml-1">
                              arrow_forward
                            </span>
                          </button>
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
