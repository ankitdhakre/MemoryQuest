import { Link } from "wouter";
import { templates } from "@/data/templates";

const ToolsSection = () => {
  // Group templates by category
  const templateCategories = templates.reduce((acc, template) => {
    if (!acc[template.category]) {
      acc[template.category] = [];
    }
    acc[template.category].push(template);
    return acc;
  }, {} as Record<string, typeof templates>);

  // Get the first two categories for display
  const displayCategories = Object.entries(templateCategories).slice(0, 2);

  return (
    <section className="py-12 bg-white dark:bg-neutral-800">
      <div className="container mx-auto px-4">
        <h2 className="font-heading font-semibold text-2xl md:text-3xl mb-2 text-center">Tools & Templates</h2>
        <p className="text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto text-center mb-10">
          Ready-to-use resources to help you implement project management principles in your organization.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayCategories.map(([category, categoryTemplates], index) => (
            <div key={category} className="bg-neutral-50 dark:bg-neutral-700 rounded-lg p-6 border border-neutral-200 dark:border-neutral-600">
              <h3 className="font-heading font-medium text-xl mb-4 flex items-center">
                <span className={`material-icons ${index === 0 ? 'text-primary-500' : 'text-secondary-500'} mr-2`}>
                  {index === 0 ? 'description' : 'analytics'}
                </span>
                {category}
              </h3>
              <ul className="space-y-3">
                {categoryTemplates.slice(0, 4).map(template => (
                  <li key={template.id} className="flex items-center justify-between">
                    <span className="text-neutral-800 dark:text-neutral-200">{template.title}</span>
                    <Link 
                      href={`/tools-and-templates?template=${template.id}`}
                      className="text-primary-500 hover:text-primary-600 flex items-center"
                    >
                      <span className="material-icons text-sm">download</span>
                      <span className="ml-1 text-sm">PDF</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link 
            href="/tools-and-templates"
            className="inline-flex items-center bg-secondary-500 hover:bg-secondary-600 text-white font-medium px-6 py-3 rounded-md transition-colors shadow-md"
          >
            <span>Browse All Templates</span>
            <span className="material-icons ml-2">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
