"use client"
import Link from "next/link";
// import { useState } from 'react';
import { sectionsData } from '@/comps/secCon';
import styles from '@/styles/sections.module.css';
import Writer from "@/lib/Writer";
const Sections = () => {
    let pwaSecStatus: boolean = false;
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {sectionsData.map((section, index) => { 
            pwaSecStatus = section.call[0].text.trim() == 'Installer' ? true : false;
            return (
          <div
            key={index}
            className={styles.card}
            id={pwaSecStatus ? 'pwa' : ''}
          >
            <div className={styles.icon}>{section.icon}</div>
            <h3 className={styles.title}>
                <Writer text={section.title} />
            </h3>
            <p className={styles.text}>{section.text}</p>
            <div className={styles.father}>
  
            { section.call[1] ? 
                (<Link href={section.call[1].url} >
                 <button className={styles.secbtn}>
                 {section.call[1].text} 
                 {section.call[1].icon ? section.call[1].icon : null}
                    </button>
                </Link>) : null}

            <Link href={section.call[0].url} download={pwaSecStatus}>
              <button className={styles.mainbtn}>
                  {section.call[0].text}
                  {section.call[0].icon}
            </button>
            </Link>


            </div>
          </div>
        )})}
      </div>
    </div>
  );
};

export default Sections;
