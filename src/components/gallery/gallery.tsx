import { useHashScroll } from '../../hooks/useHashScroll'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { useMetaTags } from '../../hooks/useMetaTags'
import { ArtworkCard } from './artwork-card/artwork-card'
import './gallery.css'
import './gallery.mobile.css'
import { getImagePath } from '../../utils/getBasePath'

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
    image: getImagePath('galeria/esculturas/1.webp'),
    url: 'https://magdacastro.com/galeria',
  })

  const makeups: Artwork[] = [
    {
      title: 'Bruja necrófaga',
      description: 'Descripción de la obra de maquillaje artístico y efectos especiales.',
      images: [
        'maquillajes/bruja-necrofaga/1.webp',
        'maquillajes/bruja-necrofaga/2.webp',
        'maquillajes/bruja-necrofaga/3.webp',
        'maquillajes/bruja-necrofaga/4.webp',
        'maquillajes/bruja-necrofaga/5.webp',
        'maquillajes/bruja-necrofaga/6.webp',
        'maquillajes/bruja-necrofaga/7.webp',
        'maquillajes/bruja-necrofaga/8.webp',
        'maquillajes/bruja-necrofaga/9.webp',
    ],
    },
    {
      title: 'Pumpkin',
      description: 'Descripción de la obra de maquillaje artístico y efectos especiales.',
      images: [
        'maquillajes/pumpkin/1.webp',
        'maquillajes/pumpkin/2.webp',
        'maquillajes/pumpkin/3.webp',
        'maquillajes/pumpkin/4.webp',
      ],
    },
    {
      title: 'Careta',
      description: 'Descripción de la obra de maquillaje artístico y efectos especiales.',
      images: [
        'maquillajes/careta/1.webp',
        'maquillajes/careta/2.webp',
        'maquillajes/careta/3.webp',
        'maquillajes/careta/4.webp',
        'maquillajes/careta/5.webp',
        'maquillajes/careta/6.webp',
      ],
    },
  ]

  const sculptures: Artwork[] = [
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

  const characters: Artwork[] = [
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
          {makeups.map((artwork, idx) => (
            <ArtworkCard key={idx} {...artwork} />
          ))}
        </div>
      </div>

      <div className='gallery-section' id='esculturas'>
        <h2 className='section-title'>Esculturas</h2>
        <div className='artworks-grid'>
          {sculptures.map((artwork, idx) => (
            <ArtworkCard key={idx} {...artwork} />
          ))}
        </div>
      </div>

      <div className='gallery-section' id='personajes-cosplay'>
        <h2 className='section-title'>Personajes y performances</h2>
        <div className='artworks-grid'>
          {characters.map((artwork, idx) => (
            <ArtworkCard key={idx} {...artwork} />
          ))}
        </div>
      </div>
    </div>
  )
}