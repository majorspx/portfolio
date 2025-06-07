
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const handleScrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-portfolio-blue-light/10 via-background to-background"></div>
      
      <div className="container-custom">
        <div className="max-w-3xl">
          <p className="text-portfolio-teal-dark font-medium mb-4">Hello, I'm</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">Tamrat Alemayehu</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-foreground/80 mb-6">
            Aspiring Software Engineer | Final-Year CS Student
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            Passionate about creating innovative software solutions and
            continuously learning new technologies. Seeking opportunities to
            apply my skills in a professional environment.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button className="btn-primary" onClick={handleScrollToContact}>
              Contact Me <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button 
              variant="outline" 
              className="btn-outline"
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full"
          onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
        >
          <ArrowRight className="h-5 w-5 rotate-90" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
