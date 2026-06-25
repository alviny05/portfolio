"use client";
import { useState, useEffect } from "react";
import { data } from "@/lib/data";
import styles from "./Nav.module.css";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <span className={styles.name}>{data.name}</span>
      <ul className={styles.links}>
        {["projects", "experience", "skills", "contact"].map((s) => (
          <li key={s}>
            <a href={`#${s}`}>{s}</a>
          </li>
        ))}
        <li>
          <a href={data.resume} className={styles.resumeBtn} target="_blank" rel="noopener noreferrer">
            resume ↗
          </a>
        </li>
      </ul>
    </nav>
  );
}
