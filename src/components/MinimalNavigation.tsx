import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

const MinimalNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Why Us", path: "/why-us" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-[var(--transition-smooth)] rounded-2xl w-[95%] max-w-7xl ${isScrolled ? 'nav-floating backdrop-blur-md bg-background/95 border border-border shadow-[var(--shadow-clean)]' : 'nav-floating backdrop-blur-sm bg-background/80 border border-border/50 shadow-[var(--shadow-minimal)]'
      }`}>
      <div className="px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <img src="/briyologo.png" alt="Briyosis Softcaps Logo" className="w-26 h-20" />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-[var(--transition-fast)] hover:text-primary ${isActive ? "text-primary" : "text-muted-corporate"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop Contact & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm text-muted-corporate">
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="w-4 h-4" />
                <span>info@bryiosis.com</span>
              </div>
            </div>
            <Button asChild size="sm" className="btn-primary">
              <NavLink to="/contact">Get Quote</NavLink>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-corporate"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `block text-sm font-medium transition-[var(--transition-fast)] hover:text-primary ${isActive ? "text-primary" : "text-muted-corporate"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
              <div className="pt-4 border-t border-border space-y-2">
                <div className="flex items-center space-x-2 text-sm text-muted-corporate">
                  <Phone className="w-4 h-4" />
                  <span>+91-265-2334455</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-corporate">
                  <Mail className="w-4 h-4" />
                  <span>info@briyosissoftcaps.com</span>
                </div>
                <Button asChild size="sm" className="w-full btn-primary">
                  <NavLink to="/contact" onClick={() => setIsOpen(false)}>
                    Get Quote
                  </NavLink>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MinimalNavigation;