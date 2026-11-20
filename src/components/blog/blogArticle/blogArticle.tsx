import React, { useEffect, useMemo } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useScrollAnimation } from '../../../hooks/useScrollAnimation'
import { useMetaTags } from '../../../hooks/useMetaTags'
import { useBlogArticle } from '../../../hooks/useBlogArticle'
import { getImagePath } from '../../../utils/getBasePath'
import { formatBlogDate } from '../../../utils/blogApi'
import { splitBlogBody } from '../../../utils/blogBody'
import { BlogGallery } from '../blogGallery/blogGallery'
import '../../../common.css'
import './blogArticle.css'
import './blogArticle.mobile.css'

const DEFAULT_DESCRIPTION = 'Textos de Magda Castro sobre escultura, performance y los temas que habitan el arte macabro y psicológico.'

export const BlogArticle: React.FC = () => {
  const { slug = '' } = useParams()
  const { article, status } = useBlogArticle(slug)
  const bodySegments = useMemo(() => (article ? splitBlogBody(article.body) : []), [article])
  useScrollAnimation(status)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  useMetaTags({
    title: article ? `${article.title} | Blog de Magda Castro` : 'Blog | Magda Castro',
    description: article?.excerpt || DEFAULT_DESCRIPTION,
    image: article?.coverImage ?? getImagePath('sobre-mi/me-1.webp'),
    url: `https://magdacastro.com/blog/${slug}`,
  })
  const articleStyle = { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('${getImagePath('fondo_oscuro.webp')}')` }

  if (status === 'loading') {
    return (
      <main className="blog-article" style={articleStyle}>
        <p className="blog-article__state">Cargando artículo...</p>
      </main>
    )
  }

  if (status !== 'ready' || !article) {
    return (
      <main className="blog-article" style={articleStyle}>
        <div className="blog-article__state">
          <p>
            {status === 'not-found'
              ? 'Este texto no existe o ya no está disponible.'
              : 'No se pudo cargar el artículo. Inténtalo de nuevo más tarde.'}
          </p>
          <NavLink to="/blog" className="main-btn">Volver al blog</NavLink>
        </div>
      </main>
    )
  }

  const date = formatBlogDate(article.publishedAt)

  return (
    <main className="blog-article" style={articleStyle}>
      <NavLink to="/blog" className="blog-article__back">
        <span aria-hidden="true">←</span>
        Volver al blog
      </NavLink>

      <article className="blog-article__content">
        <header className="blog-article__header fade-in">
          <p className="blog-article__meta">
            {date && <time dateTime={article.publishedAt ?? undefined}>{date}</time>}
            {date && ' · '}
            {article.author}
          </p>
          <h1 className="blog-article__title">{article.title}</h1>
          {article.excerpt && <p className="blog-article__excerpt">{article.excerpt}</p>}
        </header>

        {article.coverImage && (
          <img
            src={article.coverImage}
            alt={article.title}
            className="blog-article__cover"
            decoding="async"
          />
        )}

        {/* El HTML lo genera y sanitiza el servidor de Blog Manager. */}
        <div className="blog-article__body">
          {bodySegments.map((segment, index) => (
            segment.kind === 'html' ? (
              <div key={index} dangerouslySetInnerHTML={{ __html: segment.html }} />
            ) : (
              <BlogGallery key={index} images={segment.images} />
            )
          ))}
        </div>
      </article>

      <NavLink to="/blog" className="blog-article__back blog-article__back--end">
        <span aria-hidden="true">←</span>
        Volver al blog
      </NavLink>
    </main>
  )
}
