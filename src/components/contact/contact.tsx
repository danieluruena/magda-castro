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
      <article className="contact-layout">
        <section className="contact-info">
          <h3 className="contact-title">CONTÁCTANOS</h3>

          <p className="contact-text">
            Susúrranos tu idea… y la transformaremos en la obra que tu sombra está buscando.
          </p>
        </section>

        <section className="contact-form">
          <h3 className="contact-form-title">Solicita Información</h3>

          <form className="form" onSubmit={handleSubmit(send)}>
            <input type="text" placeholder="Nombre" {...register('name')} /> 
            <input type="phone" placeholder="Telefono" {...register('phone')} />
            <input type="email" placeholder="Email" {...register('email')} />
            <textarea
              placeholder="Mensaje corto"
              maxLength={220}
              rows={3}
              {...register('message')}/>

            <button className="contact-button" type="submit">Enviar</button>
          </form>
        </section>
      </article>
    </section>
  )
}
