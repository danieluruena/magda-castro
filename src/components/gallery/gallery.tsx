import { useHashScroll } from '../../hooks/useHashScroll'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { useMetaTags } from '../../hooks/useMetaTags'
import { ArtworkCard } from './artwork-card/artwork-card'
import './gallery.css'
import './gallery.mobile.css'

interface Artwork {
  title: string
  description: string
  images: string[]
}

export const Gallery = () => {
  useScrollAnimation()
  useHashScroll()
  useMetaTags({
    title: 'Galería | Escultura, Maquillaje FX, Personajes | Magda Castro',
    description: 'Galería de trabajos artísticos: escultura macabra, maquillaje artístico FX y diseño de personajes góticos. Obras oscuras e impactantes.',
    image: 'https://magdacastro.com/assets/galeria/esculturas/1.webp',
    url: 'https://magdacastro.com/galeria',
  })

  const makeupArtworks: Artwork[] = [
    {
      title: 'Obra de Maquillaje 1',
      description: 'Descripción de la obra de maquillaje artístico y efectos especiales.',
      images: [
'https://via.placeholder.com/600x450', 'https://via.placeholder.com/600x450/333', 'https://via.placeholder.com/600x450/666',
],
    },
    {
      title: 'Obra de Maquillaje 2',
      description: 'Descripción de la obra de maquillaje artístico y efectos especiales.',
      images: ['https://via.placeholder.com/600x450', 'https://via.placeholder.com/600x450/333'],
    },
  ]

  const sculptureArtworks: Artwork[] = [
    {
      title: 'Escultura 1',
      description: 'Descripción de la escultura macabra y conceptual.',
      images: [
'https://via.placeholder.com/600x450', 'https://via.placeholder.com/600x450/333', 'https://via.placeholder.com/600x450/666',
],
    },
    {
      title: 'Escultura 2',
      description: 'Descripción de la escultura macabra y conceptual.',
      images: ['https://via.placeholder.com/600x450', 'https://via.placeholder.com/600x450/333'],
    },
  ]

  const characterArtworks: Artwork[] = [
    {
      title: 'Personaje 1',
      description: 'Descripción del personaje y performance gótico.',
      images: [
'https://via.placeholder.com/600x450', 'https://via.placeholder.com/600x450/333', 'https://via.placeholder.com/600x450/666',
],
    },
    {
      title: 'Personaje 2',
      description: 'Descripción del personaje y performance gótico.',
      images: ['https://via.placeholder.com/600x450', 'https://via.placeholder.com/600x450/333'],
    },
  ]
  return (
    <div className='gallery'>
      <h1 className='main-title' id='maquillaje'>Galería</h1>
      
      <div className='gallery-section'>
        <h2 className='section-title'>Maquillaje artístico y FX</h2>
        <div className='artworks-grid'>
          {makeupArtworks.map((artwork, idx) => (
            <ArtworkCard key={idx} {...artwork} />
          ))}
        </div>
      </div>

      <div className='gallery-section' id='esculturas'>
        <h2 className='section-title'>Esculturas</h2>
        <div className='artworks-grid'>
          {sculptureArtworks.map((artwork, idx) => (
            <ArtworkCard key={idx} {...artwork} />
          ))}
        </div>
      </div>

      <div className='gallery-section' id='personajes-cosplay'>
        <h2 className='section-title'>Personajes y performances</h2>
        <div className='artworks-grid'>
          {characterArtworks.map((artwork, idx) => (
            <ArtworkCard key={idx} {...artwork} />
          ))}
        </div>
      </div>
    </div>
  )
}