import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { PublishedWork } from '../../../../models/publishedWorks'
import { getImagePath } from '../../../../utils/getBasePath'
import { getWorkThumbnail, getWorkVideoUrl } from '../../../../utils/video'
import './workCard.css'
import './workCard.mobile.css'

type WorkCardProps = {
  work: PublishedWork
  variant?: 'default' | 'featured'
}

export const WorkCard: React.FC<WorkCardProps> = ({ work, variant = 'default' }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const isFeatured = variant === 'featured'
  const cardClassName = `work-card work-card--${work.orientation} ${isFeatured ? 'work-card--featured' : ''} ${isPlaying ? 'work-card--playing' : ''}`

  return (
    <article className={cardClassName}>
      {work.kind === 'image' ? (
        <NavLink
          to={work.link}
          className={`work-card__media work-card__media--${work.orientation}`}
          aria-label={`Ver ${work.title} en la galería`}
        >
          <img
            src={getImagePath(work.imageUrl)}
            alt={`${work.title} — obra de Magda Castro`}
            className={`work-card__image ${work.orientation}`}
            loading="lazy"
            decoding="async"
          />
          <span className="work-card__category">{work.category}</span>
          <span className="work-card__arrow" aria-hidden="true">→</span>
        </NavLink>
      ) : (
        <div className={`work-card__media work-card__media--${work.orientation}`}>
          {!isPlaying ? (
            <button
              type="button"
              className="work-card__poster"
              onClick={() => setIsPlaying(true)}
              aria-label={`Reproducir ${work.title}`}
            >
              <img
                src={getWorkThumbnail(work)}
                alt={`${work.title} — trabajo de Magda Castro`}
                className={`work-card__image ${work.orientation}`}
                loading="lazy"
                decoding="async"
              />
              <span className="work-card__category">{work.category}</span>
              <span className="work-card__play" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          ) : work.isYouTube ? (
            <iframe
              src={getWorkVideoUrl(work)}
              title={work.title}
              className="work-card__embed"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          ) : (
            <video
              src={getWorkVideoUrl(work)}
              title={work.title}
              className="work-card__video"
              controls
              autoPlay
              playsInline
              poster={getWorkThumbnail(work)}
            />
          )}
        </div>
      )}

      <div className="work-card__info">
        {isFeatured && (
          <p className="work-card__feature">
            <span className="work-card__feature-line" aria-hidden="true" />
            Lo más reciente
          </p>
        )}
        <h3 className="work-card__title">{work.title}</h3>
        <p className="work-card__description">{work.description}</p>
        {work.kind === 'image' ? (
          <NavLink to={work.link} className="work-card__action">
            Ver obra
            <span aria-hidden="true">→</span>
          </NavLink>
        ) : (
          !isPlaying && (
            <button type="button" className="work-card__action" onClick={() => setIsPlaying(true)}>
              Ver trabajo
              <span aria-hidden="true">→</span>
            </button>
          )
        )}
      </div>
    </article>
  )
}
