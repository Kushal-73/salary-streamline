import { Link } from "react-router-dom";
import { Building2, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 font-bold text-xl text-primary mb-4">
              <Building2 className="w-6 h-6" />
              <span>LendWise</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Empowering employees with accessible salary-based lending solutions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                About Us
              </Link>
              <Link to="/products" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Products
              </Link>
              <Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                FAQ
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">For Business</h3>
            <div className="flex flex-col gap-2">
              <Link to="/employer/register" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Employer Registration
              </Link>
              <Link to="/employer/login" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Employer Login
              </Link>
              <Link to="/partner" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Partner With Us
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>support@lendwise.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>1800-123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 LendWise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
