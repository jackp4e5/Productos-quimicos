import React, { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="contact-section" id="contacto">
      <div className="container">
        <h2 className="section-title">Contacto Técnico y Comercial</h2>
        <p className="section-subtitle">
          Pónte en contacto con nuestros especialistas en productos químicos.
        </p>

        <div className="form-container">
          {submitted ? (
            <div className="success-message">
              <h3>¡Mensaje enviado con éxito!</h3>
              <p>Un especialista técnico se comunicará a la brevedad.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="form">
              <div className="form-group">
                <label htmlFor="name">Nombre completo</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Ej. María González"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Correo Corporativo</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="ejemplo@empresa.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Consulta o Requerimiento</label>
                <textarea
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Detalla el producto o la aplicación técnica de interés..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Enviar Consulta
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
