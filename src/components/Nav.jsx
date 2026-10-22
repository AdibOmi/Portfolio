import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { about } from '../data';
import styles from './Nav.module.css';

const links = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
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
          Adib
        </a>
        <ul className={styles.links}>
          {links.map(l => (
            <li key={l.id}>
              <button onClick={() => scrollTo(l.id)}>{l.label}</button>
            </li>
          ))}
          <li>
            <a href={about.resume} target="_blank" rel="noreferrer">Resume</a>
          </li>
        </ul>
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
            <a href={about.resume} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Resume</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
