import styles from "../styles/ImplementationSection.module.css";

const fases = [
  "Fase 1 - Diagnóstico y matriz de brechas",
  "Fase 2 - Actualización del Reglamento Interno de Trabajo",
  "Fase 3 - Procedimiento disciplinario estructurado",
  "Fase 4 - Contratos laborales blindados",
  "Fase 5 - Jornada laboral y recargos ajustados",
  "Fase 6 - Licencias y permisos actualizados",
  "Fase 7 - Prevención de acoso y violencia laboral",
  "Fase 8 - Inclusión laboral y reportes obligatorios",
  "Fase 9 - Cesantías y obligaciones periódicas",
  "Fase 10 - Protección de datos personales",
  "Fase 11 - Renuncias, liquidaciones y paz y salvo",
  "Fase 12 - Auditoría y mejora continua",
];

export default function ImplementacionSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Implementación Integral - Ley 2466 de 2025
        </h2>

        <p className={styles.subtitle}>
          Basado en el Manual Práctico de Implementación
        </p>

        <div className={styles.grid}>
          {fases.map((fase, index) => (
            <div key={index} className={styles.item}>
              <span className={styles.number}>
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className={styles.line}></div>

              <h3>{fase}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
