import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ExternalLink, MessageCircle } from 'lucide-react';
import { googleConfig, getGoogleReviewUrl } from '@/lib/google-config';

interface GoogleRatingProps {
  googlePlaceId?: string;
  restaurantName?: string;
  className?: string;
}

export function GoogleRating({ 
  googlePlaceId = googleConfig.placeId,
  restaurantName = googleConfig.restaurantName,
  className = ""
}: GoogleRatingProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleRateClick = () => {
    const url = getGoogleReviewUrl(googlePlaceId, restaurantName);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className={`bg-gradient-subtle text-primary hover:shadow-primary transition-all duration-300 ${className}`}>
      <CardHeader className="text-center pb-4">
        <div className="flex justify-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-6 h-6 fill-golden text-golden"
            />
          ))}
        </div>
        <CardTitle className="text-xl font-serif">
          Rate Your Experience
        </CardTitle>
        <p className="text-sm opacity-90">
          Help others discover our authentic Italian cuisine
        </p>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Badge variant="secondary" className="bg-white/20 text-primary">
            <MessageCircle className="w-4 h-4 mr-1" />
            Share Your Review
          </Badge>
        </div>
        
        <Button
          onClick={handleRateClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="bg-white text-primary hover:bg-white/90 font-semibold px-6 py-3 transition-all duration-300 group"
        >
          <ExternalLink className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
          Rate on Google
        </Button>
        
        <p className="text-xs opacity-75">
          Your feedback helps us improve and helps others find us
        </p>
      </CardContent>
    </Card>
  );
}

// Floating rating button component
export function FloatingRatingButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > googleConfig.floatingButton.showAfterScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRateClick = () => {
    const url = getGoogleReviewUrl();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (!isVisible) return null;

  const getPositionClass = () => {
    switch (googleConfig.floatingButton.position) {
      case "bottom-right":
        return "bottom-4 right-4";
      case "bottom-left":
      default:
        return "bottom-4 left-4";
    }
  };

  const positionClass = getPositionClass();

  return (
    <Button
      onClick={handleRateClick}
      className={`fixed ${positionClass} z-50 bg-gradient-accent text-primary hover:opacity-90 shadow-golden rounded-full p-3 transition-all duration-300 group`}
      size="lg"
    >
      <div className="flex items-center gap-2">
        <Star className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline font-semibold">{googleConfig.floatingButton.text}</span>
      </div>
    </Button>
  );
}

// Rating stats component
export function RatingStats() {
  const stats = googleConfig.ratingStats;

  return (
    <Card className="bg-background border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Star className="w-5 h-5 fill-golden text-golden" />
          Customer Ratings
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">{stats.averageRating}</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(stats.averageRating) ? 'fill-golden text-golden' : 'text-muted-foreground'}`}
                />
              ))}
            </div>
            <div className="text-sm text-muted-foreground">
              {stats.totalReviews} reviews
            </div>
          </div>
        </div>

        <div className="space-y-2">
          {Object.entries(stats.ratingBreakdown).reverse().map(([rating, count]) => (
            <div key={rating} className="flex items-center gap-2">
              <span className="text-sm w-4">{rating}</span>
              <div className="flex-1 bg-muted rounded-full h-2">
                <div
                  className="bg-golden h-2 rounded-full"
                  style={{
                    width: `${(count / stats.totalReviews) * 100}%`
                  }}
                />
              </div>
              <span className="text-sm text-muted-foreground w-8 text-right">
                {count}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// Review prompt component
export function ReviewPrompt() {
  const [showPrompt, setShowPrompt] = useState(true);

  if (!showPrompt) return null;

  return (
    <Card className="bg-gradient-subtle border-border">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Enjoyed your meal?
            </h3>
            <p className="text-muted-foreground mb-4">
              Share your experience and help others discover our authentic Italian cuisine
            </p>
            <div className="flex gap-2">
              <Button
                onClick={() => {
                  const url = `https://search.google.com/local/writereview?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4`;
                  window.open(url, '_blank', 'noopener,noreferrer');
                }}
                className="bg-gradient-accent text-primary hover:opacity-90"
              >
                <Star className="w-4 h-4 mr-2" />
                Write a Review
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowPrompt(false)}
              >
                Maybe Later
              </Button>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowPrompt(false)}
            className="text-muted-foreground hover:text-foreground"
          >
            ✕
          </Button>
        </div>
      </CardContent>
    </Card>
  );
} 