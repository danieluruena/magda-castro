import { NavLink } from 'react-router-dom'
import { getImagePath } from '../../../utils/getBasePath'
import './serviceDetail.css'

type ServiceDetailProps = {
  id: string
  title: string
  description: string
  details: string[]
  imageUrl: string
  reversed?: boolean
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({
  id, title, description, details, imageUrl, reversed = false,
}) => {
  return (
    <article id={id} className={`service-detail ${reversed ? 'service-detail--reversed' : ''}`}>
      <div className="service-detail__image-wrapper fade-in">
        <img src={getImagePath(`servicios/${imageUrl}`)} alt={title} className="service-detail__image" />
      </div>
      <div className="service-detail__content fade-in">
        <h2 className="service-detail__title">{title}</h2>
        <p className="service-detail__description">{description}</p>
        <ul className="service-detail__list">
          {details.map((item) => (
            <li key={item} className="service-detail__list-item">{item}</li>
          ))}
        </ul>
        <NavLink to="/contacto" className="service-detail__cta">Solicitar información</NavLink>
      </div>
    </article>
  )
}
