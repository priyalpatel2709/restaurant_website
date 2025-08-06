# Social Media Integration Setup

## Overview

This restaurant website includes comprehensive social media integration for Instagram and Facebook. The system includes multiple components for different use cases and is fully configurable.

## Components

### 1. SocialMediaSection Component
- **Location**: Main page (between About and Contact)
- **Purpose**: Dedicated social media showcase section
- **Features**: 
  - Instagram and Facebook cards with stats
  - Instagram feed preview
  - Facebook reviews display
  - Call-to-action buttons

### 2. SocialMediaLinks Component
- **Location**: Footer and Contact page
- **Purpose**: Compact social media links
- **Features**:
  - Icon buttons for each platform
  - Hover effects with platform colors
  - Responsive design

### 3. SocialMediaCard Component
- **Location**: Social media section
- **Purpose**: Individual platform cards
- **Features**:
  - Platform-specific styling
  - Follower and post statistics
  - Direct links to social profiles

## Setup Instructions

### Step 1: Update Social Media URLs

1. **Open the config file**:
   ```bash
   src/lib/social-config.ts
   ```

2. **Update your social media URLs**:
   ```typescript
   export const socialConfig = {
     instagram: {
       username: "@your_restaurant_name",
       followers: 2847, // Update with your actual follower count
       posts: 156,      // Update with your actual post count
       url: "https://instagram.com/your_restaurant_name"
     },
     facebook: {
       pageName: "Your Restaurant Name",
       followers: 1234, // Update with your actual follower count
       url: "https://facebook.com/your_restaurant_page"
     }
   };
   ```

### Step 2: Update Instagram Feed Images

1. **Replace the sample images** in the InstagramFeed component:
   ```typescript
   // In src/components/SocialMedia.tsx
   const recentPosts = [
     {
       id: 1,
       image: '/path/to/your/actual/image1.jpg', // Replace with your images
       likes: 234,
       comments: 18,
       caption: 'Your actual Instagram caption'
     },
     // ... more posts
   ];
   ```

### Step 3: Update Facebook Reviews

1. **Replace the sample reviews** in the FacebookReviews component:
   ```typescript
   // In src/components/SocialMedia.tsx
   const reviews = [
     {
       id: 1,
       author: "Real Customer Name",
       rating: 5,
       text: "Your actual Facebook review text",
       date: "2 days ago"
     },
     // ... more reviews
   ];
   ```

## Configuration Options

### Social Media URLs
```typescript
instagram: {
  url: "https://instagram.com/your_username"
},
facebook: {
  url: "https://facebook.com/your_page_name"
}
```

### Statistics
```typescript
instagram: {
  followers: 2847, // Your actual follower count
  posts: 156       // Your actual post count
},
facebook: {
  followers: 1234  // Your actual follower count
}
```

### Display Settings
```typescript
general: {
  showInFooter: true,      // Show social links in footer
  showInContact: true,     // Show social links in contact section
  showInNavigation: false, // Show social icons in navigation
  floatingButtons: {
    enabled: false,         // Enable floating social buttons
    position: "bottom-right",
    platforms: ["instagram", "facebook"]
  }
}
```

### Feed Settings
```typescript
instagram: {
  feed: {
    enabled: true,
    postsToShow: 3,        // Number of posts to display
    autoRefresh: false,     // Auto-refresh feed data
    refreshInterval: 300000 // Refresh interval in milliseconds
  }
}
```

## Features

### Instagram Integration
- **Feed Preview**: Shows recent Instagram posts
- **Follower Stats**: Displays current follower count
- **Post Count**: Shows total number of posts
- **Direct Links**: Links directly to your Instagram profile
- **Hover Effects**: Beautiful hover animations on posts

### Facebook Integration
- **Reviews Display**: Shows recent Facebook reviews
- **Follower Stats**: Displays current follower count
- **Rating System**: Visual star ratings for reviews
- **Direct Links**: Links directly to your Facebook page

### Responsive Design
- **Mobile Optimized**: Works perfectly on all devices
- **Touch Friendly**: Easy to use on touch devices
- **Fast Loading**: Optimized for performance

### Customization
- **Color Schemes**: Platform-specific colors (Instagram pink/purple, Facebook blue)
- **Animations**: Smooth hover and transition effects
- **Layout Options**: Flexible grid layouts

## Best Practices

### 1. Keep Content Fresh
- Update follower counts regularly
- Replace Instagram feed images with your actual posts
- Update Facebook reviews with real customer feedback

### 2. Use High-Quality Images
- Use high-resolution images for Instagram feed
- Ensure images are properly cropped and optimized
- Maintain consistent aspect ratios

### 3. Engage with Followers
- Respond to comments and messages
- Post regularly to keep content fresh
- Use relevant hashtags and captions

### 4. Monitor Performance
- Track click-through rates on social links
- Monitor follower growth
- Analyze engagement metrics

## Troubleshooting

### Social Links Not Working
1. **Check URLs**: Verify social media URLs are correct
2. **Test Links**: Click links to ensure they work
3. **Update Config**: Make sure config file is saved

### Images Not Loading
1. **Check File Paths**: Verify image paths are correct
2. **Image Format**: Use JPG, PNG, or WebP formats
3. **File Size**: Optimize images for web

### Stats Not Updating
1. **Update Config**: Change statistics in `social-config.ts`
2. **Refresh Page**: Changes require page refresh
3. **Check Console**: Look for any JavaScript errors

## Integration with Analytics

You can track social media clicks by adding analytics:

```typescript
const handleSocialClick = (platform: string) => {
  // Track the click
  if (typeof gtag !== 'undefined') {
    gtag('event', 'click', {
      event_category: 'social_media',
      event_label: `${platform}_link`
    });
  }
  
  // Open the social media page
  window.open(url, '_blank', 'noopener,noreferrer');
};
```

## Advanced Features

### Real Instagram API Integration
For real Instagram feed data, you can integrate with the Instagram Basic Display API:

```typescript
// Example Instagram API integration
async function fetchInstagramPosts() {
  const response = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${INSTAGRAM_ACCESS_TOKEN}`);
  const data = await response.json();
  return data.data;
}
```

### Facebook Reviews API
For real Facebook reviews, you can use the Facebook Graph API:

```typescript
// Example Facebook API integration
async function fetchFacebookReviews() {
  const response = await fetch(`https://graph.facebook.com/v18.0/${PAGE_ID}/ratings?access_token=${FACEBOOK_ACCESS_TOKEN}`);
  const data = await response.json();
  return data.data;
}
```

## Support

If you need help setting up the social media integration:

1. **Check the configuration** in `src/lib/social-config.ts`
2. **Verify your social media URLs** are correct
3. **Test the social links** manually
4. **Check browser console** for any errors

The system is designed to be robust and will work even if some social media platforms are not configured. 