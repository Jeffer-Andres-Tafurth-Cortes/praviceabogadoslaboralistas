"use client";

import styles from "../styles/WhyChoosingUs.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderOpen,
  faIndustry,
  faShieldHalved,
  faUsers,
  faArrowsSpin,
} from "@fortawesome/free-solid-svg-icons";

const items = [
  { icon: faFolderOpen, text: "Más de 500 procesos laborales gestionados" },
  { icon: faIndustry, text: "Experiencia en sectores clave de Colombia" },
  { icon: faShieldHalved, text: "Enfoque preventivo y estratégico" },
  { icon: faUsers, text: "Equipo especializado" },
];

export default function WhyChoosingUs() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>¿Por Qué PRAVICE?</h2>

        <div className={styles.grid}>
          {items.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <span>{item.text}</span>
            </div>
          ))}

          {/* Card ancha */}
          <div className={`${styles.card} ${styles.fullWidth}`}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faArrowsSpin} />
            </div>
            <span>Acompañamiento continuo</span>
          </div>
        </div>
      </div>
    </section>
  );
}
