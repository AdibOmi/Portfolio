import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data';
import styles from './Projects.module.css';

const STATUS_COLOR = { "Completed": "#4ade80", "In Progress": "#9db8d1" };

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <p className="section-label">Case Files</p>
        <div className={styles.header}>
          <h2 className={styles.heading}>Open <span className={styles.hl}>Cases</span></h2>
          <p className={styles.sub}>Every case started as a personal frustration. Here's what came out of the investigation.</p>
        </div>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <motion.div key={p.id}
              className={`${styles.card} ${p.highlight ? styles.featured : ''} ${active === p.id ? styles.expanded : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}>
              <div className={styles.cardTop}>
                <div className={styles.cardNum}>0{i + 1}</div>
                <span className={styles.status} style={{ color: STATUS_COLOR[p.status] }}>
                  <span className={styles.statusDot} style={{ background: STATUS_COLOR[p.status] }} />
                  {p.status}
                </span>
              </div>

              <div className={styles.imgWrap}>
                <img src={p.image} alt={p.title}
                  className={styles.img}
                  onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
                <div className={styles.imgFallback}>
                  <span>{p.title}</span>
                  <small>Add screenshot to /public/images/{p.id}.png</small>
                </div>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.title}>{p.title}</h3>
                <p className={styles.tagline}>{p.tagline}</p>

                <AnimatePresence>
                  {active === p.id && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className={styles.detail}>
                      <p className={styles.problem}><strong>Problem:</strong> {p.problem}</p>
                      <p className={styles.desc}>{p.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className={styles.stack}>
                  {p.stack.map(s => <span key={s} className={styles.stackTag}>{s}</span>)}
                </div>
              </div>

              <div className={styles.cardFooter}>
                <button className={styles.expandBtn} onClick={() => setActive(active === p.id ? null : p.id)}>
                  {active === p.id ? 'Less' : 'Details'} <ArrowRight size={13} className={active === p.id ? styles.rotate : ''} />
                </button>
                <div className={styles.links}>
                  {p.github && <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon size={16} /></a>}
                  {p.live && <a href={p.live} target="_blank" rel="noreferrer" aria-label="Live"><ExternalLink size={16} /></a>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
