import { Link } from "wouter";
import { Example } from "@/data/examples";

interface ExampleCardProps {
  example: Example;
}

const ExampleCard = ({ example }: ExampleCardProps) => {
  return (
    <div className="bg-neutral-50 dark:bg-neutral-700 rounded-lg overflow-hidden shadow-md h-full flex flex-col">
      {/* Image placeholder */}
      <div className="w-full h-48 bg-neutral-200 dark:bg-neutral-600 flex items-center justify-center">
        <span className="material-icons text-4xl text-neutral-400 dark:text-neutral-400">
          {example.icon || "business"}
        </span>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="font-heading font-medium text-lg mb-2">{example.title}</h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 flex-grow">
          {example.description}
        </p>
        <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400 mb-3">
          <span className="material-icons text-xs mr-1">business</span>
          <span>{example.organization}</span>
        </div>
        <Link 
          href={`/real-examples/${example.slug}`}
          className="text-primary-500 hover:text-primary-600 text-sm font-medium flex items-center"
        >
          <span>Read case study</span>
          <span className="material-icons text-xs ml-1">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
};

export default ExampleCard;
