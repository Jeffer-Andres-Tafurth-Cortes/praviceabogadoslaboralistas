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
import { motion } from "framer-motion";

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
        {/* Título */}
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          ¿Por Qué PRAVICE?
        </motion.h2>

        <div className={styles.grid}>
          {items.map((item, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className={styles.icon}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 250 }}
              >
                <FontAwesomeIcon icon={item.icon} />
              </motion.div>

              <span>{item.text}</span>
            </motion.div>
          ))}

          {/* Card ancha destacada */}
          <motion.div
            className={`${styles.card} ${styles.fullWidth}`}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: items.length * 0.1,
            }}
            viewport={{ once: true }}
            whileHover={{ y: -6, scale: 1.01 }}
          >
            <motion.div
              className={styles.icon}
              whileHover={{ rotate: 10 }}
              transition={{ duration: 0.3 }}
            >
              <FontAwesomeIcon icon={faArrowsSpin} />
            </motion.div>

            <span>Acompañamiento continuo</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
