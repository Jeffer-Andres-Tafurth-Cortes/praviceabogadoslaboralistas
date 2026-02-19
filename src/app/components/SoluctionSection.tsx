"use client";

import styles from "../styles/SoluctionSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faGear,
  faShieldHalved,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";

export default function SolucionSection() {
  return (
    <section
      className={styles.section}
      id="solucion-laboral"
      aria-labelledby="departamento-juridico-externo"
      role="region"
    >
      <div className={styles.container}>
        <h2 id="departamento-juridico-externo" className={styles.title}>
          Departamento Jurídico Laboral Externo para Empresas en Colombia
        </h2>

        <p className={styles.subtitle}>
          PRAVICE actúa como su departamento jurídico laboral externo, brindando
          asesoría permanente en cumplimiento normativo, prevención de litigios
          y defensa judicial estratégica, sin aumentar su nómina ni asumir
          cargas laborales internas.
        </p>

        <div className={styles.grid}>
          {[
            {
              icon: faHandshake,
              title: "Acompañamiento Jurídico Permanente",
              text: "Asesoría legal continua en contratación, reglamentos internos, estabilidad reforzada y procesos disciplinarios.",
            },
            {
              icon: faGear,
              title: "Implementación Integral de Cumplimiento",
              text: "Diseño y ejecución de protocolos laborales alineados con la Reforma Laboral 2025 y normatividad vigente en Colombia.",
            },
            {
              icon: faShieldHalved,
              title: "Defensa Judicial Estratégica",
              text: "Representación en demandas laborales, conciliaciones y procesos ante el Ministerio del Trabajo.",
            },
            {
              icon: faFileLines,
              title: "Prevención y Blindaje Documental",
              text: "Auditoría y estructuración documental para minimizar riesgos de sanciones y contingencias económicas.",
            },
          ].map((item, index) => (
            <article key={index} className={styles.item}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        {/* BLOQUE SEO ENRIQUECIDO */}
        <div className={styles.seoBlock}>
          <h3>¿Por qué contratar un departamento jurídico laboral externo?</h3>

          <p>
            Las empresas en Colombia enfrentan un entorno regulatorio cada vez
            más exigente, especialmente tras la Reforma Laboral 2025. Contar con
            asesoría jurídica laboral externa permite reducir riesgos legales,
            prevenir sanciones administrativas y optimizar la gestión del
            talento humano.
          </p>

          <p>
            Un modelo de outsourcing jurídico laboral ofrece control de costos,
            acompañamiento estratégico y defensa especializada sin los gastos
            asociados a un equipo interno permanente.
          </p>

          <h3>Servicios incluidos</h3>
          <p>
            Auditoría laboral preventiva, estructuración de reglamentos
            internos, asesoría en despidos con justa causa, representación
            judicial, respuesta a inspecciones del Ministerio del Trabajo y
            consultoría en cumplimiento normativo empresarial.
          </p>
        </div>
      </div>
    </section>
  );
}
