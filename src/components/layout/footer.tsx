
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-secondary/20 backdrop-blur-sm">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-blue-500 rounded-full opacity-30"></div>
                <div className="relative z-10 font-bold text-sm tracking-tight text-foreground">EE</div>
              </div>
              <div>
                <h2 className="text-xl font-display font-bold tracking-tight bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                  EESPIRE <span className="font-light">2025</span>
                </h2>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              EESPIRE 2025 connects students with industry leaders in electrical engineering.
              Our career fair provides opportunities to build professional relationships and discover
              new career paths.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-sm tracking-wide uppercase text-muted-foreground mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">About</Link></li>
              <li><Link to="/sponsors" className="text-foreground/80 hover:text-foreground transition-colors">Sponsors</Link></li>
              <li><Link to="/gallery" className="text-foreground/80 hover:text-foreground transition-colors">Gallery</Link></li>
              <li><Link to="/portal" className="text-foreground/80 hover:text-foreground transition-colors">Portal</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm tracking-wide uppercase text-muted-foreground mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-foreground/80">Email: contact@eespire2025.com</li>
              <li className="text-foreground/80">Phone: +1 (123) 456-7890</li>
              <li className="text-foreground/80">Address: EE Department, University Campus</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © 2024 EESPIRE. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
