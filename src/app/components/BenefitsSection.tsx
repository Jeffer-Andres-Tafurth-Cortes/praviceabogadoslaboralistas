"use client";

import styles from "../styles/BenefitsSection.module.css";
import { motion } from "framer-motion";

export default function BenefitsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* TÍTULO */}
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Beneficio Estratégico Laboral para su Empresa
        </motion.h2>

        {/* INTRO */}
        <motion.p
          className={styles.intro}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          La App Laboral PRAVICE convierte la gestión laboral en un sistema
          medible, transparente, controlable y trazable.
        </motion.p>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Funciona como su departamento jurídico laboral externo digitalizado,
          con acceso permanente y respaldo probatorio en tiempo real.
        </motion.p>

        <div className={styles.grid}>
          {/* IZQUIERDA */}
          <div className={styles.leftColumn}>
            {[
              {
                title: "Visibilidad",
                items: [
                  "Procesos disciplinarios activos",
                  "Demandas laborales",
                  "Implementación Reforma 2025",
                  "Estado de contratos y RIT",
                  "Comité de Convivencia Laboral",
                ],
              },
              {
                title: "Trazabilidad",
                items: [
                  "Actas de descargos",
                  "Citaciones y decisiones motivadas",
                  "Liquidaciones y paz y salvo",
                  "Autorizaciones de datos",
                  "Evidencia para auditorías",
                ],
              },
              {
                title: "Eficiencia",
                items: [
                  "Validación previa de despidos",
                  "Control de horas extras",
                  "Alertas de vencimientos legales",
                  "Prevención de contingencias",
                ],
              },
            ].map((block, index) => (
              <motion.div
                key={index}
                className={styles.box}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <h3>{block.title}</h3>
                <ul>
                  {block.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* DERECHA */}
          <motion.div
            className={styles.rightColumn}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3>Enfoque Empresarial</h3>

            <p>
              La plataforma está diseñada para gerencias, RRHH y áreas
              financieras que necesitan respaldo técnico y control estratégico.
            </p>

            <ul className={styles.features}>
              <li>
                <strong>Proyectar contingencias laborales:</strong> Anticipa
                riesgos de demandas y costos indemnizatorios.
              </li>
              <li>
                <strong>Medir desempeño jurídico laboral:</strong> Indicadores
                de cumplimiento normativo y tiempos de respuesta.
              </li>
              <li>
                <strong>Detectar riesgos y cuellos de botella:</strong> Fallas
                en documentación o contratos.
              </li>
              <li>
                <strong>Tomar decisiones laborales informadas:</strong> Validar
                terminaciones, aprobar liquidaciones y gestionar inspecciones.
              </li>
            </ul>
          </motion.div>
        </div>

        {/* FOOTER */}
        <motion.div
          className={styles.footerText}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          PRAVICE Laboral no solo responde conflictos. Previene, documenta y
          blinda.
        </motion.div>
      </div>
    </section>
  );
}
