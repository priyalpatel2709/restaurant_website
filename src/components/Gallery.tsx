import pastaImage from "@/assets/pasta-dish.jpg";
import pizzaImage from "@/assets/pizza-special.jpg";
import diningImage from "@/assets/dining-setup.jpg";
import dessertImage from "@/assets/dessert-tiramisu.jpg";

const Gallery = () => {
  const images = [
    {
      src: pastaImage,
      alt: "Fresh Pasta with Basil",
      title: "Homemade Pasta",
      description: "Fresh pasta made daily with traditional Italian recipes"
    },
    {
      src: pizzaImage,
      alt: "Wood-fired Pizza",
      title: "Authentic Pizza",
      description: "Wood-fired pizza with the finest Italian ingredients"
    },
    {
      src: diningImage,
      alt: "Elegant Dining Setup",
      title: "Fine Dining",
      description: "Elegant atmosphere for memorable dining experiences"
    },
    {
      src: dessertImage,
      alt: "Tiramisu Dessert",
      title: "Traditional Desserts",
      description: "Classic Italian desserts made with authentic recipes"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Culinary Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the artistry behind every dish, from fresh ingredients to beautiful presentation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-warm bg-card animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-serif text-2xl font-semibold mb-2">
                    {image.title}
                  </h3>
                  <p className="text-sm opacity-90">
                    {image.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;