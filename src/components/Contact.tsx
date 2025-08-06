import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["123 Via Roma Street", "Little Italy, NY 10012"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["(555) 123-4567", "Reservations & Info"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@bellavista.com", "events@bellavista.com"]
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Thu: 5:00 PM - 10:00 PM", "Fri-Sun: 5:00 PM - 11:00 PM"]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you. Make a reservation or get in touch with any questions.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-10">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl font-semibold text-primary mb-6">
                  Get in Touch
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Whether you're planning a romantic dinner, celebrating a special occasion, 
                  or organizing a private event, we're here to make your experience unforgettable.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index} 
                    className="shadow-warm animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <info.icon className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary mb-2">
                            {info.title}
                          </h4>
                          {info.details.map((detail, detailIndex) => (
                            <p 
                              key={detailIndex} 
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

              {/* <Card className="shadow-warm bg-gradient-hero text-cream">
                <CardContent className="p-6">
                  <h4 className="font-serif text-xl font-semibold mb-3">
                    Reserve Your Table
                  </h4>
                  <p className="text-sm opacity-90 mb-4">
                    Call us at (555) 123-4567 or book online through our reservation system.
                  </p>
                  <Button className="bg-golden text-primary hover:bg-golden/90">
                    Book Online
                  </Button>
                </CardContent>
              </Card> */}
            </div>

            {/* Contact Form */}
            {/* <div className="animate-scale-in">
              <Card className="shadow-warm">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-primary">
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                          First Name
                        </label>
                        <Input 
                          id="firstName" 
                          type="text" 
                          required 
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                          Last Name
                        </label>
                        <Input 
                          id="lastName" 
                          type="text" 
                          required 
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        required 
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone (Optional)
                      </label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <Textarea 
                        id="message" 
                        rows={4} 
                        required 
                        className="w-full resize-none"
                        placeholder="Tell us about your reservation needs or any questions you have..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-accent text-primary hover:opacity-90"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;