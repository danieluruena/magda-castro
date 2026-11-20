import React, {
  useCallback, useEffect, useRef, useState,
} from 'react'
import { createPortal } from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpand } from '@fortawesome/free-solid-svg-icons'
import type { BlogGalleryImage } from '../../../utils/blogBody'
import './blogGallery.css'
import './blogGallery.mobile.css'

type BlogGalleryProps = {
  images: BlogGalleryImage[]
}

export const BlogGallery: React.FC<BlogGalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalClosing, setIsModalClosing] = useState(false)
  const closeTimer = useRef<number | undefined>(undefined)
  const total = images.length

  const showPrev = () => setCurrentIndex((prev) => (prev - 1 + total) % total)
  const showNext = () => setCurrentIndex((prev) => (prev + 1) % total)

  const getClassName = (index: number): string => {
    if (index === currentIndex) return 'current'
    if (index === (currentIndex - 1 + total) % total) return 'prev'
    if (index === (currentIndex + 1) % total) return 'next'
    return 'hidden'
  }

  const openModal = () => {
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
  }

  const restoreScroll = useCallback(() => {
    document.body.style.overflow = ''
    document.documentElement.style.overflow = ''
  }, [])

  const closeModal = useCallback(() => {
    setIsModalClosing(true)
    closeTimer.current = window.setTimeout(() => {
      setIsModalOpen(false)
      setIsModalClosing(false)
      restoreScroll()
    }, 300)
  }, [restoreScroll])

  useEffect(() => {
    if (!isModalOpen) return undefined

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeModal()
    }

    document.addEventListener('keydown', handleEscape)

    return () => document.removeEventListener('keydown', handleEscape)
  }, [isModalOpen, closeModal])

  useEffect(() => () => {
    window.clearTimeout(closeTimer.current)
    restoreScroll()
  }, [restoreScroll])

  return (
    <figure className="blog-gallery" aria-label="Galería de imágenes">
      <div className="blog-gallery__frame">
        {images.map((image, index) => (
          <img
            key={`${image.src}-${index}`}
            src={image.src}
            alt={image.alt || `Imagen ${index + 1} de ${total}`}
            className={`blog-gallery__image ${getClassName(index)}`}
            style={{ cursor: index === currentIndex ? 'pointer' : 'default' }}
            onClick={index === currentIndex ? openModal : undefined}
            loading="lazy"
            decoding="async"
          />
        ))}

        <button type="button" className="blog-gallery__btn blog-gallery__btn--zoom" onClick={openModal} aria-label="Ver imagen ampliada">
          <FontAwesomeIcon icon={faExpand} />
        </button>

        {total > 1 && (
          <>
            <span className="blog-gallery__counter">{currentIndex + 1} / {total}</span>
            <button type="button" className="blog-gallery__btn blog-gallery__btn--prev" onClick={showPrev} aria-label="Imagen anterior">
              <span aria-hidden="true">←</span>
            </button>
            <button type="button" className="blog-gallery__btn blog-gallery__btn--next" onClick={showNext} aria-label="Imagen siguiente">
              <span aria-hidden="true">→</span>
            </button>
          </>
        )}
      </div>

      {total > 1 && (
        <div className="blog-gallery__dots">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`blog-gallery__dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir a la imagen ${index + 1}`}
              aria-current={index === currentIndex}
            />
          ))}
        </div>
      )}

      {isModalOpen && createPortal(
        <div className={`blog-gallery__modal ${isModalClosing ? 'closing' : ''}`} onClick={closeModal}>
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt || `Imagen ${currentIndex + 1} de ${total} ampliada`}
            className="blog-gallery__modal-image"
          />
        </div>,
        document.body,
      )}
    </figure>
  )
}
