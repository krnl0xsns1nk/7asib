"use client"
import { useState } from 'react';
import { sectionsData } from '@/comps/secCon';
import styles from '@/styles/sections.module.css';

const Sections = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {sectionsData.map((section, index) => (
          <div
            key={index}
            className={styles.card}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className={styles.icon}>{section.icon}</div>
            <h3 className={styles.title}>{section.title}</h3>
            <p className={styles.text}>{section.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sections;
