import { useScrollAnimation } from '../../../hooks/useScrollAnimation'
import { Service } from './service/service'
import '../../../common.css'
import './portfolio.css'
import './portfolio.mobile.css'
import { getImagePath } from '../../../utils/getBasePath'


export const Portfolio: React.FC = () => {
  useScrollAnimation()
  const portfolioStyle = { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('${getImagePath('fondo_oscuro.webp')}')` }

  const services = [
    {
      imageUrl: 'Esculturas.webp',
      title: 'Obras personalizadas',
      description: 'Piezas de arte únicas que reflejen tus ideas con un estilo impactante',
      link: '/servicios#obras-personalizadas',
    },
    {
      imageUrl: 'Diseño pjs.webp',
      title: 'Diseño de personajes y trajes',
      description: 'Representación realista y detallada de personajes originales o inspirados',
      link: '/servicios#diseno-personajes-trajes',
    },
    {
      imageUrl: 'Eventos.webp',
      title: 'Performance en vivo',
      description: 'Al combinar expresiones las ideas llegan mas profundo',
      link: '/servicios#performance-en-vivo',
    },
    {
      imageUrl: 'Talleres.webp',
      title: 'Charlas y talleres',
      description: 'Estoy abierta a compartir mis conocimientos y mi forma de ver el mundo',
      link: '/servicios#charlas-talleres',
    },
  ]
  return (
    <section className="portfolio" style={portfolioStyle}>
      <h2 className="section-title">Portafolio de servicios</h2>
      <p className="section-description">Puedo traer a este mundo esas ideas que trascienden lo siniestro y desgarrador de nuestra mente.</p>
      {services.map((service) => {
        return <Service key={service.title} {...service} />
      })}
    </section>
  )
}
