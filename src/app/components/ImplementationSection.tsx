"use client";

import styles from "../styles/ImplementationSection.module.css";
import { motion } from "framer-motion";

const fases = [
  "Fase 1 - Diagnóstico y matriz de brechas",
  "Fase 2 - Actualización del Reglamento Interno de Trabajo",
  "Fase 3 - Procedimiento disciplinario estructurado",
  "Fase 4 - Contratos laborales blindados",
  "Fase 5 - Jornada laboral y recargos ajustados",
  "Fase 6 - Licencias y permisos actualizados",
  "Fase 7 - Prevención de acoso y violencia laboral",
  "Fase 8 - Inclusión laboral y reportes obligatorios",
  "Fase 9 - Cesantías y obligaciones periódicas",
  "Fase 10 - Protección de datos personales",
  "Fase 11 - Renuncias, liquidaciones y paz y salvo",
  "Fase 12 - Auditoría y mejora continua",
];

export default function ImplementacionSection() {
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
          Implementación Integral - Ley 2466 de 2025
        </motion.h2>

        {/* Subtítulo */}
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Basado en el Manual Práctico de Implementación
        </motion.p>

        <div className={styles.grid}>
          {fases.map((fase, index) => (
            <motion.div
              key={index}
              className={styles.item}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.07,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -4,
              }}
            >
              <motion.span
                className={styles.number}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.07 + 0.1,
                }}
                viewport={{ once: true }}
              >
                {String(index + 1).padStart(2, "0")}
              </motion.span>

              <div className={styles.line}></div>

              <h3>{fase}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
