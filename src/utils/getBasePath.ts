const IMAGE_CDN = process.env.REACT_APP_IMAGE_CDN

export const getImagePath = (imagePath: string): string => {
  if (IMAGE_CDN === 'netlify') {
    return `/.netlify/images?url=/assets/${imagePath}`
  }

  return `/assets/${imagePath}`
}