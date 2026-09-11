import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Group of Infinity',
    short_name: 'Group of Infinity',
    description: 'Swift car rental and wedding photography in Jodhpur and Rajasthan.',
    start_url: '/',
    display: 'standalone',
    background_color: '#4a1720',
    theme_color: '#5a1a24',
    icons: [
      { src: '/icon-light-32x32.png', sizes: '32x32', type: 'image/png' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  }
}
