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
          {/* ================= IZQUIERDA ================= */}
          <div className={styles.leftColumn}>
            {["Visibilidad", "Trazabilidad", "Eficiencia"].map(
              (title, index) => (
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
                  <h3>{title}</h3>
                  {index === 0 && (
                    <ul>
                      <li>Procesos disciplinarios activos</li>
                      <li>Demandas laborales</li>
                      <li>Implementación Reforma 2025</li>
                      <li>Estado de contratos y RIT</li>
                      <li>Comité de Convivencia Laboral</li>
                    </ul>
                  )}
                  {index === 1 && (
                    <ul>
                      <li>Actas de descargos</li>
                      <li>Citaciones y decisiones motivadas</li>
                      <li>Liquidaciones y paz y salvo</li>
                      <li>Autorizaciones de datos</li>
                      <li>Evidencia para auditorías</li>
                    </ul>
                  )}
                  {index === 2 && (
                    <ul>
                      <li>Validación previa de despidos</li>
                      <li>Control de horas extras</li>
                      <li>Alertas de vencimientos legales</li>
                      <li>Prevención de contingencias</li>
                    </ul>
                  )}
                </motion.div>
              ),
            )}
          </div>

          {/* ================= DERECHA ================= */}
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
                <strong>Tomar decisiones laborales informadas:</strong>
                Validar terminaciones, aprobar liquidaciones y gestionar
                inspecciones.
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
