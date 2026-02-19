"use client";

import styles from "../styles/DiagnosticSection.module.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faClock,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";

export default function DiagnosticSection() {
  return (
    <section className={styles.section} id="diagnostico">
      <div className={styles.container}>
        {/* IZQUIERDA */}
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Diagnóstico Laboral Empresarial</h2>

          <p className={styles.text}>
            Cada semana que opera sin blindaje laboral adecuado es una semana de
            exposición innecesaria a contingencias que pueden costar millones.
            No espere a recibir una demanda o una sanción del Ministerio de
            Trabajo.
          </p>

          <p className={styles.text}>
            Es el momento de actuar y proteger su empresa. Solicite ahora un
            diagnóstico especializado que le permitirá identificar riesgos,
            evaluar la Reforma 2025 y obtener una propuesta de blindaje
            personalizada.
          </p>

          {/* CARDS */}
          <div className={styles.cards}>
            {[
              {
                icon: faCalendarCheck,
                title: "Inversión de la Asesoría",
                content: "$450.000 + IVA",
                extra:
                  "Totalmente aplicable al primer mes de cualquier plan contratado",
              },
              {
                icon: faClock,
                title: "Respuesta Garantizada",
                content:
                  "Confirmación de agenda en menos de 24 horas laborales",
              },
              {
                icon: faFileLines,
                title: "Incluye Diagnóstico",
                content: "Evaluación preliminar de riesgos sin costo adicional",
                full: true,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`${styles.card} ${item.full ? styles.full : ""}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <h4>{item.title}</h4>
                <p>{item.content}</p>
                {item.extra && <span>{item.extra}</span>}
              </motion.div>
            ))}
          </div>

          {/* BOTONES */}
          <motion.div
            className={styles.buttons}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <a className={styles.primary}>Agendar Asesoría</a>
            <a className={styles.secondary}>Solicitar Evaluación Rápida</a>
            <a className={styles.secondary}>
              Solicitar Propuesta Personalizada
            </a>
          </motion.div>

          {/* FOOTER */}
          <motion.div
            className={styles.footer}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <strong>PRAVICE Abogados Laboralistas</strong>
            <p>Blindamos su empresa para que usted pueda crecer.</p>
          </motion.div>
        </motion.div>

        {/* DERECHA */}
        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src="/reunion.jpg" alt="Reunión empresarial" />
        </motion.div>
      </div>
    </section>
  );
}
