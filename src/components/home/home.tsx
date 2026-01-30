import React from 'react'
import './home.css'
import '../../common.css'
import { ArtisticFormats } from './artisticFormats/artisticFormats'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { Portfolio } from './portfolio/portfolio'
import { Featured } from './featured/featured'
import { getImagePath } from '../../utils/getBasePath'

export const Home: React.FC = () => {
  useScrollAnimation()
  return (
    <>
      <div className="video-container">
        <video className="bg-video" autoPlay muted loop src={getImagePath('vbg.mp4')}>
        </video>
      </div>
      <section className="presentation">
        <h2 className="presentation-title fade-in">
          Arte macabro y psicológico
        </h2>
        <p className="presentation-description fade-in">
          Explora la belleza de lo macabro y la realidad de la psique trastornada.
        </p>
      </section>
      <ArtisticFormats />
      <Portfolio />
      <Featured />
    </>
  )
}