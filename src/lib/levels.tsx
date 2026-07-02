import { Structure, Activiti, TrM, Trs } from "./calculator"
import styles from "@/styles/cal.module.css"
import type { Subject } from "./calculator"
import { Locale, translations } from "./locales";

/* ================= TAS3A ================= */

export function TAS3A({ lang = "fr" }: { lang: string }) {
const t = translations[lang as Locale] || translations.fr

const subjecto: Subject[] = [
{ subject: t.subjects.fr, ceof: 1 },
{ subject: t.subjects.math, ceof: 1 },
{ subject: t.subjects.ar, ceof: 1 },
{ subject: t.subjects.phy, ceof: 1 },
{ subject: t.subjects.svt, ceof: 1},
{ subject: t.subjects.soc, ceof: 1 },
{ subject: t.subjects.isl, ceof: 1 },
{ subject: t.subjects.sport, ceof: 1 },
{ subject: t.subjects.tech, ceof: 1 },
{ subject: t.subjects.eng, ceof: 1 }
];

const anneLevel: Subject[] = [
{ subject: t.periods.p1, ceof: 15 },
{ subject: t.periods.p2, ceof: 15 },
{ subject: t.periods.regional, ceof: 40 },
{ subject: t.periods.local, ceof: 30 }
];

const sub: Subject[] = [
{ subject: t.subjects.fr, ceof: 3 },
{ subject: t.subjects.ar, ceof: 3 },
{ subject: t.subjects.math, ceof: 3 },
{ subject: t.subjects.svt, ceof: 1 },
{ subject: t.subjects.phy, ceof: 1 },
{ subject: t.subjects.isl, ceof: 1 },
{ subject: t.subjects.soc, ceof: 1 }
];

return (
<>
<h2 className={styles.title}>{t.niveaux.tas3a}</h2>
<Structure className={styles.structure} lang={lang}>
{subjecto.map((ob, idx) => (
<Trs key={idx} ceof={ob.ceof.toString()} matier={ob.subject} />
))}
<TrM ceof="1" matier={t.subjects.assid} />
</Structure>
<Activiti H4={t.labels.avg_reg} anneLevel={sub} lang={lang} title={t.labels.subject} />
<Activiti H4={t.labels.avg_loc} anneLevel={sub} lang={lang} title={t.labels.subject} />
<Activiti anneLevel={anneLevel} lang={lang} title={t.labels.period} />
</>
);
}

/* ================= TCSF ================= */

export function TCSF({ lang = "fr" }: { lang: string }) {
const t = translations[lang as Locale] || translations.fr

const anneLevel: Subject[] = [
{ subject: t.periods.p1, ceof: 1 },
{ subject: t.periods.p2, ceof: 1 }
];

return (
<>
<h2 className={styles.title}>{t.niveaux.tcs}</h2>
<Structure className={styles.structure} lang={lang}>
<Trs ceof="4" matier={t.subjects.math} />
<Trs ceof="4" matier={t.subjects.phy} />
<Trs ceof="4" matier={t.subjects.svt} />
<Trs ceof="3" matier={t.subjects.fr} />
<Trs ceof="3" matier={t.subjects.ar} />
<Trs ceof="3" matier={t.subjects.eng} />
<Trs ceof="2" matier={t.subjects.isl} />
<Trs ceof="2" matier={t.subjects.hisgeo} />
<Trs ceof="2" matier={t.subjects.phil} />
<Trs ceof="2" matier={t.subjects.info} />
<Trs ceof="2" matier={t.subjects.sport} />
<TrM ceof="1" matier={t.subjects.assid} />
</Structure>
<Activiti anneLevel={anneLevel} title={t.periods.sem} lang={lang} />
</>
);
}

/* ================= TCAL ================= */

export function TCAL({ lang = "fr" }: { lang: string }) {
const t = translations[lang as Locale] || translations.fr

const anneLevel: Subject[] = [
{ subject: t.periods.p1, ceof: 1 },
{ subject: t.periods.p2, ceof: 1 }
];

return (
<>
<h2 className={styles.title}>{t.niveaux.tcl}</h2>
<Structure className={styles.structure} lang={lang}>
<Trs ceof="4" matier={t.subjects.ar} />
<Trs ceof="3" matier={t.subjects.phil} />
<Trs ceof="3" matier={t.subjects.fr} />
<Trs ceof="2" matier={t.subjects.svt} />
<Trs ceof="2" matier={t.subjects.math} />
<Trs ceof="2" matier={t.subjects.phy} />
<Trs ceof="2" matier={t.subjects.eng} />
<Trs ceof="1" matier={t.subjects.hisgeo} />
<Trs ceof="1" matier={t.subjects.isl} />
<Trs ceof="1" matier={t.subjects.sport} />
<TrM ceof="1" matier={t.subjects.assid} />
</Structure>
<Activiti anneLevel={anneLevel} title={t.periods.sem} lang={lang}/>
</>
);
}

/* ================= ABAC_SCEXP ================= */

export function ABAC_SCEXP({ lang = "fr" }: { lang: string }) {
const t = translations[lang as Locale] || translations.fr

const anneLevel: Subject[] = [
{ subject: t.periods.p1, ceof: 1.5 },
{ subject: t.periods.p2, ceof: 1.5 },
{ subject: t.periods.regional, ceof: 1 }
];

const subjects: Subject[] = [
{ subject: t.subjects.fr, ceof: 4 },
{ subject: t.subjects.ar, ceof: 2 },
{ subject: t.subjects.isl, ceof: 2 },
{ subject: t.subjects.hisgeo, ceof: 2 }
];

return (
<>
<h2 className={styles.title}>{t.niveaux.bac1_sc}</h2>
<Structure className={styles.structure} lang={lang}>
<Trs ceof="7" matier={t.subjects.math} />
<Trs ceof="7" matier={t.subjects.phy} />
<Trs ceof="7" matier={t.subjects.svt} />
<Trs ceof="4" matier={t.subjects.fr} />
<Trs ceof="2" matier={t.subjects.ar} />
<Trs ceof="2" matier={t.subjects.eng} />
<Trs ceof="2" matier={t.subjects.hisgeo} />
<Trs ceof="2" matier={t.subjects.isl} />
<Trs ceof="2" matier={t.subjects.phil} />
<Trs ceof="1" matier={t.subjects.sport} />
<TrM ceof="1" matier={t.subjects.assid} />
</Structure>
<Activiti anneLevel={subjects} H4={t.labels.avg_reg} title={t.labels.subject} lang={lang}/>
<Activiti anneLevel={anneLevel} title={t.labels.period} lang={lang}/>
</>
);
}

/* ================= ABAC_LSH ================= */

export function ABAC_LSH({ lang = "fr" }: { lang: string }) {
const t = translations[lang as Locale] || translations.fr

const anneLevel: Subject[] = [
{ subject: t.periods.p1, ceof: 1.5 },
{ subject: t.periods.p2, ceof: 1.5 },
{ subject: t.periods.regional, ceof: 1 }
];

const subjects: Subject[] = [
{ subject: t.subjects.fr, ceof: 4 },
{ subject: t.subjects.isl, ceof: 2 },
{ subject: t.subjects.math, ceof: 1 }
];

return (
<>
<h2 className={styles.title}>{t.niveaux.bac1_lsh}</h2>
<Structure className={styles.structure} lang={lang}>
<Trs ceof="4" matier={t.subjects.ar} />
<Trs ceof="4" matier={t.subjects.eng} />
<Trs ceof="4" matier={t.subjects.hisgeo} />
<Trs ceof="4" matier={t.subjects.phil} />
<Trs ceof="4" matier={t.subjects.fr} />
<Trs ceof="2" matier={t.subjects.isl} />
<Trs ceof="1" matier={t.subjects.math} />
<Trs ceof="1" matier={t.subjects.svt} />
<Trs ceof="1" matier={t.subjects.sport} />
<TrM ceof="1" matier={t.subjects.assid} />
</Structure>
<Activiti anneLevel={subjects} H4={t.labels.avg_reg} lang={lang} title={t.labels.subject} />
<Activiti anneLevel={anneLevel} title={t.labels.period} lang={lang} />
</>
);
}

/* ================= BBAC_PC ================= */

export function BBAC_PC({ lang = "fr" }: { lang: string }) {
const t = translations[lang as Locale] || translations.fr

const anneLevel: Subject[] = [
{ subject: t.periods.cc, ceof: 1 },
{ subject: t.periods.regional, ceof: 1 },
{ subject: t.periods.national, ceof: 2 }
];

const subjects: Subject[] = [
{ subject: t.subjects.math, ceof: 7 },
{ subject: t.subjects.phy, ceof: 7 },
{ subject: t.subjects.svt, ceof: 4 },
{ subject: t.subjects.phil, ceof: 3 },
{ subject: t.subjects.fr, ceof: 2 },
{ subject: t.subjects.ar, ceof: 2 },
{ subject: t.subjects.eng, ceof: 2 }
];

return (
<>
<h2 className={styles.title}>{t.niveaux.bac2_pc}</h2>
<Structure className={styles.structure} lang={lang}>
<Trs ceof="7" matier={t.subjects.math} />
<Trs ceof="7" matier={t.subjects.phy} />
<Trs ceof="7" matier={t.subjects.svt} />
<Trs ceof="3" matier={t.subjects.phil} />
<Trs ceof="2" matier={t.subjects.fr} />
<Trs ceof="2" matier={t.subjects.ar} />
<Trs ceof="2" matier={t.subjects.eng} />
<Trs ceof="1" matier={t.subjects.isl} />
<Trs ceof="1" matier={t.subjects.sport} />
<TrM ceof="1" matier={t.subjects.assid} />
</Structure>
<Activiti anneLevel={subjects} H4={t.labels.avg_nat} lang={lang} title={t.labels.subject} />
<Activiti anneLevel={anneLevel} title={t.labels.period} lang={lang} />
</>
);
}

/* ================= BBAC_SH ================= */

export function BBAC_SH({ lang = "fr" }: { lang: string }) {
const t = translations[lang as Locale] || translations.fr

const anneLevel: Subject[] = [
{ subject: t.periods.cc, ceof: 1 },
{ subject: t.periods.regional, ceof: 1 },
{ subject: t.periods.national, ceof: 2 }
];

const subjects: Subject[] = [
{ subject: t.subjects.phil, ceof: 4 },
{ subject: t.subjects.ar, ceof: 4 },
{ subject: t.subjects.hisgeo, ceof: 4 },
{ subject: t.subjects.fr, ceof: 3 }
];

return (
<>
<h2 className={styles.title}>{t.niveaux.bac2_sh}</h2>
<Structure className={styles.structure} lang={lang}>
<Trs ceof="4" matier={t.subjects.ar} />
<Trs ceof="4" matier={t.subjects.phil} />
<Trs ceof="4" matier={t.subjects.hisgeo} />
<Trs ceof="2" matier={t.subjects.fr} />
<Trs ceof="2" matier={t.subjects.eng} />
<Trs ceof="1" matier={t.subjects.math} />
<Trs ceof="1" matier={t.subjects.svt} />
<Trs ceof="1" matier={t.subjects.isl} />
<Trs ceof="1" matier={t.subjects.sport} />
<TrM ceof="1" matier={t.subjects.assid} />
</Structure>
<Activiti anneLevel={subjects} H4={t.labels.avg_nat} title={t.labels.subject} />
<Activiti anneLevel={anneLevel} title={t.labels.period} lang={lang} />
</>
);
}

/* ================= AAC ================= */

export function AAC({ lang = "fr" }: { lang: string }) {
const t = translations[lang as Locale] || translations.fr

const anneLevel: Subject[] = [
{ subject: t.periods.p1, ceof: 1 },
{ subject: t.periods.p2, ceof: 1 }
];

return (
<>
<h2 className={styles.title}>{t.niveaux.col1}</h2>
<Structure className={styles.structure} lang={lang}>
<Trs ceof="5" matier={t.subjects.math} />
<Trs ceof="5" matier={t.subjects.fr} />
<Trs ceof="5" matier={t.subjects.ar} />
<Trs ceof="3" matier={t.subjects.soc} />
<Trs ceof="3" matier={t.subjects.svt} />
<Trs ceof="2" matier={t.subjects.phy} />
<Trs ceof="2" matier={t.subjects.isl} />
<Trs ceof="2" matier={t.subjects.sport} />
<Trs ceof="1" matier={t.subjects.eng} />
<TrM ceof="1" matier={t.subjects.assid} />
</Structure>
<Activiti anneLevel={anneLevel} title={t.labels.period} lang={lang}/>
</>
);
}

/* ================= BAC ================= */

export function BAC({ lang = "fr" }: { lang: string }) {
const t = translations[lang as Locale] || translations.fr

const anneLevel: Subject[] = [
{ subject: t.periods.p1, ceof: 1 },
{ subject: t.periods.p2, ceof: 1 }
];

return (
<>
<h2 className={styles.title}>{t.niveaux.col2}</h2>
<Structure className={styles.structure} lang={lang}>
<Trs ceof="5" matier={t.subjects.math} />
<Trs ceof="5" matier={t.subjects.fr} />
<Trs ceof="5" matier={t.subjects.ar} />
<Trs ceof="3" matier={t.subjects.soc} />
<Trs ceof="3" matier={t.subjects.svt} />
<Trs ceof="2" matier={t.subjects.phy} />
<Trs ceof="2" matier={t.subjects.isl} />
<Trs ceof="2" matier={t.subjects.tech} />
<Trs ceof="2" matier={t.subjects.sport} />
<Trs ceof="1" matier={t.subjects.eng} />
<TrM ceof="1" matier={t.subjects.assid} />
</Structure>
<Activiti anneLevel={anneLevel} title={t.labels.period} lang={lang}/>
</>
);
}
