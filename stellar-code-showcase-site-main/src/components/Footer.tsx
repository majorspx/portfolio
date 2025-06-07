
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-6 mt-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground order-2 md:order-1">
            © {currentYear} Tamrat Alemayehu. All rights reserved.
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full border border-border order-1 md:order-2"
            onClick={handleScrollToTop}
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
          
          <div className="text-sm text-muted-foreground order-3">
            Built with React & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
