import { useEffect, useState } from "react";
import { useLocation, Link } from "wouter";
import { Helmet } from "react-helmet";
import Breadcrumb from "@/components/layout/Breadcrumb";
import ExampleCard from "@/components/examples/ExampleCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { examples, Example } from "@/data/examples";
import { knowledgeAreas } from "@/data/knowledgeAreas";
import ShareButtons from "@/components/shared/ShareButtons";

const RealExamples = () => {
  const [location, setLocation] = useLocation();
  const [searchParams, setSearchParams] = useState(new URLSearchParams(window.location.search));
  const [selectedExample, setSelectedExample] = useState<Example | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sectorFilter, setSectorFilter] = useState<string>("all");
  
  const sectors = Array.from(new Set(examples.map(e => e.sector)));
  
  // Filter examples based on search term and sector
  const filteredExamples = examples.filter(example => {
    const matchesSearch = example.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          example.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          example.organization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSector = sectorFilter && sectorFilter !== "all" ? example.sector === sectorFilter : true;
    return matchesSearch && matchesSector;
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSearchParams(params);
    
    // Check if there's an example slug in the URL
    const exampleSlug = params.get('example') || window.location.pathname.split('/').pop();
    if (exampleSlug) {
      const example = examples.find(e => e.slug === exampleSlug);
      if (example) {
        setSelectedExample(example);
      } else {
        // If example not found, clear the parameter
        const cleanParams = new URLSearchParams(params);
        cleanParams.delete("example");
        setLocation(`/real-examples?${cleanParams.toString()}`);
      }
    } else {
      setSelectedExample(null);
    }
  }, [location, examples, setLocation]);

  const handleSelectSector = (value: string) => {
    setSectorFilter(value);
  };

  const getKnowledgeAreaById = (id: number) => {
    return knowledgeAreas.find(area => area.id === id);
  };

  return (
    <>
      <Helmet>
        <title>
          {selectedExample 
            ? `${selectedExample.title} - Real Examples - ProjectWise` 
            : "Real Examples - ProjectWise"}
        </title>
        <meta 
          name="description" 
          content={selectedExample 
            ? selectedExample.description 
            : "Explore real-world project management examples from SMEs and charities."} 
        />
      </Helmet>

      <Breadcrumb 
        items={[
          { label: "Real Examples", path: "/real-examples" },
          ...(selectedExample 
            ? [{ label: selectedExample.title, path: `/real-examples/${selectedExample.slug}`, isCurrent: true }] 
            : [])
        ]} 
      />

      <div className="bg-white dark:bg-neutral-800 py-12">
        <div className="container mx-auto px-4">
          {selectedExample ? (
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <Link 
                  href="/real-examples"
                  className="flex items-center text-primary-500 hover:text-primary-600 mb-4"
                >
                  <span className="material-icons mr-1">arrow_back</span>
                  <span>Back to all examples</span>
                </Link>
              </div>
              
              <div className="bg-neutral-50 dark:bg-neutral-700 rounded-lg overflow-hidden shadow-md mb-8">
                <div className="h-60 bg-neutral-200 dark:bg-neutral-600 flex items-center justify-center">
                  <span className="material-icons text-6xl text-neutral-400 dark:text-neutral-400">
                    {selectedExample.icon || "business"}
                  </span>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h1 className="font-heading font-bold text-2xl md:text-3xl mb-2">{selectedExample.title}</h1>
                      <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400 mb-2">
                        <span className="material-icons text-xs mr-1">business</span>
                        <span>{selectedExample.organization}</span>
                        <span className="mx-2">•</span>
                        <span>{selectedExample.sector}</span>
                      </div>
                    </div>
                    <ShareButtons 
                      title={selectedExample.title} 
                      path={`/real-examples/${selectedExample.slug}`} 
                      description={selectedExample.description}
                    />
                  </div>
                  
                  <p className="text-neutral-700 dark:text-neutral-300 text-lg mb-6">
                    {selectedExample.description}
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-neutral-50 dark:bg-neutral-700 p-6 rounded-lg border border-neutral-200 dark:border-neutral-600">
                  <h2 className="font-heading font-semibold text-xl mb-4 flex items-center">
                    <span className="material-icons text-red-500 mr-2">priority_high</span>
                    The Challenge
                  </h2>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    {selectedExample.challenge}
                  </p>
                </div>
                
                <div className="bg-neutral-50 dark:bg-neutral-700 p-6 rounded-lg border border-neutral-200 dark:border-neutral-600">
                  <h2 className="font-heading font-semibold text-xl mb-4 flex items-center">
                    <span className="material-icons text-green-500 mr-2">check_circle</span>
                    The Outcome
                  </h2>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    {selectedExample.outcome}
                  </p>
                </div>
              </div>
              
              <div className="bg-neutral-50 dark:bg-neutral-700 p-6 rounded-lg border border-neutral-200 dark:border-neutral-600 mb-8">
                <h2 className="font-heading font-semibold text-xl mb-4 flex items-center">
                  <span className="material-icons text-primary-500 mr-2">lightbulb</span>
                  The Solution
                </h2>
                <p className="text-neutral-700 dark:text-neutral-300 mb-6">
                  {selectedExample.solution}
                </p>
              </div>
              
              <div className="bg-neutral-50 dark:bg-neutral-700 p-6 rounded-lg border border-neutral-200 dark:border-neutral-600 mb-8">
                <h2 className="font-heading font-semibold text-xl mb-4">Knowledge Areas Applied</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedExample.knowledgeAreasApplied.map(areaId => {
                    const area = getKnowledgeAreaById(areaId);
                    if (!area) return null;
                    
                    return (
                      <Link 
                        key={area.id}
                        href={`/knowledge-areas/${area.slug}`}
                        className="flex items-center p-3 bg-white dark:bg-neutral-800 rounded-md hover:shadow-sm transition-shadow"
                      >
                        <span className="material-icons text-primary-500 mr-2">{area.icon}</span>
                        <span className="font-medium">{area.title}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
              
              <div className="text-center mt-12">
                <h2 className="font-heading font-semibold text-xl mb-6">Explore More Case Studies</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {examples
                    .filter(e => e.id !== selectedExample.id)
                    .slice(0, 3)
                    .map(example => (
                      <ExampleCard key={example.id} example={example} />
                    ))
                  }
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              <h1 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-center">Real-World Examples</h1>
              <p className="text-neutral-700 dark:text-neutral-300 text-center mb-10">
                Explore how other organizations have applied project management principles to achieve success.
              </p>

              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="md:flex-1 relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="material-icons text-neutral-400">search</span>
                  </span>
                  <Input
                    type="text"
                    placeholder="Search examples..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                
                <div className="md:w-1/3">
                  <Select value={sectorFilter} onValueChange={handleSelectSector}>
                    <SelectTrigger className="border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800">
                      <SelectValue placeholder="Filter by sector" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Sectors</SelectItem>
                      {sectors.map((sector) => (
                        <SelectItem key={sector} value={sector}>{sector}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {filteredExamples.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredExamples.map((example) => (
                    <ExampleCard key={example.id} example={example} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-10">
                  <span className="material-icons text-4xl text-neutral-400 mb-2">search_off</span>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-2">No examples found matching your criteria</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-500">Try different keywords or clear filters</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RealExamples;
