"use client"
import React from "react";
import Link from "next/link";
import { primarylev, secondarylev } from "@/lib/calculator";
import { niveaux } from "@/lib/calculator";
import styles from "@/styles/levels.module.css"

const Niveau: React.FC = () => {
//    console.log('niveaux:', niveaux);
//    console.log('primarylev:', primarylev);
//    console.log('secondarylev:', secondarylev);
//    console.log('Object.entries(primarylev):', Object.entries(primarylev || {}));

        return (
                <section className={styles.main}
                  // style={{ textAlign: "center", padding: "100px 20px", direction: "ltr" }}
                >
                <h2>Voici les niveaux disponibles</h2>
                        <p style={{ marginBottom: "30px", color: "#6b7280" }}>
                     Bien sûr, n'hésitez pas à nous contacter si votre niveau n'est pas disponible.<br/>
                    [!] Veuillez cliquer sur le nom pour accéder, et non sur la carte.
                        </p>

                        <div style={{ marginBottom: "10px" }}>
                                <h3 className={styles.little}>Niveaux disponibles :</h3>
                                <ul> {/*     key: [jsx, name]         */}
                                        {Object.entries(niveaux)
                        .map(([key, [j, label]]) => (
                        <li key={key} className={styles.link}>
                                                        <Link
                                                                href={`/${key}`}
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
