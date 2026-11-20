import type { BlogArticle, BlogArticlesPage } from '../models/blog'

const DEFAULT_API_URL = import.meta.env.DEV
  ? 'http://localhost:5173/api/public/v1'
  : 'https://blog-manager.dennis14756.workers.dev/api/public/v1'
const BLOG_API_URL = import.meta.env.VITE_BLOG_API_URL || DEFAULT_API_URL
const BLOG_SLUG = import.meta.env.VITE_BLOG_SLUG || 'magda-castro-blog'
const ARTICLES_PAGE_SIZE = 9

export class BlogApiError extends Error {
  status: number

  constructor(status: number) {
    super(`Blog API respondió ${status}`)
    this.status = status
  }
}

const request = async <T>(path: string, signal?: AbortSignal): Promise<T> => {
  const response = await fetch(`${BLOG_API_URL}${path}`, { signal })

  if (!response.ok) {
    throw new BlogApiError(response.status)
  }

  return response.json() as Promise<T>
}

export const fetchBlogArticles = (cursor: string | null, signal?: AbortSignal): Promise<BlogArticlesPage> => {
  const params = new URLSearchParams({ limit: String(ARTICLES_PAGE_SIZE) })

  if (cursor) {
    params.set('cursor', cursor)
  }

  return request<BlogArticlesPage>(`/blogs/${BLOG_SLUG}/articles?${params}`, signal)
}

export const fetchBlogArticle = async (slug: string, signal?: AbortSignal): Promise<BlogArticle> => {
  const { data } = await request<{ data: BlogArticle }>(
    `/blogs/${BLOG_SLUG}/articles/${encodeURIComponent(slug)}`,
    signal,
  )

  return data
}

export const formatBlogDate = (value: string | null): string => {
  if (!value) return ''

  return new Date(value).toLocaleDateString('es-CO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
