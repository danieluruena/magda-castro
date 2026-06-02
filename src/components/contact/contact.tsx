import React, { useState } from 'react'
import { useMetaTags } from '../../hooks/useMetaTags'
import { getImagePath } from '../../utils/getBasePath'
import './contact.css'
import '../../common.css'
import { SubmitModal } from './submitModal/submitModal'
import { Turnstile } from '@marsidev/react-turnstile'

type FieldErrors = {
  name?: boolean
  phone?: boolean
  email?: boolean
  message?: boolean
}

type ContactFormData = {
  name: string
  phone: string
  email: string
  message: string
}

export const Contact: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [turnstileToken, setToken] = useState('')
  
  useMetaTags({
    title: 'Contacto | Solicita tu Obra Personalizada | Magda Castro',
    description: 'Contáctame para solicitar obras personalizadas, servicios de performance, talleres o cualquier colaboración artística.',
    image: 'https://magdacastro.com/assets/sobre-mi/me-1.webp',
    url: 'https://magdacastro.com/contacto',
  })

  const extractFormValues = (form: HTMLFormElement): ContactFormData => {
    const name = form.elements.namedItem('name') as HTMLInputElement
    const phone = form.elements.namedItem('phone') as HTMLInputElement
    const email = form.elements.namedItem('email') as HTMLInputElement
    const message = form.elements.namedItem('message') as HTMLTextAreaElement

    return {
      name: name.value.trim(),
      phone: phone.value.trim(),
      email: email.value.trim(),
      message: message.value.trim(),
    }
  }

  const validateForm = (formValues: ContactFormData): boolean => {
    const errors: FieldErrors = {}

    if (!formValues.name) errors.name = true
    if (!formValues.phone) errors.phone = true
    if (!formValues.email) errors.email = true
    if (!formValues.message) errors.message = true

    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget

    const formValues = extractFormValues(form)
    
    if (!validateForm(formValues)) {
      return
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formValues, turnstileToken }),
      })

      if (!response.ok) {
        console.error(`Error al enviar el mensaje: ${response.status}`)
        throw new Error('Error al enviar el mensaje')
      }
      

      console.log('Mensaje enviado correctamente')
      form.reset()
      setFieldErrors({})
      setIsModalOpen(true)
    } catch (error) {
      console.error(error)
    }
  }

  const handleFieldChange = (fieldName: keyof FieldErrors) => {
    if (fieldErrors[fieldName]) {
      setFieldErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[fieldName]
        return newErrors
      })
    }
  }
  const contactStyle = { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('${getImagePath('fondo_oscuro.webp')}')` }
  return (
    <>
      <section id="contact" className="contact" style={contactStyle}>
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
              method='post'
              className="form"
              name="contact">
              
              <div className="form-field">
                <input 
                  type="text" 
                  placeholder="Nombre" 
                  name='name'
                  className={fieldErrors.name ? 'error' : ''}
                  onChange={() => handleFieldChange('name')}
                />
                {fieldErrors.name && <span className="error-message">Este campo es obligatorio</span>}
              </div>

              <div className="form-field">
                <input 
                  type="tel" 
                  placeholder="Teléfono" 
                  name='phone'
                  className={fieldErrors.phone ? 'error' : ''}
                  onChange={() => handleFieldChange('phone')}
                />
                {fieldErrors.phone && <span className="error-message">Este campo es obligatorio</span>}
              </div>

              <div className="form-field">
                <input 
                  type="email" 
                  placeholder="Email" 
                  name='email'
                  className={fieldErrors.email ? 'error' : ''}
                  onChange={() => handleFieldChange('email')}
                />
                {fieldErrors.email && <span className="error-message">Este campo es obligatorio</span>}
              </div>

              <div className="form-field">
                <textarea
                  placeholder="Me gustaría una escultura / pintura / personaje sobre…"
                  rows={6}
                  name='message'
                  className={fieldErrors.message ? 'error' : ''}
                  onChange={() => handleFieldChange('message')}
                  ></textarea>
                {fieldErrors.message && <span className="error-message">Este campo es obligatorio</span>}
              </div>

              <button className="main-btn" type="submit">Enviar</button>
              <Turnstile
                siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
                onSuccess={(token) => { setToken(token) }}
              />
            </form>
          </div>
        </div>
      </section>
      <SubmitModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
