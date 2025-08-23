import './artisticFormats.css';
import '../../../common.css';
import { ArtisticFormat } from './formatoArtistico/artisticFormat';

export const FormatosArtisticos: React.FC = () => {
  const artisticFormats = [
    {
      image: 'escultura.jpg',
      title: 'Escultura',
      description: 'Figuras que traen al plano material los conceptos que no se puede explicar con simples palabras.',
      link: '/galeria#escultura',
    },
    {
      image: 'maquillaje.jpg',
      title: 'Maquillaje FX',
      description: 'Una extensión de nuestras expresiones mas alá de las limitaciones coporales.',
      link: '/galeria#maquillaje',
    },
    {
      image: 'pintura.jpg',
      title: 'Pintura',
      description: 'Figuras que traen al plano material los conceptos que no se puede explicar con simples palabras.',
      link: '/galeria#pintura',
    },
    {
      image: 'personajes.jpg',
      title: 'Creación de personajes y performance',
      description: 'Caracterizar las ideas mas controversiales e impactantes para el entorno social.',
      link: '/galeria#personajes-cosplay',
    },
  ];
  return (
    <section className="artistic-formats">
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
  );
};
