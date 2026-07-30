import styles from "./TablaEspecificaciones.module.css";

const TablaEspecificaciones = ({ especificaciones }) => {
  return (
    <table className={styles.TablaEspecificacionesTable}>
      <thead className={styles.TablaEspecificacionesTableThead}>
        <tr>
          <th>Propiedad / Métrica</th>
          <th>Valor Típico / Rango</th>
          <th>Estándar de Prueba</th>
        </tr>
      </thead>
      <tbody className={styles.TablaEspecificacionesTableTbody}>
        {especificaciones.map((sep, index) => (
          <tr key={index + 3}>
            <td>{sep.propiedad}</td>
            <td>{sep.valorTipico}</td>
            <td>{sep.estandarPrueba}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaEspecificaciones;
