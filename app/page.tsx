import Nav from "@/components/Nav";
import { data } from "@/lib/data";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Nav />
      <main className={styles.main}>

        {/* ── HERO ── */}
        <section className={styles.hero}>
          <p className={styles.heroEyebrow}>
            <span className={styles.dot} /> available for full-time roles · summer 2027
          </p>
          <h1 className={styles.heroName}>{data.name}</h1>
          <p className={styles.heroRole}>{data.role}</p>
          <p className={styles.heroTagline}>{data.tagline}</p>
          <div className={styles.heroLinks}>
            <a href={`mailto:${data.email}`} className={styles.primaryLink}>
              get in touch ↗
            </a>
            <a href={data.github} target="_blank" rel="noopener noreferrer" className={styles.ghostLink}>
              GitHub
            </a>
            <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className={styles.ghostLink}>
              LinkedIn
            </a>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section className={styles.section}>
          <p className={styles.about}>{data.about}</p>
        </section>

        <hr className={styles.rule} />

        {/* ── PROJECTS ── */}
        <section id="projects" className={styles.section}>
          <h2 className={styles.sectionLabel}>Projects</h2>
          <div className={styles.projectGrid}>
            {data.projects.map((p) => (
              <article key={p.title} className={styles.projectCard}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>{p.title}</h3>
                  <div className={styles.cardLinks}>
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer">
                        code ↗
                      </a>
                    )}
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noopener noreferrer">
                        demo ↗
                      </a>
                    )}
                  </div>
                </div>
                <p className={styles.cardDesc}>{p.description}</p>
                <div className={styles.tagRow}>
                  {p.tags.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <hr className={styles.rule} />

        {/* ── EXPERIENCE ── */}
        <section id="experience" className={styles.section}>
          <h2 className={styles.sectionLabel}>Experience</h2>
          <div className={styles.expList}>
            {data.experience.map((e) => (
              <div key={e.role} className={styles.expItem}>
                <div className={styles.expMeta}>
                  <span className={styles.expRole}>{e.role}</span>
                  <span className={styles.expOrg}>{e.org}</span>
                  <span className={styles.expPeriod}>{e.period}</span>
                </div>
                <ul className={styles.expBullets}>
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <hr className={styles.rule} />

        {/* ── SKILLS ── */}
        <section id="skills" className={styles.section}>
          <h2 className={styles.sectionLabel}>Skills</h2>
          <div className={styles.skillGrid}>
            {data.skills.map((group) => (
              <div key={group.category} className={styles.skillGroup}>
                <h3 className={styles.skillCategory}>{group.category}</h3>
                <ul className={styles.skillList}>
                  {group.items.map((item) => (
                    <li key={item} className={styles.skillItem}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <hr className={styles.rule} />

        {/* ── CONTACT ── */}
        <section id="contact" className={styles.contactSection}>
          <h2 className={styles.contactHeading}>Let's talk.</h2>
          <p className={styles.contactSub}>
            I'm actively looking for embedded software and firmware roles starting summer 2027, and open to internships or research opportunities in the meantime.
          </p>
          <a href={`mailto:${data.email}`} className={styles.contactEmail}>
            {data.email}
          </a>
        </section>

        <footer className={styles.footer}>
          <span>© {new Date().getFullYear()} {data.name}</span>
          <span>Built with Next.js · Deployed on Vercel</span>
        </footer>

      </main>
    </>
  );
}
