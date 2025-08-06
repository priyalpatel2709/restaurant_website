import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { menuContent } from "@/const/data/menuContent";

const Menu = () => {
  const { title, subtitle, categories } = menuContent;

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <Tabs
          defaultValue={categories[0].title}
          className="w-full max-w-5xl mx-auto"
        >
          <TabsList className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <TabsTrigger
                key={category.title}
                value={category.title}
                className="capitalize"
              >
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category, categoryIndex) => (
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
