"use client";

import styles from "../styles/SoluctionSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faGear,
  faShieldHalved,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";

export default function SolucionSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          LA SOLUCIÓN: PRAVICE COMO SU DEPARTAMENTO JURÍDICO EXTERNO
        </h2>

        <p className={styles.subtitle}>
          PRAVICE actúa como su área laboral especializada, sin aumentar nómina
          ni asumir cargas laborales internas.
        </p>

        <div className={styles.grid}>
          <div className={styles.item}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faHandshake} />
            </div>
            <h3>Acompañamiento permanente</h3>
            <p>
              Asesoría legal continua y proactiva para resolver sus dudas y
              retos laborales al instante.
            </p>
          </div>

          <div className={styles.item}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faGear} />
            </div>
            <h3>Implementación integral</h3>
            <p>
              Diseño y ejecución de protocolos y sistemas de gestión laboral a
              la medida, garantizando un cumplimiento normativo sin fisuras.
            </p>
          </div>

          <div className={styles.item}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faShieldHalved} />
            </div>
            <h3>Defensa judicial estratégica</h3>
            <p>
              Protegemos su patrimonio con estrategias litigiosas comprobadas,
              minimizando riesgos y costos en cada proceso.
            </p>
          </div>

          <div className={styles.item}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faFileLines} />
            </div>
            <h3>Prevención documentada</h3>
            <p>
              Identificamos vulnerabilidades y estructuramos su documentación
              para evitar multas y futuras contingencias.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
