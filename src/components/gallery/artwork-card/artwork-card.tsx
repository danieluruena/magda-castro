import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './artwork-card.css'

interface ArtworkCardProps {
  title: string
  description: string
  images: string[]
}

export const ArtworkCard = ({
 title, description, images, 
}: ArtworkCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="artwork-card fade-in">
      <div className="artwork-carousel">
        <img 
          src={images[currentIndex]} 
          alt={`${title} - ${currentIndex + 1}`}
          className="artwork-image"
        />
        {images.length > 1 && (
          <>
            <button className="artwork-btn prev" onClick={prevImage}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button className="artwork-btn next" onClick={nextImage}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
            <div className="artwork-indicators">
              {images.map((_, idx) => (
                <span 
                  key={idx} 
                  className={`indicator ${idx === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(idx)}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="artwork-info">
        <h3 className="artwork-title">{title}</h3>
        <p className="artwork-description">{description}</p>
      </div>
    </div>
  )
}
