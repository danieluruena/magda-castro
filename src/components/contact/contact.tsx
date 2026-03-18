import React from 'react'
import { useForm } from 'react-hook-form'
import './contact.css'
import '../../common.css'

export const Contact: React.FC = () => {
  const { register, handleSubmit } = useForm()  //función para obtener info de inputs después de envio 
  const send = (data: any) => {  //función enviar datos a backend, por ahora solo en consola -- Rev data:any
    console.log(data)
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
          <form className="form" onSubmit={handleSubmit(send)}>
            <input type="text" placeholder="Nombre" {...register('name')} />
            <input type="tel" placeholder="Teléfono" {...register('phone')} />
            <input type="email" placeholder="Email" {...register('email')} />
            <textarea
              placeholder="Me gustaría una escultura / pintura / personaje sobre…"
              rows={6}
              {...register('message')}
            />
            <button className="main-btn" type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  )
}
