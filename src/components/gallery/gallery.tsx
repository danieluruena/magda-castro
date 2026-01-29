import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { Carousel } from './carousel/carousel'
import './gallery.css'

export const Gallery = () => {
  useScrollAnimation()
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
      <h1 className='main-title'>Galería</h1>
      <div className='makeup'>
        <h2 className='section-title'>Maquillaje artístico y FX</h2>
        <Carousel images={makeupImages}/>
      </div>
      <div className='sculptures'>
        <h2 className='section-title'>Esculturas</h2>
        <Carousel images={sculptureImages} />
      </div>
      <div className='characters-and-performances'>
        <h2 className='section-title'>Personajes y performances</h2>
        <Carousel images={characterAndPerformanceImages} />
      </div>
    </>
  )
}