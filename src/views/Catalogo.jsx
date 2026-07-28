import CatalogCard from "../components/CatalogCard/CatalogCard";
import { catalogo } from "../data/catalogo";
import style from "./Catalogo.module.css";

const Catalogo = () => {
  return (
    <main className={style.catalogMain}>
      <h2 className={style.catalogHeding}>
        Aqui encontraras todos nuestros Productos
      </h2>
      <div className={style.catalogGrid}>
        {catalogo.map((item) => (
          <CatalogCard key={item.id}
          item={item} />
        ))}
      </div>
    </main>
  );
};

export default Catalogo;
