import { Orientation } from './constants'

type VideoWork = {
  kind: 'video'
  title: string
  description: string
  category: string
  videoUrl: string
  orientation: Orientation
  isYouTube: boolean
}

type ImageWork = {
  kind: 'image'
  title: string
  description: string
  category: string
  imageUrl: string
  link: string
  orientation: Orientation
}

export type PublishedWork = VideoWork | ImageWork

/**
 * Trabajos publicados, ordenados del más reciente al más antiguo.
 * La sección "Últimos trabajos" muestra los cuatro primeros.
 */
export const publishedWorks: PublishedWork[] = [
  {
    kind: 'video',
    title: 'Hammer Metal Fest 2026 - Pereira',
    description: 'Performance para la introducción e intermedio del festival Hammer Metal Fest presentado por primera vez en su edición de 2026 en Pereira.',
    category: 'Performance',
    videoUrl: 'eventos/hammer-metal-fest-pereira-2026/hammer-metal-fest-pereira-2026.webm',
    orientation: Orientation.vertical,
    isYouTube: false,
  },
  {
    kind: 'video',
    title: 'Tenebrarum en Rock al Parque 2025',
    description: 'Performance para la presentación de la banda de metal Tenebrarum en el festival de Rock Al Parque 2025, para la cual se realizó el diseño de un nuevo personaje, junto a la elaboración del traje, guion del performance y maquillaje de los miembros de la banda.',
    category: 'Performance',
    videoUrl: 'https://www.youtube.com/embed/W_yHgiakGq4?h=null&playlist=W_yHgiakGq4&autoplay=0&controls=1&loop=0&autopause=0&playsinline=1&mute=0&start=2034',
    orientation: Orientation.horizontal,
    isYouTube: true,
  },
  {
    kind: 'video',
    title: 'Athanator - Alienado',
    description: 'Video musical para la banda de metal Athanator de Medellín en el cual participé con mi personaje "La Sacerdotisa", mi obra "Ecos de la existencia", realización de performance, maquillaje, vestuario e indumentaria.',
    category: 'Videoclip',
    videoUrl: 'https://www.youtube.com/embed/gDuTWrkTtMY?h=null&playlist=gDuTWrkTtMY&autoplay=0&controls=1&loop=0&autopause=0&playsinline=1&mute=0',
    orientation: Orientation.horizontal,
    isYouTube: true,
  },
  {
    kind: 'image',
    title: 'Sacerdotisa',
    description: 'Personaje y performance sobre la identidad, el ritual profano y la aceptación de la propia esencia frente a las máscaras sociales.',
    category: 'Personaje',
    imageUrl: 'galeria/personajes/sacerdotisa/1.webp',
    link: '/galeria#personajes-cosplay',
    orientation: Orientation.vertical,
  },
]
