"use client";

import styles from "../styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          {/* COLUMNA 1 */}
          <div className={styles.col}>
            <h2 className={styles.logo}>PRAVICE Abogados Laboralistas</h2>

            <h4>Contáctenos</h4>

            <p>
              <FontAwesomeIcon
                icon={faLocationDot}
                className={styles.icon}
                aria-hidden="true"
              />
              Oficina Principal Bogotá
              <br />
              Calle 98 #22-64, Oficina 716
              <br />
              Edificio Calle 100 PH.
              <br />
              Bogotá D.C., Colombia
            </p>

            <p>
              <FontAwesomeIcon
                icon={faPhone}
                className={styles.icon}
                aria-hidden="true"
              />
              <strong>Teléfono:</strong>{" "}
              <a href="tel:+576013099331">+57 (601) 309 9331</a>
              <br />
              <strong>WhatsApp:</strong>{" "}
              <a
                href="https://wa.me/573114659315"
                target="_blank"
                rel="noopener noreferrer"
              >
                +57 311 465 9315
              </a>
            </p>

            <p>
              <FontAwesomeIcon
                icon={faEnvelope}
                className={styles.icon}
                aria-hidden="true"
              />
              <a href="mailto:info@pravice.co">info@pravice.co</a>
            </p>

            <p>
              <FontAwesomeIcon
                icon={faClock}
                className={styles.icon}
                aria-hidden="true"
              />
              <strong>Horario:</strong>
              <br />
              Lunes a Viernes: 8:00 AM - 6:00 PM
              <br />
              Sábados: 9:00 AM - 1:00 PM (cita previa)
            </p>

            <div className={styles.badges}>
              <span role="status">REGISTRO CNA 2024</span>
              <span role="status">CERTIFICACIÓN ISO 9001</span>
            </div>
          </div>

          {/* COLUMNA 2 */}
          <div className={styles.col}>
            <h4>Áreas de Práctica</h4>
            <ul>
              <li>Outsourcing Jurídico Laboral Empresarial</li>
              <li>Defensa en Procesos Laborales y Pensionales</li>
              <li>Asesoría Preventiva y Auditorías</li>
              <li>Gestión de Despidos y Reestructuraciones</li>
              <li>Negociación Colectiva y Relaciones Sindicales</li>
              <li>Diseño de Reglamentos y Protocolos Internos</li>
              <li>Acompañamiento en Inspecciones del Ministerio</li>
            </ul>
          </div>

          {/* COLUMNA 3 */}
          <div className={styles.col}>
            <h4>Sectores Atendidos</h4>
            <ul className={styles.sectorsList}>
              {[
                "Manufactura",
                "Comercio",
                "Servicios",
                "Tecnología",
                "Construcción",
                "Salud",
                "Educación",
                "Logística",
                "Agroindustria",
                "Financiero",
                "Energía",
                "Telecomunicaciones",
              ].map((sector, idx) => (
                <li key={idx}>{sector}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* BARRA LEGAL */}
        <div className={styles.legal}>
          <p>
            © {new Date().getFullYear()} PRAVICE Abogados Laboralistas. Todos
            los derechos reservados. | <a href="#">Política de Privacidad</a> |
            <a href="#"> Términos y Condiciones</a> |
            <a href="#"> Aviso Legal</a> |
            <a href="#"> Tratamiento de Datos Personales</a>
          </p>

          <span className={styles.note}>
            PRAVICE es una firma de abogados debidamente registrada ante el
            Consejo Superior de la Judicatura de Colombia. Los servicios
            jurídicos son prestados por abogados titulados e inscritos.
          </span>
        </div>
      </footer>

      {/* BOTÓN WHATSAPP FLOTANTE */}
      <a
        href="https://wa.me/573114659315?text=Hola%20PRAVICE,%20quiero%20información%20sobre%20asesoría%20laboral."
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappFloat}
        aria-label="Contactar por WhatsApp"
        role="button"
        tabIndex={0}
      >
        <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" />
      </a>
    </>
  );
}
