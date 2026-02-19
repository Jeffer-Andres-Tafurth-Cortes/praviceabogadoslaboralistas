import styles from "../styles/ResultsSection.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faGavel,
  faLock,
  faFileLines,
  faScaleBalanced,
} from "@fortawesome/free-solid-svg-icons";

export default function Resultados() {
  const items = [
    { icon: faShieldHalved, text: "Reducción de contingencias" },
    { icon: faGavel, text: "Disminución de litigios" },
    { icon: faLock, text: "Seguridad para la gerencia" },
    { icon: faFileLines, text: "Procesos documentados y defendibles" },
    { icon: faScaleBalanced, text: "Tranquilidad operativa" },
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Resultados que Generamos</h2>

      <div className={styles.list}>
        {items.map((item, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={item.icon} />
            </div>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      <p className={styles.footer}>No improvisamos. Blindamos.</p>
    </section>
  );
}
