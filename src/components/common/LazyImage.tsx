import React from 'react'
import { getImagePath } from '../../utils/getBasePath'

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  onClick?: () => void
  style?: React.CSSProperties
  width?: string | number
  height?: string | number
}

/**
 * Componente para optimizar carga de imágenes:
 * - Implementa loading="lazy" nativo
 * - Soportará WebP cuando las imágenes sean convertidas
 * - Optimizado para rendimiento
 */
export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className,
  onClick,
  style,
  width,
  height,
}) => {
  const imagePath = getImagePath(src)

  return (
    <img
      src={imagePath}
      alt={alt}
      className={className}
      onClick={onClick}
      style={style}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
    />
  )
}
