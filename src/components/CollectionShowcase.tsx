import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import blackCrystalImage from "@/assets/black-crystal-earrings.jpg";
import clearCrystalImage from "@/assets/clear-crystal-earrings.jpg";
import redCrystalImage from "@/assets/red-crystal-earrings.jpg";

const collections = [
  {
    name: "Black Crystal Earrings",
    description: "Timeless elegance with deep black crystals",
    image: blackCrystalImage,
    color: "bg-crystal-black",
    href: "/collections/black-crystal-earrings",
    slug: "black-crystal-earrings"
  },
  {
    name: "Clear Crystal Earrings", 
    description: "Pure brilliance with crystal clear stones",
    image: clearCrystalImage,
    color: "bg-crystal-clear",
    href: "/collections/clear-crystal-earrings",
    slug: "clear-crystal-earrings"
  },
  {
    name: "Red Crystal Earrings",
    description: "Bold and fiery statement pieces",
    image: redCrystalImage, 
    color: "bg-crystal-red",
    href: "/collections/red-crystal-earrings",
    slug: "red-crystal-earrings"
  }
];

export const CollectionShowcase = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            Find Your Colour
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every shade tells a story. Choose your colour, wear your energy.
            All earrings are hypoallergenic and perfect for sensitive ears.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Link to={`/collections/${collection.slug}`} key={collection.name}>
              <Card 
                className="group cursor-pointer overflow-hidden border-0 shadow-luxury hover:shadow-hover transition-luxury bg-card"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img 
                    src={collection.image}
                    alt={`${collection.name} - Hypoallergenic crystal earrings for women with sensitive ears`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-luxury"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-luxury"></div>
                  
                  {/* Color indicator */}
                  <div className={`absolute top-4 right-4 w-6 h-6 ${collection.color} rounded-full shadow-crystal border-2 border-white`}></div>
                  
                  {/* Hover content */}
                  <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-luxury">
                    <div className="text-white">
                      <h3 className="text-xl font-semibold mb-2">{collection.name}</h3>
                      <p className="text-sm mb-4 opacity-90">{collection.description}</p>
                      <Button variant="crystal" size="sm">
                        Shop Collection
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold font-serif mb-2">{collection.name}</h3>
                  <p className="text-muted-foreground mb-4">{collection.description}</p>
                  <Button variant="ghost" className="w-full group-hover:bg-accent">
                    Explore Collection
                  </Button>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="luxury" size="lg" className="text-lg">
            Shop All Collections
          </Button>
        </div>
      </div>
    </section>
  );
};