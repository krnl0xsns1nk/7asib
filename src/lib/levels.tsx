import { Structure, Activiti, TrM, Trs } from "./calculator"
import styles from "@/styles/cal.module.css"
import type { Subject } from "./calculator"
export function TAS3A() {
        const subjecto: Subject[] = [
                { subject: "Français", coef: 1 },
                { subject: "Math", coef: 1 },
                { subject: "Arabe", coef: 1 },
                { subject: "Physique", coef: 1 },
                { subject: "Sciences", coef: 1 },
                { subject: "islamique", coef: 1 },
                { subject: "Sc.Social", coef: 1 },
                { subject: "Sport", coef: 1 },
                { subject: "Technologie", coef: 1 },
                { subject: "Anglais", coef: 1 }
        ];
        const anneLevel: Subject[] = [
                { subject: "Première", coef: 15 },
                { subject: "Deuxième", coef: 15 },
                { subject: "Régional", coef: 40 },
                { subject: "Local", coef: 30 }
        ];
        const sub: Subject[] = [
                { subject: "Français", coef: 3 },
                { subject: "Arabe", coef: 3 },
                { subject: "Math", coef: 3 },
                { subject: "Sciences", coef: 1 },
                { subject: "Physique", coef: 1 },
                { subject: "islamique", coef: 1 },
                { subject: "Sc.Social", coef: 1 }
        ];
        return (
                <>
                    <h2 className={styles.title}>Troisième année préparatoire</h2>
                    <Structure className={styles.structure}>
                    {subjecto.map((ob, idx) => (
                    <Trs
                                                key={idx}
                                                ceof={ob.coef.toString()}
                                                matier={ob.subject}
                                        />
                                ))}
                                <TrM ceof="1" matier="Assiduité" />
                        </Structure>
                        <Activiti H4="Moyenne régionale" anneLevel={sub} title="Matière" />
                    <Activiti H4="Moyenne locale" anneLevel={sub} title="Matière" />
                     <Activiti anneLevel={anneLevel} title="Période" />
                </>
        );
}
export function TCSF() {
        const anneLevel: Subject[] = [
                { subject: "Première", coef: 1 },
                { subject: "Deuxième", coef: 1 }
        ];
        return (
                <>
                        <h2 className={styles.title}>Tronc commun scientifique</h2>
                        <Structure className={styles.structure}>
                                <Trs ceof="4" matier="Math" />
                                <Trs ceof="4" matier="Physique" />
                                <Trs ceof="4" matier="Sciences" />
                                <Trs ceof="3" matier="Français" />
                                <Trs ceof="3" matier="Arabe" />
                                <Trs ceof="3" matier="Anglais" />
                                <Trs ceof="2" matier="islamique" />
                                <Trs ceof="2" matier="His-Geo" />
                                <Trs ceof="2" matier="Philosophie" />
                                <Trs ceof="2" matier="Informatique" />
                                <Trs ceof="2" matier="Sport" />
                                <TrM ceof="1" matier="Assiduité" />
                        </Structure>
                        <Activiti anneLevel={anneLevel} title="Semestre" />
                </>
        );
}
export function TCAL() {
        const anneLevel: Subject[] = [
                { subject: "Première", coef: 1 },
                { subject: "Deuxième", coef: 1 }
        ];
        return (
                <>
                        <h2 className={styles.title}>Tronc commun lettres</h2>
                        <Structure className={styles.structure}>
                                <Trs ceof="4" matier="Arabe" />
                                <Trs ceof="3" matier="Philosophie" />
                                <Trs ceof="3" matier="Français" />
                                <Trs ceof="2" matier="Sciences" />
                                <Trs ceof="2" matier="Math" />
                                <Trs ceof="2" matier="Physique" />
                                <Trs ceof="2" matier="Anglais" />
                                <Trs ceof="1" matier="His-Geo" />
                                <Trs ceof="1" matier="islamique" />
                                <Trs ceof="1" matier="Sport" />
                                <TrM ceof="1" matier="Assiduité" />
                        </Structure>
                        <Sndala999 anneLevel={anneLevel} title="Semestre" />
                </>
        );
}
export function ABAC_SCEXP() {
        const anneLevel: Subject[] = [
                { subject: "Première", coef: 1.5 },
                { subject: "Deuxième", coef: 1.5 },
                { subject: "Régional", coef: 1 }
        ];

        const subjects: Subject[] = [
                { subject: "Français", coef: 4 },
                { subject: "Arabe", coef: 2 },
                { subject: "islamique", coef: 2 },
                { subject: "His-Geo", coef: 2 }
        ];
        return (
                <>
                        <h2 className={styles.title}>
                                1er année bac sciences expérimentales
                        </h2>
                        <Structure className={styles.structure}>
                                <Trs ceof="7" matier="Math" />
                                <Trs ceof="7" matier="Physique" />
                                <Trs ceof="7" matier="Sciences" />
                                <Trs ceof="4" matier="Français" />
                                <Trs ceof="2" matier="Arabe" />
                                <Trs ceof="2" matier="Anglais" />
                                <Trs ceof="2" matier="His-Geo" />
                                <Trs ceof="2" matier="islamique" />
                                <Trs ceof="2" matier="Philosophie" />
                                <Trs ceof="1" matier="Sport" />
                                <TrM ceof="1" matier="Assiduité" />
                        </Structure>
                        <Activiti
                        anneLevel={subjects}
                                H4="Moyenne régionale"
                                title="Matière"
                        />
                        <Activiti anneLevel={anneLevel} title="Période" />
                </>
        );
}
export function ABAC_LSH() {
        const anneLevel: Subject[] = [
                { subject: "Première", coef: 1.5 },
                { subject: "Deuxième", coef: 1.5 },
                { subject: "Régional", coef: 1 }
        ];
        const subjects: Subject[] = [
                { subject: "Français", coef: 4 },
                { subject: "islamique", coef: 2 },
                { subject: "Math", coef: 1 }
        ];
        return (
                <>
                        <h2 className={styles.title}>
                                Première année bac lettres et sciences humaines
                        </h2>
                        <Structure className={styles.structure}>
                                <Trs ceof="4" matier="Arabe" />
                                <Trs ceof="4" matier="Anglais" />
                                <Trs ceof="4" matier="His-Geo" />
                                <Trs ceof="4" matier="Philosophie" />
                                <Trs ceof="4" matier="Français" />
                                <Trs ceof="2" matier="islamique" />
                                <Trs ceof="1" matier="Math" />
                                <Trs ceof="1" matier="Sciences" />
                                <Trs ceof="1" matier="Sport" />
                                <TrM ceof="1" matier="Assiduité" />
                        </Structure>
                        <Activiti
                                anneLevel={subjects}
                                H4="Moyenne régionale"
                                title="Matière"
                        />
                        <Activiti anneLevel={anneLevel} title="Période" />
                </>
        );
}
export function BBAC_PC() {
        const anneLevel: Subject[] = [
                { subject: "Contrôle continu", coef: 1 },
                { subject: "Régional", coef: 1 },
                { subject: "National", coef: 2 }
        ];
        const subjects: Subject[] = [
                { subject: "Math", coef: 7 },
                { subject: "Physique", coef: 7 },
                { subject: "Sciences", coef: 4 },
                { subject: "Philosophie", coef: 3 },
                { subject: "Français", coef: 2 },
                { subject: "Arabe", coef: 2 },
                { subject: "Anglais", coef: 2 }
        ];
        return (
                <>
                        <h2 className={styles.title}>
                                Deuxième année bac sciences physiques
                        </h2>
                        <Structure className={styles.structure}>
                                <Trs ceof="7" matier="Math" />
                                <Trs ceof="7" matier="Physique" />
                                <Trs ceof="7" matier="Sciences" />
                                <Trs ceof="3" matier="Philosophie" />
                                <Trs ceof="2" matier="Français" />
                                <Trs ceof="2" matier="Arabe" />
                                <Trs ceof="2" matier="Anglais" />
                                <Trs ceof="1" matier="Scien" />
                                <Trs ceof="1" matier="islamique" />
                                <Trs ceof="1" matier="Sport" />
                                <TrM ceof="1" matier="Assiduité" />
                        </Structure>
                        <Activiti
                                anneLevel={subjects}
                                H4="Moyenne nationale"
                                title="Matière"
                        />
                        <Activiti anneLevel={anneLevel} title="Période" />
                </>
        );
}
export function BBAC_SH() {
        const anneLevel: Subject[] = [
                { subject: "Contrôle continu", coef: 1 },
                { subject: "Régional", coef: 1 },
                { subject: "National", coef: 2 }
        ];

        const subjects: Subject[] = [
                { subject: "Philosophie", coef: 4 },
                { subject: "Arabe", coef: 4 },
                { subject: "His-Geo", coef: 4 },
                { subject: "Français", coef: 3 }
        ];

        return (
                <>
                        <h2 className={styles.title}>
                                Deuxième année bac sciences humaines
                        </h2>
                        <Structure className={styles.structure}>
                                <Trs ceof="4" matier="Arabe" />
                                <Trs ceof="4" matier="Philosophie" />
                                <Trs ceof="4" matier="His-Geo" />
                                <Trs ceof="2" matier="Français" />
                                <Trs ceof="2" matier="Anglais" />
                                <Trs ceof="1" matier="Math" />
                                <Trs ceof="1" matier="Sciences" />
                                <Trs ceof="1" matier="islamique" />
                                <Trs ceof="1" matier="Sport" />
                                <TrM ceof="1" matier="Assiduité" />
                        </Structure>
                        <Activiti
                                anneLevel={subjects}
                                H4="Moyenne nationale"
                                title="Matière"
                        />
                        <Activiti anneLevel={anneLevel} title="Période" />
                </>
        );
}
export function AAC() {
     const anneLevel: Subject[] = [
         { subject: "Première", coef: 1 },
         { subject: "Deuxième", coef: 1 }
];
        return (
                <>
                     <h2 className={styles.title}>
                       Première année collège
                    </h2>
                    <Structure className={styles.structure}>
                            <Trs ceof="5" matier="Math" />
                            <Trs ceof="5" matier="Français" />
                            <Trs ceof="5" matier="Arabe" />
                            <Trs ceof="3" matier="Sc. Social" />
                            <Trs ceof="3" matier="Sciences" />
                            <Trs ceof="2" matier="Physique" />
                            <Trs ceof="2" matier="islamique" />
                            <Trs ceof="2" matier="Sport" />
                            <Trs ceof="1" matier="Anglais" />
                            <TrM ceof="1" matier="Assiduité" />
                </Structure>
                <Activiti anneLevel={anneLevel} title="Période" />
                </>
        );
}
export function BAC() {
     const anneLevel: Subject[] = [
         { subject: "Première", coef: 1 },
         { subject: "Deuxième", coef: 1 }
];
        return (
                <>
                     <h2 className={styles.title}>
                       Deuxième année collège
                    </h2>
                    <Structure className={styles.structure}>
                            <Trs ceof="5" matier="Math" />
                            <Trs ceof="5" matier="Français" />
                            <Trs ceof="5" matier="Arabe" />
                            <Trs ceof="3" matier="Sc. Social" />
                            <Trs ceof="3" matier="Sciences" />
                            <Trs ceof="2" matier="Physique" />
                            <Trs ceof="2" matier="islamique" />
                            <Trs ceof="2" matier="Technologie" />
                            <Trs ceof="2" matier="Sport" />
                            <Trs ceof="1" matier="Anglais" />
                            <TrM ceof="1" matier="Assiduité" />
                </Structure>
                <Activiti anneLevel={anneLevel} title="Période" />
                </>
        );
}
