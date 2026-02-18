"use client";

import styles from "../styles/ServicesSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGavel,
  faMagnifyingGlass,
  faScaleBalanced,
  faUserInjured,
  faMoneyBillWave,
  faShieldHalved,
  faHandshake,
  faUsers,
  faChartColumn,
} from "@fortawesome/free-solid-svg-icons";

const servicios = [
  { icon: faGavel, text: "Despidos con y sin justa causa" },
  { icon: faMagnifyingGlass, text: "Investigaciones internas" },
  { icon: faScaleBalanced, text: "Procesos disciplinarios" },
  { icon: faUserInjured, text: "Accidentes laborales" },
  { icon: faMoneyBillWave, text: "Reclamaciones salariales" },
  { icon: faShieldHalved, text: "Defensa en procesos judiciales" },
  { icon: faHandshake, text: "Negociaciones colectivas" },
  { icon: faUsers, text: "Seguridad Social" },
  { icon: faChartColumn, text: "Protección de datos laborales" },
];

export default function ServicesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Servicios Laborales Empresariales</h2>

        <div className={styles.grid}>
          {servicios.map((servicio, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={servicio.icon} />
              </div>
              <span>{servicio.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
