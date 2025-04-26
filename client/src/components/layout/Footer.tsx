import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Column 1 - About */}
          <div>
            <h3 className="font-heading font-medium text-lg mb-4">About ProjectWise</h3>
            <p className="text-neutral-400 text-sm mb-4">
              A comprehensive project management resource designed specifically for small to medium enterprises and charitable organizations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors" aria-label="Facebook">
                <span className="material-icons">facebook</span>
              </a>
              <a href="mailto:contact@projectwise.org" className="text-neutral-400 hover:text-white transition-colors" aria-label="Email">
                <span className="material-icons">email</span>
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors" aria-label="Website">
                <span className="material-icons">link</span>
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="font-heading font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-neutral-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-neutral-400 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/knowledge-areas" className="text-neutral-400 hover:text-white transition-colors">Knowledge Areas</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-neutral-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ProjectWise. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm">
            <Link href="/privacy-policy" className="text-neutral-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-neutral-400 hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/accessibility" className="text-neutral-400 hover:text-white transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
