import React from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { useMetaTags } from '../../hooks/useMetaTags'
import { getImagePath } from '../../utils/getBasePath'
import { LazyImage } from '../common/LazyImage'
import '../../common.css'
import './aboutMe.css'
import './aboutMe.mobile.css'

export const AboutMe: React.FC = () => {
  useScrollAnimation()
  useMetaTags({
    title: 'Sobre Mí | Artista de Arte Macabro | Magda Castro',
    description: 'Artista especializada en arte macabro y psicológico basada en Medellín. Crea esculturas, performances y personajes góticos con una visión crítica y transgresora.',
    image: getImagePath('sobre-mi/me-1.webp'),
    url: 'https://magdacastro.com/sobre-mi',
  })
  const aboutStyle = { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('${getImagePath('fondo_oscuro.webp')}')` }
  return (
    <section id="about" className="about" style={aboutStyle}>
      <div className='about-content'>
        <h1 className="section-title">Un poco sobre mí</h1>
        <div>
          <LazyImage src='sobre-mi/me-1.webp' alt='Magda Castro - Artista de arte macabro y psicológico' className='about-image fade-in' />
        </div>
        <div>
          <p className="section-description">
            La sensación de no encajar socialmente me llevó a la búsqueda del conocimiento necesario para entender cómo funcionaba el mundo, las relaciones sociales, la psicología, las religiones, la historia, etc. Esto me llevó a desarrollar una visión crítica, pesimista, cruda y hasta negativa del mundo lo que posteriormente se convirtió en fuente de inspiración para mi arte.
          </p><br />
          <p className="section-description">
            Tras vivir un tiempo en Bogotá empecé a desarrollar mis habilidades artísticas. Tras varios años de aprendizaje y exploración de estilos y técnicas logré encontrar lo que realmente disfruto como trabajo.
          </p>
        </div>
        <div>
          <p className="section-description">
            Siempre tuve afinidad por el estilo oscuro y melancólico del metal gótico y el arte que, de alguna manera, hace referencia a la muerte, la transgresión de las normas sociales y lo psicológico.

            Al mudarme a Medellín, logré definir y radicalizar mi estilo artístico y postura como artista, consiguiendo un mayor reconocimiento y mejorando la calidad de mi trabajo.

            He tenido la oportunidad de exponer mi trabajo sin miedo a la censura y de trabajar junto a talentosos artistas de la ciudad.
          </p>
        </div>
        <div>
          <LazyImage src='sobre-mi/me-2.webp' alt='Magda Castro - Detalle de obra artística gótica' className='about-image fade-in' />
        </div>
      </div>
    </section>
  )
}
