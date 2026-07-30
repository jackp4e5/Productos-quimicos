import FichaTecnicaInfo from "../../components/FichaTecnicaInfo/FichaTecnicaInfo";
import { mockProducts } from "../../data/mockProducts";
import styles from "./FichaTecnicaProductos.module.css"
const FichaTecnicaProductos = () => {

    
    return (
        <section className={styles.FichaTecnicaProductosMain}>
          {
            mockProducts.map(product => (
               <FichaTecnicaInfo key={product.id} product={product} id={product.category}/>
            ))
          }
        </section>
    )
}


export default FichaTecnicaProductos;