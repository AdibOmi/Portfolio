import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail } from 'lucide-react';
import { GithubIcon, LinkedInIcon } from './Icons';
import { about } from '../data';
import styles from './Contact.module.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(about.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <p className="section-label">Contact</p>
        <div className={styles.grid}>
          <motion.div className={styles.left}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="tag">Get In Touch</div>
            <h2 className={styles.heading}>Got a role<br />or idea?<br /><span className={styles.hl}>Let's talk.</span></h2>
            <p className={styles.sub}>I'm open to full-stack, backend, or CV engineering roles. Also always happy to chat about building products from scratch.</p>
            <div className={styles.social}>
              <a href={`mailto:${about.email}`} className={styles.socialLink}>
                <Mail size={18} /> {about.email}
              </a>
              <a href={about.github} target="_blank" rel="noreferrer" className={styles.socialLink}>
                <GithubIcon size={18} /> github.com/AdibOmi
              </a>
              <a href={about.linkedin} target="_blank" rel="noreferrer" className={styles.socialLink}>
                <LinkedInIcon size={18} /> LinkedIn Profile
              </a>
            </div>
          </motion.div>

          <motion.div className={styles.right}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
            <div className={styles.card}>
              <div className={styles.emailBox}>
                <span className={styles.emailLabel}>Email</span>
                <span className={styles.emailVal}>{about.email}</span>
                <button className={styles.copyBtn} onClick={copy}>
                  {copied ? '✓ Copied' : 'Copy'}
                </button>
              </div>
              <a href={`mailto:${about.email}?subject=Let's work together&body=Hi Adib,`}
                className={styles.bigBtn}>
                <Send size={18} /> Send a Message
              </a>
              <p className={styles.note}>Or reach me on LinkedIn. I usually reply within a day.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
