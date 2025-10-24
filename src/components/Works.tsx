import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";

const Works = () => {
  const projects = [
    {
      id: "shape-music",
      title: "Shape-Based Generative Music Composition",
      year: "2025",
      category: "Advanced Shape Grammars Final Project",
      image: "/placeholder.svg",
      description: "An exploration of algorithmic composition using shape grammar principles to generate musical structures. This project investigates the relationship between visual patterns and auditory expression, creating a generative system that translates geometric transformations into musical phrases."
    },
    {
      id: "tales-seasons",
      title: "Tales of the Seasons",
      year: "2025",
      category: "Computer Music Composition",
      image: "/placeholder.svg",
      description: "A computational music composition that interprets the cyclical nature of seasons through algorithmic processes. Each movement explores different temporal and timbral characteristics, using digital synthesis and processing to create an immersive sonic narrative."
    },
    {
      id: "crimson-king",
      title: "The Crimson Man And The Schizoid King",
      year: "2024",
      category: "Media + Modeling 2 Final Project",
      image: "/placeholder.svg",
      description: "A multimedia project exploring digital modeling techniques and narrative construction. Through computational design and media manipulation, this work investigates themes of identity, duality, and the relationship between representation and reality."
    },
  ];

  return (
    <>
      <section id="works" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16">Research & Academic Works</h2>
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
    </>
  );
};

export default Works;
