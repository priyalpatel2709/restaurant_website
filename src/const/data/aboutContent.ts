import { Heart, Award, Users, Clock } from "lucide-react";

export const aboutContent = {
  id: "about",
  title: "About Bella Vista",
  subtitle:
    "For over three generations, the Rossi family has been dedicated to bringing authentic Italian flavors and hospitality to our community.",
  storyTitle: "Our Story",
  storyParagraphs: [
    `Bella Vista was founded in 1952 by Nonna Maria Rossi, who brought her family's treasured recipes from the hills of Tuscany to create a warm, welcoming space where food brings people together.`,
    `Today, her grandson Chef Antonio continues the tradition, sourcing the finest ingredients from Italy and local farms to create dishes that honor our heritage while embracing modern culinary techniques.`,
    `Our restaurant is more than just a place to dine - it's a celebration of Italian culture, family values, and the joy of sharing exceptional food with the people you love.`,
  ],
  quote: {
    text: `La cucina è il cuore della casa - The kitchen is the heart of the home. At Bella Vista, we extend our family table to welcome you into our home.`,
    author: "Chef Antonio Rossi",
  },
  features: [
    {
      icon: Heart,
      title: "Passion for Authentic Cuisine",
      description:
        "Every dish is prepared with love and respect for traditional Italian recipes passed down through generations.",
    },
    {
      icon: Award,
      title: "Award-Winning Excellence",
      description:
        "Recognized for outstanding food quality and service, maintaining the highest standards in Italian dining.",
    },
    {
      icon: Users,
      title: "Family Owned & Operated",
      description:
        "A family business dedicated to sharing the warmth and hospitality of Italian culture with every guest.",
    },
    {
      icon: Clock,
      title: "Fresh Daily Preparation",
      description:
        "All pasta, sauces, and desserts are made fresh daily using only the finest imported and local ingredients.",
    },
  ],
};
