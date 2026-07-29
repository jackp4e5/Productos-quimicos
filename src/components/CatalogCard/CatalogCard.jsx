import { useContext } from "react";
/* import img1 from "../../../public/images/img1.png";
import img2 from "../../../public/images/img2.jpg";
import img3 from "../../../public/images/img3.jpg";
import img4 from "../../../public/images/img4.webp";
import img5 from "../../../public/images/img5.webp";
import img6 from "../../../public/images/img6.webp"; */
import { catalogo } from "../../data/catalogo";

import style from "./CatalogCard.module.css";
import { GlobalContext } from "../../context/GlobalContext";
import { useLocalImages } from "../../hooks/useLocalImages";

const CatalogCard = ({ item }) => {
  const { images } = useLocalImages();

  const { setCardInfo, setIsModalActive } = useContext(GlobalContext);

  const handleOnclick = (id) => {
    const element = catalogo.filter((product) => product.id === id);

    setCardInfo(element[0]);
    setIsModalActive(true);
  };

  return (
    <div className={style.CatalogCardWrapper}>
      <div className={style.CatalogCardWrapperImage}>
        <img src={images[item.image - 1]} alt={`image ${item.title}`} />
        <p>{item.title}</p>
      </div>
      <div className={style.CatalogCardWrapperText}>
        {" "}
        <span>Descripcion:</span> {`${item.description}`}
      </div>
      <div className={style.CatalogCardWrapperButton}>
        <input
          className={style.CatalogCardButton}
          type="button"
          value="Comprar"
          onClick={() => handleOnclick(item.id)}
        />
      </div>
    </div>
  );
};

export default CatalogCard;
