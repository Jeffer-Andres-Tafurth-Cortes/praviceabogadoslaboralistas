import styles from "../styles//Hero.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <h1>PRAVICE Abogados Laboralistas</h1>

        <h2>Blindaje Laboral Empresarial - Reforma 2025</h2>

        <p>
          Somos los mejores abogados laboralistas y Outsourcing jurídico laboral
          estratégico para empresas colombianas protegiendo su compañía frente a
          demandas, sanciones y contingencias laborales.
        </p>

        <div className={styles.buttons}>
          <Link href="/contacto" className={styles.primaryBtn}>
            Agendar Asesoría Laboral
          </Link>

          <Link href="/reforma-2025" className={styles.secondaryBtn}>
            Solicitar Evaluación Reforma 2025
          </Link>
        </div>

        <span className={styles.note}>
          Respuesta garantizada en menos de 24 horas laborales
        </span>
      </div>
    </section>
  );
}
