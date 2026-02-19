"use client";

import styles from "../styles/ResultsSection.module.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faGavel,
  faLock,
  faFileLines,
  faScaleBalanced,
} from "@fortawesome/free-solid-svg-icons";

export default function Resultados() {
  const items = [
    { icon: faShieldHalved, text: "Reducción de contingencias" },
    { icon: faGavel, text: "Disminución de litigios" },
    { icon: faLock, text: "Seguridad para la gerencia" },
    { icon: faFileLines, text: "Procesos documentados y defendibles" },
    { icon: faScaleBalanced, text: "Tranquilidad operativa" },
  ];

  return (
    <section className={styles.section} aria-labelledby="results-title">
      {/* TÍTULO */}
      <motion.h2
        id="results-title"
        className={styles.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Resultados que Generamos en Gestión Laboral
      </motion.h2>

      {/* LISTA */}
      <ul className={styles.list}>
        {items.map((item, index) => (
          <motion.li
            key={index}
            className={styles.item}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
          >
            <motion.div
              className={styles.icon}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 250 }}
              aria-hidden="true"
              title={item.text}
            >
              <FontAwesomeIcon icon={item.icon} />
            </motion.div>
            <p>
              <strong>{item.text}</strong>
            </p>
          </motion.li>
        ))}
      </ul>

      {/* FOOTER */}
      <motion.p
        className={styles.footer}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        No improvisamos. Blindamos su gestión laboral con resultados tangibles.
      </motion.p>
    </section>
  );
}
