"use client";
import { useState, ReactNode, cloneElement, isValidElement } from "react";
import { TAS3A, TCSF, TCAL, ABAC_SCEXP, ABAC_LSH, BBAC_PC, BBAC_SH, AAC, BAC} from "./levels"
import styles from "@/styles/cal.module.css";
import {Locale, translations} from "./locales/index";

export interface Subject {
    subject: string;
    coefficient: number;
}

interface GradeData {
    coefficient: number;
    average: number | null;
}

interface GradeStructureProps {
    children: ReactNode;
    className?: string;
    lang?: string
}

interface SubjectRowProps {
    subject: string;
    coefficient: string;
    updateRow?: (subject: string, coefficient: number, average: number | null) => void;
}

interface AnnualCalculatorProps {
    gradeWeights: Subject[];
    title: string;
    H4?: string;
    lang?: string;
}

interface LevelRegistry {
    [key: string]: [React.ComponentType<{ lang: string }>, string | null | undefined];
}

function getTranslations(lang: string) {
    return translations[lang as Locale] || translations.fr;
}

export function GradeStructure({ children, className, lang = "fr" }: GradeStructureProps) {
    const t = getTranslations(lang);
    const [grades, setGrades] = useState<Record<string, GradeData>>({});
    const [finalGrade, setFinalGrade] = useState<number | null>(null);

    const updateRow = (subject: string, coefficient: number, average: number | null) => {
        setGrades(prev => ({
            ...prev,
            [subject]: { coefficient, average }
        }));
    };

    const calculateGrade = () => {
        let totalPoints = 0;
        let totalCoefficients = 0;

        Object.values(grades).forEach(({ coefficient, average }) => {
            if (average !== null) {
                totalPoints += average * coefficient;
                totalCoefficients += coefficient;
            }
        });

        if (totalCoefficients === 0) {
            setFinalGrade(0);
        } else {
            setFinalGrade(Number((totalPoints / totalCoefficients).toFixed(2)));
        }
    };

    return (
        <div className={className || "structure"}>
            <p style={{ padding: "0 10px", direction: "ltr" }}>
                {t.calculator.intro}
            </p>
            <table>
                <thead>
                    <tr>
                        <th>{t.calculator.table.activities}</th>
                        <th>{t.calculator.table.note4}</th>
                        <th>{t.calculator.table.note3}</th>
                        <th>{t.calculator.table.note2}</th>
                        <th>{t.calculator.table.note1}</th>
                        <th>{t.calculator.table.subject}</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(children)
                        ? children.map((child, idx) => {
                            if (isValidElement(child)) {
                                return cloneElement(child as any, {
                                    key: idx,
                                    ...(child as any).props,
                                    updateRow
                                });
                            }
                            return child;
                        })
                        : isValidElement(children)
                        ? cloneElement(children as any, { updateRow })
                        : children}
                </tbody>
            </table>
            <p
                className={styles.result}
                style={{
                    color: finalGrade !== null && finalGrade < 10.0 ? "red" : "green"
                }}
            >
                {finalGrade}
            </p>
            <button className={styles.calculButton} onClick={calculateGrade}>
                {t.calculator.buttons.calculate}
            </button>
        </div>
    );
}

export function RegularSubjectRow({ subject, coefficient, updateRow }: SubjectRowProps) {
    const coef = Number(coefficient);
    const [grades, setGrades] = useState<string[]>(["", "", "", "", ""]);

    function handleChange(index: number, e: React.ChangeEvent<HTMLInputElement>) {
        const newGrades = [...grades];
        newGrades[index] = e.target.value;
        setGrades(newGrades);

        const validNumbers = newGrades
            .map(grade => (grade === "" ? null : Number(grade)))
            .filter((grade): grade is number => grade !== null && !isNaN(grade));

        let average: number | null = null;
        if (validNumbers.length > 0) {
            average = validNumbers.reduce((sum, grade) => sum + grade, 0) / validNumbers.length;
        }

        updateRow?.(subject, coef, average);
    }

    return (
        <tr>
            {grades.map((grade, index) => (
                <td key={index}>
                    <input
                        type="number"
                        value={grade}
                        onChange={e => handleChange(index, e)}
                    />
                </td>
            ))}
            <td className={styles.matier}>{subject}</td>
        </tr>
    );
}

export function SpecialSubjectRow({ subject, coefficient, updateRow }: SubjectRowProps) {
    const coef = Number(coefficient);
    const [grades, setGrades] = useState<string[]>([""]);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const newGrades = [...grades];
        newGrades[0] = e.target.value;
        setGrades(newGrades);

        const validNumbers = newGrades
            .map(grade => (grade === "" ? null : Number(grade)))
            .filter((grade): grade is number => grade !== null && !isNaN(grade));

        let average: number | null = null;
        if (validNumbers.length > 0) {
            average = validNumbers.reduce((sum, grade) => sum + grade, 0) / validNumbers.length;
        }

        updateRow?.(subject, coef, average);
    }

    return (
        <tr>
            <td colSpan={5}>
                <input
                    type="number"
                    value={grades[0]}
                    onChange={handleChange}
                />
            </td>
            <td className={styles.matier}>{subject}</td>
        </tr>
    );
}

export function AnnualCalculator({
    gradeWeights,
    title,
    H4 = "Moyenne générale",
    lang = "fr"
}: AnnualCalculatorProps) {
    const [inputGrades, setInputGrades] = useState<string[]>(
        Array(gradeWeights.length).fill("0")
    );
    const [calculatedAverage, setCalculatedAverage] = useState<number>(0);

    function handleChange(index: number, e: React.ChangeEvent<HTMLInputElement>) {
        const newGrades = [...inputGrades];
        newGrades[index] = e.target.value;
        setInputGrades(newGrades);
    }

    function calculateAnnualGrade() {
        let totalPoints = 0;
        let totalCoefficients = 0;

        inputGrades.forEach((grade, index) => {
            const numGrade = grade === "" || isNaN(Number(grade)) ? 0 : Number(grade);
            const coef = Number(gradeWeights[index].coefficient);

            if (coef > 0) {
                totalPoints += numGrade * coef;
                totalCoefficients += coef;
            }
        });

        if (totalCoefficients === 0) {
            setCalculatedAverage(0);
        } else {
            setCalculatedAverage(Number((totalPoints / totalCoefficients).toFixed(2)));
        }
    }

    const t = getTranslations(lang);
    const sectionTitle = lang !== "fr" && H4 === "Moyenne générale" 
        ? t.calculator.labels.generalAverage 
        : H4;

    return (
        <>
            <h4 className={styles.title}>{sectionTitle}</h4>
            <div className={styles.Grand_father}>
                <div className={styles.father}>
                    <div>{t.calculator.Note}</div>
                    {gradeWeights.map((weight, index) => (
                        <div key={index}>
                            <input
                                type="number"
                                value={inputGrades[index]}
                                onChange={e => handleChange(index, e)}
                                placeholder={t.calculator.placeholders.defaultZero}
                            />
                        </div>
                    ))}
                    <div style={{ color: calculatedAverage < 10.0 ? "red" : "green" }}>
                        {calculatedAverage}
                    </div>
                </div>

                <div className={styles.father}>
                    <div>{title}</div>
                    {gradeWeights.map((weight, index) => (
                        <div
                            key={index}
                            style={{
                                backgroundColor: "rgba(156, 163, 175, 0.502)"
                            }}
                        >
                            {weight.subject}
                        </div>
                    ))}
                    <div
                        onClick={calculateAnnualGrade}
                        style={{ backgroundColor: "rgba(249, 115, 22, 0.794)" }}
                    >
                        {t.calculator.buttons.calculate}
                    </div>
                </div>
            </div>
        </>
    );
}

export const primaryLevels: LevelRegistry = {
    '3ac': [TAS3A, 'Troisième année collège'],
    tcsf: [TCSF, 'Tronc commun sciences Français'],
    tcal: [TCAL, 'Tronc commun lettres'],
    '1bac-lsh': [ABAC_LSH, '1bac lettres'],
    '1bac-sf': [ABAC_SCEXP, '1bac sciences expérimentales'],
    '2bac-sh': [BBAC_SH, '2bac lettres'],
    '2bac-pc': [BBAC_PC, '2bac sciences physiques'],
}

export const secondaryLevels: LevelRegistry = {
    '1ac': [AAC, 'Première année collège'],
    '2ac': [BAC, 'Deuxième année collège']
}

const educationLevels: LevelRegistry = {
    ...secondaryLevels, 
    ...primaryLevels
};

export default educationLevels;

