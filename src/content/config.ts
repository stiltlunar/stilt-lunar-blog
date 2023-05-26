import { z, defineCollection } from 'astro:content'

const authorCollection = defineCollection({
  type: 'data',
  schema: z.object({

  })
})

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    isDraft: z.boolean(),
    title: z.string()
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