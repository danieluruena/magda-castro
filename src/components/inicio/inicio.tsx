import React from 'react';
import './inicio.css';
import '../../common.css';
import { FormatosArtisticos } from './formatosArtisticos/artisticFormats';

export const Inicio: React.FC = () => {
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
      <FormatosArtisticos />
    </>
  );
};