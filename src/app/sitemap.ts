import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://isitchristmas.it',
      changeFrequency: 'yearly',
      priority: 1,
    }
  ]
}