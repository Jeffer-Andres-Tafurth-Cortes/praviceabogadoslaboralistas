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
    <section
      className={styles.section}
      id="reforma"
      aria-labelledby="reforma-laboral-colombia"
      role="region"
    >
      <div className={styles.container}>
        <motion.h2 id="reforma-laboral-colombia" className={styles.title}>
          Reforma Laboral 2025 en Colombia (Ley 2466): Nuevas Obligaciones y
          Riesgos para Empresas
        </motion.h2>

        <p className={styles.intro}>
          La Reforma Laboral 2025 en Colombia, conocida como Ley 2466, introduce
          cambios estructurales que impactan directamente a las empresas en
          materia de contratación, procesos disciplinarios, inspecciones del
          Ministerio del Trabajo y sanciones laborales.
        </p>

        {/* GRID */}
        <div className={styles.grid}>
          {[
            {
              icon: faScaleBalanced,
              title: "Mayor Riesgo de Sanciones Laborales",
              text: "Incremento en multas por incumplimiento normativo, errores en liquidaciones y omisiones documentales.",
            },
            {
              icon: faGavel,
              title: "Aumento de Demandas y Litigios",
              text: "Mayor protección al trabajador genera más procesos judiciales por despidos y estabilidad reforzada.",
            },
            {
              icon: faEye,
              title: "Inspecciones Más Estrictas",
              text: "El Ministerio del Trabajo intensifica auditorías y controles empresariales.",
            },
            {
              icon: faFileLines,
              title: "Obligaciones Documentales Reforzadas",
              text: "Exigencia de trazabilidad en contratos, reglamentos internos y procesos disciplinarios.",
            },
          ].map((item, index) => (
            <article key={index} className={styles.card}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={item.icon} size="2x" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        {/* CARD WIDE */}
        <article className={styles.cardWide}>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faShieldHalved} size="2x" />
          </div>
          <div>
            <h3>Debido Proceso Disciplinario Reforzado</h3>
            <p>
              Las empresas deben garantizar investigación formal, citación,
              descargos y decisión motivada. La omisión de etapas puede generar
              nulidad del despido e indemnizaciones elevadas.
            </p>
          </div>
        </article>

        {/* BLOQUE SEO ENRIQUECIDO */}
        <div className={styles.seoBlock}>
          <h3>
            ¿Qué implica la Reforma Laboral 2025 para las empresas en Colombia?
          </h3>

          <p>
            La Ley 2466 de 2025 redefine estándares de cumplimiento normativo
            empresarial en Colombia, fortaleciendo la protección del trabajador
            y ampliando la facultad sancionatoria del Ministerio del Trabajo.
          </p>

          <p>
            Las organizaciones deben revisar sus contratos laborales, reglamento
            interno de trabajo, políticas disciplinarias, comités obligatorios y
            protocolos de estabilidad laboral reforzada.
          </p>

          <h3>Riesgos legales frecuentes</h3>
          <p>
            Entre los riesgos más comunes se encuentran demandas por despido sin
            justa causa, reclamaciones por horas extras, indemnizaciones por
            vulneración del debido proceso y multas administrativas por
            incumplimiento documental.
          </p>
        </div>

        <p className={styles.warning}>
          No implementar correctamente la Reforma Laboral 2025 puede generar
          contingencias económicas significativas y afectar la estabilidad
          financiera empresarial.
        </p>
      </div>
    </section>
  );
}
