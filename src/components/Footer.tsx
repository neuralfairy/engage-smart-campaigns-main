import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Product: [
      { name: "Features", href: "/features" },
      { name: "Pricing", href: "/pricing" },
      { name: "Integrations", href: "/integrations" },
      { name: "API Documentation", href: "/docs" },
    ],
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
    ],
    Support: [
      { name: "Help Center", href: "/help" },
      { name: "Contact Us", href: "/contact" },
      { name: "System Status", href: "/status" },
      { name: "FAQ", href: "/faq" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "GDPR Compliance", href: "/gdpr" },
    ],
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">AI</span>
                </div>
                <span className="text-xl font-bold text-background">
                  Artificialintelligencebits
                </span>
              </div>
              
              <p className="text-background/80 mb-6 leading-relaxed">
                Leading provider of intelligent email marketing automation solutions. 
                Helping businesses of all sizes create meaningful connections with their customers through iEMA.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-background/80">
                  <Phone className="h-4 w-4 mr-3 flex-shrink-0" />
                  <span>+1 (912) 555-0123</span>
                </div>
                <div className="flex items-center text-background/80">
                  <Mail className="h-4 w-4 mr-3 flex-shrink-0" />
                  <span>hello@artificialintelligencebits.com</span>
                </div>
                <div className="flex items-center text-background/80">
                  <MapPin className="h-4 w-4 mr-3 flex-shrink-0" />
                  <span>123 Bull Street, Savannah, GA 31401</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-semibold text-background mb-4">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-background/80 hover:text-background transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-background/80 text-sm">
              © 2024 Artificialintelligencebits Solutions. All rights reserved.
            </div>

            {/* Certifications & Badges */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-background/20 rounded flex items-center justify-center">
                  <span className="text-xs font-bold">SSL</span>
                </div>
                <span className="text-background/80 text-sm">Secure</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-background/20 rounded flex items-center justify-center">
                  <span className="text-xs font-bold">GDPR</span>
                </div>
                <span className="text-background/80 text-sm">Compliant</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-background/20 rounded flex items-center justify-center">
                  <span className="text-xs font-bold">SOC</span>
                </div>
                <span className="text-background/80 text-sm">Type 2</span>
              </div>
            </div>

            {/* Strategic Partner Link */}
            <div className="text-background/80 text-sm">
              <a 
                href="https://salescentri.com?utm_source=ArtificialIntelligenceBits.com&utm_medium=footer&utm_campaign=partner_network"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-background transition-colors"
              >
                Powered by Sales Intelligence Platform
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="py-4 border-t border-background/10">
          <div className="text-center text-background/60 text-xs">
            <p>
              iEMA (Email Marketing Automation) is a trademark of Artificialintelligencebits Solutions. 
              Built for marketers who demand results. 
              <span className="mx-2">•</span>
              Local SEO optimized for Savannah, GA market.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;