import styles from "../styles/AppSection.module.css";

export default function AppSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          APP LABORAL PRAVICE: Control Total de su Gestión Laboral, 24/7
        </h2>

        <p className={styles.intro}>
          La App Laboral PRAVICE no es un simple canal de consulta. Es su centro
          de control laboral empresarial en tiempo real.
        </p>

        <p className={styles.intro}>
          Diseñada para empresas, gerencias, RRHH y áreas financieras, la
          plataforma le permite tener visibilidad, trazabilidad y respaldo
          jurídico permanente frente a la Reforma Laboral 2025 y todas sus
          obligaciones laborales.
        </p>

        <p className={styles.intro}>
          No es información estática. Es prevención estratégica continua.
        </p>

        {/* GRID PRINCIPAL */}
        <div className={styles.grid}>
          {/* COLUMNA 1 */}
          <div className={styles.card}>
            <h3>Seguimiento 24 horas a gestión laboral</h3>
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
          </div>

          {/* COLUMNA 2 */}
          <div className={styles.card}>
            <h3>Solicitud de asesorías laborales online</h3>
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
          </div>

          {/* COLUMNA 3 */}
          <div className={styles.card}>
            <h3>Chat jurídico laboral directo</h3>
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
          </div>

          {/* COLUMNA 4 */}
          <div className={styles.card}>
            <h3>Carga y gestión de documentos laborales</h3>
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
          </div>
        </div>

        {/* BLOQUE INFERIOR */}
        <div className={styles.reforma}>
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
        </div>
      </div>
    </section>
  );
}
