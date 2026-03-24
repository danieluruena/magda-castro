import './artisticFormats.css'
import './artisticFormats.mobile.css'
import '../../../common.css'
import { ArtisticFormat } from './artisticFormat/artisticFormat'
import { useScrollAnimation } from '../../../hooks/useScrollAnimation'

export const ArtisticFormats: React.FC = () => {
  useScrollAnimation()

  const artisticFormats = [
    {
      image: 'escultura.jpg',
      title: 'Escultura',
      description: 'Figuras que traen al plano material los conceptos que no se puede explicar con simples palabras.',
      link: '/galeria#esculturas',
    },
    {
      image: 'maquillaje.jpg',
      title: 'Maquillaje FX',
      description: 'Una extensión de nuestras expresiones mas alá de las limitaciones coporales.',
      link: '/galeria#maquillaje',
    },
    {
      image: 'personajes.jpg',
      title: 'Creación de personajes y performance',
      description: 'Caracterizar las ideas mas controversiales e impactantes para el entorno social.',
      link: '/galeria#personajes-cosplay',
    },
  ]
  return (
    <section className="artistic-formats">
      <h2 className='section-title fade-in'>Diversas formas de expresión</h2>
      <p className='section-description fade-in'>Cada idea requiere su propia forma de expresarse.</p>
      {artisticFormats.map((format) => (
        <ArtisticFormat
          key={format.title}
          title={format.title}
          description={format.description}
          imageUrl={format.image}
          link={format.link}
        />
      ))}
    </section>
  )
}
