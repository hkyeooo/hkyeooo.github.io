import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16">About</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Content about HK Yeo will be displayed here.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
