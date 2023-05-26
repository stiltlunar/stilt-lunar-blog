import { z, defineCollection, reference } from 'astro:content'

const authorCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    bio: z.string()
  })
})

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    isDraft: z.boolean(),
    title: z.string(),
    author: reference('authors'),
    category: z.string()
  })
})

const settingsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    
  })
})

export const collections = {
  'authors': authorCollection,
  'blog': blogCollection,
  'settings': settingsCollection,
}