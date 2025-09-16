import { Button } from "@/components/ui/button";
import { Phone, MapPin, Mail, Clock, Smile } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                <Smile className="w-5 h-5 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Absolute Dental</h3>
                <p className="text-sm text-primary-foreground/80">Family Dentistry</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Your trusted smile partner in Toronto. We blend modern technology with compassionate care for families in the GTA.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
                data-testid="link-facebook"
              >
                <FaFacebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
                data-testid="link-instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
                data-testid="link-linkedin"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <a 
                href="tel:4161234567" 
                className="flex items-center space-x-3 text-primary-foreground/90 hover:text-secondary transition-colors"
                data-testid="footer-link-phone"
              >
                <Phone className="w-4 h-4" />
                <span>(416) 123-4567</span>
              </a>
              <a 
                href="mailto:info@absolutedental.com"
                className="flex items-center space-x-3 text-primary-foreground/90 hover:text-secondary transition-colors"
                data-testid="footer-link-email"
              >
                <Mail className="w-4 h-4" />
                <span>info@absolutedental.com</span>
              </a>
              <a 
                href="https://maps.google.com/?q=123+Beach+Ave,+Toronto,+ON+M4E+1T5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 text-primary-foreground/90 hover:text-secondary transition-colors"
                data-testid="footer-link-address"
              >
                <MapPin className="w-4 h-4 mt-1" />
                <span>123 Beach Ave<br />Toronto, ON M4E 1T5</span>
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Office Hours</h4>
            <div className="space-y-2 text-primary-foreground/90">
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4" />
                <div className="text-sm">
                  <div>Monday - Friday</div>
                  <div className="text-primary-foreground/70">8:00 AM - 6:00 PM</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4"></div>
                <div className="text-sm">
                  <div>Saturday</div>
                  <div className="text-primary-foreground/70">9:00 AM - 3:00 PM</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4"></div>
                <div className="text-sm">
                  <div>Sunday</div>
                  <div className="text-primary-foreground/70">Closed</div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <p className="text-xs text-primary-foreground/80">
                Emergency appointments available 24/7
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              <Link 
                href="/about" 
                className="block text-primary-foreground/90 hover:text-secondary transition-colors text-sm"
                data-testid="footer-link-about"
              >
                About Us
              </Link>
              <Link 
                href="/services" 
                className="block text-primary-foreground/90 hover:text-secondary transition-colors text-sm"
                data-testid="footer-link-services"
              >
                Our Services
              </Link>
              <Link 
                href="/patient-resources" 
                className="block text-primary-foreground/90 hover:text-secondary transition-colors text-sm"
                data-testid="footer-link-patient-resources"
              >
                Patient Resources
              </Link>
              <Link 
                href="/smile-gallery" 
                className="block text-primary-foreground/90 hover:text-secondary transition-colors text-sm"
                data-testid="footer-link-smile-gallery"
              >
                Smile Gallery
              </Link>
              <Link 
                href="/contact" 
                className="block text-primary-foreground/90 hover:text-secondary transition-colors text-sm"
                data-testid="footer-link-contact"
              >
                Contact
              </Link>
              <Link 
                href="/privacy" 
                className="block text-primary-foreground/90 hover:text-secondary transition-colors text-sm"
                data-testid="footer-link-privacy"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/70">
            © 2025 Absolute Dental. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="flex items-center space-x-2 text-xs text-primary-foreground/70">
              <span>CDCP Accepted</span>
              <span>•</span>
              <span>Direct Insurance Billing</span>
              <span>•</span>
              <span>Wheelchair Accessible</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}