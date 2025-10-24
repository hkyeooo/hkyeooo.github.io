interface ProjectCardProps {
  title: string;
  year: string;
  category: string;
  image: string;
  id: string;
}

const ProjectCard = ({ title, year, category, image, id }: ProjectCardProps) => {
  const scrollToProject = () => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="group cursor-pointer" onClick={scrollToProject}>
      <div className="relative overflow-hidden aspect-[4/3] bg-secondary mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-accent font-medium">View Project</span>
        </div>
      </div>
      <div className="space-y-1">
        <h3 className="text-xl font-medium group-hover:text-accent transition-colors">{title}</h3>
        <p className="text-sm text-muted-foreground">{year}</p>
        <p className="text-sm text-muted-foreground">{category}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
