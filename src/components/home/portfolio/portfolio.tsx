import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import { Service } from "./service/service";
import '../../../common.css';
import './portfolio.css';


export const Portfolio: React.FC = () => {
  useScrollAnimation();

  const services = [
    {
      imageUrl: 'Esculturas.jpg',
      title: 'Obras personalizadas',
      description: 'Piezas de arte únicas que reflejen tus ideas con un estilo impactante',
      link: '/servicios#obras-personalizadas',
    },
    {
      imageUrl: 'Diseño pjs.jpg',
      title: 'Diseño de personajes y trajes',
      description: 'Representación realista y detallada de personajes originales o inspirados',
      link: '/servicios#diseno-personajes',
    },
    {
      imageUrl: 'Eventos.jpg',
      title: 'Performance en vivo',
      description: 'Al combinar expresiones las ideas llegan mas profundo',
      link: '/servicios#performance',
    },
    {
      imageUrl: 'Talleres.jpg',
      title: 'Charlas y talleres',
      description: 'Estoy abierta a compartir mis conocimientos y mi forma de ver el mundo',
      link: '/servicios#charlas-talleres',
    },
  ];
  return (
    <section className="portfolio">
      <h2 className="section-title fade-in">Portafolio de servicios</h2>
      <p className="section-description fade-in">Puedo traer a este mundo esas ideas que trascienden lo siniestro y desgarrador de nuestra mente.</p>
      {services.map((service) => {
        return <Service key={service.title} {...service} />;
      })}
    </section>
  )
};
