import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './artwork-card.css'
import { LazyImage } from '../../common/LazyImage'

interface ArtworkCardProps {
  title: string
  description: string
  images: string[]
}

export const ArtworkCard = ({
 title, description, images, 
}: ArtworkCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const getPrevIndex = () => (currentIndex - 1 + images.length) % images.length
  const getNextIndex = () => (currentIndex + 1) % images.length
  const getClassName = (index: number): string => {
    if (index === currentIndex) return 'current'
    if (index === getPrevIndex()) return 'prev'
    if (index === getNextIndex()) return 'next'
    return 'hidden'
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="artwork-card fade-in">
      <div className="artwork-carousel">
        {images.map((image, index) => (
          <LazyImage
            key={index}
            src={`galeria/${image}`}
            alt={`${title} - ${index + 1}`}
            className={`artwork-image ${getClassName(index)}`}
          />
        ))}
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
