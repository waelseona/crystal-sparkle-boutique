// Mock data for products and collections
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  description: string;
  features: string[];
  inStock: number;
  rating: number;
  reviewCount: number;
  collectionId: string;
  slug: string;
  badge?: 'bestseller' | 'limited' | 'new';
}

export interface Collection {
  id: string;
  name: string;
  slug: string;
  description: string;
  heroImage: string;
  color: string;
  benefits: string[];
}

export const collections: Collection[] = [
  {
    id: 'black-crystal',
    name: 'Black Crystal Elegance',
    slug: 'black-crystal-earrings',
    description: 'Embrace Your Power - Sophisticated black crystals for the confident woman',
    heroImage: '/src/assets/black-crystal-earrings.jpg',
    color: 'Black',
    benefits: ['Hypoallergenic', 'Nickel-Free', 'Perfect for Sensitive Ears']
  },
  {
    id: 'clear-crystal',
    name: 'Clear Crystal Brilliance',
    slug: 'clear-crystal-earrings',
    description: 'Timeless Sparkle - Pure crystal clarity that complements every style',
    heroImage: '/src/assets/clear-crystal-earrings.jpg',
    color: 'Clear',
    benefits: ['Hypoallergenic', 'Lead-Free', 'Tarnish Resistant']
  },
  {
    id: 'red-crystal',
    name: 'Red Crystal Passion',
    slug: 'red-crystal-earrings',
    description: 'Bold & Beautiful - Passionate red crystals for statement makers',
    heroImage: '/src/assets/red-crystal-earrings.jpg',
    color: 'Red',
    benefits: ['Hypoallergenic', 'Fade Resistant', 'Sensitive Ear Safe']
  }
];

export const products: Product[] = [
  // Black Crystal Collection
  {
    id: 'black-stud-1',
    name: 'Midnight Elegance Studs',
    price: 89,
    images: ['/src/assets/black-crystal-earrings.jpg'],
    description: 'Classic black crystal studs perfect for everyday elegance',
    features: ['Hypoallergenic', 'Nickel & Lead Free', 'Tarnish Resistant', 'Sensitive Ear Safe'],
    inStock: 3,
    rating: 4.8,
    reviewCount: 127,
    collectionId: 'black-crystal',
    slug: 'midnight-elegance-studs',
    badge: 'bestseller'
  },
  {
    id: 'black-drop-1',
    name: 'Shadow Drop Earrings',
    price: 129,
    originalPrice: 149,
    images: ['/src/assets/black-crystal-earrings.jpg'],
    description: 'Dramatic black crystal drops that catch the light beautifully',
    features: ['Hypoallergenic', 'Lightweight Design', 'Secure Backs', 'Gift Ready'],
    inStock: 8,
    rating: 4.9,
    reviewCount: 89,
    collectionId: 'black-crystal',
    slug: 'shadow-drop-earrings',
    badge: 'limited'
  },
  {
    id: 'black-hoop-1',
    name: 'Obsidian Hoops',
    price: 159,
    images: ['/src/assets/black-crystal-earrings.jpg'],
    description: 'Modern black crystal hoops for the contemporary woman',
    features: ['Hypoallergenic', '14k Gold Plated', 'Comfortable Fit', 'Versatile Style'],
    inStock: 12,
    rating: 4.7,
    reviewCount: 156,
    collectionId: 'black-crystal',
    slug: 'obsidian-hoops'
  },

  // Clear Crystal Collection
  {
    id: 'clear-stud-1',
    name: 'Diamond Sparkle Studs',
    price: 79,
    images: ['/src/assets/clear-crystal-earrings.jpg'],
    description: 'Brilliant clear crystals that mimic diamonds at a fraction of the cost',
    features: ['Hypoallergenic', 'Maximum Brilliance', 'Secure Setting', 'Everyday Luxury'],
    inStock: 15,
    rating: 4.9,
    reviewCount: 203,
    collectionId: 'clear-crystal',
    slug: 'diamond-sparkle-studs',
    badge: 'bestseller'
  },
  {
    id: 'clear-drop-1',
    name: 'Crystal Cascade Drops',
    price: 149,
    images: ['/src/assets/clear-crystal-earrings.jpg'],
    description: 'Elegant tiered crystal drops for special occasions',
    features: ['Hypoallergenic', 'Graduated Design', 'Lightweight', 'Statement Piece'],
    inStock: 6,
    rating: 4.8,
    reviewCount: 94,
    collectionId: 'clear-crystal',
    slug: 'crystal-cascade-drops'
  },

  // Red Crystal Collection
  {
    id: 'red-stud-1',
    name: 'Ruby Fire Studs',
    price: 99,
    images: ['/src/assets/red-crystal-earrings.jpg'],
    description: 'Passionate red crystals that add warmth to any ensemble',
    features: ['Hypoallergenic', 'Color Fast', 'Rose Gold Setting', 'Confidence Boost'],
    inStock: 9,
    rating: 4.7,
    reviewCount: 178,
    collectionId: 'red-crystal',
    slug: 'ruby-fire-studs',
    badge: 'new'
  },
  {
    id: 'red-drop-1',
    name: 'Crimson Teardrops',
    price: 139,
    originalPrice: 169,
    images: ['/src/assets/red-crystal-earrings.jpg'],
    description: 'Romantic red crystal teardrops perfect for date nights',
    features: ['Hypoallergenic', 'Romantic Design', 'Comfortable Weight', 'Gift Worthy'],
    inStock: 4,
    rating: 4.9,
    reviewCount: 67,
    collectionId: 'red-crystal',
    slug: 'crimson-teardrops',
    badge: 'limited'
  }
];

export const getProductsByCollection = (collectionId: string): Product[] => {
  return products.filter(product => product.collectionId === collectionId);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};

export const getCollectionBySlug = (slug: string): Collection | undefined => {
  return collections.find(collection => collection.slug === slug);
};