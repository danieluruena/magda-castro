import { NavLink } from 'react-router-dom'
import { getImagePath } from '../../../utils/getBasePath'
import './serviceDetail.css'
import './serviceDetail.mobile.css'
import '../../../common.css'

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
      <div className="service-image-container fade-in">
        <img src={getImagePath(`servicios/${imageUrl}`)} alt={title} className="service-image" />
      </div>
      <div className="service-content">
        <h2 className="service-detail-title">{title}</h2>
        <p className="service-detail-description">{description}</p>
        <ul className="service-detail-list">
          {details.map((item) => (
            <li key={item} className="service-detail-list-item">{item}</li>
          ))}
        </ul>
        <NavLink to="/contacto" className="main-btn">Solicitar información</NavLink>
      </div>
    </article>
  )
}
