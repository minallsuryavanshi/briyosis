import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Why Us?", path: "/why-us" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled
          ? "nav-floating rounded-2xl px-8 py-4 w-[96%] max-w-7xl shadow-premium"
          : "nav-floating rounded-2xl px-8 py-5 w-[96%] max-w-7xl shadow-premium"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center hover:scale-105 transition-transform duration-200">
          <img 
            src="/lovable-uploads/79f35077-8a72-40d2-b871-ab1c8672b657.png" 
            alt="Briyosis Soft Caps Logo" 
            className="h-16 w-auto md:h-18 transition-transform duration-300 hover:scale-105"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-base font-semibold transition-all duration-300 relative group ${
                  isActive ? "text-primary" : "text-foreground/90 hover:text-primary"
                } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                  isActive ? "after:scale-x-100" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Contact Info & CTA */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground bg-accent/30 px-4 py-2 rounded-full">
            <Phone className="h-4 w-4 text-primary" />
            <span className="font-medium">+1 (555) 123-4567</span>
          </div>
          <Button variant="default" size="lg" className="btn-brand px-6 py-3 text-base font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
            Get Quote
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-border">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-primary py-2 ${
                    isActive ? "text-primary" : "text-foreground/80"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
            <div className="flex items-center space-x-2 text-sm text-muted-foreground pt-2">
              <Phone className="h-4 w-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <Button variant="default" size="sm" className="btn-brand mt-2">
              Get Quote
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;