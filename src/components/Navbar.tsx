import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building2, Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <Building2 className="w-6 h-6" />
            <span>LendWise</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/about" className="text-foreground/80 hover:text-foreground transition-colors">
              About Us
            </Link>
            <Link to="/products" className="text-foreground/80 hover:text-foreground transition-colors">
              Products
            </Link>
            <Link to="/contact" className="text-foreground/80 hover:text-foreground transition-colors">
              Contact
            </Link>
            <Link to="/employer/login">
              <Button variant="outline">Employer Login</Button>
            </Link>
            <Link to="/employee/login">
              <Button className="bg-gradient-accent">Employee Login</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 flex flex-col gap-4">
            <Link to="/about" className="text-foreground/80 hover:text-foreground transition-colors">
              About Us
            </Link>
            <Link to="/products" className="text-foreground/80 hover:text-foreground transition-colors">
              Products
            </Link>
            <Link to="/contact" className="text-foreground/80 hover:text-foreground transition-colors">
              Contact
            </Link>
            <Link to="/employer/login">
              <Button variant="outline" className="w-full">Employer Login</Button>
            </Link>
            <Link to="/employee/login">
              <Button className="w-full bg-gradient-accent">Employee Login</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
