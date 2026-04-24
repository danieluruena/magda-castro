import React from 'react'
import { getImagePath } from '../../utils/getBasePath'

interface LazyVideoProps {
  src: string
  className?: string
  posterImage?: string
}

/**
 * Componente para optimizar carga de video:
 * - Autoplay + muted para que funcione en navegadores modernos
 * - Loop para video de fondo
 * - Poster image como fallback
 * - Múltiples formatos para mejor compatibilidad
 */
export const LazyVideo: React.FC<LazyVideoProps> = ({
  src,
  className,
  posterImage,
}) => {
  const videoPath = getImagePath(src)

  return (
    <video
      className={className}
      autoPlay
      muted
      loop
      playsInline
      poster={posterImage ? getImagePath(posterImage) : undefined}
      preload='false'
    >
      <source src={videoPath} type="video/webm" />
      <p>Tu navegador no soporta video HTML5</p>
    </video>
  )
}
