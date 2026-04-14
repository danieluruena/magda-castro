
import { useState, useEffect } from 'react'
import { LazyImage } from '../../common/LazyImage'
import '../../../common.css'
import './carousel.css'
import './carousel.mobile.css'

interface CarouselProps {
  images: string[]
  category?: 'maquillajes' | 'esculturas' | 'personajes_y_performances'
}

export const Carousel = ({ images, category = 'personajes_y_performances' }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalClosing, setIsModalClosing] = useState(false)

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

  const openModal = () => {
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalClosing(true)
    setTimeout(() => {
      setIsModalOpen(false)
      setIsModalClosing(false)
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }, 300)
  }

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isModalOpen])

  if (!images.length) return null

  // Mapeo de descripciones por categoría
  const getCategoryDescription = (cat: string) => {
    const descriptions: Record<string, string> = {
      maquillajes: 'Maquillaje artístico y FX gótico por Magda Castro',
      esculturas: 'Escultura macabra y conceptual por Magda Castro',
      personajes_y_performances: 'Personaje gótico y diseño FX por Magda Castro',
    }
    return descriptions[cat] || 'Obra artística por Magda Castro'
  }

  const categoryDescription = getCategoryDescription(category)

  return (
    <>
      <div className="carousel fade-in">
        <div className="carousel-container">
          {images.map((image, index) => (
            <LazyImage
              key={index}
              src={`galeria/${image}`}
              alt={`${categoryDescription} - ${index + 1}`}
              className={`carousel-image ${getClassName(index)}`}
              style={{ cursor: index === currentIndex ? 'pointer' : 'default' }}
              onClick={index === currentIndex ? openModal : undefined}
            />
          ))}
        </div>
        
        <button className="carousel-btn prev-btn" onClick={prevImage}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button className="carousel-btn next-btn" onClick={nextImage}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>

      {isModalOpen && (
        <div className={`carousel-modal ${isModalClosing ? 'closing' : ''}`} onClick={closeModal}>
          <LazyImage
            src={`galeria/${images[currentIndex]}`}
            alt={`${categoryDescription} - Imagen ampliada`}
            className="carousel-modal-image"
          />
        </div>
      )}
    </>
  )
}