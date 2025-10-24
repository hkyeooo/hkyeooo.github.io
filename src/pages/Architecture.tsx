import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import ProjectDetail from "@/components/ProjectDetail";

const Architecture = () => {
  const projects = [
    {
      id: "liminal-habitation",
      title: "Liminal Habitation",
      year: "2025",
      category: "Portman Studio Project",
      image: "/placeholder.svg",
      description: "An architectural investigation into transitional spaces and their impact on human experience. This studio project explores the poetics of threshold conditions, examining how spaces of passage can become meaningful destinations in their own right."
    },
    {
      id: "dwellings-city",
      title: "Dwellings in the City",
      year: "2024",
      category: "Advanced Studio I",
      image: "/placeholder.svg",
      description: "An urban housing proposal that examines contemporary dwelling typologies in dense metropolitan contexts. The project addresses issues of privacy, community, and sustainable living while proposing innovative spatial configurations for modern urban life."
    },
    {
      id: "poche-tower",
      title: "The Poché Tower",
      year: "2024",
      category: "Vertical Studio",
      image: "/placeholder.svg",
      description: "A vertical architecture project that reimagines the concept of poché—traditionally void space within walls—as inhabitable program. The tower explores the inversion of solid and void, creating a new typology where structural depth becomes experiential space."
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      
      <section id="architecture" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16">Architecture</h2>
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

export default Architecture;
