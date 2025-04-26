import { Link } from "wouter";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-primary-500 to-primary-700 dark:from-primary-700 dark:to-primary-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Project Management Made Simple
          </h1>
          <p className="text-lg md:text-xl mb-8">
            A comprehensive guide for SMEs and charities to deliver successful
            projects
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/knowledge-areas"
              className="bg-white text-primary-600 hover:bg-neutral-100 font-medium px-6 py-3 rounded-md transition-colors shadow-lg inline-block"
            >
              Explore Knowledge Areas
            </Link> */}
          {/* <Link 
              href="/tools-and-templates"
              className="bg-transparent border-2 border-white hover:bg-white/10 px-6 py-3 rounded-md transition-colors inline-block"
            >
              View Templates
            </Link> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
