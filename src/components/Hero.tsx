import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-woman-earrings.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden">
      {/* Background sparkle effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-2 h-2 bg-luxury-rose-gold rounded-full animate-sparkle"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-luxury-gold rounded-full animate-sparkle" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-32 left-40 w-3 h-3 bg-luxury-silver rounded-full animate-sparkle" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-60 right-20 w-1 h-1 bg-luxury-crystal rounded-full animate-sparkle" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-muted-foreground font-medium tracking-wide uppercase text-sm">
                Spark Confidence. Shine in Colour
              </p>
              <h1 className="text-5xl lg:text-6xl font-serif font-bold leading-tight">
                The World's Most{" "}
                <span className="bg-gradient-luxury bg-clip-text text-transparent">
                  Colourful
                </span>{" "}
                Crystal Earrings
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Vivid, high-quality <strong>hypoallergenic</strong> crystal earrings designed to spark confidence and turn every head. Perfect for sensitive ears.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg">
                Find Your Colour
              </Button>
              <Button variant="elegant" size="lg" className="text-lg">
                See What's Trending
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-crystal-green rounded-full"></div>
                <span>Hypoallergenic</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-crystal-blue rounded-full"></div>
                <span>Premium Crystals</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-crystal-pink rounded-full"></div>
                <span>Free Shipping $50+</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-crystal rounded-full shadow-crystal relative overflow-hidden">
              <img 
                src={heroImage} 
                alt="Beautiful woman wearing colorful Seona crystal earrings showcasing hypoallergenic jewelry for sensitive ears"
                className="w-full h-full object-cover rounded-full"
              />
              
              {/* Floating crystal accents */}
              <div className="absolute top-16 right-16 w-16 h-16 bg-crystal-red/20 rounded-full backdrop-blur-sm animate-sparkle"></div>
              <div className="absolute bottom-20 left-12 w-12 h-12 bg-crystal-blue/20 rounded-full backdrop-blur-sm animate-sparkle" style={{animationDelay: '0.8s'}}></div>
              <div className="absolute top-32 left-20 w-8 h-8 bg-crystal-pink/20 rounded-full backdrop-blur-sm animate-sparkle" style={{animationDelay: '1.2s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};