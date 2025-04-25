import { useEffect, useState } from "react";
import { useRoute, Link } from "wouter";
import { Helmet } from "react-helmet";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ShareButtons from "@/components/shared/ShareButtons";
import PdfGenerator from "@/components/shared/PdfGenerator";
import { knowledgeAreas, KnowledgeArea } from "@/data/knowledgeAreas";
import { templates } from "@/data/templates";

const KnowledgeAreaDetail = () => {
  const [, params] = useRoute("/knowledge-areas/:slug");
  const [area, setArea] = useState<KnowledgeArea | null>(null);
  const [relatedTemplates, setRelatedTemplates] = useState<typeof templates>([]);
  const [nextArea, setNextArea] = useState<KnowledgeArea | null>(null);
  const [prevArea, setPrevArea] = useState<KnowledgeArea | null>(null);

  useEffect(() => {
    if (params?.slug) {
      const currentArea = knowledgeAreas.find(k => k.slug === params.slug) || null;
      setArea(currentArea);

      if (currentArea) {
        // Find related templates
        const related = templates.filter(t => 
          t.relatedKnowledgeAreas.includes(currentArea.id)
        );
        setRelatedTemplates(related);

        // Find next and previous areas
        const currentIndex = knowledgeAreas.findIndex(k => k.id === currentArea.id);
        setPrevArea(currentIndex > 0 ? knowledgeAreas[currentIndex - 1] : null);
        setNextArea(currentIndex < knowledgeAreas.length - 1 ? knowledgeAreas[currentIndex + 1] : null);
      }
    }
  }, [params?.slug]);

  if (!area) {
    return (
      <div className="bg-white dark:bg-neutral-800 py-12">
        <div className="container mx-auto px-4 text-center">
          <span className="material-icons text-4xl text-neutral-400 mb-2">search_off</span>
          <h1 className="font-heading font-bold text-2xl mb-4">Knowledge Area Not Found</h1>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">The knowledge area you requested could not be found.</p>
          <Link href="/knowledge-areas">
            <Button className="bg-primary-500 hover:bg-primary-600 text-white">
              Browse All Knowledge Areas
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{area.title} - ProjectWise</title>
        <meta name="description" content={area.shortDescription} />
      </Helmet>

      <Breadcrumb 
        items={[
          { label: "Knowledge Areas", path: "/knowledge-areas" }, 
          { label: area.title, path: `/knowledge-areas/${area.slug}`, isCurrent: true }
        ]} 
      />

      <div className="bg-white dark:bg-neutral-800 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <span className={`material-icons text-primary-500 mr-3 text-3xl`}>{area.icon}</span>
                <h1 className="font-heading font-bold text-3xl">{area.title}</h1>
              </div>
              <ShareButtons 
                title={`${area.title} - ProjectWise`} 
                path={`/knowledge-areas/${area.slug}`} 
                description={area.shortDescription}
              />
            </div>

            <p className="text-xl text-neutral-700 dark:text-neutral-300 mb-8">
              {area.shortDescription}
            </p>

            <Tabs defaultValue="overview" className="mb-12">
              <TabsList className="mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="tools">Tools & Templates</TabsTrigger>
                <TabsTrigger value="application">Real-World Application</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                <div className="bg-neutral-50 dark:bg-neutral-700 p-6 rounded-lg border border-neutral-200 dark:border-neutral-600">
                  <h2 className="font-heading font-semibold text-xl mb-4">What is {area.title}?</h2>
                  <p className="text-neutral-700 dark:text-neutral-300 mb-6">
                    {area.description}
                  </p>
                  
                  <h3 className="font-heading font-medium text-lg mb-3">Key Elements</h3>
                  <ul className="space-y-2 pl-6 list-disc text-neutral-700 dark:text-neutral-300">
                    {area.keyPoints.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-end">
                  <PdfGenerator 
                    title={area.title} 
                    data={{
                      description: area.description,
                      keyPoints: area.keyPoints,
                      type: "template",
                      sections: {
                        "Key Elements": area.keyPoints
                      }
                    }}
                    filename={`${area.slug}-overview.pdf`}
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="tools" className="space-y-6">
                <div className="bg-neutral-50 dark:bg-neutral-700 p-6 rounded-lg border border-neutral-200 dark:border-neutral-600">
                  <h2 className="font-heading font-semibold text-xl mb-4">Tools for {area.title}</h2>
                  
                  {area.tools.length > 0 ? (
                    <div className="space-y-6">
                      {area.tools.map((tool, index) => (
                        <div key={index} className="border-b border-neutral-200 dark:border-neutral-600 pb-4 last:border-b-0 last:pb-0">
                          <h3 className="font-heading font-medium text-lg mb-2">{tool.title}</h3>
                          <p className="text-neutral-700 dark:text-neutral-300 mb-2">
                            {tool.description}
                          </p>
                          {tool.templateId && (
                            <Link 
                              href={`/tools-and-templates?template=${tool.templateId}`}
                              className="text-primary-500 hover:text-primary-600 inline-flex items-center text-sm font-medium"
                            >
                              <span>Download template</span>
                              <span className="material-icons text-sm ml-1">download</span>
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-neutral-700 dark:text-neutral-300">
                      No specific tools are available for this knowledge area yet.
                    </p>
                  )}
                </div>
                
                {relatedTemplates.length > 0 && (
                  <div className="bg-neutral-50 dark:bg-neutral-700 p-6 rounded-lg border border-neutral-200 dark:border-neutral-600">
                    <h2 className="font-heading font-semibold text-xl mb-4">Related Templates</h2>
                    <ul className="space-y-3">
                      {relatedTemplates.map(template => (
                        <li key={template.id} className="flex items-center justify-between">
                          <span className="text-neutral-800 dark:text-neutral-200">{template.title}</span>
                          <Link 
                            href={`/tools-and-templates?template=${template.id}`}
                            className="text-primary-500 hover:text-primary-600 flex items-center"
                          >
                            <span className="material-icons text-sm">download</span>
                            <span className="ml-1 text-sm">PDF</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="application" className="space-y-6">
                <div className="bg-neutral-50 dark:bg-neutral-700 p-6 rounded-lg border border-neutral-200 dark:border-neutral-600">
                  <h2 className="font-heading font-semibold text-xl mb-4">Real-World Application</h2>
                  <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                    {area.realWorldApplication}
                  </p>
                  
                  <h3 className="font-heading font-medium text-lg mb-3">Practical Tips for SMEs & Charities</h3>
                  <ul className="space-y-2 pl-6 list-disc text-neutral-700 dark:text-neutral-300">
                    <li>Start small - implement basic principles first before adding complexity</li>
                    <li>Adapt the processes to fit your organization's size and culture</li>
                    <li>Use free or low-cost tools that are specifically designed for small teams</li>
                    <li>Focus on the elements that provide the most value for your specific projects</li>
                    <li>Document your processes so they can be reused for future projects</li>
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="resources" className="space-y-6">
                <div className="bg-neutral-50 dark:bg-neutral-700 p-6 rounded-lg border border-neutral-200 dark:border-neutral-600">
                  <h2 className="font-heading font-semibold text-xl mb-4">Additional Resources</h2>
                  
                  {area.additionalResources.length > 0 ? (
                    <ul className="space-y-3">
                      {area.additionalResources.map((resource, index) => (
                        <li key={index} className="flex items-center">
                          <span className="material-icons text-primary-500 mr-2">article</span>
                          <Link 
                            href={resource.link}
                            className="text-primary-500 hover:text-primary-600 hover:underline"
                          >
                            {resource.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-neutral-700 dark:text-neutral-300">
                      No additional resources are available for this knowledge area yet.
                    </p>
                  )}
                </div>
                
                <div className="bg-neutral-50 dark:bg-neutral-700 p-6 rounded-lg border border-neutral-200 dark:border-neutral-600">
                  <h2 className="font-heading font-semibold text-xl mb-4">Recommended Reading</h2>
                  <ul className="space-y-3 text-neutral-700 dark:text-neutral-300">
                    <li className="flex items-start">
                      <span className="material-icons text-primary-500 mr-2 mt-1">menu_book</span>
                      <span>PMI. (2021). <em>A Guide to the Project Management Body of Knowledge (PMBOK Guide)</em> – 7th Edition, Chapter on {area.title}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="material-icons text-primary-500 mr-2 mt-1">menu_book</span>
                      <span>Kerzner, H. (2017). <em>Project Management: A Systems Approach to Planning, Scheduling, and Controlling</em> – 12th Edition</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex flex-col sm:flex-row justify-between items-center pt-6 border-t border-neutral-200 dark:border-neutral-700">
              {prevArea ? (
                <Link href={`/knowledge-areas/${prevArea.slug}`} className="flex items-center text-primary-500 hover:text-primary-600 mb-4 sm:mb-0">
                  <span className="material-icons mr-1">arrow_back</span>
                  <span>Previous: {prevArea.title}</span>
                </Link>
              ) : (
                <div></div>
              )}
              
              {nextArea && (
                <Link href={`/knowledge-areas/${nextArea.slug}`} className="flex items-center text-primary-500 hover:text-primary-600">
                  <span>Next: {nextArea.title}</span>
                  <span className="material-icons ml-1">arrow_forward</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KnowledgeAreaDetail;
