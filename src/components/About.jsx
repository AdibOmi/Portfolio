import { motion } from 'framer-motion';
import { about } from '../data';
import styles from './About.module.css';

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <p className="section-label">The Man Behind the Mask</p>
        <div className={styles.grid}>
          <motion.div className={styles.left}
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }}>
            <div className={styles.photoWrap}>
              <div className={styles.photoPlaceholder}>
                <span>YOUR PHOTO HERE</span>
                <small>Replace with your actual photo in /public/images/adib.jpg</small>
              </div>
              <div className={styles.photoAccent} />
            </div>
          </motion.div>

          <motion.div className={styles.right}
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6, delay: 0.15 }}>
            <div className="tag">01 — Secret Identity</div>
            <h2 className={styles.heading}>I build things that<br /><span className={styles.hl}>fix real frustrations</span></h2>
            {about.bio.map((p, i) => (
              <p key={i} className={styles.para}>{p}</p>
            ))}
            <div className={styles.meta}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>University</span>
                <span className={styles.metaValue}>{about.university}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Degree</span>
                <span className={styles.metaValue}>{about.degree}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Graduating</span>
                <span className={styles.metaValue}>{about.graduating}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
