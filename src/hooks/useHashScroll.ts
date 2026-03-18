import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const useHashScroll = () => {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return

    const id = hash.replace('#', '')
    const el = document.getElementById(id)

    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      return
    }

    // Si el elemento aún no está en el DOM (montaje asíncrono), reintenta
    const timeout = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 100)

    return () => clearTimeout(timeout)
  }, [hash])
}
