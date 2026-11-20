import React from 'react'
import { NavLink } from 'react-router-dom'
import type { BlogArticleSummary } from '../../../models/blog'
import { formatBlogDate } from '../../../utils/blogApi'
import './blogCard.css'

type BlogCardProps = {
  article: BlogArticleSummary
}

export const BlogCard: React.FC<BlogCardProps> = ({ article }) => {
  const articlePath = `/blog/${article.slug}`
  const date = formatBlogDate(article.publishedAt)

  return (
    <article className="blog-card fade-in">
      <NavLink to={articlePath} className="blog-card__media" tabIndex={-1} aria-hidden="true">
        {article.coverImage ? (
          <img
            src={article.coverImage}
            alt={article.title}
            className="blog-card__image"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <span className="blog-card__placeholder" />
        )}
        {article.status === 'featured' && <span className="blog-card__badge">Destacado</span>}
      </NavLink>

      <div className="blog-card__info">
        <p className="blog-card__meta">
          {date && <time dateTime={article.publishedAt ?? undefined}>{date}</time>}
          {date && ' · '}
          {article.author}
        </p>
        <h2 className="blog-card__title">
          <NavLink to={articlePath}>{article.title}</NavLink>
        </h2>
        {article.excerpt && <p className="blog-card__excerpt">{article.excerpt}</p>}
        <NavLink to={articlePath} className="blog-card__action">
          Leer artículo
          <span aria-hidden="true">→</span>
        </NavLink>
      </div>
    </article>
  )
}
