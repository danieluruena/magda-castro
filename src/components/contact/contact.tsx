import React from 'react'
import './contact.css'
import '../../common.css'

export const Contact: React.FC = () => {
  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()

  //   const form = e.currentTarget
  //   const data = new FormData(form)
  //   const encoded = new URLSearchParams(data as any).toString()

  //   try {
  //     const response = await fetch('/', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //       body: encoded,
  //     })

  //     if (!response.ok) {
  //       console.error(`Error al enviar el mensaje: ${response.statusText}`)
  //       throw new Error('Error al enviar el mensaje')
  //     }

  //     console.log('Mensaje enviado correctamente')
  //     form.reset()
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }
  
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
            // onSubmit={handleSubmit}
            method='post'
            className="form"
            name="contact">
            <input type="hidden" name="form-name" value="contact" />
            <input type="text" placeholder="Nombre" name='name'/>
            <input type="tel" placeholder="Teléfono" name='phone'/>
            <input type="email" placeholder="Email" name='email'/>
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
