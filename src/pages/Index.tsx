import { SushilayHero } from "@/components/SushilayHero";
import { SushilayInfo } from "@/components/SushilayInfo";
import { SushilayChef } from "@/components/SushilayChef";
import { SushilaySocial } from "@/components/SushilaySocial";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <SushilayHero />
      
      {/* Chef Section */}
      <SushilayChef />
      
      {/* Info Section */}
      <SushilayInfo />
      
      {/* Social/Footer Section */}
      <SushilaySocial />
      
      {/* Sticky WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Index;