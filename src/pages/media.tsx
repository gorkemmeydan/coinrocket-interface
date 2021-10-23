import { createMedia } from '@artsy/fresnel';

const AppMediaBreakPoints = createMedia({
  breakpoints: {
    mobile: 0,
    small: 768,
    medium: 1000,
    large: 1200,
  },
});

// Make styles for injection into the header of the page
export const mediaStyles = AppMediaBreakPoints.createMediaStyle();

export const { Media, MediaContextProvider } = AppMediaBreakPoints;
