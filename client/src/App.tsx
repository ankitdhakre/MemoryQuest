import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import KnowledgeAreas from "@/pages/KnowledgeAreas";
import KnowledgeAreaDetail from "@/pages/KnowledgeAreaDetail";
import ToolsAndTemplates from "@/pages/ToolsAndTemplates";
import RealExamples from "@/pages/RealExamples";
import SearchModal from "@/components/layout/SearchModal";
import { ThemeProvider } from "./context/ThemeContext";
import { SearchProvider, useSearch } from "./context/SearchContext";

// Routes component to handle routing
function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/knowledge-areas" component={KnowledgeAreas} />
      <Route path="/knowledge-areas/:slug" component={KnowledgeAreaDetail} />
      <Route path="/tools-and-templates" component={ToolsAndTemplates} />
      {/* Add specific route for template with parameter for direct access */}
      <Route path="/tools-and-templates/:params*" component={ToolsAndTemplates} />
      <Route path="/real-examples" component={RealExamples} />
      <Route component={NotFound} />
    </Switch>
  );
}

// Inner component that uses the search context
function AppLayoutWithSearch() {
  const { isSearchOpen } = useSearch();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Router />
      </main>
      <Footer />
      {isSearchOpen && <SearchModal />}
    </div>
  );
}

// App component that sets up all providers
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <SearchProvider>
          <TooltipProvider>
            <Toaster />
            <AppLayoutWithSearch />
          </TooltipProvider>
        </SearchProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
