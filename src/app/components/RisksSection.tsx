"use client";

import styles from "../styles/RisksSection.module.css";
import { motion } from "framer-motion";

export default function RisksSection() {
  const riesgos = [
    "Demandas por despido sin debido proceso",
    "Reclamaciones por horas extras",
    "Sanciones del Ministerio de Trabajo",
    "Procesos por acoso laboral",
    "Errores en liquidaciones",
    "Falta de inclusión o reportes obligatorios",
    "Falta de Comité de Convivencia activo",
  ];

  return (
    <section className={styles.section} aria-labelledby="risks-title">
      {/* TÍTULO */}
      <motion.h2
        id="risks-title"
        className={styles.title}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Riesgos que Prevenimos en su Empresa
      </motion.h2>

      {/* GRID */}
      <ul className={styles.grid}>
        {riesgos.map((riesgo, index) => (
          <motion.li
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -3 }}
          >
            <span className={styles.bar} aria-hidden="true"></span>
            <p>
              <strong>{riesgo}</strong>
            </p>
          </motion.li>
        ))}
      </ul>

      {/* FOOTER */}
      <motion.p
        className={styles.footer}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Prevenir es más económico que defender.
      </motion.p>
    </section>
  );
}
