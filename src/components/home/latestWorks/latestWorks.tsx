import React from 'react'
import { useScrollAnimation } from '../../../hooks/useScrollAnimation'
import { publishedWorks } from '../../../models/publishedWorks'
import { getImagePath } from '../../../utils/getBasePath'
import { WorkCard } from './workCard/workCard'
import './latestWorks.css'
import './latestWorks.mobile.css'

export const LatestWorks: React.FC = () => {
  useScrollAnimation()
  const latestWorksStyle = { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('${getImagePath('fondo_oscuro.webp')}')` }
  const [featuredWork, ...otherWorks] = publishedWorks.slice(0, 4)

  return (
    <section className="latest-works" style={latestWorksStyle}>
      <div className="latest-works__header">
        <p className="latest-works__eyebrow fade-in">
          <span className="latest-works__eyebrow-line" aria-hidden="true" />
          Publicaciones recientes
        </p>
        <h2 className="section-title fade-in">Últimos trabajos</h2>
        <p className="section-description fade-in">
          Performance, personajes y colaboraciones que dan forma a lo macabro y lo psicológico.
        </p>
      </div>

      {featuredWork && (
        <div className="latest-works__featured">
          <WorkCard work={featuredWork} variant="featured" />
        </div>
      )}

      <div className="latest-works__grid">
        {otherWorks.map((work) => (
          <WorkCard key={work.title} work={work} />
        ))}
      </div>
    </section>
  )
}
