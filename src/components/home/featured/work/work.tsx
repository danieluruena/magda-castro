import { useState } from 'react'
import '../../../../common.css'
import './work.css'
import './work.mobile.css'
import { getImagePath } from '../../../../utils/getBasePath'

export type WorkProps = {
  title: string
  description: string
  videoUrl: string
  orientation: 'horizontal' | 'vertical',
  isYouTube: boolean
};

export const Work: React.FC<WorkProps> = ({
  title, description, videoUrl, orientation, isYouTube,
}) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  
  // Extraer el ID del video de YouTube
  const getYouTubeId = (url: string) => {
    const match = url.match(/embed\/([^?]+)/)
    return match ? match[1] : ''
  }
  
  // Obtener URLs apropiadas según el tipo de video
  let thumbnailUrl = ''
  let finalVideoUrl = videoUrl
  
  if (isYouTube) {
    const videoId = getYouTubeId(videoUrl)
    thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    finalVideoUrl = videoUrl.replace('youtube.com', 'youtube-nocookie.com')
  } else {
    // Para videos WebM en R2
    const videoFileName = videoUrl
    const thumbnailFileName = videoFileName.replace(/\.[^/.]+$/, '') + '-thumbnail.webp'
    thumbnailUrl = getImagePath(thumbnailFileName)
    finalVideoUrl = getImagePath(videoFileName)
  }
  
  const handleLoadVideo = () => {
    setIsVideoLoaded(true)
  }
  
  return (
    <div className="featured-work">
      <h3 className="work-title">{title}</h3>
      <div className={`work-video-container ${orientation}`}>
        {!isVideoLoaded ? (
          <div className="video-placeholder" onClick={handleLoadVideo}>
            <img 
              src={thumbnailUrl} 
              alt={`Vista previa de ${title}`}
              className="video-thumbnail"
              loading="lazy"
            />
            <button className="play-button" aria-label="Reproducir video">
              <svg viewBox="0 0 68 48" width="68" height="48">
                <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path>
                <path d="M 45,24 27,14 27,34" fill="#fff"></path>
              </svg>
            </button>
          </div>
        ) : isYouTube ? (
          <iframe
            src={finalVideoUrl}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            width="100%"
            height="100%"
            className="work-video"
            title={title}
            loading="lazy"
          ></iframe>
        ) : (
          <video
            src={finalVideoUrl}
            controls
            height="100%"
            className="work-video"
            title={title}
          ></video>
        )}
      </div>
      <p className="work-description">{description}</p>
    </div>
  )
}
