import React from 'react';
import './home.css';
import '../../common.css';
import { ArtisticFormats } from './artisticFormats/artisticFormats';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const Home: React.FC = () => {
  useScrollAnimation();
  return (
    <>
      <section className="presentation">
        <h2 className="presentation-title fade-in">
          Arte macabro y psicológico
        </h2>
        <p className="presentation-description fade-in">
          Explora la belleza de lo macabro y la realidad de la psique trastornada.
        </p>
      </section>
      <ArtisticFormats />
    </>
  );
};