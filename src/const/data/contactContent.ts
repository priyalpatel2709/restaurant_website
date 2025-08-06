import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const contactContent = {
  id: "contact",
  title: "Contact Us",
  subtitle:
    "We'd love to hear from you. Make a reservation or get in touch with any questions.",
  introTitle: "Get in Touch",
  introText:
    "Whether you're planning a romantic dinner, celebrating a special occasion, or organizing a private event, we're here to make your experience unforgettable.",
  contactInfo: [
    {
      icon: MapPin,
      title: "Location",
      details: ["123 Via Roma Street", "Little Italy, NY 10012"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["(555) 123-4567", "Reservations & Info"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@bellavista.com", "events@bellavista.com"],
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Thu: 5:00 PM - 10:00 PM", "Fri-Sun: 5:00 PM - 11:00 PM"],
    },
  ],
};
