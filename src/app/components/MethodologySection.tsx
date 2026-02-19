"use client";

import styles from "../styles/MethodologySection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faFileLines,
  faUsers,
  faShieldHalved,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function MethodologySection() {
  return (
    <section className={styles.section} id="metodologia">
      <div className={styles.container}>
        <h2 className={styles.title}>Metodología PRAVICE</h2>
        <p className={styles.subtitle}>Blindaje Laboral Estructurado</p>

        <div className={styles.wrapper}>
          {/* Textos laterales */}
          <div className={styles.leftTop}>Paso 1: Diagnóstico</div>
          <div className={styles.rightTop}>
            Paso 2: Implementación documental
          </div>
          <div className={styles.rightMiddle}>
            Paso 3: Socialización interna
          </div>
          <div className={styles.rightBottom}>Paso 4: Blindaje probatorio</div>
          <div className={styles.leftBottom}>Paso 5: Auditoría periódica</div>

          {/* Círculo */}
          <div className={styles.circle}>
            <div className={styles.innerCircle}></div>

            <div className={`${styles.icon} ${styles.icon1}`}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>

            <div className={`${styles.icon} ${styles.icon2}`}>
              <FontAwesomeIcon icon={faFileLines} />
            </div>

            <div className={`${styles.icon} ${styles.icon3}`}>
              <FontAwesomeIcon icon={faUsers} />
            </div>

            <div className={`${styles.icon} ${styles.icon4}`}>
              <FontAwesomeIcon icon={faShieldHalved} />
            </div>

            <div className={`${styles.icon} ${styles.icon5}`}>
              <FontAwesomeIcon icon={faClipboardCheck} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
