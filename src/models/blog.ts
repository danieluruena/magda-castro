export type BlogInfo = {
  name: string
  slug: string
  description: string
  siteUrl: string
}

export type BlogArticleSummary = {
  id: string
  title: string
  slug: string
  excerpt: string
  coverImage: string | null
  author: string
  status: 'published' | 'featured'
  createdAt: string
  publishedAt: string | null
  updatedAt: string
}

export type BlogArticle = BlogArticleSummary & {
  body: string
  blog: BlogInfo
}

export type BlogArticlesPage = {
  data: BlogArticleSummary[]
  meta: {
    nextCursor: string | null
  }
}
