import React from 'react';
import './inicio.css';
import '../../common.css';

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
      <section className="artistic-formats">
        <h2 className='section-title'>Diversas formas de expresión</h2>
        <p className='section-description'>Cada idea requiere su propia forma de expresarse.</p>
      </section>
    </>
  );
};