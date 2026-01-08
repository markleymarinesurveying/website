import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@assets/MarineSurvey_logo.webp";

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
    <header className="sticky top-0 z-50 w-full bg-white border-b">
      <div className="container flex h-20 items-center justify-between max-w-7xl mx-auto px-4">
        {/* Logo and Company Name */}
        <Link href="/" className="flex items-center space-x-4">
          <img
            src={logo}
            alt="Markley Marine Surveying Logo - Professional Marine Survey Services in Florida"
            title="Markley Marine Surveying - Expert Marine Surveys"
            className="h-16 w-auto"
            loading="eager"
            width="64"
            height="64"
          />
          <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary tracking-wider" style={{fontFamily: "'Saira Condensed', 'Rajdhani', 'Barlow Condensed', sans-serif", fontWeight: '700', letterSpacing: '0.1em'}}>
            MARKLEY MARINE SURVEYING
          </div>
        </Link>

        {/* Desktop Navigation - Aligned Right */}
        <nav className="hidden lg:flex items-center space-x-8 ml-auto">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href}>
              <button
                className={`text-lg font-semibold transition-colors hover:text-primary ${
                  location === item.href
                    ? "text-primary"
                    : "text-gray-600"
                }`}
                data-testid={`nav-${item.name.toLowerCase().replace(" ", "-")}`}
              >
                {item.name.toUpperCase()}
              </button>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t bg-white">
          <div className="container space-y-1 py-4 max-w-7xl mx-auto px-4">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <button
                  className={`block w-full text-left py-3 px-4 text-lg font-semibold rounded-md transition-colors hover:bg-gray-100 ${
                    location === item.href
                      ? "text-primary bg-gray-100"
                      : "text-gray-600"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`mobile-nav-${item.name.toLowerCase().replace(" ", "-")}`}
                >
                  {item.name.toUpperCase()}
                </button>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}