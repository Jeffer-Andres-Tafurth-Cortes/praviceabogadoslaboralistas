"use client";

import styles from "../styles/SoluctionSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faGear,
  faShieldHalved,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function SolucionSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Título animado */}
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          LA SOLUCIÓN: PRAVICE COMO SU DEPARTAMENTO JURÍDICO EXTERNO
        </motion.h2>

        {/* Subtítulo animado */}
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          PRAVICE actúa como su área laboral especializada, sin aumentar nómina
          ni asumir cargas laborales internas.
        </motion.p>

        <div className={styles.grid}>
          {[
            {
              icon: faHandshake,
              title: "Acompañamiento permanente",
              text: "Asesoría legal continua y proactiva para resolver sus dudas y retos laborales al instante.",
            },
            {
              icon: faGear,
              title: "Implementación integral",
              text: "Diseño y ejecución de protocolos y sistemas de gestión laboral a la medida, garantizando un cumplimiento normativo sin fisuras.",
            },
            {
              icon: faShieldHalved,
              title: "Defensa judicial estratégica",
              text: "Protegemos su patrimonio con estrategias litigiosas comprobadas, minimizando riesgos y costos en cada proceso.",
            },
            {
              icon: faFileLines,
              title: "Prevención documentada",
              text: "Identificamos vulnerabilidades y estructuramos su documentación para evitar multas y futuras contingencias.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={styles.item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
            >
              <div className={styles.icon}>
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
