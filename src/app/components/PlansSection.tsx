"use client";

import styles from "../styles/PlanSection.module.css";
import { motion } from "framer-motion";

export default function PlanSection() {
  return (
    <section className={styles.section}>
      {/* TÍTULO */}
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Planes de Outsourcing Laboral
      </motion.h2>

      {/* TABLA */}
      <motion.div
        className={styles.tableWrapper}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <table className={styles.table}>
          <thead>
            <tr>
              <th></th>
              <th>Plan Esencial</th>
              <th>Plan Empresarial</th>
              <th className={styles.highlight}>Plan Corporativo</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className={styles.rowTitle}>Alcance mensual</td>
              <td>Hasta 8 consultas y revisión de 10 contratos laborales.</td>
              <td>
                Consultas ilimitadas prioritarias y revisión de 30 contratos
                laborales.
              </td>
              <td>
                Gestión integral de outsourcing completo, contratos y
                reglamentos ilimitados.
              </td>
            </tr>

            <tr>
              <td className={styles.rowTitle}>Nivel de acompañamiento</td>
              <td>
                Asesoría en procesos disciplinarios. Respuesta en 24 horas.
              </td>
              <td>
                Acompañamiento en auditorías. Respuesta en 12 horas.
                Capacitaciones trimestrales.
              </td>
              <td>
                Abogado asignado dedicado. Respuesta inmediata 24/7.
                Capacitaciones mensuales. Auditorías preventivas bimensuales.
              </td>
            </tr>

            <tr>
              <td className={styles.rowTitle}>
                Implementación Reforma 2025 incluida
              </td>
              <td>Sí</td>
              <td>Sí</td>
              <td>Sí</td>
            </tr>

            <tr>
              <td className={styles.rowTitle}>Características principales</td>
              <td>
                Acceso a plataforma digital. Ideal para empresas de 10 a 30
                empleados.
                <br />
                <strong>Desde $1.000.000/mes</strong>
              </td>
              <td>
                Soporte proactivo y representación en 1 proceso judicial. Ideal
                para empresas de 30 a 100 empleados.
                <br />
                <strong>Desde $5.200.000/mes</strong>
              </td>
              <td className={styles.bestPlan}>
                Representación ilimitada en procesos judiciales. Ideal para
                empresas con más de 100 empleados.
                <br />
                <strong>Desde $9.500.000/mes</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </motion.div>

      {/* BOTONES */}
      <motion.div
        className={styles.buttons}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <a href="#" className={styles.primaryBtn}>
          Solicitar Propuesta Personalizada
        </a>
        <a href="#" className={styles.secondaryBtn}>
          Comparar Planes en Detalle
        </a>
      </motion.div>
    </section>
  );
}
