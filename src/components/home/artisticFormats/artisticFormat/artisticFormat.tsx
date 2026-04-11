import { NavLink } from 'react-router-dom'
import { getImagePath } from '../../../../utils/getBasePath'
import './artisticFormat.css'
import './artisticFormat.mobile.css'

type ArtisticFormatProps = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
};

export const ArtisticFormat: React.FC<ArtisticFormatProps> = ({
 title, description, imageUrl, link, 
}) => {
  return (
    <div className='artistic-format'>
      <NavLink className="image-container fade-in" to={link}>
        <img className='artistic-format-image' src={getImagePath(`formatos/${imageUrl}`)} alt={title} />
      </NavLink>
      <NavLink to={link} className="link">
        <h3 className='artistic-format-title'>{title}</h3>
      </NavLink>
      <p className='artistic-format-description'>{description}</p>
      <NavLink to={link} className="artistic-format-btn">→</NavLink>
    </div>
  )
}