// Google Rating Configuration
// Update these settings to match your restaurant's Google Business listing

export const googleConfig = {
  // Your Google Place ID - Find this in your Google Business listing
  placeId: "ChIJN1t_tDeuEmsRUsoyG83frY4", // Replace with your actual Place ID
  
  // Restaurant name for fallback URL
  restaurantName: "Bella Vista Restaurant",
  
  // Restaurant address for fallback URL
  restaurantAddress: "123 Main Street, City, State 12345",
  
  // Current rating stats (update these with your actual stats)
  ratingStats: {
    averageRating: 4.8,
    totalReviews: 127,
    ratingBreakdown: {
      5: 89,
      4: 25,
      3: 8,
      2: 3,
      1: 2
    }
  },
  
  // Review prompt settings
  reviewPrompt: {
    enabled: true,
    showAfterScroll: 500, // Show prompt after scrolling 500px
    dismissible: true,
    message: "Enjoyed your meal? Share your experience and help others discover our authentic Italian cuisine"
  },
  
  // Floating button settings
  floatingButton: {
    enabled: true,
    showAfterScroll: 300, // Show button after scrolling 300px
    position: "bottom-left" as "bottom-left" | "bottom-right", // "bottom-left" | "bottom-right"
    text: "Rate Us"
  }
} as const;

// Helper function to get Google review URL
export function getGoogleReviewUrl(placeId?: string, restaurantName?: string): string {
  const id = placeId || googleConfig.placeId;
  const name = restaurantName || googleConfig.restaurantName;
  
  if (id && id !== "ChIJN1t_tDeuEmsRUsoyG83frY4") {
    // Use Place ID if available and not the default
    return `https://search.google.com/local/writereview?placeid=${id}`;
  } else {
    // Fallback to search-based URL
    return `https://search.google.com/local/writereview?placeid=${encodeURIComponent(name)}`;
  }
}

// Helper function to get Google Maps URL
export function getGoogleMapsUrl(placeId?: string, restaurantName?: string): string {
  const id = placeId || googleConfig.placeId;
  const name = restaurantName || googleConfig.restaurantName;
  
  if (id && id !== "ChIJN1t_tDeuEmsRUsoyG83frY4") {
    return `https://www.google.com/maps/place/?q=place_id:${id}`;
  } else {
    return `https://www.google.com/maps/search/${encodeURIComponent(name)}`;
  }
}

// Helper function to get Google Business URL
export function getGoogleBusinessUrl(placeId?: string): string {
  const id = placeId || googleConfig.placeId;
  return `https://business.google.com/dashboard/l/0${id}`;
} 