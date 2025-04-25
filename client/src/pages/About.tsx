import { Helmet } from "react-helmet";
import Breadcrumb from "@/components/layout/Breadcrumb";
import ContactForm from "@/components/shared/ContactForm";
import ShareButtons from "@/components/shared/ShareButtons";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About - ProjectWise</title>
        <meta name="description" content="Learn about the author of ProjectWise and the purpose behind this project management resource." />
      </Helmet>

      <Breadcrumb 
        items={[{ label: "About", path: "/about", isCurrent: true }]} 
      />

      <div className="bg-white dark:bg-neutral-800 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-center">About ProjectWise</h1>
            
            <div className="mb-12 bg-neutral-50 dark:bg-neutral-700 rounded-lg p-8 shadow-md">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="md:w-1/3 flex flex-col items-center">
                  <div className="h-48 w-48 rounded-full overflow-hidden border-4 border-primary-200 dark:border-primary-700 bg-neutral-200 mb-4">
                    {/* Profile placeholder with initial */}
                    <div className="h-full w-full flex items-center justify-center bg-primary-600 text-white text-6xl font-bold">
                      A
                    </div>
                  </div>
                  <h2 className="font-heading font-medium text-xl mb-2 text-center">Ankit Dhakre</h2>
                  <p className="text-neutral-600 dark:text-neutral-400 text-center mb-2">MSc Project Management</p>
                  <p className="text-neutral-600 dark:text-neutral-400 text-center mb-4">UCD Smurfit Business School</p>
                  <div className="flex space-x-4">
                    <a href="mailto:ankit@example.com" className="text-primary-500 hover:text-primary-600 transition-colors" aria-label="Email">
                      <span className="material-icons">email</span>
                    </a>
                    <a href="#" className="text-primary-500 hover:text-primary-600 transition-colors" aria-label="LinkedIn">
                      <span className="material-icons">link</span>
                    </a>
                    <a href="#" className="text-primary-500 hover:text-primary-600 transition-colors" aria-label="Academic profile">
                      <span className="material-icons">school</span>
                    </a>
                    <ShareButtons title="About Ankit Dhakre - ProjectWise" path="/about" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="font-heading font-medium text-xl mb-4">Professional Background</h3>
                  <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                    I am currently pursuing my MSc in Project Management at UCD Smurfit Business School. With 3 years of experience in electrical engineering within the EPC (Engineering, Procurement & Construction) field, I've managed various technical projects across different scales and industries.
                  </p>
                  <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                    My experience has shown me that while large organizations often have access to expensive project management tools and dedicated PMOs, small businesses and charitable organizations frequently struggle to implement formal project management practices despite having just as much need for them.
                  </p>
                  <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                    This resource was created as part of my academic project to help small businesses and charitable organizations implement professional project management practices without the need for expensive software or consultants.
                  </p>
                </div>
              </div>
            </div>
            
            <h2 className="font-heading font-semibold text-2xl mb-6">Project Context</h2>
            <div className="mb-8 space-y-4">
              <p className="text-neutral-700 dark:text-neutral-300">
                ProjectWise was developed to address the unique project management challenges faced by small to medium enterprises (SMEs) and charitable organizations. These entities often need to manage complex projects with limited resources, volunteer workforces, and tight budgets.
              </p>
              <p className="text-neutral-700 dark:text-neutral-300">
                The guide adapts established project management principles from the Project Management Body of Knowledge (PMBOK) and other methodologies, tailoring them specifically for organizations that don't have the luxury of dedicated project management offices or expensive software tools.
              </p>
              <p className="text-neutral-700 dark:text-neutral-300">
                All resources, templates, and examples have been designed with practical application in mind, focusing on techniques that provide the greatest value with minimal overhead.
              </p>
            </div>
            
            <h2 className="font-heading font-semibold text-2xl mb-6">References & Acknowledgments</h2>
            <div className="mb-12 space-y-4">
              <p className="text-neutral-700 dark:text-neutral-300">
                This guide draws on established project management frameworks including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-700 dark:text-neutral-300">
                <li>Project Management Institute. (2021). <em>A Guide to the Project Management Body of Knowledge (PMBOK Guide)</em> – Seventh Edition</li>
                <li>Axelos. (2017). <em>Managing Successful Projects with PRINCE2</em> – Sixth Edition</li>
                <li>Agile Alliance. (2001). <em>Agile Manifesto for Software Development</em></li>
                <li>International Project Management Association. (2015). <em>Individual Competence Baseline</em> – Version 4.0</li>
              </ul>
              <p className="text-neutral-700 dark:text-neutral-300 mt-4">
                Special thanks to the faculty at UCD Smurfit Business School for their guidance, and to the small businesses and charitable organizations that provided insights into their project management challenges and needs.
              </p>
            </div>
            
            <h2 className="font-heading font-semibold text-2xl mb-6">Contact Me</h2>
            <div className="bg-neutral-50 dark:bg-neutral-700 rounded-lg p-8 shadow-md">
              <p className="text-neutral-700 dark:text-neutral-300 mb-6">
                Have questions about ProjectWise or want to discuss project management for your organization? Feel free to reach out using the form below.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
