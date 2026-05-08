const IMAGE_CDN = import.meta.env.VITE_ASSETS_BUCKET

export const getImagePath = (imagePath: string): string => {
  if (IMAGE_CDN === 'netlify') {
    return `/.netlify/images?url=/assets/${imagePath}`
  }

  return `/assets/${imagePath}`
}