import styles from "../styles/PlanSection.module.css";

export default function PlanSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Planes de Outsourcing Laboral</h2>

      <div className={styles.tableWrapper}>
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
      </div>

      <div className={styles.buttons}>
        <a href="#" className={styles.primaryBtn}>
          Solicitar Propuesta Personalizada
        </a>
        <a href="#" className={styles.secondaryBtn}>
          Comparar Planes en Detalle
        </a>
      </div>
    </section>
  );
}
