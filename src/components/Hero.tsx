const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold mb-6 animate-fade-in">
            Non-Random
            <br />
            Assortments
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl animate-slide-up [animation-delay:200ms] opacity-0">
            HK Yeo's Portfolio — Architecture, Music, and Computational Design
          </p>
          
          <div className="space-y-6 text-base md:text-lg text-muted-foreground max-w-2xl mt-12 animate-fade-in [animation-delay:400ms] opacity-0">
            <p>
              I'm HK Yeo, a multidisciplinary designer and researcher working at the intersection of 
              architecture, music, and computational design.
            </p>
            <p>
              My work explores generative systems, spatial design, and the integration of technology 
              in creative practice. Through various projects, I investigate how algorithmic thinking 
              and digital tools can expand the boundaries of design and composition.
            </p>
            <p>
              Currently pursuing advanced studies in architecture and digital media, I'm particularly 
              interested in shape grammars, computational music, and extended reality applications.
            </p>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-muted-foreground rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
