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
    image: 'https://magdacastro.com/assets/galeria/esculturas/1.jpg',
    url: 'https://magdacastro.com/galeria',
  })
  const makeupImages = [
    'maquillajes/1.jpg',
    'maquillajes/2.jpg', 
    'maquillajes/3.jpg',
    'maquillajes/4.jpg',
    'maquillajes/5.jpg',
    'maquillajes/6.jpg',
    'maquillajes/7.jpg',
    'maquillajes/8.jpg',
    'maquillajes/9.jpg',
    'maquillajes/10.jpg',
  ]
  const sculptureImages = [
    'esculturas/1.jpg',
    'esculturas/2.jpg',
    'esculturas/3.jpg',
    'esculturas/4.jpg',
    'esculturas/5.jpg',
    'esculturas/6.jpg',
    'esculturas/7.jpg',
    'esculturas/8.jpg',
  ]
  const characterAndPerformanceImages = [
    'personajes_y_performances/1.jpg',
    'personajes_y_performances/2.jpg',
    'personajes_y_performances/3.jpg',
    'personajes_y_performances/4.jpg',
    'personajes_y_performances/5.jpg',
    'personajes_y_performances/6.jpg',
    'personajes_y_performances/7.jpg',
    'personajes_y_performances/8.jpg',
    'personajes_y_performances/9.jpg',
    'personajes_y_performances/10.jpg',
    'personajes_y_performances/11.jpg',
    'personajes_y_performances/12.jpg',
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