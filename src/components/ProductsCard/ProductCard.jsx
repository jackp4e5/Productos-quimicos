import React, { useContext } from "react";
import "./ProductCard.css";
import { mockProducts } from "../../data/mockProducts";
import ModalCard from "../ModalCard/ModalCard";
import { GlobalContext } from "../../context/GlobalContext";

export default function ProductCard({
  title,
  category,
  description,
  image,
  id,
}) {
  const { setCardInfo, setIsModalActive, } = useContext(GlobalContext);

  const handleOnclick = (id) => {
    const element = mockProducts.filter((product) => product.id === id);

    setCardInfo(element[0]);
    setIsModalActive(true);
  };

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
          <a href="#" className="card-link" onClick={() => handleOnclick(id)}>
            Ver especificaciones y datos →
          </a>
        </div>
      </div>
    </>
  );
}
