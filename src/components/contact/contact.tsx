import React from 'react'
import './contact.css'
import '../../common.css'

export const Contact: React.FC = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const data = new FormData(form)
    const encoded = new URLSearchParams(data as any).toString()

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encoded,
      })

      console.log('Mensaje enviado correctamente')
      form.reset()
    } catch (error) {
      console.error(error)
    }
  }
  
  return (
    <section id="contact" className="contact">
      <div className="contact-layout">
        <div className="contact-info">
          <h2 className="section-title">Contáctame</h2>
          <p className="section-description">
            ¿Tienes una idea que quieres hacer realidad con un estilo macabro o visceral?
            Cuéntame tu visión y la convertimos en arte.
          </p>
        </div>
        <div className="contact-form">
          <form 
            onSubmit={handleSubmit}
            className="form" 
            data-netlify="true" 
            netlify-honeypot="bot-field" 
            form-name="contact">
            <input type="text" placeholder="Nombre" name='name'/>
            <input type="tel" placeholder="Teléfono" name='phone'/>
            <input type="email" placeholder="Email" name='email'/>
            <input type="hidden" name="bot-field" />
            <textarea
              placeholder="Me gustaría una escultura / pintura / personaje sobre…"
              rows={6}
              name='message'
            />
            <button className="main-btn" type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  )
}
