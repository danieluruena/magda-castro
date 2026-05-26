import { useHashScroll } from '../../hooks/useHashScroll'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { useMetaTags } from '../../hooks/useMetaTags'
import { ArtworkCard } from './artworkCard/artworkCard'
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
      title: 'Pumpkinhead',
      description: 'Maquillaje de artístico a base de pintura corporal y prendas originales que juega con la ilusión de luces y colores.',
      images: [
        'maquillajes/pumpkin/1.webp',
        'maquillajes/pumpkin/2.webp',
        'maquillajes/pumpkin/3.webp',
        'maquillajes/pumpkin/4.webp',
      ],
    },
    {
      title: 'Sensaciones',
      description: 'Esta obra que explora la relación entre la enfermedad mental, la percepción social y la violencia. A través de maquillajes de efectos especiales elaborados con sangre falsa, látex y otros materiales, la pieza cuestiona el miedo colectivo hacia las personas con trastornos psiquiátricos y reflexiona sobre cómo una sociedad enferma influye en quienes la habitan. La obra plantea interrogantes sobre el estigma, la prevención y la delgada línea entre lo considerado “normal” y lo patológico.',
      images: [
        'maquillajes/sensaciones/1.webp',
        'maquillajes/sensaciones/2.webp',
        'maquillajes/sensaciones/3.webp',
        'maquillajes/sensaciones/4.webp',
        'maquillajes/sensaciones/5.webp',
        'maquillajes/sensaciones/6.webp',
        'maquillajes/sensaciones/7.webp',
        'maquillajes/sensaciones/8.webp',
        'maquillajes/sensaciones/9.webp',
        'maquillajes/sensaciones/10.webp',
      ],
    },
    {
      title: 'Autopsia',
      description: 'La transgresión del cuerpo sin vida desordena los rituales que las sociedades han creado para procesar el duelo y mantener una distancia simbólica con la muerte. Al romperse ese límite, aparece la angustia existencial: nos recuerda nuestra propia vulnerabilidad, la inevitabilidad de la descomposición y la falta de control que tenemos sobre nuestro destino final.',
      images: [
        'maquillajes/autopsia/1.webp',
        'maquillajes/autopsia/2.webp',
        'maquillajes/autopsia/3.webp',
      ],
    },
    {
      title: 'Demonio',
      description: 'Produce cierta gracia observar las reacciones de miedo y rechazo en aquellos espectadores que ven aquí ciertas figuras de fantasía como si fueran reales, dejando en evidencia la facilidad con que se manipulan las percepciones y los comportamientos cuando hay creencias fuertemente arraigadas.',
      images: [
        'maquillajes/demonio/1.webp',
        'maquillajes/demonio/2.webp',
        'maquillajes/demonio/3.webp',
        'maquillajes/demonio/4.webp',
      ],
    },
    {
      title: 'Goblin',
      description: 'El gusto por la creación de personajes de fantasía que rompen con la estética convencional de lo bello.',
      images: [
        'maquillajes/goblin/1.webp',
        'maquillajes/goblin/2.webp',
        'maquillajes/goblin/3.webp',
        'maquillajes/goblin/4.webp',
        'maquillajes/goblin/5.webp',
      ],
    },
    {
      title: 'Oro oscuro',
      description: 'Maquillaje a base de pintura corporal y corona de espinas modelada con silicona que permite experimentar la dinámica entre luces y sombras a la par del contraste con un único color.',
      images: [
        'maquillajes/oro-oscuro/1.webp',
        'maquillajes/oro-oscuro/2.webp',
        'maquillajes/oro-oscuro/3.webp',
        'maquillajes/oro-oscuro/4.webp',
      ],
    },
  ]

  const sculptures: Artwork[] = [
    {
      title: 'Ángel de la muerte',
      description: 'Inspirada en una de las criaturas creadas por Guillermo Del Toro para la película Hellboy 2.',
      images: [
        'esculturas/angel-muerte/1.webp',
        'esculturas/angel-muerte/2.webp',
        'esculturas/angel-muerte/3.webp',
      ],
    },
    {
      title: 'Baphomet',
      description: 'Reinterpreta la figura popularizada por Eliphas Lévi como un símbolo de rebeldía, dualidad y resistencia frente a las estructuras impuestas. La escultura presenta un ser humanoide que encarna la unión de lo femenino y lo masculino, incorporando estigmas asociados a la tradición judeocristiana para cuestionar los discursos religiosos asumidos como verdades absolutas. Lejos de mostrarse desafiante, la figura permanece serena y humilde, reflejando cómo el imaginario humano ha transformado a Baphometh en un emblema de fascinación, subversión y desobediencia frente a lo establecido.',
      images: [
        'esculturas/baphomet/1.webp',
        'esculturas/baphomet/2.webp',
        'esculturas/baphomet/3.webp',
        'esculturas/baphomet/4.webp',
        'esculturas/baphomet/5.webp',
        'esculturas/baphomet/6.webp',
        'esculturas/baphomet/7.webp',
        'esculturas/baphomet/8.webp',
        'esculturas/baphomet/9.webp',
        'esculturas/baphomet/10.webp',
      ],
    },
    {
      title: 'Diablo 2',
      description: 'Inspirada en el personaje Diablo del videojuego Diablo 2 de Blizzard.',
      images: [
        'esculturas/diablo-2/1.webp',
        'esculturas/diablo-2/2.webp',
        'esculturas/diablo-2/3.webp',
        'esculturas/diablo-2/4.webp',
      ],
    },
    {
      title: 'Dismorfia',
      description: 'no puede ver la realidad de su cuerpo físico en el espejo, nunca ha visto su cara como realmente es, ella danza mientras enrolla en el cuerpo un alambre de púas que simboliza el dolor que se causa a sí misma con pensamientos que no controla, ella no camina simplemente baila a través de sus días como una forma de enfrentar el mundo en el que vive. El segundo alambre que se encuentra cerca de su cuerpo es un poco más grande, ella en su danza de vida al querer avanzar se lastima igualmente con él, ese alambre simboliza la sociedad.',
      images: [
        'esculturas/dismorfia/1.webp',
        'esculturas/dismorfia/2.webp',
        'esculturas/dismorfia/3.webp',
        'esculturas/dismorfia/4.webp',
        'esculturas/dismorfia/5.webp',
        'esculturas/dismorfia/6.webp',
        'esculturas/dismorfia/7.webp',
        'esculturas/dismorfia/8.webp',
      ],
    },
    {
      title: 'Ecos de la existencia',
      description: 'Esta obra presenta una reflexión artística y simbólica sobre la relación entre la humanidad, la naturaleza y la existencia, a través de distintos elementos con significado ecológico, filosófico y político se tocan temas como la resistencia al orden establecido, la explotación anima y ambiental y la aceptación de la muerte.',
      images: [
        'esculturas/ecos-existencia/1.webp',
        'esculturas/ecos-existencia/2.webp',
        'esculturas/ecos-existencia/3.webp',
        'esculturas/ecos-existencia/4.webp',
        'esculturas/ecos-existencia/5.webp',
        'esculturas/ecos-existencia/6.webp',
      ],
    },
    {
      title: 'Él',
      description: 'La obra encarna a un ser surgido de manera espontánea, ajeno a la conciencia y privado de identidad, que únicamente percibe el sufrimiento de existir. Atado simbólicamente por cadenas, candados y grilletes, “Él” refleja la desesperación de un individuo incapaz de escapar de un entorno restrictivo y de una realidad donde el cambio social avanza demasiado lento para aliviar el dolor humano.',
      images: [
        'esculturas/el/1.webp',
        'esculturas/el/2.webp',
        'esculturas/el/3.webp',
        'esculturas/el/4.webp',
        'esculturas/el/5.webp',
      ],
    },
  ]

  const characters: Artwork[] = [
    {
      title: 'Nekraya',
      description: 'Surgida de las raices de lo arboles cerca de la fosas donde se entierran los cadaveres sin nombre, del olvido de aquellos seres que no tienen quien los recuerde. Se alimenta de la carne de los cadaveres y acecha a quienes rondan esos lugares para dejar su alimento bajo tierra. Representa soledad, olvido, injusticia y la maldad del que desea el olvido de otros.',
      images: [
        'personajes/nekraya/1.webp',
        'personajes/nekraya/2.webp',
        'personajes/nekraya/3.webp',
        'personajes/nekraya/4.webp',
        'personajes/nekraya/5.webp',
        'personajes/nekraya/6.webp',
        'personajes/nekraya/7.webp',
        'personajes/nekraya/8.webp',
        'personajes/nekraya/9.webp',
      ],
    },
    {
      title: 'Lilith',
      description: 'Representación del mítico personaje Lilith que simboliza la rebeldía femenina y la entrega completa a al deseo y la dominación.',
      images: [
        'personajes/lilith/1.webp',
        'personajes/lilith/2.webp',
        'personajes/lilith/3.webp',
        'personajes/lilith/4.webp',
        'personajes/lilith/5.webp',
      ],
    },
    {
      title: 'Sacerdotisa',
      description: 'Tras años de no entender quién era realmente y vivir dejándose llevar por un entorno que la obligaba a enmascarar su identidad para perderse entre una multitud de falsedades y espejismos, llegó a un punto sin sentido, donde tuvo que iniciar un proceso de reafirmación de su ser, a través de un ritual profano en un sentido general, no solo espiritual, psicológico o social, sino como algo transversal a su existencia misma. El sufrimiento y el vacío le proporcionaron un entendimiento de su poder interior junto a un propósito que la llevó a convertirse en un ser que no busca convertir mentes, creencias y percepciones sino transformar la esencia primordial de los seres que se niegan a aceptar su verdadera identidad, sin alivio ni consuelo, solo aceptación.',
      images: [
        'personajes/sacerdotisa/1.webp',
        'personajes/sacerdotisa/2.webp',
        'personajes/sacerdotisa/3.webp',
        'personajes/sacerdotisa/4.webp',
        'personajes/sacerdotisa/5.webp',
      ],
    },
    {
      title: 'Cenobita',
      description: 'Personaje inspirado en el universo de Hellraiser creado por Clive Barker. Esta es una versión original que pretende exponer la extrema dualidad entre la sensibilidad y la racionalidad que lástima de distintas maneras pero también produce placer.',
      images: [
        'personajes/cenobita/1.webp',
        'personajes/cenobita/2.webp',
        'personajes/cenobita/3.webp',
        'personajes/cenobita/4.webp',
      ],
    },
    {
      title: 'Morrigan',
      description: 'Representación de la diosa celta de la guerra y la muerte.',
      images: [
        'personajes/morrigan/1.webp',
        'personajes/morrigan/2.webp',
        'personajes/morrigan/3.webp',
      ],
    },
    {
      title: 'La Parca',
      description: 'Representación de la clásica muerte que no distingue bandos, no entiende de bien ni mal, solo llega a reclamar la vida. Creada inicialmente para representar a la muerte que ha marcado la violencia en colombia, en la que el pueblo paga con sus vidas sin distinción. Inspirada en las primera representaciones de la muerte como entidad en la edad media.',
      images: [
        'personajes/parca/1.webp',
        'personajes/parca/2.webp',
        'personajes/parca/3.webp',
        'personajes/parca/4.webp',
        'personajes/parca/5.webp',
      ],
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
        <h2 className='section-title'>Personajes</h2>
        <div className='artworks-grid'>
          {characters.map((artwork, idx) => (
            <ArtworkCard key={idx} {...artwork} />
          ))}
        </div>
      </div>
    </div>
  )
}