import './artisticFormats.css'
import './artisticFormats.mobile.css'
import '../../../common.css'
import { ArtisticFormat } from './artisticFormat/artisticFormat'
import { useScrollAnimation } from '../../../hooks/useScrollAnimation'
import { getImagePath } from '../../../utils/getBasePath'

export const ArtisticFormats: React.FC = () => {
  useScrollAnimation()
  const artisticFormatsStyle = { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('${getImagePath('fondo_rojo.webp')}')` }

  const artisticFormats = [
    {
      image: 'escultura.webp',
      title: 'Escultura',
      description: 'Figuras que traen al plano material los conceptos que no se puede explicar con simples palabras.',
      link: '/galeria#esculturas',
    },
    {
      image: 'maquillaje.webp',
      title: 'Maquillaje FX',
      description: 'Una extensión de nuestras expresiones mas alá de las limitaciones coporales.',
      link: '/galeria#maquillaje',
    },
    {
      image: 'personajes.webp',
      title: 'Creación de personajes y performance',
      description: 'Caracterizar las ideas mas controversiales e impactantes para el entorno social.',
      link: '/galeria#personajes-cosplay',
    },
  ]
  return (
    <section className="artistic-formats" style={artisticFormatsStyle}>
      <h2 className='section-title'>Diversas formas de expresión</h2>
      <p className='section-description'>Cada idea requiere su propia forma de expresarse.</p>
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
