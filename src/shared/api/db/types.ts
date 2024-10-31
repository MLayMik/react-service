import { z } from 'zod'

export type ArrayToUnion<T extends readonly unknown[]> = T[number]

// Определяем массив Categories
export const Categories = [
  'TIR Сервіс',
  'Відділ запчастин',
  'Мотор сервіс',
  'Турбо сервіс',
  'Металообробка',
  'Мийка, шиномонтаж',
  'Вантажні перевезення',
  'Стоянка TIR',
  'Тех. огляд',
] as const

// Определяем тип CategoriesType, используя ArrayToUnion
export type CategoriesType = ArrayToUnion<typeof Categories>

const categoriesEnum = z.enum(Categories) // Создайте z.enum на основе массива

export const SpecsSchema = z.array(z.object({
  name: z.string(),
  value: z.string(),
}))

export const BaseProductSchema = z.object({
  code: z.number(),
  name: z.string(),
  description: z.string(),
  discount: z.boolean(),
  image: z.string(),
  price: z.number(),
  rate: z.object({
    quantity: z.number(),
    rate: z.number(),
  }),
  price_with_discount: z.number().nullable(),
  specs: SpecsSchema,
})

export const ProductSimilarSchema = BaseProductSchema.omit({ specs: true })

export const ProductSchema = BaseProductSchema.extend({
  similar_products: z.array(ProductSimilarSchema),
  full_description: z.string(),
  images: z.array(z.string()),
  quantity: z.number(),
})

export const ParagraphSchema = z.object({
  image: z.string().url(),
  text: z.array(z.string()),
})

export const BaseArticleSchema = z.object({
  id: z.number(),
  date: z.string(),
  name: z.string(),
  description: z.string(),
  preview_image: z.string().url(),
  paragraphs: z.array(ParagraphSchema),
})

export const ArticleSimilarSchema = BaseArticleSchema.omit({ paragraphs: true })

export const ArticleSchema = BaseArticleSchema.extend({
  similar_articles: z.array(BaseArticleSchema),
})

export const PriceSchema = z.object({
  name: z.string(),
  duration: z.object({
    min: z.number().nullable(),
    max: z.number().nullable(),
  }),
  price: z.number(),
})

export const ServiceSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  full_description: z.string(),
  image: z.string().url(),
  category: categoriesEnum, // Здесь используется CategoriesType, определенный выше
  prices: z.array(PriceSchema),
})
