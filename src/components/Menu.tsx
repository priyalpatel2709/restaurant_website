import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Menu = () => {
  const menuCategories = [
    {
      title: "Antipasti",
      items: [
        {
          name: "Bruschetta Classica",
          description: "Toasted bread with fresh tomatoes, basil, and garlic",
          price: "$12",
        },
        {
          name: "Antipasto Misto",
          description:
            "Selection of cured meats, cheeses, and marinated vegetables",
          price: "$18",
        },
        {
          name: "Burrata Caprese",
          description: "Fresh burrata with tomatoes, basil, and balsamic glaze",
          price: "$16",
        },
      ],
    },
    {
      title: "Pasta",
      items: [
        {
          name: "Spaghetti Carbonara",
          description:
            "Traditional Roman pasta with eggs, pancetta, and Pecorino Romano",
          price: "$22",
        },
        {
          name: "Penne Arrabbiata",
          description:
            "Spicy tomato sauce with garlic, red chilies, and fresh parsley",
          price: "$19",
        },
        {
          name: "Fettuccine Alfredo",
          description: "Fresh fettuccine in creamy Parmesan sauce",
          price: "$21",
        },
        {
          name: "Lasagna della Casa",
          description:
            "Traditional meat lasagna with rich Bolognese and béchamel",
          price: "$25",
        },
      ],
    },
    {
      title: "Pizza",
      items: [
        {
          name: "Margherita",
          description: "San Marzano tomatoes, fresh mozzarella, and basil",
          price: "$18",
        },
        {
          name: "Quattro Stagioni",
          description:
            "Four seasons pizza with artichokes, ham, mushrooms, and olives",
          price: "$24",
        },
        {
          name: "Diavola",
          description: "Spicy salami, tomatoes, mozzarella, and red peppers",
          price: "$22",
        },
      ],
    },
    {
      title: "Secondi Piatti",
      items: [
        {
          name: "Osso Buco Milanese",
          description: "Braised veal shanks with saffron risotto",
          price: "$35",
        },
        {
          name: "Branzino in Crosta",
          description: "Mediterranean sea bass baked in herb crust",
          price: "$29",
        },
        {
          name: "Bistecca alla Fiorentina",
          description: "Grilled T-bone steak with rosemary and olive oil",
          price: "$45",
        },
      ],
    },
    {
      title: "Dolci",
      items: [
        {
          name: "Tiramisu",
          description: "Classic Italian dessert with mascarpone and coffee",
          price: "$9",
        },
        {
          name: "Panna Cotta",
          description: "Vanilla panna cotta with berry coulis",
          price: "$8",
        },
        {
          name: "Cannoli Siciliani",
          description: "Traditional Sicilian pastry with ricotta filling",
          price: "$10",
        },
      ],
    },
  ];

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Menu
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Authentic Italian dishes prepared with the finest ingredients and
            traditional techniques.
          </p>
        </div>

        <Tabs
          defaultValue={menuCategories[0].title}
          className="w-full max-w-5xl mx-auto"
        >
          <TabsList className="flex flex-wrap justify-center gap-2 mb-8">
            {menuCategories.map((category) => (
              <TabsTrigger
                key={category.title}
                value={category.title}
                className="capitalize"
              >
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {menuCategories.map((category, categoryIndex) => (
            <TabsContent
              key={category.title}
              value={category.title}
              className="animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <Card className="shadow-warm">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-primary text-center">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {category.items.map((item, index) => (
                      <div
                        key={index}
                        className="border-b border-border pb-4 last:border-b-0"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-foreground text-lg">
                            {item.name}
                          </h3>
                          <span className="font-bold text-accent text-lg ml-4 flex-shrink-0">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Menu;
