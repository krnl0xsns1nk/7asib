"use client"
import React from "react";
import Link from "next/link";
//import { primarylev, secondarylev } from "@/lib/calculator";
import niveaux from "@/lib/calculator";
import styles from "@/styles/levels.module.css"
import {Locale, translations} from "@/lib/locales";
import {notFound, useParams} from "next/navigation";

const Niveau: React.FC = () => {
      const params = useParams();
      const lang  = params.lang as string
       if (!['ar', 'fr'].includes(lang)) {
            notFound();
       }
       const t = translations[lang as Locale] || translations.ar
        return (
                <section className={`${styles.main} animate-on-scroll`}
                >
                <h2>{t.levelsPage.availableLevels}</h2>
                        <p style={{ marginBottom: "30px", color: "#6b7280" }}>
                        {t.levelsPage.description}<br/>{t.levelsPage.instruction}
                        </p>
                        <div style={{ marginBottom: "10px" }}>
                                <h3 className={styles.little}>{t.levelsPage.title}</h3>
                                <ul> {/*     key: [jsx, name]         */}
                                        {Object.entries(niveaux)
                        .map(([key, [j, label]]) => (
                        <li key={key} className={styles.link}>
                                                        <Link
                                                                href={`/${lang}/${key}`}
                                                        >
                                                                {label}
                                                        </Link>
                                                </li>
                                        ))}
                                </ul>
                        </div>
                </section>
        );
};

export default Niveau;
