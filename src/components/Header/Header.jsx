import React, { useState } from "react";
import "./Header.css";
import { Menu, Search, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="main-nav">
        <div className="container nav-container">
          <div className="logo">
            <Link className="heder-link-logo" to={"/"}>
              <div>
                {" "}
                <span className="logo-bold">GLOBAL</span>CHEM
              </div>{" "}
              <span className="logo-bold name">BY JACK</span>
            </Link>
          </div>

          <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <li>
              <Link to={"/#productos"}  onClick={() => setIsMenuOpen(false)}>
                Productos
              </Link>
            </li>
            <li>
              <a href="/catalogo" onClick={() => setIsMenuOpen(false)}>
                Catálogo
              </a>
            </li>
            <li>
              <a href="/#about" onClick={() => setIsMenuOpen(false)}>
                Nosotros
              </a>
            </li>
            <li>
              <a href="/#contacto" onClick={() => setIsMenuOpen(false)}>
                Contacto
              </a>
            </li>
          </ul>

          <div className="nav-actions">
            <button className="icon-btn" aria-label="Buscar">
              <Search />
            </button>
            <button
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Abrir menú"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
