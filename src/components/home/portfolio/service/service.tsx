import { NavLink } from 'react-router-dom'
import './service.css'
import { getImagePath } from '../../../../utils/getBasePath'

type ServiceProps = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
};

export const Service: React.FC<ServiceProps> = ({
 title, description, imageUrl, link, 
}) => {
  return (
    <div className='service'>
      <NavLink className="image-container fade-in" to={link}>
        <img className='service-image' src={getImagePath(`servicios/${imageUrl}`)} alt={title} />
      </NavLink>
      <div className='service-info fade-in'>
        <h3 className='service-title fade-in'>{title}</h3>
        <p className='service-description fade-in'>{description}</p>
        <NavLink to={link} className="main-btn fade-in">Saber más</NavLink>
      </div>
    </div>
  )
}
