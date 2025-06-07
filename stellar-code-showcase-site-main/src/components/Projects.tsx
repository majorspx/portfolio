import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Certificate from "./certificate";

// Define a type for projects to allow optional github and demoUrl fields
interface Project {
	id: number;
	title: string;
	description: string;
	technologies: string[];
	imageUrl: string;
	github?: string;
	demoUrl?: string;
}

// Project data
const projects: Project[] = [
	{
		id: 1,
		title: "A tour and travel agency website",
		description:
			"A full-stack e-commerce application with user authentication, product catalog, shopping cart, but no payment integration.",
		technologies: ["React", "PHP", "SQL"],
		imageUrl:
			"https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=500",
	},
	{
		id: 2,
		title: " Simple Delivery Management App",
		description:
			"It allows manual order input, tracks income and expenses, and gives summaries of profits — all in a mobile-friendly interface",
		technologies: ["React", "MongoDB", "Node.js"],

		imageUrl:
			"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=500",
	},
	{
		id: 3,
		title: "Sentiment analysis platform for a college",
		description:
			"A web-based platform designed for colleges to collect, analyze, and visualize student feedback using sentiment analysis.",
		technologies: ["Python", "Flask", "TextBlon", "React", "MongoDB"],

		imageUrl:
			"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=500",
	},
];

const certificates = [
	{
		title: "Cyber Security Fundamentals Certificate",
		issuer: "IBM",
		date: "March 2025",
		url: "https://www.credly.com/badges/53c27bcb-a3b7-4234-a8b3-64b2f4391fa0/public_url",
	},
	{
		title: "Project Management",
		issuer: "IBM",
		date: "March 2024",
		url: "https://www.credly.com/org/ibm-skillsbuild/badge/project-management-fundamentals",
	},
  {
		title: "Introduction to AI",
		issuer: "IBM",
		date: "Feb 2025",
		url: "https://www.ibm.org/certification/ ",
	},
   
];

const Projects = () => {
	return (
		<>
			<section id="projects" className="section">
				<div className="container-custom">
					<h2 className="section-title">My Projects</h2>
					<p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
						Here are some of my recent projects  
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{projects.map((project) => (
							<Card
								key={project.id}
								className="overflow-hidden card-hover border border-border h-full flex flex-col"
							>
								<div className="h-48 overflow-hidden">
									<img
										src={project.imageUrl}
										alt={project.title}
										className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
									/>
								</div>
								<CardHeader>
									<CardTitle>{project.title}</CardTitle>
									<CardDescription>{project.description}</CardDescription>
								</CardHeader>
								<CardContent className="flex-grow">
									<div className="flex flex-wrap gap-2 mt-2">
										{project.technologies.map((tech) => (
											<span
												key={tech}
												className="px-2 py-1 bg-muted text-xs rounded-md font-medium"
											>
												{tech}
											</span>
										))}
									</div>
								</CardContent>
								<CardFooter className="flex justify-between">
									{/* Only render Code button if github exists */}
									{project.github ? (
										<Button variant="outline" size="sm" asChild>
											<a
												href={project.github}
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center"
											>
												<Github className="mr-2 h-4 w-4" />
												Code
											</a>
										</Button>
									) : null}
									{/* Only render Live Demo button if demoUrl exists */}
									{project.demoUrl ? (
										<Button size="sm" asChild>
											<a
												href={project.demoUrl}
												target="_blank"
												rel="noopener noreferrer"
											>
												Live Demo
											</a>
										</Button>
									) : null}
								</CardFooter>
							</Card>
						))}
					</div>
				</div>
			</section>
			<Certificate certificates={certificates} />
		</>
	);
};

export default Projects;
