import styles from "../styles/RisksSection.module.css";

export default function RisksSection() {
  const riesgos = [
    "Demandas por despido sin debido proceso",
    "Reclamaciones por horas extras",
    "Sanciones del Ministerio de Trabajo",
    "Procesos por acoso laboral",
    "Errores en liquidaciones",
    "Falta de inclusión o reportes obligatorios",
    "Falta de Comité de Convivencia activo",
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Riesgos que Prevenimos</h2>

      <div className={styles.grid}>
        {riesgos.map((riesgo, index) => (
          <div key={index} className={styles.card}>
            <span className={styles.bar}></span>
            <p>{riesgo}</p>
          </div>
        ))}
      </div>

      <p className={styles.footer}>Prevenir es más económico que defender.</p>
    </section>
  );
}
