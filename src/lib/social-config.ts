// Social Media Configuration
// Update these settings to match your restaurant's social media accounts

export const socialConfig = {
  instagram: {
    username: "@bellavista_restaurant",
    followers: 2847,
    posts: 156,
    url: "https://instagram.com/bellavista_restaurant",
    // Instagram feed settings
    feed: {
      enabled: true,
      postsToShow: 3,
      autoRefresh: false, // Set to true if you want to fetch real data
      refreshInterval: 300000 // 5 minutes
    }
  },
  facebook: {
    pageName: "Bella Vista Restaurant",
    followers: 1234,
    url: "https://facebook.com/bellavista_restaurant",
    // Facebook reviews settings
    reviews: {
      enabled: true,
      reviewsToShow: 3,
      autoRefresh: false
    }
  },
  // General social media settings
  general: {
    showInFooter: true,
    showInContact: true,
    showInNavigation: false, // Set to true to add social icons to navigation
    floatingButtons: {
      enabled: false,
      position: "bottom-right" as const,
      platforms: ["instagram", "facebook"]
    }
  }
} as const;

// Helper function to get social media URL
export function getSocialUrl(platform: 'instagram' | 'facebook'): string {
  return socialConfig[platform].url;
}

// Helper function to get social media username
export function getSocialUsername(platform: 'instagram' | 'facebook'): string {
  const config = socialConfig[platform];
  return 'username' in config ? config.username : config.pageName;
}

// Helper function to get follower count
export function getFollowerCount(platform: 'instagram' | 'facebook'): number {
  return socialConfig[platform].followers;
}

// Helper function to format follower count
export function formatFollowerCount(count: number): string {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M`;
  } else if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K`;
  }
  return count.toString();
}

// Helper function to check if social media is enabled
export function isSocialEnabled(platform: 'instagram' | 'facebook'): boolean {
  return socialConfig[platform].url.length > 0;
}

// Helper function to get all enabled platforms
export function getEnabledPlatforms(): Array<'instagram' | 'facebook'> {
  return (['instagram', 'facebook'] as const).filter(isSocialEnabled);
} 