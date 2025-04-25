import { Link } from "wouter";
import { KnowledgeArea } from "@/data/knowledgeAreas";

type ColorVariant = 0 | 1 | 2;

interface KnowledgeAreaCardProps {
  knowledge: KnowledgeArea;
  colorVariant: ColorVariant;
}

const KnowledgeAreaCard = ({ knowledge, colorVariant }: KnowledgeAreaCardProps) => {
  const getColorClasses = (variant: ColorVariant) => {
    switch (variant) {
      case 0:
        return {
          bar: "bg-primary-500",
          icon: "text-primary-500",
          text: "text-primary-500"
        };
      case 1:
        return {
          bar: "bg-secondary-500",
          icon: "text-secondary-500",
          text: "text-secondary-500"
        };
      case 2:
        return {
          bar: "bg-accent-500",
          icon: "text-accent-500",
          text: "text-accent-500"
        };
    }
  };

  const colors = getColorClasses(colorVariant);

  return (
    <Link 
      href={`/knowledge-areas/${knowledge.slug}`}
      className="bg-white dark:bg-neutral-800 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-neutral-200 dark:border-neutral-700 flex flex-col"
    >
      <div className={`h-3 ${colors.bar}`}></div>
      <div className="p-6 flex-grow">
        <div className="flex items-center mb-4">
          <span className={`material-icons ${colors.icon} mr-3`}>{knowledge.icon}</span>
          <h3 className="font-heading font-medium text-xl">{knowledge.title}</h3>
        </div>
        <p className="text-neutral-600 dark:text-neutral-400 mb-4">
          {knowledge.shortDescription}
        </p>
        <div className={`flex items-center ${colors.text} mt-auto`}>
          <span className="text-sm font-medium">Explore area</span>
          <span className="material-icons text-sm ml-1">arrow_forward</span>
        </div>
      </div>
    </Link>
  );
};

export default KnowledgeAreaCard;
