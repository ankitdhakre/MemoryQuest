import { Link } from "wouter";
import ankitPhoto from "../../photo/Ankit Passport size photo.jpg";

const AuthorSection = () => {
  return (
    <section className="py-12 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-primary-500 dark:bg-primary-700 p-6 text-white">
              <h2 className="font-heading font-semibold text-2xl mb-4">About the Author</h2>
              <div className="mb-4 h-40 w-40 mx-auto rounded-full overflow-hidden border-4 border-white bg-neutral-200">
                {/* Profile photo */}
                <div className="h-full w-full">
                  <img 
                    src={ankitPhoto} 
                    alt="Ankit Dhakre" 
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <h3 className="font-heading font-medium text-xl text-center">Ankit Dhakre</h3>
              <p className="text-center text-white/80 mb-4">MSc Project Management</p>
              <div className="flex justify-center space-x-3">
                <a href="mailto:ankit.dhakre@ucdconnect.ie" className="hover:text-white/80 transition-colors" aria-label="Email">
                  <span className="material-icons">email</span>
                </a>
                <a href="https://www.linkedin.com/in/ankit-dhakre-02248b2b2/" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors" aria-label="LinkedIn">
                  <span className="material-icons">linkedin</span>
                </a>
              </div>
            </div>
            <div className="md:w-2/3 p-6">
              <h3 className="font-heading font-medium text-xl mb-4">Professional Background</h3>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                I am currently pursuing my MSc in Project Management at UCD Smurfit Business School. With 3 years of experience in electrical engineering within the EPC (Engineering, Procurement & Construction) field, I've managed various technical projects across different scales.
              </p>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                This resource was created as part of my academic project to help small businesses and charitable organizations implement professional project management practices without the need for expensive software or consultants.
              </p>
              <Link 
                href="/about"
                className="inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors font-medium"
              >
                <span>Read full bio</span>
                <span className="material-icons ml-1 text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
