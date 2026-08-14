import { motion } from 'framer-motion';
import { skills } from '../data';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <p className="section-label">Skills</p>
        <div className={styles.header}>
          <h2 className={styles.heading}>Technical<br /><span className={styles.hl}>Skills</span></h2>
        </div>
        <div className={styles.grid}>
          {skills.map((group, i) => (
            <motion.div key={group.category} className={styles.group}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}>
              <span className={styles.category}>{group.category}</span>
              <div className={styles.items}>
                {group.items.map(item => (
                  <span key={item} className={styles.item}>{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
