export default function manifest() {
  return {
    name: 'Bouldspace | Luxury Architecture & Construction Management',
    short_name: 'Bouldspace',
    description: 'Bouldspace delivers ultra-premium architecture, technical planning, project management, and high-end construction solutions from concept to completion.',
    start_url: '/',
    display: 'standalone',
    background_color: '#090B11',
    theme_color: '#C87A54',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/logos/favicon.ico',
        sizes: '16x16 32x32 48x48 64x64',
        type: 'image/x-icon',
      },
      {
        src: '/logos/logo-maskable-nobg.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'maskable any',
      },
      {
        src: '/logos/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
