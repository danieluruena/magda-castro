import { useScrollAnimation } from '../../../hooks/useScrollAnimation'
import './featured.css'
import { Work } from './work/work'

export const Featured: React.FC = () => {
  useScrollAnimation()
  const featuredWorks = [
    {
      title: 'Tenebrarum en Rock al Parque 2025',
      description: 'Performance para la presentación de la banda de metal Tenebrarum en el festival de Rock Al Parque 2025, para la cual se realizó el diseño de un nuevo personaje, junto a la elaboración del traje, guion del performance y maquillaje de los miembros de la banda.',
      videoUrl: 'https://www.youtube.com/embed/W_yHgiakGq4?h=null&playlist=W_yHgiakGq4&autoplay=0&controls=1&loop=0&autopause=0&playsinline=1&mute=0&start=2034',
    },
    {
      title: 'Athanator - Alienado',
      description: 'Video musical para la banda de metal Athanator de Medellín en el cual participé con mi personaje "La Sacerdotisa", mi obra "Ecos de la existencia", realización de performance, maquillaje, vestuario e indumentaria.',
      videoUrl: 'https://www.youtube.com/embed/gDuTWrkTtMY?h=null&playlist=gDuTWrkTtMY&autoplay=0&controls=1&loop=0&autopause=0&playsinline=1&mute=0',
    },
  ]
  return (
    <section className="featured-works">
      <h2 className="section-title fade-in">Trabajos Destacados</h2>
      <div className="works-container">
        {featuredWorks.map((work) => {
          return (<Work key={work.title} {...work} />)
        })}
      </div>
    </section>
  )
}
