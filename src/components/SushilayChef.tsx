import { Play, Heart, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

export const SushilayChef = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-background to-surface">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Conoce a Lay, la chef brasileña detrás de Sushilay
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Desde Brasil a Santa Cruz con amor por el sushi y su famoso Hot Philadelphia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <div className="order-2 lg:order-1">
            <Card className="p-6 bg-surface-elevated border-muted overflow-hidden">
              <div className="relative">
                <div className="aspect-[9/16] w-full max-w-sm mx-auto rounded-lg overflow-hidden bg-muted">
                  <iframe
                    src="https://www.youtube.com/embed/qnUeKj7uPmY?si=example&rel=0&modestbranding=1&showinfo=0"
                    title="Chef Lay - Sushilay"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                  <Play className="h-4 w-4" />
                  Video
                </div>
              </div>
            </Card>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-8">
            <Card className="p-8 bg-surface-elevated border-muted">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <Heart className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Chef Lay</h3>
                  <p className="text-secondary">Chef Brasileña • 10+ años de experiencia</p>
                </div>
              </div>
              
              <div className="space-y-4 text-secondary leading-relaxed">
                <p>
                  Lay es una chef brasileña con más de 10 años de experiencia haciendo sushi. 
                  Llegó a Santa Cruz hace 4 años y desde entonces comparte su pasión a través de Sushilay.
                </p>
                <p>
                  En este video, ella se presenta y te enseña cómo prepara el Hot Philadelphia, 
                  el plato más pedido del menú. ¡Mirá el video y conocé su historia!
                </p>
              </div>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center bg-surface-elevated border-muted">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Star className="h-5 w-5 text-primary fill-current" />
                  <span className="text-2xl font-bold text-foreground">10+</span>
                </div>
                <p className="text-sm text-secondary">Años de experiencia</p>
              </Card>
              
              <Card className="p-6 text-center bg-surface-elevated border-muted">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Heart className="h-5 w-5 text-primary fill-current" />
                  <span className="text-2xl font-bold text-foreground">4</span>
                </div>
                <p className="text-sm text-secondary">Años en Santa Cruz</p>
              </Card>
            </div>

          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ¿Listo para probar el sushi de Lay?
            </h3>
            <p className="text-secondary mb-6">
              Ordena ahora y disfruta de la auténtica experiencia japonesa con toque brasileño
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/59162986325?text=¡Hola! Vi el video de la chef Lay y me interesa probar el Hot Philadelphia y otros platos. ¿Podrían enviarme el menú completo?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                <Heart className="mr-2 h-5 w-5" />
                Ordenar por WhatsApp
              </a>
              <a
                href="tel:+59162986325"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
              >
                Llamar ahora
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
