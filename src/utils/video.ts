import { getImagePath } from './getBasePath'

/**
 * Utilidades compartidas para resolver miniaturas y URLs de video
 * de los trabajos destacados (YouTube y archivos propios en el CDN).
 */

export const getYouTubeId = (url: string): string => {
  const match = url.match(/embed\/([^?]+)/)
  return match ? match[1] : ''
}

export const getYouTubeThumbnail = (url: string): string => {
  return `https://img.youtube.com/vi/${getYouTubeId(url)}/maxresdefault.jpg`
}

export const getYouTubeEmbedUrl = (url: string): string => {
  return url
    .replace('youtube.com', 'youtube-nocookie.com')
    .replace('autoplay=0', 'autoplay=1')
}

export const getLocalVideoThumbnail = (videoUrl: string): string => {
  const thumbnailFileName = videoUrl.replace(/\.[^/.]+$/, '') + '-thumbnail.webp'
  return getImagePath(thumbnailFileName)
}

export const getWorkThumbnail = (work: { videoUrl: string; isYouTube: boolean }): string => {
  return work.isYouTube
    ? getYouTubeThumbnail(work.videoUrl)
    : getLocalVideoThumbnail(work.videoUrl)
}

export const getWorkVideoUrl = (work: { videoUrl: string; isYouTube: boolean }): string => {
  return work.isYouTube
    ? getYouTubeEmbedUrl(work.videoUrl)
    : getImagePath(work.videoUrl)
}
