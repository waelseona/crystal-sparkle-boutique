import { useParams, Link, Navigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Eye } from "lucide-react";
import { getCollectionBySlug, getProductsByCollection } from "@/data/mockData";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";

const CollectionPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { addItem } = useCart();
  const { toast } = useToast();

  if (!slug) {
    return <Navigate to="/collections" replace />;
  }

  const collection = getCollectionBySlug(slug);
  const products = collection ? getProductsByCollection(collection.id) : [];

  if (!collection) {
    return <Navigate to="/collections" replace />;
  }

  const handleAddToCart = (product: any) => {
    addItem(product);
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${collection.heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-lg">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">
                {collection.name}
              </h1>
              <p className="text-xl mb-6 text-muted-foreground">
                {collection.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {collection.benefits.map((benefit, index) => (
                  <Badge key={index} variant="secondary" className="text-sm px-3 py-1">
                    {benefit}
                  </Badge>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                Loved by 10,000+ women worldwide
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Shop {collection.color} Crystal Earrings
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover our curated selection of hypoallergenic {collection.color.toLowerCase()} crystal earrings, 
                perfect for sensitive ears and designed for the modern woman.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card key={product.id} className="group overflow-hidden hover:shadow-luxury transition-all duration-300">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.badge && (
                      <Badge 
                        className="absolute top-4 left-4 capitalize"
                        variant={product.badge === 'bestseller' ? 'default' : 'secondary'}
                      >
                        {product.badge}
                      </Badge>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          onClick={() => handleAddToCart(product)}
                          className="bg-primary/90 backdrop-blur-sm"
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Quick Add
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          asChild
                          className="bg-background/90 backdrop-blur-sm"
                        >
                          <Link to={`/products/${product.slug}`}>
                            <Eye className="w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? "fill-primary text-primary"
                                : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        ({product.reviewCount})
                      </span>
                    </div>
                    
                    <h3 className="font-semibold text-lg mb-2">
                      <Link 
                        to={`/products/${product.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {product.name}
                      </Link>
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                        <span className="text-xl font-bold text-primary">
                          ${product.price}
                        </span>
                      </div>
                      
                      {product.inStock <= 5 && (
                        <Badge variant="outline" className="text-xs">
                          Only {product.inStock} left
                        </Badge>
                      )}
                    </div>
                    
                    <div className="mt-4">
                      <Button
                        className="w-full"
                        variant="luxury"
                        onClick={() => handleAddToCart(product)}
                      >
                        Add to Cart - ${product.price}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Trust Signals */}
            <div className="mt-16 text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl">🚚</span>
                  </div>
                  <h3 className="font-semibold mb-2">Free Shipping Over $75</h3>
                  <p className="text-sm text-muted-foreground">Fast, secure delivery to your door</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl">↩️</span>
                  </div>
                  <h3 className="font-semibold mb-2">30-Day Easy Returns</h3>
                  <p className="text-sm text-muted-foreground">Not happy? Return for full refund</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl">✨</span>
                  </div>
                  <h3 className="font-semibold mb-2">Hypoallergenic Guarantee</h3>
                  <p className="text-sm text-muted-foreground">Safe for even the most sensitive ears</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CollectionPage;