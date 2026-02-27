import React from 'react'
import { useForm } from 'react-hook-form'
import './contact.css'

export const Contact: React.FC = () => {
  const { register, handleSubmit } = useForm()  //función para obtener info de inputs después de envio 
  const send = (data: any) => {  //función enviar datos a backend, por ahora solo en consola -- Rev data:any
    console.log(data)
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-layout">
        <section className="contact-info">
          <h3 className="contact-title">CONTÁCTANOS</h3>

          <p className="contact-text">
            ¿Tienes una idea que quiere hacer realidad con un estilo macabro o visceral?
          </p>
        </section>

        <section className="contact-form">
          <form className="form" onSubmit={handleSubmit(send)}>
            <input type="text" placeholder="Nombre" {...register('name')} /> 
            <input type="phone" placeholder="Télefono" {...register('phone')} />
            <input type="email" placeholder="Email" {...register('email')} />
            <textarea
              placeholder="Me gustaría una escultura / pintura / personaje sobre.."
              rows={6}
              {...register('message')}/>

            <button className="contact-button" type="submit">Enviar</button>
          </form>
        </section>
      </div>
    </section>
  )
}
