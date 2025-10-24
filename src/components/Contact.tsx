import { Mail, Instagram, Github, Music } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:contact@hkyeo.com",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com",
    },
    {
      name: "SoundCloud",
      icon: Music,
      href: "https://soundcloud.com",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mb-12">
            I'm always interested in new opportunities, collaborations, and conversations.
          </p>
          
          <div className="flex justify-center gap-8 flex-wrap">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors group"
                >
                  <div className="w-12 h-12 border border-border rounded-full flex items-center justify-center group-hover:border-accent transition-colors">
                    <Icon size={20} />
                  </div>
                  <span className="text-sm">{link.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
