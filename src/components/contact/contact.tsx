import React, { useEffect, useState } from 'react'
import './contact.css'
import './contact.responsive.css'
import '../../common.css'

type FieldErrors = {
  name?: boolean
  phone?: boolean
  email?: boolean
  message?: boolean
}

interface ContactSuccessModalProps {
  isOpen: boolean
  onClose: () => void
}

const ContactSuccessModal: React.FC<ContactSuccessModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) {
    return null
  }

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <h2 className="modal-title">Â¡Mensaje Enviado!</h2>
        <p className="modal-message">
          Gracias por contactarme. He recibido tu mensaje y me pondrÃ© en contacto pronto.
        </p>
        <button className="modal-btn" type="button" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  )
}

export const Contact: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})

  const validateForm = (form: HTMLFormElement): boolean => {
    const errors: FieldErrors = {}
    const name = form.elements.namedItem('name') as HTMLInputElement
    const phone = form.elements.namedItem('phone') as HTMLInputElement
    const email = form.elements.namedItem('email') as HTMLInputElement
    const message = form.elements.namedItem('message') as HTMLTextAreaElement

    if (!name.value.trim()) errors.name = true
    if (!phone.value.trim()) errors.phone = true
    if (!email.value.trim()) errors.email = true
    if (!message.value.trim()) errors.message = true

    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    
    if (!validateForm(form)) {
      return
    }

    const data = new FormData(form)
    console.log(data)
    const encoded = new URLSearchParams(data as any).toString()

    try {
      if (process.env.NODE_ENV !== 'development') {
        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encoded,
        })
  
        if (!response.ok) {
          console.error(`Error al enviar el mensaje: ${response.status}`)
          throw new Error('Error al enviar el mensaje')
        }
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
  return (
    <>
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
              method='post'
              className="form"
              name="contact">
              <input type="hidden" name="form-name" value="contact" />
              
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
                />
                {fieldErrors.message && <span className="error-message">Este campo es obligatorio</span>}
              </div>

              <button className="main-btn" type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </section>
      <ContactSuccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
