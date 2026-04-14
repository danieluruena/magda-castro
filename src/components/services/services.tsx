import React from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { useHashScroll } from '../../hooks/useHashScroll'
import { useMetaTags } from '../../hooks/useMetaTags'
import { ServiceDetail } from './serviceDetail/serviceDetail'
import '../../common.css'
import './services.css'
import './services.mobile.css'

const services = [
  {
    id: 'obras-personalizadas',
    title: 'Obras personalizadas',
    description: 'Piezas de arte únicas que reflejen tus ideas con un estilo impactante. Cada obra nace de una conversación profunda para materializar lo que las palabras no alcanzan.',
    details: [
      'Esculturas y piezas tridimensionales',
      'Arte conceptual a medida',
      'Instalaciones para espacios específicos',
      'Ediciones limitadas y piezas únicas',
    ],
    imageUrl: 'Esculturas.jpg',
  },
  {
    id: 'diseno-personajes-trajes',
    title: 'Diseño de personajes y trajes',
    description: 'Representación realista y detallada de personajes originales o inspirados. Del boceto al traje terminado, cada detalle construye una identidad visual poderosa.',
    details: [
      'Diseño conceptual y bocetos',
      'Construcción de trajes y accesorios',
      'Maquillaje FX y caracterización',
      'Personajes para eventos y producciones',
    ],
    imageUrl: 'Diseño pjs.jpg',
    reversed: true,
  },
  {
    id: 'performance-en-vivo',
    title: 'Performance en vivo',
    description: 'Al combinar expresiones las ideas llegan más profundo. Una experiencia que fusiona el cuerpo, el espacio y el concepto en un momento irrepetible.',
    details: [
      'Performances para eventos culturales',
      'Intervenciones artísticas en espacios públicos',
      'Colaboraciones con marcas y festivales',
      'Propuestas escénicas a medida',
    ],
    imageUrl: 'Eventos.jpg',
  },
  {
    id: 'charlas-talleres',
    title: 'Charlas y talleres',
    description: 'Estoy abierta a compartir mis conocimientos y mi forma de ver el mundo. Espacios de aprendizaje donde el arte se convierte en herramienta de transformación.',
    details: [
      'Talleres de escultura y técnicas mixtas',
      'Charlas sobre proceso creativo',
      'Workshops de maquillaje FX',
      'Formatos presenciales y online',
    ],
    imageUrl: 'Talleres.jpg',
    reversed: true,
  },
]

export const Services: React.FC = () => {
  useScrollAnimation()
  useHashScroll()
  useMetaTags({
    title: 'Servicios Artísticos Customizados | Escultura, Maquillaje, Performance',
    description: 'Servicios de arte personalizados: obras únicas, diseño de personajes, performance en vivo, talleres y charlas. Especializada en arte oscuro y psicológico.',
    image: 'https://magdacastro.com/assets/sobre-mi/me-1.jpg',
    url: 'https://magdacastro.com/servicios',
  })

  return (
    <main className="services">
      <div className="services-hero fade-in">
        <h1 className="main-title">Servicios</h1>
        <p className="section-description">Cada proyecto es un universo propio. Aquí encontrarás las formas en que podemos trabajar juntos.</p>
      </div>
      {services.map((service) => (
        <ServiceDetail key={service.id} {...service} />
      ))}
    </main>
  )
}
