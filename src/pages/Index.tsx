import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CollectionShowcase } from "@/components/CollectionShowcase";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CollectionShowcase />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;