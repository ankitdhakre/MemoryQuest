import { useState, useEffect, useRef } from "react";
import { apiRequest } from "@/lib/queryClient";
import { useSearch } from "@/context/SearchContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";

const SearchModal = () => {
  const { isSearchOpen, closeSearch, searchQuery, setSearchQuery, searchResults, setSearchResults } = useSearch();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Focus the input when the modal opens
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }

    // Add escape key listener
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeSearch();
      }
    };

    window.addEventListener("keydown", handleEscKey);
    
    // Prevent body scrolling when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "auto";
    };
  }, [isSearchOpen, closeSearch]);

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (searchQuery.trim().length >= 2) {
        performSearch();
      }
    }, 300);

    return () => clearTimeout(debounce);
  }, [searchQuery]);

  const performSearch = async () => {
    if (searchQuery.trim().length < 2) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    try {
      const response = await apiRequest("GET", `/api/search?q=${encodeURIComponent(searchQuery)}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Search failed:", error);
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    performSearch();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-16 p-4">
      <div className="w-full max-w-3xl bg-white dark:bg-neutral-800 rounded-lg shadow-xl overflow-hidden">
        <div className="p-4 border-b border-neutral-200 dark:border-neutral-700 flex justify-between items-center">
          <h2 className="text-lg font-medium">Search ProjectWise</h2>
          <button 
            onClick={closeSearch}
            className="p-1 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
            aria-label="Close search"
          >
            <span className="material-icons">close</span>
          </button>
        </div>
        
        <form onSubmit={handleSearch} className="p-4 border-b border-neutral-200 dark:border-neutral-700">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="material-icons text-neutral-400">search</span>
            </span>
            <Input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search across all resources..."
              className="w-full pl-10 pr-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </form>
        
        <div className="p-4 max-h-[60vh] overflow-y-auto">
          {isLoading ? (
            <div className="flex justify-center p-4">
              <span className="material-icons animate-spin">refresh</span>
            </div>
          ) : searchResults.length > 0 ? (
            <div className="space-y-4">
              {searchResults.map((result, index) => (
                <div key={index} className="p-3 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-lg transition-colors">
                  <Link 
                    href={result.path} 
                    onClick={closeSearch}
                    className="block"
                  >
                    <h3 className="font-medium text-primary-500 dark:text-primary-300">{result.title}</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">{result.excerpt}</p>
                    <div className="flex items-center text-xs text-neutral-500 dark:text-neutral-500 mt-2">
                      <span className="material-icons text-xs mr-1">{result.type === "knowledge_area" ? "school" : result.type === "template" ? "description" : "business"}</span>
                      <span>{result.category}</span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ) : searchQuery.length > 0 ? (
            <div className="text-center py-8">
              <p className="text-neutral-600 dark:text-neutral-400">No results found for "{searchQuery}"</p>
              <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-2">Try different keywords or browse our categories</p>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-neutral-600 dark:text-neutral-400">Enter at least 2 characters to search</p>
            </div>
          )}
        </div>
        
        <div className="p-4 border-t border-neutral-200 dark:border-neutral-700 flex justify-between">
          <Button variant="outline" onClick={closeSearch}>Cancel</Button>
          <Button 
            className="bg-primary-500 hover:bg-primary-600 text-white"
            disabled={searchQuery.length < 2 || isLoading}
            onClick={performSearch}
          >
            {isLoading ? (
              <>
                <span className="material-icons animate-spin mr-2 text-sm">refresh</span>
                Searching...
              </>
            ) : (
              "Search"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
