import { NavLink } from 'react-router-dom'
import './artisticFormat.css'

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
        <img className='artistic-format-image' src={`/assets/formatos/${imageUrl}`} alt={title} />
      </NavLink>
      <h3 className='artistic-format-title fade-in'>{title}</h3>
      <p className='artistic-format-description fade-in'>{description}</p>
      <NavLink to={link} className="artistic-format-btn fade-in">→</NavLink>
    </div>
  )
}