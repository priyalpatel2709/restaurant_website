import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactContent } from "@/const/data/contactContent";
import { GoogleRating } from "@/components/GoogleRating";
import { SocialMediaLinks } from "@/components/SocialMedia";

const Contact = () => {
  const { id, title, subtitle, introTitle, introText, contactInfo } =
    contactContent;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <section id={id} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left Column - Get in Touch + Contact Cards */}
            <div className="space-y-8">
              <Card className="shadow-warm animate-fade-in">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-primary">
                    {introTitle}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {introText}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {contactInfo.map((info, index) => (
                      <Card
                        key={index}
                        className="shadow-md animate-fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start space-x-4">
                            <info.icon className="h-6 w-6 text-accent" />
                            <div>
                              <h4 className="font-semibold text-primary mb-2">
                                {info.title}
                              </h4>
                              {info.details.map((detail, i) => (
                                <p
                                  key={i}
                                  className="text-muted-foreground text-sm"
                                >
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Rate Your Experience (same height, wrapped in Card) */}
            <div className="space-y-8 h-full flex flex-col">
              <Card className="shadow-warm h-full flex flex-col animate-fade-in">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-primary">
                    Rate Your Experience
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex items-center justify-center">
                  <GoogleRating />
                </CardContent>
              </Card>

              {/* Optional: Add Social Links inside a card */}
              {/* <Card className="shadow-warm animate-fade-in">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-primary mb-4">
                    Connect With Us
                  </h4>
                  <SocialMediaLinks />
                  <p className="text-sm text-muted-foreground mt-3">
                    Follow us for daily specials and behind-the-scenes moments
                  </p>
                </CardContent>
              </Card> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
