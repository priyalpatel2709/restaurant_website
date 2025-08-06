import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const contactContent = {
  id: "contact",
  title: "Contact Us",
  subtitle:
    "We'd love to hear from you. Place an order or get in touch with any questions.",
  introTitle: "Get in Touch",
  introText:
    "Whether you're planning a family dinner, celebrating a special occasion, or just craving authentic Kathiyawadi, Punjabi, or Chinese cuisine, we're here to serve you.",
  contactInfo: [
    {
      icon: MapPin,
      title: "Location",
      details: ["Vatika Inn Restaurant", "Vadodara, Gujarat, India"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 98765 43210", "For Orders & Reservations"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@vatikainn.com", "orders@vatikainn.com"],
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Sun: 11:00 AM - 11:00 PM", "Dine-in & Takeaway Available"],
    },
  ],
};
