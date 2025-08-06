import { Button } from "@/components/ui/button";
import { heroContent } from "@/const/data/heroContent";


const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id={heroContent.id}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroContent.image})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          {heroContent.title}
        </h1>
        <p className="text-xl md:text-2xl mb-4 opacity-90 animate-slide-up">
          {heroContent.subtitle}
        </p>
        <p className="text-lg md:text-xl mb-8 opacity-80 max-w-2xl mx-auto animate-slide-up">
          {heroContent.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
          {heroContent.buttons.map((btn, index) => (
            <Button
              key={index}
              size="lg"
              variant={btn.variant === "outline" ? "outline" : undefined}
              className={
                btn.variant === "outline"
                  ? "border-white text-white hover:bg-white hover:text-primary px-8 py-3"
                  : "bg-gradient-accent text-primary hover:opacity-90 font-semibold px-8 py-3"
              }
              onClick={() => scrollToSection(btn.href)}
            >
              {btn.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-80">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
