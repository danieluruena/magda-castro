import { useEffect, useState } from 'react'
import type { BlogArticle } from '../models/blog'
import { BlogApiError, fetchBlogArticle } from '../utils/blogApi'

type BlogArticleStatus = 'loading' | 'ready' | 'not-found' | 'error'

/**
 * Carga un artículo publicado por su slug. Un 404 de la API se trata como «no disponible».
 */
export const useBlogArticle = (slug: string) => {
  const [article, setArticle] = useState<BlogArticle | null>(null)
  const [status, setStatus] = useState<BlogArticleStatus>('loading')

  useEffect(() => {
    const controller = new AbortController()

    setStatus('loading')
    setArticle(null)

    fetchBlogArticle(slug, controller.signal)
      .then((data) => {
        setArticle(data)
        setStatus('ready')
      })
      .catch((error: unknown) => {
        if (controller.signal.aborted) return

        const isNotFound = error instanceof BlogApiError && error.status === 404
        setStatus(isNotFound ? 'not-found' : 'error')
      })

    return () => controller.abort()
  }, [slug])

  return { article, status }
}
