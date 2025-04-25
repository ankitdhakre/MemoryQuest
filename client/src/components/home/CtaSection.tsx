import { Link } from "wouter";

const CtaSection = () => {
  return (
    <section className="py-16 bg-primary-500 dark:bg-primary-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading font-semibold text-2xl md:text-3xl mb-4">Ready to improve your project management?</h2>
        <p className="max-w-2xl mx-auto mb-8 text-white/90">
          Get started with our resources today and deliver more successful projects for your organization.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/knowledge-areas"
            className="bg-white text-primary-600 hover:bg-neutral-100 font-medium px-6 py-3 rounded-md transition-colors shadow-lg inline-block"
          >
            Start with Knowledge Areas
          </Link>
          <Link 
            href="/tools-and-templates"
            className="bg-transparent border-2 border-white hover:bg-white/10 px-6 py-3 rounded-md transition-colors inline-block"
          >
            Download Free Templates
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
