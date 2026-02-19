"use client";

import styles from "../styles/ReformaSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faScaleBalanced,
  faGavel,
  faEye,
  faFileLines,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

export default function ReformaSection() {
  return (
    <section className={styles.section} id="reforma">
      <div className={styles.container}>
        <h2 className={styles.title}>
          La Reforma Laboral 2025 Cambió las Reglas
        </h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faScaleBalanced} size="2x" />
            </div>
            <h3>Mayor Riesgo de Sanciones</h3>
            <p>
              La Reforma endurece las penalidades económicas por incumplimiento,
              elevando el costo de cada error laboral.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faGavel} size="2x" />
            </div>
            <h3>Incremento en Litigios Laborales</h3>
            <p>
              La nueva normativa fomenta un mayor número de demandas, con
              procesos más complejos y costosos para su empresa.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faEye} size="2x" />
            </div>
            <h3>Inspecciones Más Estrictas</h3>
            <p>
              El Ministerio de Trabajo intensificará su vigilancia y aplicación,
              requiriendo un cumplimiento documental y procesal impecable.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faFileLines} size="2x" />
            </div>
            <h3>Obligaciones Documentales Obligatorias</h3>
            <p>
              Aumentan los requisitos de documentación y registros laborales,
              cuya omisión puede acarrear multas significativas.
            </p>
          </div>
        </div>

        {/* Card horizontal */}
        <div className={styles.cardWide}>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faShieldHalved} size="2x" />
          </div>
          <div>
            <h3>Debido Proceso Reforzado</h3>
            <p>
              Los procesos disciplinarios exigen mayor rigor, haciendo más
              compleja la gestión de personal y los despidos justificados.
            </p>
          </div>
        </div>

        <p className={styles.warning}>
          No implementar correctamente la Reforma puede generar contingencias
          millonarias.
        </p>
      </div>
    </section>
  );
}
