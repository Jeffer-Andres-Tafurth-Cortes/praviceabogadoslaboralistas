"use client";

import styles from "../styles/Hero.module.css";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          PRAVICE Abogados Laboralistas
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          Blindaje Laboral Empresarial - Reforma 2025
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Somos los mejores abogados laboralistas y Outsourcing jurídico laboral
          estratégico para empresas colombianas protegiendo su compañía frente a
          demandas, sanciones y contingencias laborales.
        </motion.p>

        <motion.div
          className={styles.buttons}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <button
            className={styles.primaryBtn}
            onClick={() => {
              window.open(
                "https://wa.me/573114659315?text=Hola%20PRAVICE,%20quiero%20información%20sobre%20asesoría%20laboral.",
                "_blank",
              );
            }}
          >
            Agendar Asesoría Laboral
          </button>

          <a href="#reforma" className={styles.secondaryBtn}>
            Solicitar Evaluación Reforma 2025
          </a>
        </motion.div>

        <motion.span
          className={styles.note}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4 }}
        >
          Respuesta garantizada en menos de 24 horas laborales
        </motion.span>
      </div>
    </section>
  );
}
