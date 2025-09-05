import { SushilayHero } from "@/components/SushilayHero";
import { SushilayInfo } from "@/components/SushilayInfo";
import { SushilayOrder } from "@/components/SushilayOrder";
import { SushilayChef } from "@/components/SushilayChef";
import { SushilaySocial } from "@/components/SushilaySocial";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <SushilayHero />
      
      {/* Info Section */}
      <SushilayInfo />
      
      {/* Order Section */}
      <SushilayOrder />
      
      {/* Chef Section */}
      <SushilayChef />
      
      {/* Social/Footer Section */}
      <SushilaySocial />
      
      {/* Sticky WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Index;