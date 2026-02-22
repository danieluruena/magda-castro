import React from 'react'
import './contact.css'

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <article className="contact-layout">
        <section className="contact-info">
          <h3 className="contact-title">CONTÁCTANOS</h3>
          <p className="contact-text">
            Susúrranos tu idea… y la transformaremos en la obra que tu sombra está buscando.
          </p>
        </section>

        <section className="contact-form">
          <h3 className="contact-form-title">Solicita Información</h3>
          <form className="form">
            <input type="text" placeholder="Nombre" />
            <input type="tel" placeholder="Telefono" />
            <input type="email" placeholder="E-mail" />
            <textarea
              placeholder="Mensaje corto"
              maxLength={220}
              rows={3}
            />
            <a href="mailto:hello@magdacastro.com" className="contact-button">Enviar</a>
          </form>
        </section>
      </article>
    </section>
  )
}
