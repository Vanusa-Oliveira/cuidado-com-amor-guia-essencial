import { Heart, BookOpen, Shield, Users, Star, ArrowRight, Sparkles, Quote, ChevronDown, Stethoscope, Clock, Droplets, Pill } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
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

const topics = [
  { icon: Clock, title: "Rotina do Cuidador", desc: "Organização prática do dia a dia para otimizar o cuidado" },
  { icon: Droplets, title: "Higiene e Bem-estar", desc: "Procedimentos seguros de higiene que preservam a dignidade" },
  { icon: Pill, title: "Medicamentos", desc: "Administração segura e controle correto de medicações" },
  { icon: Stethoscope, title: "Prevenção de Riscos", desc: "Identificação e prevenção de situações de risco ao idoso" },
];

const highlights = [
  "Linguagem leve e acolhedora",
  "Experiência real em ILPI",
  "Para cuidadores iniciantes",
  "Práticas acessíveis",
];

const stats = [
  { value: "50+", label: "Páginas de conteúdo" },
  { value: "10+", label: "Capítulos práticos" },
  { value: "5★", label: "Avaliação Amazon" },
];

const Index = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 opacity-10">
          <img src={heroCare} alt="" className="w-full h-full object-cover scale-110" aria-hidden="true" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/50 to-background" />
        <div className="relative container mx-auto px-4 py-12 md:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="flex-1 text-center lg:text-left space-y-5 animate-fade-up">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs sm:text-sm font-body tracking-wide">
                <Sparkles className="w-3.5 h-3.5" /> E-book disponível na Amazon
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-foreground">
                <span className="animated-underline visible">Cuidando com</span> <span className="text-primary">Amor</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl font-display italic text-muted-foreground max-w-lg mx-auto lg:mx-0">
                Guia prático para <strong>cuidadores</strong> e <strong>familiares</strong> de idosos
              </p>
              <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto lg:mx-0 font-body leading-relaxed">
                Mais que um manual, um <strong>companheiro de jornada</strong> para quem dedica sua vida a zelar por quem mais precisa.
              </p>
              <p className="text-xs sm:text-sm text-primary font-feature font-semibold max-w-md mx-auto lg:mx-0 bg-primary/10 rounded-lg px-4 py-2.5 border border-primary/20">
                📖 Um guia prático com mais de 50 páginas de orientações baseadas nas melhores práticas de enfermagem.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
                <a href={AMAZON_LINK} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 gap-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-all hover:scale-105 shadow-lg">
                    Comprar na Amazon <ArrowRight className="w-5 h-5" />
                  </Button>
                </a>
              </div>
              <div className="flex items-center gap-1 justify-center lg:justify-start pt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-primary text-primary" />
                ))}
                <span className="ml-2 text-xs sm:text-sm text-muted-foreground font-body">por <strong>Adriana Rodrigues de Oliveira</strong></span>
              </div>
            </div>
            <div className="flex-shrink-0 animate-float" style={{ animationDelay: "0.3s" }}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/30 rounded-3xl blur-2xl" />
                <img
                  src={ebookMockup}
                  alt="Capa do E-book Cuidando com Amor"
                  width={320}
                  height={420}
                  className="relative w-48 sm:w-60 md:w-72 drop-shadow-2xl rounded-2xl border-2 border-accent"
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
            <ChevronDown className="w-6 h-6 text-muted-foreground/50" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 sm:py-10 bg-primary/10 border-y border-primary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label} className="animate-on-scroll">
                <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary">{s.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground font-body mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights ribbon */}
      <section className="py-4 sm:py-6 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 md:gap-12">
            {highlights.map((h) => (
              <span key={h} className="flex items-center gap-1.5 text-xs sm:text-sm font-body text-accent-foreground">
                <Sparkles className="w-3.5 h-3.5 text-primary" /> {h}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features - "O que você vai encontrar" */}
      <section className="py-14 sm:py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="animate-on-scroll text-2xl sm:text-3xl md:text-[2.75rem] font-display font-semibold text-center text-foreground mb-3 sm:mb-4 leading-tight">
            O que você vai <span className="animated-underline text-primary">encontrar</span>
          </h2>
          <p className="animate-on-scroll text-center text-muted-foreground font-feature text-sm sm:text-lg mb-10 sm:mb-14 max-w-2xl mx-auto">
            Cada página foi escrita para transformar o ato de <strong>cuidar</strong> em um gesto de <strong>respeito</strong> e <strong>dignidade</strong>.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="animate-slide-in bg-background rounded-2xl p-6 sm:p-8 text-center space-y-3 sm:space-y-4 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 group"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-accent group-hover:bg-primary/15 transition-colors">
                  <f.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-feature font-bold text-foreground">{f.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground font-feature leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Detail Section */}
      <section className="py-14 sm:py-20">
        <div className="container mx-auto px-4">
          <h2 className="animate-on-scroll text-2xl sm:text-3xl md:text-[2.75rem] font-display font-semibold text-center text-foreground mb-3 sm:mb-4 leading-tight">
            Tópicos <span className="animated-underline text-primary">abordados</span>
          </h2>
          <p className="animate-on-scroll text-center text-muted-foreground font-feature text-sm sm:text-lg mb-10 sm:mb-14 max-w-2xl mx-auto">
            Conteúdo <strong>completo</strong> e <strong>organizado</strong> para facilitar o seu aprendizado.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 max-w-3xl mx-auto">
            {topics.map((t, i) => (
              <div
                key={t.title}
                className="animate-slide-in flex items-start gap-4 bg-card rounded-xl p-5 sm:p-6 border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                  <t.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-feature font-bold text-foreground mb-1">{t.title}</h3>
                  <p className="text-sm text-muted-foreground font-feature leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the book */}
      <section className="py-14 sm:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-5 sm:space-y-6 animate-on-scroll">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold text-foreground">
              Sobre o <span className="animated-underline text-primary">E-book</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed text-sm sm:text-lg">
              <span className="font-display italic text-foreground">Cuidando com Amor</span> é o recurso ideal para <strong>familiares</strong>, 
              <strong> cuidadores iniciantes</strong> e <strong>estudantes</strong> que acreditam que o zelo técnico ganha força quando acompanhado de carinho.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed text-sm sm:text-base">
              Desde a organização da <strong>rotina e higiene</strong> até a <strong>administração segura de medicamentos</strong> e prevenção de riscos, 
              descubra como aliar as melhores práticas da enfermagem ao poder do afeto, garantindo um <strong>envelhecimento pleno e humano</strong>.
            </p>
            <div className="pt-4 sm:pt-6">
              <a href={AMAZON_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full sm:w-auto rounded-full px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg bg-primary text-primary-foreground hover:opacity-90 transition-all hover:scale-105 shadow-lg gap-2">
                  Garanta o seu agora <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-12 sm:py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-4 animate-on-scroll">
            <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-primary/40 mx-auto" />
            <p className="text-lg sm:text-xl md:text-2xl font-display italic text-foreground leading-relaxed px-2">
              "Criei este e-book para levar até você <strong>orientações práticas, acessíveis e reais</strong>, com o mesmo carinho com que ensino meus alunos."
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground font-body">Adriana Rodrigues de Oliveira</p>
          </div>
        </div>
      </section>

      {/* Author */}
      <section className="py-14 sm:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 max-w-4xl mx-auto animate-on-scroll">
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-br from-primary/25 to-accent/40 rounded-full blur-xl" />
                <img
                  src={authorImg}
                  alt="Adriana Rodrigues de Oliveira"
                  loading="lazy"
                  width={240}
                  height={240}
                  className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary/30 shadow-lg"
                />
              </div>
            </div>
            <div className="text-center md:text-left space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground">
                Quem é <span className="animated-underline text-primary">Adriana Oliveira</span>?
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground font-body leading-relaxed">
                <strong>Enfermeira por vocação</strong>, apaixonada por ensinar e cuidar com amor em todas as fases da vida. 
                Já atuou como enfermeira em uma <strong>Instituição de Longa Permanência para Idosos (ILPI)</strong>, 
                onde aprendeu que o cuidado vai muito além de procedimentos, ele exige <strong>escuta, paciência, respeito e presença</strong>.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground font-body leading-relaxed">
                Hoje, dedica sua vida a formar novos profissionais como <strong>professora no curso técnico em enfermagem</strong> 
                e <strong>tutora no curso de Cuidador de Idosos</strong>, preparando cuidadores conscientes, humanos e bem informados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
        <div className="relative container mx-auto px-4 text-center space-y-4 sm:space-y-6 animate-on-scroll">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold text-foreground">
            Cuidar com amor é um dos maiores atos de <span className="text-primary">generosidade</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground font-body max-w-xl mx-auto leading-relaxed">
            Que este material possa ser uma <strong>mão estendida</strong> nos seus dias difíceis, uma <strong>fonte de confiança</strong> nas dúvidas.
          </p>
          <a href={AMAZON_LINK} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="w-full sm:w-auto rounded-full px-8 sm:px-10 py-6 sm:py-7 text-lg sm:text-xl bg-primary text-primary-foreground hover:opacity-90 transition-all hover:scale-105 shadow-xl gap-2 mt-4">
              Comprar E-book <ArrowRight className="w-5 h-5" />
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-xs sm:text-sm text-muted-foreground font-body">
          <p>© {new Date().getFullYear()} Adriana Rodrigues de Oliveira. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
