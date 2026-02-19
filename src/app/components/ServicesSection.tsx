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
import { motion } from "framer-motion";

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
    <section className={styles.section} id="servicios">
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Servicios Laborales Empresariales
        </motion.h2>

        <div className={styles.grid}>
          {servicios.map((servicio, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              <motion.div
                className={styles.icon}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 250 }}
              >
                <FontAwesomeIcon icon={servicio.icon} />
              </motion.div>

              <span>{servicio.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
