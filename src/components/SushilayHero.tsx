import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-sushi.jpg";

export const SushilayHero = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('¡Hola! Vi su página web y me interesa pedir sushi. ¿Podrían enviarme el menú y los precios?');
    window.open(`https://wa.me/59162986325?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-background/60" />
      
      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo/Brand */}
        <h1 className="text-6xl md:text-8xl font-black tracking-wider text-foreground mb-4 uppercase">
          SUSHI<span className="text-red-500">.</span>LAY
        </h1>
        
        {/* Tagline */}
        <p className="text-xl md:text-2xl text-secondary font-light mb-8 max-w-2xl mx-auto">
          Auténtica experiencia japonesa en Santa Cruz de la Sierra
        </p>
        
        {/* Main CTA */}
        <Button
          variant="whatsapp"
          size="xl"
          onClick={handleWhatsAppClick}
          className="mb-12 shadow-glow transform hover:scale-105 transition-all duration-300"
        >
          <MessageCircle className="mr-3 h-6 w-6" />
          PEDIR POR WHATSAPP
        </Button>
        
        {/* Quick Info */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-secondary text-lg">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span>Delivery & Pickup</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span>17:00 - 23:00</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span>Santa Cruz SCZ</span>
          </div>
        </div>
      </div>
    </section>
  );
};