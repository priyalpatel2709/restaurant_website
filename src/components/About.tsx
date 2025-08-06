import { Card, CardContent } from "@/components/ui/card";
import { Heart, Award, Users, Clock } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Passion for Authentic Cuisine",
      description: "Every dish is prepared with love and respect for traditional Italian recipes passed down through generations."
    },
    {
      icon: Award,
      title: "Award-Winning Excellence",
      description: "Recognized for outstanding food quality and service, maintaining the highest standards in Italian dining."
    },
    {
      icon: Users,
      title: "Family Owned & Operated",
      description: "A family business dedicated to sharing the warmth and hospitality of Italian culture with every guest."
    },
    {
      icon: Clock,
      title: "Fresh Daily Preparation",
      description: "All pasta, sauces, and desserts are made fresh daily using only the finest imported and local ingredients."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
              About Bella Vista
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              For over three generations, the Rossi family has been dedicated to bringing 
              authentic Italian flavors and hospitality to our community.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in">
              <h3 className="font-serif text-3xl font-semibold text-primary mb-6">
                Our Story
              </h3>
              <div className="space-y-4 text-foreground">
                <p className="leading-relaxed">
                  Bella Vista was founded in 1952 by Nonna Maria Rossi, who brought her family's 
                  treasured recipes from the hills of Tuscany to create a warm, welcoming space 
                  where food brings people together.
                </p>
                <p className="leading-relaxed">
                  Today, her grandson Chef Antonio continues the tradition, sourcing the finest 
                  ingredients from Italy and local farms to create dishes that honor our heritage 
                  while embracing modern culinary techniques.
                </p>
                <p className="leading-relaxed">
                  Our restaurant is more than just a place to dine - it's a celebration of 
                  Italian culture, family values, and the joy of sharing exceptional food 
                  with the people you love.
                </p>
              </div>
            </div>

            <div className="animate-scale-in">
              <div className="bg-gradient-hero rounded-lg p-8 text-cream">
                <blockquote className="text-xl italic font-serif mb-4">
                  "La cucina è il cuore della casa - The kitchen is the heart of the home. 
                  At Bella Vista, we extend our family table to welcome you into our home."
                </blockquote>
                <cite className="text-lg font-semibold">
                  - Chef Antonio Rossi
                </cite>
              </div>
            </div>
          </div>

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