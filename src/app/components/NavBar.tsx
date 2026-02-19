"use client";

import { useState, useEffect } from "react";
import styles from "../styles/NavBar.module.css";
import Link from "next/link";

const navItems = [
  { label: "Inicio", id: "inicio" },
  { label: "Reforma 2025", id: "reforma" },
  { label: "Servicios", id: "servicios" },
  { label: "Metodología", id: "metodologia" },
  { label: "App", id: "app" },
  { label: "Diagnóstico", id: "diagnostico" },
];

export default function NavBar() {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logo}>PRAVICE</div>

        <div className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={active === item.id ? styles.active : ""}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}

          {/* BLOG (ruta externa futura) */}
          <Link href="/blog" className={styles.blog}>
            Blog
          </Link>

          {/* BOTÓN APP */}
          <a
            href="https://app.tuempresa.com"
            target="_blank"
            className={styles.cta}
          >
            Acceso Plataforma
          </a>
        </div>

        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>
    </nav>
  );
}
