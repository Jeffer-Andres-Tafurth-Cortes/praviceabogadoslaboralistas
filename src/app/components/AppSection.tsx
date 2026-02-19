"use client";

import styles from "../styles/AppSection.module.css";
import { motion } from "framer-motion";

export default function AppSection() {
  return (
    <section className={styles.section} id="app">
      <div className={styles.container}>
        {/* TÍTULO */}
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          APP LABORAL PRAVICE: Control Total de su Gestión Laboral, 24/7
        </motion.h2>

        {/* INTRO */}
        {[0, 1, 2].map((i) => (
          <motion.p
            key={i}
            className={styles.intro}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
            viewport={{ once: true }}
          >
            {
              [
                "La App Laboral PRAVICE no es un simple canal de consulta. Es su centro de control laboral empresarial en tiempo real.",
                "Diseñada para empresas, gerencias, RRHH y áreas financieras, la plataforma le permite tener visibilidad, trazabilidad y respaldo jurídico permanente frente a la Reforma Laboral 2025 y todas sus obligaciones laborales.",
                "No es información estática. Es prevención estratégica continua.",
              ][i]
            }
          </motion.p>
        ))}

        {/* GRID PRINCIPAL */}
        <div className={styles.grid}>
          {[
            "Seguimiento 24 horas a gestión laboral",
            "Solicitud de asesorías laborales online",
            "Chat jurídico laboral directo",
            "Carga y gestión de documentos laborales",
          ].map((title, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Mantienes tu contenido original dentro */}
              {index === 0 && (
                <>
                  <h3>{title}</h3>
                  <p>Acceda en cualquier momento al estado actualizado de:</p>
                  <ul>
                    <li>Procesos disciplinarios</li>
                    <li>Investigaciones internas</li>
                    <li>Demandas laborales</li>
                    <li>Implementación del RIT</li>
                    <li>Comité de Convivencia Laboral</li>
                    <li>Auditorías de cumplimiento</li>
                    <li>Reportes de riesgos laborales</li>
                  </ul>
                  <span className={styles.note}>
                    Toda la información organizada por trabajador, área o caso.
                  </span>
                </>
              )}

              {index === 1 && (
                <>
                  <h3>{title}</h3>
                  <p>Desde la misma plataforma podrá:</p>
                  <ul>
                    <li>Solicitar concepto jurídico inmediato</li>
                    <li>Agendar reuniones virtuales</li>
                    <li>Consultar decisiones disciplinarias</li>
                    <li>Validar despidos con o sin justa causa</li>
                    <li>Revisar liquidaciones antes de pago</li>
                    <li>Orientación frente a inspecciones del Ministerio</li>
                  </ul>
                  <span className={styles.note}>
                    Su equipo jurídico laboral externo disponible.
                  </span>
                </>
              )}

              {index === 2 && (
                <>
                  <h3>{title}</h3>
                  <p>Incluye un chat interno exclusivo para:</p>
                  <ul>
                    <li>Validación previa de decisiones laborales</li>
                    <li>Consulta sobre horas extras y recargos</li>
                    <li>Gestión de incapacidades y licencias</li>
                    <li>Activación de protocolo de acoso</li>
                    <li>Solicitud de informes técnicos</li>
                  </ul>
                  <span className={styles.note}>
                    Cada comunicación queda registrada y trazable.
                  </span>
                </>
              )}

              {index === 3 && (
                <>
                  <h3>{title}</h3>
                  <p>Adjunte directamente:</p>
                  <ul>
                    <li>Contratos laborales</li>
                    <li>Otrosíes y anexos</li>
                    <li>Citaciones disciplinarias</li>
                    <li>Actas de descargos</li>
                    <li>Políticas internas</li>
                    <li>Autorizaciones de datos</li>
                    <li>Liquidaciones y paz y salvo</li>
                  </ul>
                  <span className={styles.note}>
                    Respaldo digital para auditoría o defensa judicial.
                  </span>
                </>
              )}
            </motion.div>
          ))}
        </div>

        {/* BLOQUE REFORMA */}
        <motion.div
          className={styles.reforma}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3>Implementación Reforma Laboral 2025 (Ley 2466)</h3>

          <ul>
            <li>Publicación del RIT actualizado</li>
            <li>Procedimiento disciplinario vigente</li>
            <li>Contratos maestros actualizados</li>
            <li>Políticas de acoso y violencia</li>
            <li>Inclusión laboral obligatoria</li>
            <li>Cesantías consignadas</li>
            <li>Protección de datos personales</li>
            <li>Capacitaciones realizadas</li>
            <li>Auditorías periódicas</li>
          </ul>

          <p className={styles.note}>
            Semáforo de cumplimiento visible para gerencia.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
