import { useContext, useEffect } from "react";
import CatalogCard from "../components/CatalogCard/CatalogCard";
import { catalogo } from "../data/catalogo";
import style from "./Catalogo.module.css";
import { GlobalContext } from "../context/GlobalContext";
import ModalCard from "../components/ModalCard/ModalCard";

const Catalogo = () => {
  const { cardInfo, setCardInfo, isModalActive, setIsActive } =
    useContext(GlobalContext);
  useEffect(() => {
    isModalActive
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isModalActive]);

  return (
    <main className={style.catalogMain}>
      {isModalActive && <ModalCard />}
      <h2 className={style.catalogHeding}>
        Aqui encontraras todos nuestros Productos
      </h2>
      <div className={style.catalogGrid}>
        {catalogo.map((item) => (
          <CatalogCard key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Catalogo;
