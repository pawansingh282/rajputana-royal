import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://groupofinfinity.art/sitemap.xml',
    host: 'https://groupofinfinity.art',
  }
}
