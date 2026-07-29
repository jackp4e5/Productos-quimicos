import React, { useContext } from "react";
import "./ProductCard.css";
import { mockProducts } from "../../data/mockProducts";
import ModalCard from "../ModalCard/ModalCard";

export default function ProductCard({
  title,
  category,
  description,
  image,
  id,
}) {


  return (
    <>
      <div className="product-card">
        <div className="card-image-wrapper">
          <img src={image} alt={title} className="card-image" loading="lazy" />
          <span className="card-category">{category}</span>
        </div>
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
          <a href="/catalogo" className="card-link" >
            Ver especificaciones y datos →
          </a>
        </div>
      </div>
    </>
  );
}
