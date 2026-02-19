"use client";

import styles from "../styles/Hero.module.css";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className={styles.hero} id="inicio" aria-labelledby="hero-title">
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <header className={styles.headerContent}>
          {/* H1 PRINCIPAL */}
          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            PRAVICE – Abogados Laboralistas para Empresas en Colombia
          </motion.h1>

          {/* H2 SERVICIO */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            Asesoría, auditoría y blindaje jurídico laboral frente a la reforma
            laboral colombiana 2025
          </motion.h2>

          {/* DESCRIPCIÓN INDEXABLE */}
          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Firma de abogados especializada en derecho laboral empresarial en
            Colombia. Asesoramos empleadores, gerentes y departamentos de
            recursos humanos en prevención de demandas laborales, auditorías
            laborales, contratación, despidos, reglamento interno de trabajo y
            cumplimiento normativo ante el Ministerio de Trabajo. Nuestro
            outsourcing jurídico laboral protege su empresa frente a sanciones,
            indemnizaciones y contingencias laborales.
          </motion.p>

          {/* TEXTO SEMÁNTICO PARA BUSCADORES E IA */}
          <p className={styles.srOnly}>
            Servicios legales laborales para empresas en Colombia: auditoría
            laboral, contratos de trabajo, despidos con justa causa,
            acompañamiento ante el Ministerio de Trabajo, prevención de demandas
            laborales y cumplimiento de la reforma laboral 2025.
          </p>
        </header>

        {/* BOTONES */}
        <motion.div
          className={styles.buttons}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          {/* CTA PRINCIPAL (WHATSAPP SEO FRIENDLY) */}
          <a
            href="https://wa.me/573114659315?text=Hola%20PRAVICE,%20quiero%20información%20sobre%20asesoría%20laboral%20empresarial."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryBtn}
            aria-label="Contactar abogados laboralistas empresariales por WhatsApp"
          >
            Agendar asesoría laboral empresarial
          </a>

          {/* CTA SECUNDARIO */}
          <a
            href="#reforma"
            className={styles.secondaryBtn}
            aria-label="Solicitar evaluación sobre la reforma laboral colombiana 2025"
          >
            Solicitar evaluación reforma laboral 2025
          </a>
        </motion.div>

        {/* NOTA DE CONFIANZA */}
        <motion.span
          className={styles.note}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4 }}
        >
          Respuesta en menos de 24 horas laborales
        </motion.span>
      </div>
    </section>
  );
}
