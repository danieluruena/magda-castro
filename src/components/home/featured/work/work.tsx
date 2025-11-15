import '../../../../common.css'
import './work.css'

export type WorkProps = {
  title: string
  description: string
  videoUrl: string
};

export const Work: React.FC<WorkProps> = ({
  title, description, videoUrl,
}) => {
  return (
    <div className="featured-work">
      <h3 className="work-title">{title}</h3>
      <iframe
        src={videoUrl}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        width="100%"
        height="100%"
        data-qa="builder-element-video-iframe"
        className="work-video"
        title={title}
      ></iframe>
      <p className="work-description">{description}</p>
    </div>
  )
}
