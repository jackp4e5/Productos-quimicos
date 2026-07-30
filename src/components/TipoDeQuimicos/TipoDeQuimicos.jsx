import styles from "./TipoDequimicos.module.css"

const TipoDequimicos = ({tipo}) => {
 
    
  return (
   <dl >
      <dt className={styles.FichaTecnicaInfoH3}>{tipo.nombre}</dt>
      <dd className={styles.FichaTecnicaInfoParagraph}>
        {" "}
        <span>Destacado: </span>
        {tipo.destacado}
      </dd>

      <dd className={styles.FichaTecnicaInfoParagraph}>
        {" "}
        <span>Uso Común: </span>
        {tipo.usoComun}
      </dd>
    </dl>
  );
};

export default TipoDequimicos;
