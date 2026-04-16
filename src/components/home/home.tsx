import React from 'react'
import './home.css'
import './home.mobile.css'
import '../../common.css'
import { ArtisticFormats } from './artisticFormats/artisticFormats'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { useMetaTags } from '../../hooks/useMetaTags'
import { LazyVideo } from '../common/LazyVideo'
import { Portfolio } from './portfolio/portfolio'
import { Featured } from './featured/featured'

export const Home: React.FC = () => {
  useScrollAnimation()
  useMetaTags({
    title: 'Magda Castro | Arte Macabro, Escultura y Performance',
    description: 'Explora el arte macabro y psicológico. Especialista en escultura, maquillaje artístico FX, diseño de personajes y performance en vivo desde Medellín.',
    image: 'https://magdacastro.com/assets/sobre-mi/me-1.jpg',
    url: 'https://magdacastro.com/',
  })
  return (
    <>
      <div className="video-container">
        <LazyVideo src='vbg.webm' className='bg-video' />
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