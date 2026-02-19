"use client";

import styles from "../styles/ReformaSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faScaleBalanced,
  faGavel,
  faEye,
  faFileLines,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function ReformaSection() {
  return (
    <section className={styles.section} id="reforma">
      <div className={styles.container}>
        {/* TITULO */}
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          La Reforma Laboral 2025 Cambió las Reglas
        </motion.h2>

        {/* GRID */}
        <div className={styles.grid}>
          {[
            {
              icon: faScaleBalanced,
              title: "Mayor Riesgo de Sanciones",
              text: "La Reforma endurece las penalidades económicas por incumplimiento, elevando el costo de cada error laboral.",
            },
            {
              icon: faGavel,
              title: "Incremento en Litigios Laborales",
              text: "La nueva normativa fomenta un mayor número de demandas, con procesos más complejos y costosos para su empresa.",
            },
            {
              icon: faEye,
              title: "Inspecciones Más Estrictas",
              text: "El Ministerio de Trabajo intensificará su vigilancia y aplicación, requiriendo un cumplimiento documental y procesal impecable.",
            },
            {
              icon: faFileLines,
              title: "Obligaciones Documentales Obligatorias",
              text: "Aumentan los requisitos de documentación y registros laborales, cuya omisión puede acarrear multas significativas.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <motion.div className={styles.icon} whileHover={{ scale: 1.05 }}>
                <FontAwesomeIcon icon={item.icon} size="2x" />
              </motion.div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* CARD HORIZONTAL */}
        <motion.div
          className={styles.cardWide}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
        >
          <motion.div className={styles.icon} whileHover={{ scale: 1.05 }}>
            <FontAwesomeIcon icon={faShieldHalved} size="2x" />
          </motion.div>
          <div>
            <h3>Debido Proceso Reforzado</h3>
            <p>
              Los procesos disciplinarios exigen mayor rigor, haciendo más
              compleja la gestión de personal y los despidos justificados.
            </p>
          </div>
        </motion.div>

        {/* WARNING */}
        <motion.p
          className={styles.warning}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          No implementar correctamente la Reforma puede generar contingencias
          millonarias.
        </motion.p>
      </div>
    </section>
  );
}
