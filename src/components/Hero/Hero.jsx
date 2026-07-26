import React from "react";
import "./Hero.css";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1>Innovación Química para un Futuro Sostenible</h1>
        <p>
          Desarrollamos materiales avanzados, polímeros y soluciones químicas de
          rendimiento elevado para transformar industrias en todo el mundo.
        </p>
        <div className="hero-buttons">
          <a href="#productos" className="btn btn-primary">
            Explorar Productos <ArrowRight size={18} />
          </a>
          <a href="#contacto" className="btn btn-secondary">
            Contactar Asesor
          </a>
        </div>
      </div>
    </section>
  );
}
