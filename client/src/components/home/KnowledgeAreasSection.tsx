import { Link } from "wouter";
import KnowledgeAreaCard from "../knowledgeAreas/KnowledgeAreaCard";
import { knowledgeAreas } from "@/data/knowledgeAreas";

const KnowledgeAreasSection = () => {
  // Show first 6 knowledge areas on the home page
  const displayedKnowledgeAreas = knowledgeAreas.slice(0, 6);

  return (
    <section className="py-12 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <h2 className="font-heading font-semibold text-2xl md:text-3xl mb-2 text-center">
          Project Management Knowledge Areas
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto text-center mb-10">
          Explore the 12 knowledge areas of project management, each with
          practical advice tailored for small organizations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedKnowledgeAreas.map((area, index) => (
            <KnowledgeAreaCard
              key={area.id}
              knowledge={area}
              colorVariant={(index % 3) as 0 | 1 | 2}
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/knowledge-areas"
            className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white font-medium px-6 py-3 rounded-md transition-colors shadow-md"
          >
            <span>View All Knowledge Areas</span>
            <span className="material-icons ml-2">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeAreasSection;
