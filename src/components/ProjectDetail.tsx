interface ProjectDetailProps {
  id: string;
  title: string;
  year: string;
  category: string;
  image: string;
  description: string;
}

const ProjectDetail = ({ id, title, year, category, image, description }: ProjectDetailProps) => {
  return (
    <section id={id} className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">{year} — {category}</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold">{title}</h2>
            </div>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
            </div>
          </div>
          <div className="relative aspect-[4/3] bg-secondary overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
