import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import SocialMedia from "../SocialMedia/SocialMedia";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="logo">
            <Link className="heder-link-logo" to={"/"}>
              <div>
                {" "}
                <span className="logo-bold">GLOBAL</span>CHEM
              </div>{" "}
              <span className="logo-bold name">BY JACK</span>
            </Link>
          </div>
          <p className="footer-desc">
            Líder global en la fabricación y distribución de productos químicos
            y polímeros avanzados.
          </p>
        </div>
        <div>
          <h4>Líneas de Producto</h4>
          <ul>
            <li>
              <a href="#polimeros">Polímeros y Plásticos</a>
            </li>
            <li>
              <a href="#resinas">Resinas Sintéticas</a>
            </li>
            <li>
              <a href="#solventes">Solventes Industriales</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Empresa</h4>
          <ul>
            <li>
              <a href="#nosotros">Sobre Nosotros</a>
            </li>
            <li>
              <a href="#sostenibilidad">Sostenibilidad</a>
            </li>
            <li>
              <a href="#noticias">Noticias y Eventos</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="socialGridPosition">
        <SocialMedia />
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} GlobalChem Corporation. Todos los
            derechos reservados. Proyecto de demostración by Jack Pachón.
          </p>
        </div>
      </div>
    </footer>
  );
}
