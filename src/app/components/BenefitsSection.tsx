"use client";

import styles from "../styles/BenefitsSection.module.css";

export default function BenefitsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Beneficio Estratégico Laboral para su Empresa
        </h2>

        <p className={styles.intro}>
          La App Laboral PRAVICE convierte la gestión laboral en un sistema
          medible, transparente, controlable y trazable.
        </p>

        <p className={styles.intro}>
          Funciona como su departamento jurídico laboral externo digitalizado,
          con acceso permanente y respaldo probatorio en tiempo real.
        </p>

        <div className={styles.grid}>
          {/* ================= IZQUIERDA ================= */}
          <div className={styles.leftColumn}>
            <div className={styles.box}>
              <h3>Visibilidad</h3>
              <ul>
                <li>Procesos disciplinarios activos</li>
                <li>Demandas laborales</li>
                <li>Implementación Reforma 2025</li>
                <li>Estado de contratos y RIT</li>
                <li>Comité de Convivencia Laboral</li>
              </ul>
            </div>

            <div className={styles.box}>
              <h3>Trazabilidad</h3>
              <ul>
                <li>Actas de descargos</li>
                <li>Citaciones y decisiones motivadas</li>
                <li>Liquidaciones y paz y salvo</li>
                <li>Autorizaciones de datos</li>
                <li>Evidencia para auditorías</li>
              </ul>
            </div>

            <div className={styles.box}>
              <h3>Eficiencia</h3>
              <ul>
                <li>Validación previa de despidos</li>
                <li>Control de horas extras</li>
                <li>Alertas de vencimientos legales</li>
                <li>Prevención de contingencias</li>
              </ul>
            </div>
          </div>

          {/* ================= DERECHA ================= */}
          <div className={styles.rightColumn}>
            <h3>Enfoque Empresarial</h3>

            <p>
              La plataforma está diseñada para gerencias, RRHH y áreas
              financieras que necesitan respaldo técnico y control estratégico.
            </p>

            <ul className={styles.features}>
              <li>
                <strong>Proyectar contingencias laborales:</strong> Anticipa
                riesgos de demandas y costos indemnizatorios.
              </li>
              <li>
                <strong>Medir desempeño jurídico laboral:</strong> Indicadores
                de cumplimiento normativo y tiempos de respuesta.
              </li>
              <li>
                <strong>Detectar riesgos y cuellos de botella:</strong> Fallas
                en documentación o contratos.
              </li>
              <li>
                <strong>Tomar decisiones laborales informadas:</strong>
                Validar terminaciones, aprobar liquidaciones y gestionar
                inspecciones.
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerText}>
          PRAVICE Laboral no solo responde conflictos. Previene, documenta y
          blinda.
        </div>
      </div>
    </section>
  );
}
