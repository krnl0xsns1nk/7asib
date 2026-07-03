import { GradeStructure, AnnualCalculator, RegularSubjectRow, SpecialSubjectRow } from "./calculator"
import styles from "@/styles/cal.module.css"
import type { Subject } from "./calculator"
import { Locale, translations } from "./locales";

/* ================= TAS3A (3rd Year Middle School) ================= */

export function TAS3A({ lang = "fr" }: { lang: string }) {
const t = translations[lang as Locale] || translations.fr
/*
const regularSubjects: Subject[] = [
{ subject: t.subjects.fr, coefficient: 1 },
{ subject: t.subjects.math, coefficient: 1 },
{ subject: t.subjects.ar, coefficient: 1 },
{ subject: t.subjects.phy, coefficient: 1 },
{ subject: t.subjects.svt, coefficient: 1},
{ subject: t.subjects.soc, coefficient: 1 },
{ subject: t.subjects.isl, coefficient: 1 },
{ subject: t.subjects.sport, coefficient: 1 },
{ subject: t.subjects.tech, coefficient: 1 },
{ subject: t.subjects.eng, coefficient: 1 }
];
*/
const gradeWeights: Subject[] = [
{ subject: t.periods.p1, coefficient: 15 },
{ subject: t.periods.p2, coefficient: 15 },
{ subject: t.periods.regional, coefficient: 40 },
{ subject: t.periods.local, coefficient: 30 }
];

const regionalLocalSubjects: Subject[] = [
{ subject: t.subjects.fr, coefficient: 3 },
{ subject: t.subjects.ar, coefficient: 3 },
{ subject: t.subjects.math, coefficient: 3 },
{ subject: t.subjects.svt, coefficient: 1 },
{ subject: t.subjects.phy, coefficient: 1 },
{ subject: t.subjects.isl, coefficient: 1 },
{ subject: t.subjects.soc, coefficient: 1 }
];

return (
<>
<h2 className={styles.title}>{t.niveaux.tas3a}</h2>
<GradeStructure className={styles.structure} lang={lang}>


  <RegularSubjectRow coefficient="1" subject={t.subjects.fr} />
  <RegularSubjectRow coefficient="1" subject={t.subjects.math} />
  <RegularSubjectRow coefficient="1" subject={t.subjects.ar} />
  <RegularSubjectRow coefficient="1" subject={t.subjects.phy} />
  <RegularSubjectRow coefficient="1" subject={t.subjects.svt} />
  <RegularSubjectRow coefficient="1" subject={t.subjects.soc} />
  <RegularSubjectRow coefficient="1" subject={t.subjects.isl} />
  <RegularSubjectRow coefficient="1" subject={t.subjects.sport} />
  <RegularSubjectRow coefficient="1" subject={t.subjects.tech} />
  <RegularSubjectRow coefficient="1" subject={t.subjects.eng} />
{/*regularSubjects.map((item, idx) => (
<RegularSubjectRow key={idx} coefficient={item.coefficient.toString()} subject={item.subject} />
))*/}
<SpecialSubjectRow coefficient="1" subject={t.subjects.assid} />
</GradeStructure>
<AnnualCalculator H4={t.labels.avg_reg} gradeWeights={regionalLocalSubjects} lang={lang} title={t.labels.subject} />
<AnnualCalculator H4={t.labels.avg_loc} gradeWeights={regionalLocalSubjects} lang={lang} title={t.labels.subject} />
<AnnualCalculator gradeWeights={gradeWeights} lang={lang} title={t.labels.period} />
</>
);
}

/* ================= TCSF (Common Trunk Science-French) ================= */

export function TCSF({ lang = "fr" }: { lang: string }) {
const t = translations[lang as Locale] || translations.fr

const gradeWeights: Subject[] = [
{ subject: t.periods.p1, coefficient: 1 },
{ subject: t.periods.p2, coefficient: 1 }
];

return (
<>
<h2 className={styles.title}>{t.niveaux.tcs}</h2>
<GradeStructure className={styles.structure} lang={lang}>
<RegularSubjectRow coefficient="4" subject={t.subjects.math} />
<RegularSubjectRow coefficient="4" subject={t.subjects.phy} />
<RegularSubjectRow coefficient="4" subject={t.subjects.svt} />
<RegularSubjectRow coefficient="3" subject={t.subjects.fr} />
<RegularSubjectRow coefficient="3" subject={t.subjects.ar} />
<RegularSubjectRow coefficient="3" subject={t.subjects.eng} />
<RegularSubjectRow coefficient="2" subject={t.subjects.isl} />
<RegularSubjectRow coefficient="2" subject={t.subjects.hisgeo} />
<RegularSubjectRow coefficient="2" subject={t.subjects.phil} />
<RegularSubjectRow coefficient="2" subject={t.subjects.info} />
<RegularSubjectRow coefficient="2" subject={t.subjects.sport} />
<SpecialSubjectRow coefficient="1" subject={t.subjects.assid} />
</GradeStructure>
<AnnualCalculator gradeWeights={gradeWeights} title={t.periods.sem} lang={lang} />
</>
);
}

/* ================= TCAL (Common Trunk Arabic-Letters) ================= */

export function TCAL({ lang = "fr" }: { lang: string }) {
const t = translations[lang as Locale] || translations.fr

const gradeWeights: Subject[] = [
{ subject: t.periods.p1, coefficient: 1 },
{ subject: t.periods.p2, coefficient: 1 }
];

return (
<>
<h2 className={styles.title}>{t.niveaux.tcl}</h2>
<GradeStructure className={styles.structure} lang={lang}>
<RegularSubjectRow coefficient="4" subject={t.subjects.ar} />
<RegularSubjectRow coefficient="3" subject={t.subjects.phil} />
<RegularSubjectRow coefficient="3" subject={t.subjects.fr} />
<RegularSubjectRow coefficient="2" subject={t.subjects.svt} />
<RegularSubjectRow coefficient="2" subject={t.subjects.math} />
<RegularSubjectRow coefficient="2" subject={t.subjects.phy} />
<RegularSubjectRow coefficient="2" subject={t.subjects.eng} />
<RegularSubjectRow coefficient="1" subject={t.subjects.hisgeo} />
<RegularSubjectRow coefficient="1" subject={t.subjects.isl} />
<RegularSubjectRow coefficient="1" subject={t.subjects.sport} />
<SpecialSubjectRow coefficient="1" subject={t.subjects.assid} />
</GradeStructure>
<AnnualCalculator gradeWeights={gradeWeights} title={t.periods.sem} lang={lang}/>
</>
);
}

/* ================= ABAC_SCEXP (1st Year Baccalaureate - Experimental Sciences) ================= */

export function ABAC_SCEXP({ lang = "fr" }: { lang: string }) {
const t = translations[lang as Locale] || translations.fr

const gradeWeights: Subject[] = [
{ subject: t.periods.p1, coefficient: 1.5 },
{ subject: t.periods.p2, coefficient: 1.5 },
{ subject: t.periods.regional, coefficient: 1 }
];

const regionalSubjects: Subject[] = [
{ subject: t.subjects.fr, coefficient: 4 },
{ subject: t.subjects.ar, coefficient: 2 },
{ subject: t.subjects.isl, coefficient: 2 },
{ subject: t.subjects.hisgeo, coefficient: 2 }
];

return (
<>
<h2 className={styles.title}>{t.niveaux.bac1_sc}</h2>
<GradeStructure className={styles.structure} lang={lang}>
<RegularSubjectRow coefficient="7" subject={t.subjects.math} />
<RegularSubjectRow coefficient="7" subject={t.subjects.phy} />
<RegularSubjectRow coefficient="7" subject={t.subjects.svt} />
<RegularSubjectRow coefficient="4" subject={t.subjects.fr} />
<RegularSubjectRow coefficient="2" subject={t.subjects.ar} />
<RegularSubjectRow coefficient="2" subject={t.subjects.eng} />
<RegularSubjectRow coefficient="2" subject={t.subjects.hisgeo} />
<RegularSubjectRow coefficient="2" subject={t.subjects.isl} />
<RegularSubjectRow coefficient="2" subject={t.subjects.phil} />
<RegularSubjectRow coefficient="1" subject={t.subjects.sport} />
<SpecialSubjectRow coefficient="1" subject={t.subjects.assid} />
</GradeStructure>
<AnnualCalculator gradeWeights={regionalSubjects} H4={t.labels.avg_reg} title={t.labels.subject} lang={lang}/>
<AnnualCalculator gradeWeights={gradeWeights} title={t.labels.period} lang={lang}/>
</>
);
}

/* ================= ABAC_LSH (1st Year Baccalaureate - Letters & Humanities) ================= */

export function ABAC_LSH({ lang = "fr" }: { lang: string }) {
const t = translations[lang as Locale] || translations.fr

const gradeWeights: Subject[] = [
{ subject: t.periods.p1, coefficient: 1.5 },
{ subject: t.periods.p2, coefficient: 1.5 },
{ subject: t.periods.regional, coefficient: 1 }
];

const regionalSubjects: Subject[] = [
{ subject: t.subjects.fr, coefficient: 4 },
{ subject: t.subjects.isl, coefficient: 2 },
{ subject: t.subjects.math, coefficient: 1 }
];

return (
<>
<h2 className={styles.title}>{t.niveaux.bac1_lsh}</h2>
<GradeStructure className={styles.structure} lang={lang}>
<RegularSubjectRow coefficient="4" subject={t.subjects.ar} />
<RegularSubjectRow coefficient="4" subject={t.subjects.eng} />
<RegularSubjectRow coefficient="4" subject={t.subjects.hisgeo} />
<RegularSubjectRow coefficient="4" subject={t.subjects.phil} />
<RegularSubjectRow coefficient="4" subject={t.subjects.fr} />
<RegularSubjectRow coefficient="2" subject={t.subjects.isl} />
<RegularSubjectRow coefficient="1" subject={t.subjects.math} />
<RegularSubjectRow coefficient="1" subject={t.subjects.svt} />
<RegularSubjectRow coefficient="1" subject={t.subjects.sport} />
<SpecialSubjectRow coefficient="1" subject={t.subjects.assid} />
</GradeStructure>
<AnnualCalculator gradeWeights={regionalSubjects} H4={t.labels.avg_reg} lang={lang} title={t.labels.subject} />
<AnnualCalculator gradeWeights={gradeWeights} title={t.labels.period} lang={lang} />
</>
);
}

/* ================= BBAC_PC (2nd Year Baccalaureate - Physical Chemistry) ================= */

export function BBAC_PC({ lang = "fr" }: { lang: string }) {
const t = translations[lang as Locale] || translations.fr

const gradeWeights: Subject[] = [
{ subject: t.periods.cc, coefficient: 1 },
{ subject: t.periods.regional, coefficient: 1 },
{ subject: t.periods.national, coefficient: 2 }
];

const nationalSubjects: Subject[] = [
{ subject: t.subjects.math, coefficient: 7 },
{ subject: t.subjects.phy, coefficient: 7 },
{ subject: t.subjects.svt, coefficient: 4 },
{ subject: t.subjects.phil, coefficient: 3 },
{ subject: t.subjects.fr, coefficient: 2 },
{ subject: t.subjects.ar, coefficient: 2 },
{ subject: t.subjects.eng, coefficient: 2 }
];

return (
<>
<h2 className={styles.title}>{t.niveaux.bac2_pc}</h2>
<GradeStructure className={styles.structure} lang={lang}>
<RegularSubjectRow coefficient="7" subject={t.subjects.math} />
<RegularSubjectRow coefficient="7" subject={t.subjects.phy} />
<RegularSubjectRow coefficient="7" subject={t.subjects.svt} />
<RegularSubjectRow coefficient="3" subject={t.subjects.phil} />
<RegularSubjectRow coefficient="2" subject={t.subjects.fr} />
<RegularSubjectRow coefficient="2" subject={t.subjects.ar} />
<RegularSubjectRow coefficient="2" subject={t.subjects.eng} />
<RegularSubjectRow coefficient="1" subject={t.subjects.isl} />
<RegularSubjectRow coefficient="1" subject={t.subjects.sport} />
<SpecialSubjectRow coefficient="1" subject={t.subjects.assid} />
</GradeStructure>
<AnnualCalculator gradeWeights={nationalSubjects} H4={t.labels.avg_nat} lang={lang} title={t.labels.subject} />
<AnnualCalculator gradeWeights={gradeWeights} title={t.labels.period} lang={lang} />
</>
);
}

/* ================= BBAC_SH (2nd Year Baccalaureate - Humanities) ================= */

export function BBAC_SH({ lang = "fr" }: { lang: string }) {
const t = translations[lang as Locale] || translations.fr

const gradeWeights: Subject[] = [
{ subject: t.periods.cc, coefficient: 1 },
{ subject: t.periods.regional, coefficient: 1 },
{ subject: t.periods.national, coefficient: 2 }
];

const nationalSubjects: Subject[] = [
{ subject: t.subjects.phil, coefficient: 4 },
{ subject: t.subjects.ar, coefficient: 4 },
{ subject: t.subjects.hisgeo, coefficient: 4 },
{ subject: t.subjects.fr, coefficient: 3 }
];

return (
<>
<h2 className={styles.title}>{t.niveaux.bac2_sh}</h2>
<GradeStructure className={styles.structure} lang={lang}>
<RegularSubjectRow coefficient="4" subject={t.subjects.ar} />
<RegularSubjectRow coefficient="4" subject={t.subjects.phil} />
<RegularSubjectRow coefficient="4" subject={t.subjects.hisgeo} />
<RegularSubjectRow coefficient="2" subject={t.subjects.fr} />
<RegularSubjectRow coefficient="2" subject={t.subjects.eng} />
<RegularSubjectRow coefficient="1" subject={t.subjects.math} />
<RegularSubjectRow coefficient="1" subject={t.subjects.svt} />
<RegularSubjectRow coefficient="1" subject={t.subjects.isl} />
<RegularSubjectRow coefficient="1" subject={t.subjects.sport} />
<SpecialSubjectRow coefficient="1" subject={t.subjects.assid} />
</GradeStructure>
<AnnualCalculator gradeWeights={nationalSubjects} H4={t.labels.avg_nat} title={t.labels.subject} />
<AnnualCalculator gradeWeights={gradeWeights} title={t.labels.period} lang={lang} />
</>
);
}

/* ================= AAC (1st Year Middle School) ================= */

export function AAC({ lang = "fr" }: { lang: string }) {
const t = translations[lang as Locale] || translations.fr

const gradeWeights: Subject[] = [
{ subject: t.periods.p1, coefficient: 1 },
{ subject: t.periods.p2, coefficient: 1 }
];

return (
<>
<h2 className={styles.title}>{t.niveaux.col1}</h2>
<GradeStructure className={styles.structure} lang={lang}>
<RegularSubjectRow coefficient="5" subject={t.subjects.math} />
<RegularSubjectRow coefficient="5" subject={t.subjects.fr} />
<RegularSubjectRow coefficient="5" subject={t.subjects.ar} />
<RegularSubjectRow coefficient="3" subject={t.subjects.soc} />
<RegularSubjectRow coefficient="3" subject={t.subjects.svt} />
<RegularSubjectRow coefficient="2" subject={t.subjects.phy} />
<RegularSubjectRow coefficient="2" subject={t.subjects.isl} />
<RegularSubjectRow coefficient="2" subject={t.subjects.sport} />
<RegularSubjectRow coefficient="1" subject={t.subjects.eng} />
<SpecialSubjectRow coefficient="1" subject={t.subjects.assid} />
</GradeStructure>
<AnnualCalculator gradeWeights={gradeWeights} title={t.labels.period} lang={lang}/>
</>
);
}

/* ================= BAC (2nd Year Middle School) ================= */

export function BAC({ lang = "fr" }: { lang: string }) {
const t = translations[lang as Locale] || translations.fr

const gradeWeights: Subject[] = [
{ subject: t.periods.p1, coefficient: 1 },
{ subject: t.periods.p2, coefficient: 1 }
];

return (
<>
<h2 className={styles.title}>{t.niveaux.col2}</h2>
<GradeStructure className={styles.structure} lang={lang}>
<RegularSubjectRow coefficient="5" subject={t.subjects.math} />
<RegularSubjectRow coefficient="5" subject={t.subjects.fr} />
<RegularSubjectRow coefficient="5" subject={t.subjects.ar} />
<RegularSubjectRow coefficient="3" subject={t.subjects.soc} />
<RegularSubjectRow coefficient="3" subject={t.subjects.svt} />
<RegularSubjectRow coefficient="2" subject={t.subjects.phy} />
<RegularSubjectRow coefficient="2" subject={t.subjects.isl} />
<RegularSubjectRow coefficient="2" subject={t.subjects.tech} />
<RegularSubjectRow coefficient="2" subject={t.subjects.sport} />
<RegularSubjectRow coefficient="1" subject={t.subjects.eng} />
<SpecialSubjectRow coefficient="1" subject={t.subjects.assid} />
</GradeStructure>
<AnnualCalculator gradeWeights={gradeWeights} title={t.labels.period} lang={lang}/>
</>
);
}

