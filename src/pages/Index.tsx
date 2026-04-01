import { Heart, BookOpen, Shield, Users, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ebookMockup from "@/assets/ebook-mockup.jpg";
import heroCare from "@/assets/hero-care.jpg";
import authorImg from "@/assets/author-adriana.jpg";

const AMAZON_LINK = "https://www.amazon.com.br/gp/aw/d/B0FC5YTQSF/ref=tmm_kin_swatch_0?ie=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.AdkkfRAQzNm_a6k3eNpnqJfm9MMyr4lg5QCbpYAOYQFRgOJWH7kP6JpHP5xKCv_WAXUveBEZ3Jm75wwdfK2E5cAGE3LEf9J0R4QGPNrXIel71MNrfh4drsX6_DLQTL3gc1a-9t1iSFPprFLEeNApLe6kBQz8zNkrZLgPvyBh51Eec1FdXFYiKHlsZyQg3V5arJMUjbKzWDnUO7qcuE0Lrg.0Z7Noscm4QopLmlWEYwt8Y2s4hhSBXZOL69rgU2WkvY&qid=1775006368&sr=8-1";

const features = [
  { icon: Heart, title: "Cuidado Humanizado", desc: "Técnicas que unem o melhor da enfermagem ao poder do afeto" },
  { icon: Shield, title: "Segurança", desc: "Administração de medicamentos e prevenção de riscos" },
  { icon: BookOpen, title: "Guia Prático", desc: "Rotina, higiene e organização do dia a dia do cuidador" },
  { icon: Users, title: "Para Todos", desc: "Familiares, cuidadores iniciantes e estudantes" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={heroCare} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        </div>
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-left space-y-6 animate-fade-up">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-body tracking-wide">
                E-book disponível na Amazon
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-foreground">
                Cuidado com Amor
              </h1>
              <p className="text-lg md:text-xl font-display italic text-muted-foreground max-w-lg">
                Guia prático para cuidadores e familiares de idosos
              </p>
              <p className="text-base text-muted-foreground max-w-md font-body leading-relaxed">
                Mais que um manual — um companheiro de jornada para quem dedica sua vida a zelar por quem mais precisa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <a href={AMAZON_LINK} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="text-lg px-8 py-6 gap-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
                    Comprar na Amazon <ArrowRight className="w-5 h-5" />
                  </Button>
                </a>
              </div>
              <div className="flex items-center gap-1 justify-center lg:justify-start pt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
                <span className="ml-2 text-sm text-muted-foreground font-body">por Adriana Rodrigues de Oliveira</span>
              </div>
            </div>
            <div className="flex-shrink-0 animate-float" style={{ animationDelay: "0.3s" }}>
              <img
                src={ebookMockup}
                alt="E-book Cuidado com Amor no Kindle"
                width={400}
                height={500}
                className="w-72 md:w-96 drop-shadow-2xl rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center text-foreground mb-4">
            O que você vai encontrar
          </h2>
          <p className="text-center text-muted-foreground font-body mb-14 max-w-2xl mx-auto">
            Cada página foi escrita para transformar o ato de cuidar em um gesto de respeito e dignidade.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="bg-background rounded-2xl p-8 text-center space-y-4 border border-border hover:shadow-lg transition-shadow duration-300"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent">
                  <f.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground">{f.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the book */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
              Sobre o E-book
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed text-lg">
              <span className="font-display italic text-foreground">Cuidado com Amor</span> é o recurso ideal para familiares, 
              cuidadores iniciantes e estudantes que acreditam que o zelo técnico ganha força quando acompanhado de carinho.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              Desde a organização da rotina e higiene até a administração segura de medicamentos e prevenção de riscos, 
              descubra como aliar as melhores práticas da enfermagem ao poder do afeto, garantindo um envelhecimento pleno e humano.
            </p>
            <div className="pt-6">
              <a href={AMAZON_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="rounded-full px-8 py-6 text-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity gap-2">
                  Garanta o seu agora <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Author */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl mx-auto">
            <div className="flex-shrink-0">
              <img
                src={authorImg}
                alt="Adriana Rodrigues de Oliveira"
                loading="lazy"
                width={280}
                height={280}
                className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-accent shadow-lg"
              />
            </div>
            <div className="text-center md:text-left space-y-4">
              <h2 className="text-3xl font-display font-semibold text-foreground">
                Quem é Adriana Oliveira?
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed">
                Enfermeira por vocação, apaixonada por ensinar e cuidar com amor em todas as fases da vida. 
                Já atuou como enfermeira em uma Instituição de Longa Permanência para Idosos (ILPI), 
                onde aprendeu que o cuidado vai muito além de procedimentos — ele exige escuta, paciência, respeito e presença.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                Hoje, dedica sua vida a formar novos profissionais como professora no curso técnico em enfermagem 
                e tutora no curso de Cuidador de Idosos, preparando cuidadores conscientes, humanos e bem informados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
            Cuidar com amor é um dos maiores atos de generosidade
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto leading-relaxed">
            Que este material possa ser uma mão estendida nos seus dias difíceis, uma fonte de confiança nas dúvidas.
          </p>
          <a href={AMAZON_LINK} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="rounded-full px-10 py-7 text-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity gap-2 mt-4">
              Comprar E-book <ArrowRight className="w-5 h-5" />
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground font-body">
          <p>© {new Date().getFullYear()} Adriana Rodrigues de Oliveira. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
