import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>GLOBALCHEM</h3>
          <p className="footer-desc">
            Líder global en la fabricación y distribución de productos químicos y polímeros avanzados.
          </p>
        </div>
        <div>
          <h4>Líneas de Producto</h4>
          <ul>
            <li><a href="#polimeros">Polímeros y Plásticos</a></li>
            <li><a href="#resinas">Resinas Sintéticas</a></li>
            <li><a href="#solventes">Solventes Industriales</a></li>
          </ul>
        </div>
        <div>
          <h4>Empresa</h4>
          <ul>
            <li><a href="#nosotros">Sobre Nosotros</a></li>
            <li><a href="#sostenibilidad">Sostenibilidad</a></li>
            <li><a href="#noticias">Noticias y Eventos</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} GlobalChem Corporation. Todos los derechos reservados. Proyecto de demostración.</p>
        </div>
      </div>
    </footer>
  );
}