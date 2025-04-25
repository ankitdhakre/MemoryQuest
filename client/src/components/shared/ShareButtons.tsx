import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";

interface ShareButtonsProps {
  title: string;
  path: string;
  description?: string;
}

const ShareButtons = ({ title, path, description = "Check out this project management resource from ProjectWise" }: ShareButtonsProps) => {
  const { toast } = useToast();
  
  // Get the full URL
  const getFullUrl = () => {
    const baseUrl = window.location.origin;
    return `${baseUrl}${path}`;
  };

  const handleShare = async (platform: string) => {
    const url = getFullUrl();
    
    switch (platform) {
      case "facebook":
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank");
        break;
      case "twitter":
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, "_blank");
        break;
      case "linkedin":
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, "_blank");
        break;
      case "email":
        window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${description}\n\n${url}`)}`;
        break;
      case "copy":
        try {
          await navigator.clipboard.writeText(url);
          toast({
            title: "Link copied!",
            description: "The link has been copied to your clipboard.",
          });
        } catch (error) {
          toast({
            title: "Failed to copy",
            description: "Please try manually copying the URL.",
            variant: "destructive",
          });
        }
        break;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Share">
          <span className="material-icons">share</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleShare("facebook")}>
          <span className="material-icons mr-2 text-sm">facebook</span>
          <span>Facebook</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleShare("twitter")}>
          <span className="material-icons mr-2 text-sm">twitter</span>
          <span>Twitter</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleShare("linkedin")}>
          <span className="material-icons mr-2 text-sm">linkedin</span>
          <span>LinkedIn</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleShare("email")}>
          <span className="material-icons mr-2 text-sm">email</span>
          <span>Email</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleShare("copy")}>
          <span className="material-icons mr-2 text-sm">content_copy</span>
          <span>Copy Link</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ShareButtons;
