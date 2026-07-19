import type { MetadataRoute } from 'next'

const siteUrl = 'https://groupofinfinity.art'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/car-rental', '/photography', '/about', '/contact']

  return routes.map((route, index) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: index === 0 ? ('weekly' as const) : ('monthly' as const),
    priority: index === 0 ? 1 : index < 3 ? 0.9 : 0.7,
  }))
}
