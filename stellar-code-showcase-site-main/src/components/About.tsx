
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  { category: "Languages", items: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL","C#"] },
  { category: "Frontend", items: ["React", "HTML5", "CSS3", "Tailwind CSS", ] },
  { category: "Backend", items: ["Node.js", "Express", ,"PHP"] },
  { category: "Tools", items: ["Git", "VS Code", ] },
  { category: "Database", items: [ "MongoDB", "MySQL", ] },
];

const About = () => {
  return (
    <section id="about" className="section bg-muted/30">
      <div className="container-custom">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <div className="space-y-4 text-lg">
              <p>
                I'm a final-year Computer Science student at Hope Enterprise University, with a passion for creating 
                elegant and efficient solutions to complex problems.  
              </p>
              <p>
              Outside of coding, I love diving into history, picking up new languages, 
              and connecting with other developers and tech folks whenever I can.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold mb-3">Education</h3>
              <div className="space-y-2">
                <div>
                  <h4 className="font-medium">Bachelor of Science in Computer Science</h4>
                  <p className="text-muted-foreground">Hope Enterprise University • 2022 - Present</p>
                </div>
                <p>Relevant coursework: Data Structures & Algorithms, Computer organization and Architecture, Database Systems, Web Development, Introduction to AI</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Skills & Technologies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skillGroup) => (
                <Card key={skillGroup.category} className="card-hover border border-border">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold mb-2 text-portfolio-teal-dark">
                      {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-muted rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
