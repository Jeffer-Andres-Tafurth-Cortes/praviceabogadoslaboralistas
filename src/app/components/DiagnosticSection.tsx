import styles from "../styles/DiagnosticSection.module.css";
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
        <div className={styles.left}>
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

          {/* BENEFICIOS */}
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faCalendarCheck} />
              </div>
              <h4>Inversión de la Asesoría</h4>
              <p>$450.000 + IVA</p>
              <span>
                Totalmente aplicable al primer mes de cualquier plan contratado
              </span>
            </div>

            <div className={styles.card}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faClock} />
              </div>
              <h4>Respuesta Garantizada</h4>
              <p>Confirmación de agenda en menos de 24 horas laborales</p>
            </div>

            <div className={`${styles.card} ${styles.full}`}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faFileLines} />
              </div>
              <h4>Incluye Diagnóstico</h4>
              <p>Evaluación preliminar de riesgos sin costo adicional</p>
            </div>
          </div>

          {/* BOTONES */}
          <div className={styles.buttons}>
            <a className={styles.primary}>Agendar Asesoría</a>
            <a className={styles.secondary}>Solicitar Evaluación Rápida</a>
            <a className={styles.secondary}>
              Solicitar Propuesta Personalizada
            </a>
          </div>

          <div className={styles.footer}>
            <strong>PRAVICE Abogados Laboralistas</strong>
            <p>Blindamos su empresa para que usted pueda crecer.</p>
          </div>
        </div>

        {/* DERECHA (IMAGEN) */}
        <div className={styles.right}>
          <img src="/reunion.jpg" alt="Reunión empresarial" />
        </div>
      </div>
    </section>
  );
}
