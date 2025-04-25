import { useState } from "react";
import { Helmet } from "react-helmet";
import Breadcrumb from "@/components/layout/Breadcrumb";
import KnowledgeAreaCard from "@/components/knowledgeAreas/KnowledgeAreaCard";
import { knowledgeAreas } from "@/data/knowledgeAreas";
import { Input } from "@/components/ui/input";

const KnowledgeAreas = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredKnowledgeAreas = knowledgeAreas.filter(area => 
    area.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    area.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Knowledge Areas - ProjectWise</title>
        <meta name="description" content="Explore the 12 project management knowledge areas with practical advice tailored for small organizations." />
      </Helmet>

      <Breadcrumb 
        items={[{ label: "Knowledge Areas", path: "/knowledge-areas", isCurrent: true }]} 
      />

      <div className="bg-white dark:bg-neutral-800 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h1 className="font-heading font-bold text-3xl md:text-4xl mb-4">Project Management Knowledge Areas</h1>
            <p className="text-neutral-700 dark:text-neutral-300">
              Explore the 12 knowledge areas of project management, each with practical advice tailored for small organizations.
            </p>
          </div>

          <div className="max-w-md mx-auto mb-10">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="material-icons text-neutral-400">search</span>
              </span>
              <Input
                type="text"
                placeholder="Search knowledge areas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>

          {filteredKnowledgeAreas.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredKnowledgeAreas.map((area, index) => (
                <KnowledgeAreaCard 
                  key={area.id}
                  knowledge={area}
                  colorVariant={(index % 3) as 0 | 1 | 2}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <span className="material-icons text-4xl text-neutral-400 mb-2">search_off</span>
              <p className="text-neutral-600 dark:text-neutral-400 mb-2">No knowledge areas found matching "{searchTerm}"</p>
              <p className="text-sm text-neutral-500 dark:text-neutral-500">Try different keywords or browse all areas</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default KnowledgeAreas;
