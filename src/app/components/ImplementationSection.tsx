"use client";

import styles from "../styles/ImplementationSection.module.css";

const fases = [
  "Diagnóstico laboral y matriz de brechas normativas",
  "Actualización del Reglamento Interno de Trabajo",
  "Estructuración del procedimiento disciplinario",
  "Contratos laborales blindados y actualizados",
  "Jornada laboral, recargos y control de horas extras",
  "Licencias, permisos y estabilidad laboral reforzada",
  "Prevención de acoso y violencia laboral",
  "Inclusión laboral y reportes obligatorios",
  "Cesantías, intereses y obligaciones periódicas",
  "Protección de datos personales laborales",
  "Renuncias, liquidaciones y paz y salvo",
  "Auditoría laboral y mejora continua",
];

export default function ImplementacionSection() {
  return (
    <section
      className={styles.section}
      id="implementacion-ley-2466"
      aria-labelledby="implementacion-reforma-laboral"
      role="region"
    >
      <div className={styles.container}>
        <h2 id="implementacion-reforma-laboral" className={styles.title}>
          Implementación Integral de la Reforma Laboral 2025 en Colombia (Ley
          2466)
        </h2>

        <p className={styles.subtitle}>
          Metodología estructurada en 12 fases para garantizar cumplimiento
          normativo, prevención de sanciones y blindaje jurídico empresarial.
        </p>

        <div className={styles.grid}>
          {fases.map((fase, index) => (
            <article key={index} className={styles.item}>
              <span className={styles.number}>
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className={styles.line}></div>

              <h3>{fase}</h3>
            </article>
          ))}
        </div>

        {/* BLOQUE SEO ENRIQUECIDO */}
        <div className={styles.seoBlock}>
          <h3>¿Cómo implementar la Ley 2466 de 2025 en su empresa?</h3>

          <p>
            La implementación de la Reforma Laboral 2025 en Colombia requiere
            una revisión integral de contratos laborales, reglamentos internos,
            procedimientos disciplinarios y obligaciones periódicas ante
            autoridades laborales.
          </p>

          <p>
            Un proceso estructurado permite identificar brechas de cumplimiento,
            reducir riesgos de demandas laborales y evitar sanciones
            administrativas impuestas por el Ministerio del Trabajo.
          </p>

          <h3>Beneficios de una implementación preventiva</h3>
          <p>
            Las empresas que adoptan una auditoría laboral preventiva y
            protocolos actualizados minimizan contingencias económicas,
            fortalecen su seguridad jurídica y protegen su reputación
            corporativa.
          </p>
        </div>
      </div>
    </section>
  );
}
