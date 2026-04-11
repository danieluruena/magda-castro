
import { useState, useEffect } from 'react'
import { getImagePath } from '../../../utils/getBasePath'
import '../../../common.css'
import './carousel.css'
import './carousel.mobile.css'

interface CarouselProps {
  images: string[];
}

export const Carousel = ({ images }: CarouselProps) => {
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

  return (
    <>
      <div className="carousel fade-in">
        <div className="carousel-container">
          {images.map((image, index) => (
            <img
              key={index}
              src={getImagePath(`galeria/${image}`)}
              alt='anything'
              className={`carousel-image ${getClassName(index)}`}
              onClick={index === currentIndex ? openModal : undefined}
              style={{ cursor: index === currentIndex ? 'pointer' : 'default' }}
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

      {isModalOpen && (
        <div className={`carousel-modal ${isModalClosing ? 'closing' : ''}`} onClick={closeModal}>
          <img
            src={getImagePath(`galeria/${images[currentIndex]}`)}
            alt='anything'
            className="carousel-modal-image"
          />
        </div>
      )}
    </>
  )
}