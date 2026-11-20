import React from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { useMetaTags } from '../../hooks/useMetaTags'
import { useBlogArticles } from '../../hooks/useBlogArticles'
import { getImagePath } from '../../utils/getBasePath'
import { BlogCard } from './blogCard/blogCard'
import '../../common.css'
import './blog.css'
import './blog.mobile.css'

export const Blog: React.FC = () => {
  const {
    articles,
    nextCursor,
    status,
    isLoadingMore,
    hasLoadMoreError,
    loadMore,
  } = useBlogArticles()
  useScrollAnimation(status)
  useMetaTags({
    title: 'Blog | Magda Castro',
    description: 'Textos de Magda Castro sobre escultura, performance y los temas que habitan el arte macabro y psicológico.',
    image: getImagePath('sobre-mi/me-1.webp'),
    url: 'https://magdacastro.com/blog',
  })
  const blogStyle = { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('${getImagePath('fondo_oscuro.webp')}')` }

  return (
    <main className="blog" style={blogStyle}>
      <div className="blog-hero">
        <h1 className="main-title">Blog</h1>
        <p className="section-description">Notas sobre el proceso, la obra y aquello que queda cuando la pieza está terminada.</p>
      </div>

      {status === 'loading' && <p className="blog-state">Cargando artículos...</p>}

      {status === 'error' && (
        <p className="blog-state" role="alert">No se pudieron cargar los artículos. Inténtalo de nuevo más tarde.</p>
      )}

      {status === 'ready' && articles.length === 0 && (
        <p className="blog-state">Todavía no hay textos publicados.</p>
      )}

      {status === 'ready' && articles.length > 0 && (
        <>
          <div className="blog-grid">
            {articles.map((article) => (
              <BlogCard key={article.id} article={article} />
            ))}
          </div>

          {hasLoadMoreError && (
            <p className="blog-state" role="alert">No se pudieron cargar más artículos.</p>
          )}

          {nextCursor && (
            <div className="blog-more">
              <button type="button" className="main-btn" onClick={loadMore} disabled={isLoadingMore}>
                {isLoadingMore ? 'Cargando...' : 'Cargar más'}
              </button>
            </div>
          )}
        </>
      )}
    </main>
  )
}
