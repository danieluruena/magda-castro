import { useEffect } from 'react'

/**
 * Observa los `.fade-in` del DOM. Si pasas `trigger`, vuelve a observarlos al cambiar
 * (útil cuando el contenido llega de forma asíncrona).
 */
export const useScrollAnimation = (trigger?: unknown) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.3 },
    )

    const fadeElements = document.querySelectorAll('.fade-in')
    fadeElements.forEach((element) => {
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [trigger])
}