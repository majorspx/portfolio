
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="section bg-muted/30">
      <div className="container-custom max-w-4xl mx-auto text-center">
        <h2 className="section-title">My Resume</h2>
        <p className="text-lg mb-8 text-muted-foreground">
          Download my resume to learn more about my education, skills, and experience.
        </p>
        
        <div className="flex flex-col items-center">
          <div className="bg-gradient-to-r from-portfolio-blue to-portfolio-teal p-[1px] rounded-lg mb-8">
            <div className="bg-background rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Resume Overview</h3>
              <p className="text-muted-foreground mb-6">
                My resume includes details about:
              </p>
              
              <ul className="space-y-2 text-left max-w-md mx-auto mb-6">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-portfolio-teal"></div>
                  <span>Educational background and academic achievements</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-portfolio-teal"></div>
                  <span>Technical skills and programming languages</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-portfolio-teal"></div>
                  <span>Work experience and internships</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-portfolio-teal"></div>
                  <span>Projects and accomplishments</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-portfolio-teal"></div>
                  <span>Certifications and additional training</span>
                </li>
              </ul>
              
              <Button className="btn-primary w-full sm:w-auto">
                <ArrowDown className="mr-2 h-4 w-4" /> Download Resume (PDF)
              </Button>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Last updated: May 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resume;
