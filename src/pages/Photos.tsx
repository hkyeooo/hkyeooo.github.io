import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import ProjectDetail from "@/components/ProjectDetail";

const Photos = () => {
  const projects = [
    {
      id: "photo-1",
      title: "Photo Series 1",
      year: "2025",
      category: "Photography",
      image: "/placeholder.svg",
      description: "Description of the photo series will be displayed here."
    },
    {
      id: "photo-2",
      title: "Photo Series 2",
      year: "2024",
      category: "Photography",
      image: "/placeholder.svg",
      description: "Description of the photo series will be displayed here."
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      
      <section id="photos" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16">Photos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
      
      <div className="bg-background">
        {projects.map((project, index) => (
          <ProjectDetail key={index} {...project} />
        ))}
      </div>
      
      <Footer />
    </div>
  );
};

export default Photos;
