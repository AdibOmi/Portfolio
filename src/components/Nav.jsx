import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BatIcon } from './Icons';
import styles from './Nav.module.css';

const links = [
  { id: 'about', label: 'The Man' },
  { id: 'projects', label: 'Case Files' },
  { id: 'skills', label: 'Arsenal' },
  { id: 'contact', label: 'Signal' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo} onClick={e => { e.preventDefault(); window.scrollTo({top:0,behavior:'smooth'}); }}>
          <BatIcon size={20} className={styles.logoBat} /> Adib
        </a>
        <ul className={styles.links}>
          {links.map(l => (
            <li key={l.id}>
              <button onClick={() => scrollTo(l.id)}>{l.label}</button>
            </li>
          ))}
        </ul>
        <a href="mailto:adibahmed@iut-dhaka.edu" className={styles.cta}>
          Signal Me
        </a>
        <button className={styles.burger} onClick={() => setOpen(!open)}>
          <span className={open ? styles.burgerOpen : ''} />
          <span className={open ? styles.burgerOpen : ''} />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div className={styles.mobile}
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            {links.map(l => (
              <button key={l.id} onClick={() => scrollTo(l.id)}>{l.label}</button>
            ))}
            <a href="mailto:adibahmed@iut-dhaka.edu">Signal Me →</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
