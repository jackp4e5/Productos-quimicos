import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

import style from "./ModalCard.module.css";
import SocialMedia from "../SocialMedia/SocialMedia";
import { useLocalImages } from "../../hooks/useLocalImages";

const ModalCard = () => {
  const { cardInfo, setIsModalActive } = useContext(GlobalContext);

  const { images } = useLocalImages();

  return (
    <div className={style.modal}>
      <div className={style.card}>
        <div className={style.wrapperImage}>
          <img
            src={images[cardInfo.image - 1]}
            alt={cardInfo.title}
            className=""
            loading="lazy"
          />
          <span className="">{cardInfo.category}</span>
        </div>
        <div className={style.wrapper}>
          <h3 className={style.heading}>{cardInfo.title}</h3>
          <p className="">{cardInfo.description}</p>
        </div>
        <div className={style.wrapper}>
          <p className={style.socialHeading}>Compra aquí</p>
          <SocialMedia title={cardInfo.title} />

          <a
            href="#productos"
            onClick={() => setIsModalActive(false)}
            className={style.button}
          >
            Regresar
          </a>
        </div>
      </div>
    </div>
  );
};

export default ModalCard;
