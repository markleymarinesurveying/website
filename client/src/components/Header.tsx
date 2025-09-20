import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between max-w-7xl mx-auto px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="text-xl font-bold text-primary">
            Markley Marine Surveying
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href}>
              <button
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
                data-testid={`nav-${item.name.toLowerCase().replace(" ", "-")}`}
              >
                {item.name}
              </button>
            </Link>
          ))}
        </nav>

        {/* Phone Number & CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <a 
            href="tel:5615049576" 
            className="flex items-center space-x-2 text-sm font-medium text-primary hover:text-primary/80"
            data-testid="phone-link"
          >
            <Phone className="h-4 w-4" />
            <span>(561) 504-9576</span>
          </a>
          <Link href="/contact">
            <Button 
              className="bg-success hover:bg-success/90 text-white"
              data-testid="button-get-quote"
            >
              Get a Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container space-y-1 py-4 max-w-7xl mx-auto px-4">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <button
                  className={`block w-full text-left py-2 px-3 text-sm font-medium rounded-md transition-colors hover:bg-accent ${
                    location === item.href
                      ? "text-primary bg-accent"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`mobile-nav-${item.name.toLowerCase().replace(" ", "-")}`}
                >
                  {item.name}
                </button>
              </Link>
            ))}
            <div className="border-t pt-4 mt-4 space-y-3">
              <a 
                href="tel:5615049576" 
                className="flex items-center space-x-2 text-sm font-medium text-primary"
                data-testid="mobile-phone-link"
              >
                <Phone className="h-4 w-4" />
                <span>(561) 504-9576</span>
              </a>
              <Link href="/contact">
                <Button 
                  className="w-full bg-success hover:bg-success/90 text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid="mobile-button-get-quote"
                >
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}