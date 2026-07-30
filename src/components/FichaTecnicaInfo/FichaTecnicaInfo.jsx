import SocialMedia from "../SocialMedia/SocialMedia";
import TablaEspecificaciones from "../TablaEspecificaciones/TablaEspecificaciones";
import TipoDequimicos from "../TiposDeQuimicos/TipoDequimicos";
import styles from "./FichaTecnicaInfo.module.css";

const FichaTecnicaInfo = ({ product, id }) => {
  const { especificaciones } = product.fichaTecnica;

  return (
    <section className={styles.FichaTecnicaInfoSection} id={id}>
      <h2 className={styles.FichaTecnicaInfoH2}>{product.title}</h2>
      <div className={styles.FichaTecnicaInfoTableWrapper}>
        <h3 className={styles.FichaTecnicaInfoH3}>
          {product.fichaTecnica.headinFt}
        </h3>

        <TablaEspecificaciones especificaciones={especificaciones} />
      </div>
      <h2
        className={styles.FichaTecnicaInfoH2}
      >{`Tipos Principales y Familias de ${product.title}`}</h2>

      {product.tiposPrincipales.map((tipo) => (
        <TipoDequimicos key={tipo.nombre} tipo={tipo} />
      ))}
      <section className={styles.FichaTecnicaInfoAplicaciones}>
        <h3 className={styles.FichaTecnicaInfoHeading}>
          Aplicaciones Industriales Clave
        </h3>
        <dl className={styles.FichaTecnicaInfoIndustrialApplications}>
          {product.aplicacionesIndustriales.map((item, index) => (
            <div key={index} className="application-item">
              {/* dt representa el término o sector */}
              <dt className={styles.FichaTecnicaInfoSectorTitle}>
                {item.sector}
              </dt>

              {/* dd representa la descripción asociada */}
              <dd className={styles.FichaTecnicaInfoSectorDescription}>
                {item.descripcion}
              </dd>
            </div>
          ))}
        </dl>
        <div className={styles.FichaTecnicaInfoVentajasWrapper}>
          <h3>ventajasCompetitivas</h3>
          <dl>
            <dt className={styles.FichaTecnicaInfoVentajasTitle}>
              {product.ventajasCompetitivas.titulo}
            </dt>
            <dd className={styles.FichaTecnicaInfoVentajasDescription}>
              {product.ventajasCompetitivas.descripcion}
            </dd>
          </dl>
        </div>
      </section>
    </section>
  );
};

export default FichaTecnicaInfo;
