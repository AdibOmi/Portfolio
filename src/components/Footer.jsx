import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.name}>Adib Ahmed</span>
        <span className={styles.copy}>Built with React + Framer Motion · {new Date().getFullYear()}</span>
        <a href="#hero" className={styles.top}
          onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          ↑ Back to top
        </a>
      </div>
    </footer>
  );
}
