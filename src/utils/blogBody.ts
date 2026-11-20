export type BlogGalleryImage = {
  src: string
  alt: string
}

export type BlogBodySegment =
  | { kind: 'html', html: string }
  | { kind: 'gallery', images: BlogGalleryImage[] }

const isBlankNode = (node: ChildNode): boolean => {
  if (node.nodeType === Node.TEXT_NODE) return !node.textContent?.trim()

  if (node.nodeName === 'P') {
    return !node.textContent?.trim() && !(node as Element).querySelector('img, video, iframe')
  }

  return false
}

const nodeToHtml = (node: ChildNode): string => {
  const holder = document.createElement('div')
  holder.append(node.cloneNode(true))
  return holder.innerHTML
}

/**
 * Divide el HTML del cuerpo en bloques de texto y grupos de imágenes consecutivas,
 * para que cada grupo se muestre como carrusel. Las imágenes se leen sin cargarlas aquí.
 */
export const splitBlogBody = (body: string): BlogBodySegment[] => {
  const template = document.createElement('template')
  template.innerHTML = body

  const segments: BlogBodySegment[] = []
  let htmlBuffer = ''
  let gallery: BlogGalleryImage[] = []

  const flushHtml = () => {
    if (htmlBuffer.trim()) segments.push({ kind: 'html', html: htmlBuffer })
    htmlBuffer = ''
  }

  const flushGallery = () => {
    if (gallery.length > 0) segments.push({ kind: 'gallery', images: gallery })
    gallery = []
  }

  Array.from(template.content.childNodes).forEach((node) => {
    if (node.nodeName === 'IMG') {
      flushHtml()
      const image = node as HTMLImageElement
      gallery.push({ src: image.getAttribute('src') ?? '', alt: image.getAttribute('alt') ?? '' })
      return
    }

    if (isBlankNode(node)) return

    flushGallery()
    htmlBuffer += nodeToHtml(node)
  })

  flushGallery()
  flushHtml()

  return segments
}
