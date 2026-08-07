import { BatIcon } from './Icons';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.name}><BatIcon size={14} className={styles.footerBat} /> Adib Ahmed</span>
        <span className={styles.copy}>Engineered in the Batcave · React + Framer Motion · {new Date().getFullYear()}</span>
        <a href="#hero" className={styles.top}
          onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          ↑ Back to top
        </a>
      </div>
    </footer>
  );
}
