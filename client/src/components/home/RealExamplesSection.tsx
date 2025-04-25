import { Link } from "wouter";
import ExampleCard from "../examples/ExampleCard";
import { examples } from "@/data/examples";

const RealExamplesSection = () => {
  // Show first 3 examples on home page
  const displayedExamples = examples.slice(0, 3);

  return (
    <section className="py-12 bg-white dark:bg-neutral-800">
      <div className="container mx-auto px-4">
        <h2 className="font-heading font-semibold text-2xl md:text-3xl mb-2 text-center">Real-World Examples</h2>
        <p className="text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto text-center mb-10">
          See how other organizations have applied these principles to achieve project success.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayedExamples.map(example => (
            <ExampleCard key={example.id} example={example} />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link 
            href="/real-examples"
            className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white font-medium px-6 py-3 rounded-md transition-colors shadow-md"
          >
            <span>View All Case Studies</span>
            <span className="material-icons ml-2">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RealExamplesSection;
