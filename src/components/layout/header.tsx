
import { useState, useEffect } from "react";
import { Lock, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-lg",
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-[#ff0419] rounded-full opacity-30 animate-pulse-subtle"></div>
            <div className="relative z-10 font-bold text-lg tracking-tight text-foreground">EE</div>
          </div>
          <div>
            <h1 className="text-2xl font-display font-bold tracking-tight bg-gradient-to-r from-[#ff0419] to-blue-600 bg-clip-text text-transparent">
              EESPIRE <span className="font-light">2025</span>
            </h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className={`hidden md:flex items-center gap-8`}>
          <ul className="flex space-x-8">
            <li>
              <Link
                to="/"
                className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/students"
                className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium"
              >
                Students
              </Link>
            </li>
            <li>
              <Link
                to="/sponsors"
                className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium"
              >
                Sponsors
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium"
              >
                Gallery
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link to="/portal">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full bg-white text-[#ff0419] border border-[#ff0419]/20 hover:bg-[#ff0419]/5 hover:text-[#ff0419] px-4 transition-all duration-300"
              >
                <Lock className="mr-2 h-3.5 w-3.5" />
                Portal
              </Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Navigation Button */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-full"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div
          className={cn(
            "fixed inset-0 bg-background z-40 transition-all duration-300 ease-in-out pt-20",
            mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          <nav className="container h-full flex flex-col px-6">
            <ul className="space-y-6 py-8">
              <li>
                <Link
                  to="/"
                  className="text-2xl font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/students"
                  className="text-2xl font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Students
                </Link>
              </li>
              <li>
                <Link
                  to="/sponsors"
                  className="text-2xl font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sponsors
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-2xl font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Gallery
                </Link>
              </li>
            </ul>
            <div className="mt-auto mb-12">
              <Link to="/portal" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  size="lg"
                  className="w-full rounded-full bg-[#ff0419] hover:bg-[#ff0419]/90 text-white"
                >
                  <Lock className="mr-2 h-4 w-4" />
                  Portal
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
