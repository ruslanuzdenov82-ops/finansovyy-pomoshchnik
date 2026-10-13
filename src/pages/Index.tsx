import Hero from "@/components/Hero";
import Banks from "@/components/Banks";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-body text-foreground">
      <Hero />
      <Banks />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Index;
