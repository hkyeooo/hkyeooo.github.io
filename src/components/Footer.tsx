const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} HK Yeo. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Portfolio, 2021 and onwards
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
