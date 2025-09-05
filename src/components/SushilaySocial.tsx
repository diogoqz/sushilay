import { Instagram, Facebook, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SushilaySocial = () => {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://instagram.com/sushilay_scz",
      icon: Instagram,
      handle: "@sushilay_scz"
    },
    {
      name: "Facebook", 
      url: "https://facebook.com/Sushilay.scz",
      icon: Facebook,
      handle: "Sushilay.scz"
    }
  ];

  return (
    <footer className="py-16 px-6 bg-background border-t border-muted">
      <div className="max-w-4xl mx-auto text-center">
        {/* Call to Action */}
        <div className="mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Listo para ordenar?
          </h3>
          <p className="text-xl text-secondary mb-8">
            Contáctanos por WhatsApp y disfruta del mejor sushi de Santa Cruz
          </p>
          <Button
            variant="whatsapp"
            size="lg"
            onClick={() => window.open('https://wa.me/59162986325', '_blank')}
            className="shadow-glow"
          >
            <MessageCircle className="mr-3 h-5 w-5" />
            ORDENAR AHORA
          </Button>
        </div>
        
        {/* Social Media */}
        <div className="mb-12">
          <h4 className="text-xl font-semibold text-foreground mb-6">
            Síguenos en nuestras redes
          </h4>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <Button
                  key={social.name}
                  variant="outline"
                  size="lg"
                  onClick={() => window.open(social.url, '_blank')}
                  className="w-full sm:w-auto"
                >
                  <IconComponent className="mr-3 h-5 w-5" />
                  {social.handle}
                </Button>
              );
            })}
          </div>
        </div>
        
        {/* Footer Info */}
        <div className="border-t border-muted pt-8">
          <p className="text-secondary text-sm">
            © {new Date().getFullYear()} Sushilay - Restaurante Japonés en Santa Cruz de la Sierra
          </p>
          <p className="text-muted-foreground text-sm mt-2">
            Delivery • Pickup • Lunes a Domingo 17:00-23:00
          </p>
        </div>
      </div>
    </footer>
  );
};