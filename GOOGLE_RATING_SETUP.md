# Google Rating System Setup

## Overview

This restaurant website includes a comprehensive Google Rating system that encourages customers to leave reviews on Google. The system includes multiple components for different use cases.

## Components

### 1. GoogleRating Component
- **Location**: Contact page (right side)
- **Purpose**: Main rating card with call-to-action
- **Features**: 
  - 5-star visual display
  - "Rate on Google" button
  - Gradient background with hover effects

### 2. FloatingRatingButton Component
- **Location**: Fixed position (bottom-left/right)
- **Purpose**: Always-accessible rating button
- **Features**:
  - Appears after scrolling 300px
  - Configurable position
  - Responsive design

### 3. RatingStats Component
- **Location**: Contact page (below rating card)
- **Purpose**: Display current rating statistics
- **Features**:
  - Average rating display
  - Star rating visualization
  - Rating breakdown chart
  - Total review count

### 4. ReviewPrompt Component
- **Location**: About page (bottom)
- **Purpose**: Gentle review request
- **Features**:
  - Dismissible prompt
  - Encouraging message
  - Call-to-action buttons

## Setup Instructions

### Step 1: Get Your Google Place ID

1. **Find your Google Business listing**:
   - Go to [Google My Business](https://business.google.com/)
   - Sign in with your business account
   - Select your restaurant

2. **Get the Place ID**:
   - Method 1: Use Google's Place ID Finder
     - Go to [Google Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
     - Search for your restaurant
     - Copy the Place ID

   - Method 2: From Google Maps URL
     - Search for your restaurant on Google Maps
     - Copy the URL
     - Look for `place_id=` in the URL
     - Copy the ID after `place_id=`

### Step 2: Update Configuration

1. **Open the config file**:
   ```bash
   src/lib/google-config.ts
   ```

2. **Update your settings**:
   ```typescript
   export const googleConfig = {
     // Replace with your actual Google Place ID
     placeId: "YOUR_ACTUAL_PLACE_ID_HERE",
     
     // Update with your restaurant details
     restaurantName: "Your Restaurant Name",
     restaurantAddress: "Your Restaurant Address",
     
     // Update with your actual rating stats
     ratingStats: {
       averageRating: 4.8, // Your actual average
       totalReviews: 127,   // Your actual review count
       ratingBreakdown: {
         5: 89,  // Number of 5-star reviews
         4: 25,  // Number of 4-star reviews
         3: 8,   // Number of 3-star reviews
         2: 3,   // Number of 2-star reviews
         1: 2    // Number of 1-star reviews
       }
     },
     
     // Customize behavior
     reviewPrompt: {
       enabled: true,
       showAfterScroll: 500,
       dismissible: true,
       message: "Your custom message here"
     },
     
     floatingButton: {
       enabled: true,
       showAfterScroll: 300,
       position: "bottom-left", // or "bottom-right"
       text: "Rate Us"
     }
   };
   ```

### Step 3: Test the System

1. **Test the review links**:
   - Click the "Rate on Google" button
   - Verify it opens the correct Google review page
   - Test on both desktop and mobile

2. **Test the floating button**:
   - Scroll down the page
   - Verify the floating button appears
   - Test the positioning

3. **Test the review prompt**:
   - Scroll to the About section
   - Verify the prompt appears
   - Test the dismiss functionality

## Customization Options

### Colors and Styling
The components use your website's color palette:
- `bg-gradient-accent` - Golden gradient background
- `text-primary` - Brown text color
- `shadow-golden` - Golden shadow effects

### Positioning
Configure the floating button position:
```typescript
floatingButton: {
  position: "bottom-left", // or "bottom-right"
}
```

### Timing
Adjust when components appear:
```typescript
floatingButton: {
  showAfterScroll: 300, // Show after 300px scroll
}
reviewPrompt: {
  showAfterScroll: 500, // Show after 500px scroll
}
```

### Messages
Customize the review prompts:
```typescript
reviewPrompt: {
  message: "Your custom message here"
}
```

## Troubleshooting

### Review Link Not Working
1. **Check Place ID**: Verify your Place ID is correct
2. **Test URL**: Try the URL directly in browser
3. **Fallback**: The system will use restaurant name if Place ID fails

### Button Not Appearing
1. **Check configuration**: Verify `enabled: true`
2. **Check scroll position**: Ensure you've scrolled enough
3. **Check CSS**: Verify no CSS conflicts

### Stats Not Updating
1. **Update config**: Change the `ratingStats` in `google-config.ts`
2. **Refresh page**: Changes require page refresh
3. **Check console**: Look for any JavaScript errors

## Best Practices

### 1. Don't Overwhelm Users
- Use the floating button sparingly
- Make the review prompt dismissible
- Don't show multiple prompts at once

### 2. Encourage Positive Reviews
- Use encouraging language
- Highlight the impact of reviews
- Make the process easy

### 3. Keep Stats Updated
- Update rating stats monthly
- Reflect current performance
- Be honest about ratings

### 4. Test Regularly
- Test on different devices
- Test with different browsers
- Verify Google links work

## Integration with Analytics

You can track review button clicks by adding analytics:

```typescript
const handleRateClick = () => {
  // Track the click
  if (typeof gtag !== 'undefined') {
    gtag('event', 'click', {
      event_category: 'review',
      event_label: 'google_review_button'
    });
  }
  
  // Open the review page
  const url = getGoogleReviewUrl();
  window.open(url, '_blank', 'noopener,noreferrer');
};
```

## Support

If you need help setting up the Google Rating system:

1. **Check the configuration** in `src/lib/google-config.ts`
2. **Verify your Google Place ID** is correct
3. **Test the review links** manually
4. **Check browser console** for any errors

The system is designed to be robust and will fallback gracefully if there are any issues with the Google Place ID or configuration. 