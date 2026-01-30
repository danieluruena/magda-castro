
import { useState } from 'react'
import '../../../common.css'
import { getImagePath } from '../../../utils/getBasePath'
import './carousel.css'

interface CarouselProps {
  images: string[];
}

export const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const getPrevIndex = () => (currentIndex - 1 + images.length) % images.length
  const getNextIndex = () => (currentIndex + 1) % images.length

  const getClassName = (index: number): string => {
    if (index === currentIndex) return 'current'
    if (index === getPrevIndex()) return 'prev'
    if (index === getNextIndex()) return 'next'
    return 'hidden'
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }


  if (!images.length) return null

  return (
    <div className="carousel fade-in">
      <div className="carousel-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={getImagePath(`galeria/${image}`)}
            alt='anything'
            className={`carousel-image ${getClassName(index)}`}
          />
        ))}
      </div>
      
      <button className="carousel-btn prev-btn" onClick={prevImage}>
        ‹
      </button>
      <button className="carousel-btn next-btn" onClick={nextImage}>
        ›
      </button>
    </div>
  )
}