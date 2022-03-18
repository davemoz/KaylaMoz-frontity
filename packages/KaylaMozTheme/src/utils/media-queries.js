const deviceWidths = {
  320: 320,
  480: 480,
  768: 768,
  1024: 1024,
  1200: 1200,
  1920: 1920,
};

const getMediaQuery = dw => `@media (min-width: ${dw}px)`;

export {
  deviceWidths,
  getMediaQuery
}