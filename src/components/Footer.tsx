import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold bg-gradient-luxury bg-clip-text text-transparent">
              seona
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              The world's most colourful crystal earrings. Hypoallergenic jewelry designed for women who value both beauty and comfort.
            </p>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Shop</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="/collections/black-crystal-earrings" className="hover:text-luxury-rose-gold transition-colors">Black Crystal Earrings</a></li>
              <li><a href="/collections/clear-crystal-earrings" className="hover:text-luxury-rose-gold transition-colors">Clear Crystal Earrings</a></li>
              <li><a href="/collections/red-crystal-earrings" className="hover:text-luxury-rose-gold transition-colors">Red Crystal Earrings</a></li>
              <li><a href="/collections/blue-crystal-earrings" className="hover:text-luxury-rose-gold transition-colors">Blue Crystal Earrings</a></li>
              <li><a href="/collections/pink-crystal-earrings" className="hover:text-luxury-rose-gold transition-colors">Pink Crystal Earrings</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Customer Care</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="/about" className="hover:text-luxury-rose-gold transition-colors">About Hypoallergenic Jewelry</a></li>
              <li><a href="/sizing-guide" className="hover:text-luxury-rose-gold transition-colors">Sizing Guide</a></li>
              <li><a href="/care-instructions" className="hover:text-luxury-rose-gold transition-colors">Care Instructions</a></li>
              <li><a href="/returns" className="hover:text-luxury-rose-gold transition-colors">Returns & Exchanges</a></li>
              <li><a href="/contact" className="hover:text-luxury-rose-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Stay Connected</h4>
            <p className="text-primary-foreground/80 text-sm">
              Get exclusive access to new collections and special offers for sensitive ears jewelry.
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="luxury" size="sm">
                Join
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Seona. All rights reserved. Hypoallergenic crystal earrings for women.
            </p>
            <div className="flex space-x-6 text-sm text-primary-foreground/60">
              <a href="/privacy" className="hover:text-luxury-rose-gold transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-luxury-rose-gold transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};