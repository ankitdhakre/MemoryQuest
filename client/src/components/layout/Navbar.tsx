import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useTheme } from "@/context/ThemeContext";
import { useSearch } from "@/context/SearchContext";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const { openSearch } = useSearch();
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Knowledge Areas", path: "/knowledge-areas" }
  ];

  const isActive = (path: string) => {
    if (path === "/") return location === path;
    return location.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md dark:bg-neutral-800 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="material-icons text-primary-500 dark:text-primary-300">supervisor_account</span>
            <span className="font-heading font-bold text-xl text-primary-500 dark:text-primary-300">ProjectWise</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path}
                className={`font-medium ${isActive(link.path) ? 'text-primary-500 dark:text-primary-300' : 'text-neutral-900 dark:text-white hover:text-primary-500 dark:hover:text-primary-300'} transition-colors`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button 
              onClick={openSearch} 
              className="p-1 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
              aria-label="Search"
            >
              <span className="material-icons text-neutral-600 dark:text-neutral-300">search</span>
            </button>
            
            {/* Dark Mode Toggle */}
            <button 
              onClick={toggleTheme} 
              className="p-1 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? (
                <span className="material-icons text-yellow-300">light_mode</span>
              ) : (
                <span className="material-icons text-neutral-600">dark_mode</span>
              )}
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu} 
              className="md:hidden p-1 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <span className="material-icons text-neutral-600 dark:text-neutral-300">
                {isMobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 dark:border-neutral-700">
          <nav className="flex flex-col py-2">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path}
                className="px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
