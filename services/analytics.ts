export const trackClick = (linkId: string, url: string) => {
  // In a real app, this would fire an event to GA4, Mixpanel, or a custom backend.
  console.log(`[Analytics] Link Clicked - ID: ${linkId}, URL: ${url}, Timestamp: ${new Date().toISOString()}`);
};

export const trackSocialClick = (platform: string) => {
    console.log(`[Analytics] Social Clicked - Platform: ${platform}`);
}