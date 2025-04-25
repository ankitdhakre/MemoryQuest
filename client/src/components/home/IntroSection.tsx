const IntroSection = () => {
  return (
    <section className="py-12 bg-white dark:bg-neutral-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-semibold text-2xl md:text-3xl mb-4 text-center">Welcome to ProjectWise</h2>
          <p className="text-neutral-700 dark:text-neutral-300 mb-6 text-center">
            ProjectWise is a comprehensive project management resource designed specifically for small to medium enterprises and charitable organizations. Our goal is to simplify project management principles and make them accessible to organizations with limited resources.
          </p>
          <div className="bg-neutral-50 dark:bg-neutral-700 p-6 rounded-lg border border-neutral-200 dark:border-neutral-600">
            <div className="flex items-start">
              <span className="material-icons text-primary-500 mr-4 mt-1">info</span>
              <div>
                <h3 className="font-heading font-medium text-lg mb-2">Why ProjectWise?</h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Project management doesn't have to be complex or expensive. Whether you're running a small business or a nonprofit organization, having structured approaches to managing projects can dramatically improve your outcomes and help you deliver more value to those you serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
