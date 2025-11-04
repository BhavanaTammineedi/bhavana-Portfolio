const Footer = () => {
  return (
    <footer className="py-8 border-t border-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
          <p className="text-sm text-foreground/60">
            © 2025 Bhavana Tammineedi | Built with HTML, CSS, and JavaScript
          </p>
          <p className="text-xs text-foreground/40">
            Crafted with passion and dedication
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
