import { Clock, MapPin, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";

export const SushilayInfo = () => {
  return (
    <section className="py-20 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        {/* About Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Experiencia Japonesa Auténtica
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            En Sushilay, combinamos la tradición culinaria japonesa con ingredientes frescos y de la más alta calidad. 
            Cada pieza es elaborada con dedicación y respeto por la cultura gastronómica del país del sol naciente.
          </p>
        </div>
        
        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Hours */}
          <Card className="p-8 text-center bg-surface-elevated border-muted hover:border-primary transition-colors duration-300">
            <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              Horarios
            </h3>
            <p className="text-secondary text-lg mb-2">Lunes a Domingo</p>
            <p className="text-primary text-xl font-bold">17:00 – 23:00</p>
          </Card>
          
          {/* Location */}
          <Card className="p-8 text-center bg-surface-elevated border-muted hover:border-primary transition-colors duration-300">
            <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              Ubicación
            </h3>
            <p className="text-secondary text-lg mb-2">Santa Cruz de la Sierra</p>
            <p className="text-primary text-lg font-bold">Avenida Busch, Calle 8</p>
            <p className="text-secondary text-sm mt-1">Delivery & Pickup</p>
          </Card>
          
          {/* Contact */}
          <Card className="p-8 text-center bg-surface-elevated border-muted hover:border-primary transition-colors duration-300">
            <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              Contacto
            </h3>
            <p className="text-secondary text-lg mb-2">Llámanos o WhatsApp</p>
            <a 
              href="tel:+59162986325" 
              className="text-primary text-xl font-bold hover:text-primary-light transition-colors"
            >
              +591 629 86325
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};