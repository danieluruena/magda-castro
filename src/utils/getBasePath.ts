const IMAGE_CDN = import.meta.env.VITE_ASSETS_BUCKET

export const getImagePath = (imagePath: string): string => {

  return `${IMAGE_CDN}/${imagePath}`
}