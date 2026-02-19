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
import { motion } from "framer-motion";

export default function MethodologySection() {
  return (
    <section className={styles.section} id="metodologia">
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Metodología PRAVICE
        </motion.h2>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Blindaje Laboral Estructurado
        </motion.p>

        <div className={styles.wrapper}>
          {/* Textos */}
          <motion.div
            className={styles.leftTop}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Paso 1: Diagnóstico
          </motion.div>

          <motion.div
            className={styles.rightTop}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Paso 2: Implementación documental
          </motion.div>

          <motion.div
            className={styles.rightMiddle}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Paso 3: Socialización interna
          </motion.div>

          <motion.div
            className={styles.rightBottom}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Paso 4: Blindaje probatorio
          </motion.div>

          <motion.div
            className={styles.leftBottom}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Paso 5: Auditoría periódica
          </motion.div>

          {/* Círculo */}
          <motion.div
            className={styles.circle}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
