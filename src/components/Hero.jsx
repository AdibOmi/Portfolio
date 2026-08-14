import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { GithubIcon, LinkedInIcon } from './Icons';
import { about } from '../data';
import styles from './Hero.module.css';

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%";

function scramble(el, finalText) {
  let iter = 0;
  const interval = setInterval(() => {
    el.innerText = finalText.split("").map((char, i) => {
      if (i < iter) return finalText[i];
      if (char === " ") return " ";
      return CHARS[Math.floor(Math.random() * CHARS.length)];
    }).join("");
    if (iter >= finalText.length) clearInterval(interval);
    iter += 0.5;
  }, 30);
}

export default function Hero() {
  const nameRef = useRef(null);
  const roleRef = useRef(null);

  useEffect(() => {
    const t1 = setTimeout(() => nameRef.current && scramble(nameRef.current, "ADIB AHMED"), 300);
    const t2 = setTimeout(() => roleRef.current && scramble(roleRef.current, "Full-Stack Developer"), 800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.grid} aria-hidden />
      <div className={styles.glow} aria-hidden />
      <div className={styles.beam} aria-hidden />

      <div className={`container ${styles.content}`}>
        <motion.div className={styles.tag}
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <span className={styles.dot} />
          Available for work
        </motion.div>

        <h1 className={styles.name} ref={nameRef}>ADIB AHMED</h1>
        <div className={styles.roleRow}>
          <h2 className={styles.role} ref={roleRef}>Full-Stack Developer</h2>
        </div>

        <motion.p className={styles.bio}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
          Final-year CSE student at Islamic University of Technology. I solve problems I've actually run into with whatever tools fit, not chasing what's flashy, just what's needed. Currently focused on computer vision and full-stack engineering.
        </motion.p>

        <motion.div className={styles.actions}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}>
          <button className={styles.btnPrimary}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            View My Projects
          </button>
          <a href={about.github} target="_blank" rel="noreferrer" className={styles.btnGhost}>
            <GithubIcon size={16} /> GitHub
          </a>
          <a href={about.linkedin} target="_blank" rel="noreferrer" className={styles.btnGhost}>
            <LinkedInIcon size={16} /> LinkedIn
          </a>
        </motion.div>

        <motion.div className={styles.stats}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>
          {[["4", "Projects Shipped"], ["4", "Problem Domains"], [about.graduating, "Graduating"]].map(([n, l]) => (
            <div key={l} className={styles.stat}>
              <span className={styles.statNum}>{n}</span>
              <span className={styles.statLabel}>{l}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.button className={styles.scroll}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
        <ArrowDown size={18} />
      </motion.button>
    </section>
  );
}
