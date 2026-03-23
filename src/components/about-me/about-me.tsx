import React from 'react'
import './about-me.css'
import '../../common.css'
import { getImagePath } from '../../utils/getBasePath'

export const AboutMe: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className='about-content'>
        <h2 className="section-title">Un poco sobre mí</h2>
        <div>
          <img src={getImagePath('sobre-mi/me-1.jpg')} alt="" className='about-image' />
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
          <img src={getImagePath('sobre-mi/me-2.jpg')} alt="" className='about-image' />
        </div>
      </div>
    </section>
  )
}
