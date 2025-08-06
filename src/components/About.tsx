import { Card, CardContent } from "@/components/ui/card";
import { aboutContent } from "@/const/data/aboutContent";

const About = () => {
  const { id, title, subtitle, storyTitle, storyParagraphs, quote, features } =
    aboutContent;

  return (
    <section id={id} className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title & Subtitle */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
              {title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {subtitle}
            </p>
          </div>

          {/* Story + Quote */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in">
              <h3 className="font-serif text-3xl font-semibold text-primary mb-6">
                {storyTitle}
              </h3>
              <div className="space-y-4 text-foreground">
                {storyParagraphs.map((para, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            <div className="animate-scale-in">
              <div className="bg-gradient-hero rounded-lg p-8 text-cream">
                <blockquote className="text-xl italic font-serif mb-4">
                  "{quote.text}"
                </blockquote>
                <cite className="text-lg font-semibold">- {quote.author}</cite>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="shadow-warm text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <feature.icon className="h-12 w-12 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
