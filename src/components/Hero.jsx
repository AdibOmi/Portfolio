import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { GithubIcon, LinkedInIcon, BatIcon } from './Icons';
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
    const t2 = setTimeout(() => roleRef.current && scramble(roleRef.current, "Software Engineer & Builder"), 800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.grid} aria-hidden />
      <div className={styles.glow} aria-hidden />
      <div className={styles.beam} aria-hidden />
      <BatIcon size={520} className={styles.batMark} />

      <div className={`container ${styles.content}`}>
        <motion.div className={styles.tag}
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <span className={styles.dot} />
          The signal is lit — available for work
        </motion.div>

        <h1 className={styles.name} ref={nameRef}>ADIB AHMED</h1>
        <div className={styles.roleRow}>
          <BatIcon size={22} className={styles.roleBat} />
          <h2 className={styles.role} ref={roleRef}>Software Engineer &amp; Builder</h2>
        </div>

        <motion.p className={styles.bio}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
          No inheritance, no butler, no batcave — just late nights and shipped code. Backend AI Engineering Intern at FlyRank, final-year CSE student at IUT. Interested in computer vision, full-stack builds, and eventually, my own company.
        </motion.p>

        <motion.div className={styles.actions}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}>
          <button className={styles.btnPrimary}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            Open the Case Files
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
          {[["4", "Cases Cracked"], ["4", "Problem Domains"], [about.graduating, "Graduating"]].map(([n, l]) => (
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
