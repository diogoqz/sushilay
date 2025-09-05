import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('¡Hola! Me gustaría hacer un pedido de sushi. ¿Podrían ayudarme?');
    window.open(`https://wa.me/59162986325?text=${message}`, '_blank');
  };

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
    >
      <Button
        variant="whatsapp"
        size="lg"
        onClick={handleWhatsAppClick}
        className="rounded-full shadow-glow animate-pulse"
        aria-label="Pedir por WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="hidden sm:inline">WhatsApp</span>
      </Button>
    </div>
  );
};