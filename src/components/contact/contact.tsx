import React from 'react'
import './contact.css'

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <h3 className="contact-title">Contact</h3>
      <p className="contact-text">
        Let's work together on your next project
      </p>
      <a href="mailto:hello@magdacastro.com" className="contact-button">
        Get in Touch
      </a>
    </section>
  )
}
