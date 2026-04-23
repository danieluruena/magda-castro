import { useHashScroll } from '../../hooks/useHashScroll'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { useMetaTags } from '../../hooks/useMetaTags'
import { Carousel } from './carousel/carousel'
import './gallery.css'
import './gallery.mobile.css'

export const Gallery = () => {
  useScrollAnimation()
  useHashScroll()
  useMetaTags({
    title: 'Galería | Escultura, Maquillaje FX, Personajes | Magda Castro',
    description: 'Galería de trabajos artísticos: escultura macabra, maquillaje artístico FX y diseño de personajes góticos. Obras oscuras e impactantes.',
    image: 'https://magdacastro.com/assets/galeria/esculturas/1.webp',
    url: 'https://magdacastro.com/galeria',
  })
  const makeupImages = [
    'maquillajes/1.webp',
    'maquillajes/2.webp', 
    'maquillajes/3.webp',
    'maquillajes/4.webp',
    'maquillajes/5.webp',
    'maquillajes/6.webp',
    'maquillajes/7.webp',
    'maquillajes/8.webp',
    'maquillajes/9.webp',
    'maquillajes/10.webp',
  ]
  const sculptureImages = [
    'esculturas/1.webp',
    'esculturas/2.webp',
    'esculturas/3.webp',
    'esculturas/4.webp',
    'esculturas/5.webp',
    'esculturas/6.webp',
    'esculturas/7.webp',
    'esculturas/8.webp',
  ]
  const characterAndPerformanceImages = [
    'personajes_y_performances/1.webp',
    'personajes_y_performances/2.webp',
    'personajes_y_performances/3.webp',
    'personajes_y_performances/4.webp',
    'personajes_y_performances/5.webp',
    'personajes_y_performances/6.webp',
    'personajes_y_performances/7.webp',
    'personajes_y_performances/8.webp',
    'personajes_y_performances/9.webp',
    'personajes_y_performances/10.webp',
    'personajes_y_performances/11.webp',
    'personajes_y_performances/12.webp',
  ]
  return (
    <>
      <div className='gallery'>
        <h1 className='main-title' id='maquillaje'>Galería</h1>
        <div className='makeup'>
          <h2 className='section-title'>Maquillaje artístico y FX</h2>
          <Carousel images={makeupImages} category="maquillajes" />
        </div>
        <div className='sculptures' id='esculturas'>
          <h2 className='section-title'>Esculturas</h2>
          <Carousel images={sculptureImages} category="esculturas" />
        </div>
        <div className='characters-and-performances' id='personajes-cosplay'>
          <h2 className='section-title'>Personajes y performances</h2>
          <Carousel images={characterAndPerformanceImages} category="personajes_y_performances" />
        </div>
      </div>
    </>
  )
}