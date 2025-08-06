import pastaImage from "@/assets/pasta-dish.jpg";
import pizzaImage from "@/assets/pizza-special.jpg";
import diningImage from "@/assets/dining-setup.jpg";
import dessertImage from "@/assets/dessert-tiramisu.jpg";

export const galleryContent = {
  title: "Our Culinary Journey",
  subtitle:
    "Discover the artistry behind every dish, from fresh ingredients to beautiful presentation",
  images: [
    {
      src: pastaImage,
      alt: "Fresh Pasta with Basil",
      title: "Homemade Pasta",
      description: "Fresh pasta made daily with traditional Italian recipes",
    },
    {
      src: pizzaImage,
      alt: "Wood-fired Pizza",
      title: "Authentic Pizza",
      description: "Wood-fired pizza with the finest Italian ingredients",
    },
    {
      src: diningImage,
      alt: "Elegant Dining Setup",
      title: "Fine Dining",
      description: "Elegant atmosphere for memorable dining experiences",
    },
    {
      src: dessertImage,
      alt: "Tiramisu Dessert",
      title: "Traditional Desserts",
      description: "Classic Italian desserts made with authentic recipes",
    },
  ],
};
