import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Instagram,
  Facebook,
  ExternalLink,
  Heart,
  Users,
  Camera,
  MessageCircle,
  Share2,
} from "lucide-react";
import { socialConfig } from "@/lib/social-config";

interface SocialMediaConfig {
  instagram: {
    username: string;
    followers: number;
    posts: number;
    url: string;
  };
  facebook: {
    pageName: string;
    followers: number;
    url: string;
  };
}

// Use the imported socialConfig from social-config.ts

interface SocialMediaCardProps {
  platform: "instagram" | "facebook";
  config: SocialMediaConfig;
  className?: string;
}

function SocialMediaCard({
  platform,
  config,
  className = "",
}: SocialMediaCardProps) {
  const platformConfig = config[platform];

  const getPlatformData = () => {
    if (platform === "instagram") {
      return {
        icon: Instagram,
        color: "bg-gradient-to-r from-purple-500 to-pink-500",
        hoverColor: "hover:from-purple-600 hover:to-pink-600",
        title: "Follow us on Instagram",
        description: "See our latest dishes and behind-the-scenes moments",
        stats: [
          { label: "Followers", value: platformConfig.followers, icon: Users },
          {
            label: "Posts",
            value: (platformConfig as any).posts || 0,
            icon: Camera,
          },
        ],
      };
    } else {
      return {
        icon: Facebook,
        color: "bg-gradient-to-r from-blue-500 to-blue-600",
        hoverColor: "hover:from-blue-600 hover:to-blue-700",
        title: "Like us on Facebook",
        description: "Stay updated with our latest news and events",
        stats: [
          { label: "Followers", value: platformConfig.followers, icon: Users },
          { label: "Reviews", value: 89, icon: MessageCircle },
        ],
      };
    }
  };

  const platformData = getPlatformData();
  const IconComponent = platformData.icon;

  const handleSocialClick = () => {
    window.open(platformConfig.url, "_blank", "noopener,noreferrer");
  };

  return (
    <Card
      className={`overflow-hidden transition-all duration-300 hover:shadow-golden ${className}`}
    >
      <div
        className={`${platformData.color} ${platformData.hoverColor} p-6 text-white`}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <IconComponent className="w-8 h-8" />
            <div>
              <h3 className="font-semibold text-lg">{platformData.title}</h3>
              <p className="text-sm opacity-90">{platformData.description}</p>
            </div>
          </div>
          <Badge variant="secondary" className="bg-white/20 text-white">
            <Share2 className="w-3 h-3 mr-1" />
            Follow
          </Badge>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          {platformData.stats.map((stat, index) => {
            const StatIcon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <StatIcon className="w-4 h-4 mr-1 opacity-80" />
                </div>
                <div className="text-2xl font-bold">
                  {stat.value.toLocaleString()}
                </div>
                <div className="text-xs opacity-80">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <Button
          onClick={handleSocialClick}
          className="w-full bg-white text-gray-800 hover:bg-white/90 font-semibold"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          {platform === "instagram"
            ? "Follow on Instagram"
            : "Like on Facebook"}
        </Button>
      </div>
    </Card>
  );
}

// Instagram feed preview component
export function InstagramFeed() {
  const recentPosts = [
    {
      id: 1,
      image: "/src/assets/pasta-dish.jpg",
      likes: 234,
      comments: 18,
      caption: "Our signature pasta dish - made fresh daily! 🍝✨",
    },
    {
      id: 2,
      image: "/src/assets/pizza-special.jpg",
      likes: 189,
      comments: 12,
      caption: "Friday night pizza special! 🍕🔥",
    },
    {
      id: 3,
      image: "/src/assets/dessert-tiramisu.jpg",
      likes: 312,
      comments: 25,
      caption: "Homemade tiramisu - the perfect ending to your meal! 🍰",
    },
  ];

  return (
    <Card className="bg-background border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Instagram className="w-5 h-5 text-pink-500" />
          Latest from Instagram
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recentPosts.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={post.image}
                  alt="Instagram post"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="flex items-center justify-center gap-4 mb-2">
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4 fill-current" />
                        <span className="text-sm">{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-sm">{post.comments}</span>
                      </div>
                    </div>
                    <p className="text-xs px-2">{post.caption}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Button
            onClick={() => window.open(socialConfig.instagram.url, "_blank")}
            variant="outline"
            className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white"
          >
            <Instagram className="w-4 h-4 mr-2" />
            View All Posts
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

// Facebook reviews component
export function FacebookReviews() {
  const reviews = [
    {
      id: 1,
      author: "Maria Rodriguez",
      rating: 5,
      text: "Amazing Italian food! The pasta is incredible and the service is top-notch. Highly recommend!",
      date: "2 days ago",
    },
    {
      id: 2,
      author: "John Smith",
      rating: 5,
      text: "Best pizza in town! Authentic Italian flavors and cozy atmosphere. Will definitely come back!",
      date: "1 week ago",
    },
    {
      id: 3,
      author: "Sarah Johnson",
      rating: 4,
      text: "Great food and friendly staff. The tiramisu is to die for! Perfect for date night.",
      date: "2 weeks ago",
    },
  ];

  return (
    <Card className="bg-background border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Facebook className="w-5 h-5 text-blue-600" />
          Facebook Reviews
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="border-b border-border pb-4 last:border-b-0"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-semibold text-primary">
                    {review.author}
                  </h4>
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 rounded-full ${
                          i < review.rating ? "bg-yellow-400" : "bg-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-xs text-muted-foreground">
                      {review.date}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{review.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Button
            onClick={() => window.open(socialConfig.facebook.url, "_blank")}
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
          >
            <Facebook className="w-4 h-4 mr-2" />
            View All Reviews
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

// Social media links component
export function SocialMediaLinks() {
  const socialLinks = [
    {
      platform: "instagram",
      icon: Instagram,
      url: socialConfig.instagram.url,
      color: "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500",
      label: "Instagram",
    },
    {
      platform: "facebook",
      icon: Facebook,
      url: socialConfig.facebook.url,
      color: "hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600",
      label: "Facebook",
    },
  ];

  return (
    <div className="flex gap-3">
      {socialLinks.map((social) => {
        const IconComponent = social.icon;
        return (
          <Button
            key={social.platform}
            onClick={() =>
              window.open(social.url, "_blank", "noopener,noreferrer")
            }
            variant="outline"
            size="icon"
            className={`w-12 h-12 ${social.color} text-black hover:text-white transition-all duration-300`}
            aria-label={`Follow us on ${social.label}`}
          >
            <IconComponent className="w-5 h-5" />
          </Button>
        );
      })}
    </div>
  );
}

// Main social media section component
export function SocialMediaSection() {
  return (
    <section id="social-media" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            Follow Our Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay connected with us on social media for daily specials,
            behind-the-scenes moments, and the latest updates from Bella Vista.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <SocialMediaCard
              platform="instagram"
              config={socialConfig}
              className="animate-fade-in"
            />
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <SocialMediaCard platform="facebook" config={socialConfig} />
            </div>
          </div>

          {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <InstagramFeed />
            <FacebookReviews />
          </div> */}
        </div>
      </div>
    </section>
  );
}
