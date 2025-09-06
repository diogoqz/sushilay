import { MessageCircle, Calendar, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SushilayOrder = () => {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        {/* Call to Action */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Listo para ordenar?
          </h3>
          <p className="text-xl text-secondary mb-8">
            Contáctanos por WhatsApp y disfruta del mejor sushi de Santa Cruz
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="whatsapp"
              size="lg"
              onClick={() => {
                const message = encodeURIComponent('¡Hola! Estoy listo para ordenar sushi. ¿Podrían enviarme el menú y ayudarme con mi pedido?');
                window.open(`https://wa.me/59162986325?text=${message}`, '_blank');
              }}
              className="shadow-glow"
            >
              <MessageCircle className="mr-3 h-5 w-5" />
              ORDENAR AHORA
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open('https://sushilay.ola.click/products', '_blank')}
              className="border-primary text-primary hover:bg-primary/10"
            >
              <Menu className="mr-3 h-5 w-5" />
              VER CARDÁPIO
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const message = encodeURIComponent('¡Hola! Me gustaría hacer una reserva para el rodízio. ¿Podrían darme más información sobre disponibilidad y precios?');
                window.open(`https://wa.me/59162986325?text=${message}`, '_blank');
              }}
              className="border-primary text-primary hover:bg-primary/10"
            >
              <Calendar className="mr-3 h-5 w-5" />
              RESERVAR RODÍZIO
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
