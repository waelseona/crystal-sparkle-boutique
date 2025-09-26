import { Card } from "@/components/ui/card";

const features = [
  {
    icon: "💎",
    title: "Premium Crystals",
    description: "Hand-selected high-quality crystals that sparkle with every movement and catch light beautifully."
  },
  {
    icon: "🌿",
    title: "Hypoallergenic Materials", 
    description: "Perfect for sensitive ears. All our earrings are nickel-free and made with hypoallergenic materials."
  },
  {
    icon: "🎨",
    title: "Vibrant Color Collection",
    description: "From deep blacks to brilliant clears, find the perfect color to match your mood and style."
  },
  {
    icon: "✨",
    title: "Confidence Boosting",
    description: "Designed to make you feel radiant and confident. Each piece is crafted to turn heads and spark conversations."
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            Why Women Choose Seona
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover what makes our hypoallergenic crystal earrings the perfect choice 
            for women who value both beauty and comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={feature.title} className="text-center p-8 shadow-crystal hover:shadow-luxury transition-luxury bg-card border-0">
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold font-serif mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};