import { useEffect, useState } from 'react'
import type { BlogArticleSummary } from '../models/blog'
import { fetchBlogArticles } from '../utils/blogApi'

type BlogArticlesStatus = 'loading' | 'ready' | 'error'

/**
 * Carga la primera página de artículos publicados y permite pedir más con el cursor de la API.
 */
export const useBlogArticles = () => {
  const [articles, setArticles] = useState<BlogArticleSummary[]>([])
  const [nextCursor, setNextCursor] = useState<string | null>(null)
  const [status, setStatus] = useState<BlogArticlesStatus>('loading')
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [hasLoadMoreError, setHasLoadMoreError] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    fetchBlogArticles(null, controller.signal)
      .then(({ data, meta }) => {
        setArticles(data)
        setNextCursor(meta.nextCursor)
        setStatus('ready')
      })
      .catch(() => {
        if (!controller.signal.aborted) setStatus('error')
      })

    return () => controller.abort()
  }, [])

  const loadMore = async () => {
    if (!nextCursor || isLoadingMore) return

    setIsLoadingMore(true)
    setHasLoadMoreError(false)

    try {
      const { data, meta } = await fetchBlogArticles(nextCursor)
      setArticles((previous) => [...previous, ...data])
      setNextCursor(meta.nextCursor)
    } catch {
      setHasLoadMoreError(true)
    } finally {
      setIsLoadingMore(false)
    }
  }

  return {
    articles,
    nextCursor,
    status,
    isLoadingMore,
    hasLoadMoreError,
    loadMore,
  }
}
