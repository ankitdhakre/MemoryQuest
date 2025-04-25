import { Link } from "wouter";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleFooterContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await apiRequest("POST", "/api/contact", { email, message, source: "footer" });
      toast({
        title: "Message sent",
        description: "Thank you for contacting us!",
      });
      setEmail("");
      setMessage("");
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
              <li><Link href="/tools-and-templates" className="text-neutral-400 hover:text-white transition-colors">Tools & Templates</Link></li>
              <li><Link href="/real-examples" className="text-neutral-400 hover:text-white transition-colors">Real Examples</Link></li>
            </ul>
          </div>
          
          {/* Column 3 - Resources */}
          <div>
            <h3 className="font-heading font-medium text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/tools-and-templates#charter" className="text-neutral-400 hover:text-white transition-colors">Project Charter Templates</Link></li>
              <li><Link href="/tools-and-templates#risk" className="text-neutral-400 hover:text-white transition-colors">Risk Management Tools</Link></li>
              <li><Link href="/tools-and-templates#budget" className="text-neutral-400 hover:text-white transition-colors">Budget Templates</Link></li>
              <li><Link href="/tools-and-templates#closing" className="text-neutral-400 hover:text-white transition-colors">Project Closing Checklists</Link></li>
              <li><Link href="/tools-and-templates" className="text-neutral-400 hover:text-white transition-colors">All Downloads</Link></li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h3 className="font-heading font-medium text-lg mb-4">Contact</h3>
            <p className="text-neutral-400 text-sm mb-4">
              Have questions or feedback? Get in touch with us.
            </p>
            <form className="space-y-3" onSubmit={handleFooterContactSubmit}>
              <div>
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500 text-sm"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500 text-sm"
                />
              </div>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-primary-500 hover:bg-primary-600 text-white font-medium px-4 py-2 rounded-md transition-colors text-sm"
              >
                Send Message
              </Button>
            </form>
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
