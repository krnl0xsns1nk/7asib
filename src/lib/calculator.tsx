"use client";
import { useState, ReactNode, cloneElement, isValidElement } from "react";
import { TAS3A, TCSF, TCAL, ABAC_SCEXP, ABAC_LSH, BBAC_PC, BBAC_SH, AAC, BAC} from "./levels"
import styles from "@/styles/cal.module.css";
import {Locale, translations} from "./locales/index";
export interface Subject {
	subject: string;
	coef: number;
}
interface RowData {
	coef: number;
	avg: number | null;
}
interface StructureProps {
	children: ReactNode;
	className?: string;
    lang?: string
}
interface GradeInputProps {
	matier: string;
	ceof: string;
	updateRow?: (matier: string, coef: number, avg: number | null) => void;
}
interface AnnualCalculatorProps {
	anneLevel: Subject[];
	title: string;
	H4?: string;
    lang?: string;
}
interface niveauxType {
    [key: string] : [JSX.Element, string | null | undefined]
}
function returnT(l: string){return translations[l as Locale] || translations.fr}
export function Structure({ children, className, lang = "fr"}: StructureProps) {
    const t = returnT(lang) 
	const [rows, setRows] = useState<Record<string, RowData>>({});
	const [note, setNote] = useState<number | null>(null);

	const updateRow = (matier: string, coef: number, avg: number | null) => {
		setRows(prev => ({
			...prev,
			[matier]: { coef, avg }
		}));
	};

	const letMeSee = () => {
		let numerator = 0;
		let denominator = 0;

		Object.values(rows).forEach(({ coef, avg }) => {
			if (avg !== null) {
				numerator += avg * coef;
				denominator += coef;
			}
		});

		if (denominator === 0) {
			setNote(0);
		} else {
			setNote(Number((numerator / denominator).toFixed(2)));
		}
	};

	return (
		<div className={className || "structure"}>
			<p style={{ padding: "0 10px", direction: "ltr"}}>
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
					color: note !== null && note < 10.0 ? "red" : "green"
				}}
			>
				{note}
			</p>
			<button className={styles.calculButton} onClick={letMeSee}>
            {t.calculator.buttons.calculate}
			</button>
		</div>
	);
}
export function Trs({ matier, ceof, updateRow }: GradeInputProps) {
	const coef = Number(ceof);
	const [values, setValues] = useState<string[]>(["", "", "", "", ""]);

	function handleChange(i: number, e: React.ChangeEvent<HTMLInputElement>) {
		const newVals = [...values];
		newVals[i] = e.target.value;
		setValues(newVals);

		const nums = newVals
			.map(v => (v === "" ? null : Number(v)))
			.filter((v): v is number => v !== null && !isNaN(v));

		let avg: number | null = null;
		if (nums.length > 0) {
			avg = nums.reduce((a, b) => a + b, 0) / nums.length;
		}

		updateRow?.(matier, coef, avg);
	}
	return (
		<tr>
			{values.map((val, i) => (
				<td key={i}>
					<input
						type="number"
						value={val}
						onChange={e => handleChange(i, e)}
					/>
				</td>
			))}
			<td className={styles.matier}>{matier}</td>
		</tr>
	);
}
export function TrM({ matier, ceof, updateRow }: GradeInputProps) {
	const coef = Number(ceof);
	const [values, setValues] = useState<string[]>([""]);

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		const newVals = [...values];
		newVals[0] = e.target.value;
		setValues(newVals);

		const nums = newVals
			.map(v => (v === "" ? null : Number(v)))
			.filter((v): v is number => v !== null && !isNaN(v));

		let avg: number | null = null;
		if (nums.length > 0) {
			avg = nums.reduce((a, b) => a + b, 0) / nums.length;
		}

		updateRow?.(matier, coef, avg);
	}

	return (
		<tr>
			<td colSpan={5}>
				<input
					type="number"
					value={values[0]}
					onChange={e => handleChange(e)}
				/>
			</td>
			<td className={styles.matier}>{matier}</td>
		</tr>
	);
}
export function Activiti({
	anneLevel,
	title,
	H4 = "Moyenne générale",
    lang = "fr"
}: AnnualCalculatorProps) {
	const [values, setValues] = useState<string[]>(
		Array(anneLevel.length).fill("0")
	);
	const [note, setNote] = useState<number>(0);

	function handleChange(i: number, e: React.ChangeEvent<HTMLInputElement>) {
		const newVals = [...values];
		newVals[i] = e.target.value;
		setValues(newVals);
	}

	function anne() {
		let numerator = 0;
		let denominator = 0;

		values.forEach((val, i) => {
			const numVal = val === "" || isNaN(Number(val)) ? 0 : Number(val);
			const coef = Number(anneLevel[i].coef);

			if (coef > 0) {
				numerator += numVal * coef;
				denominator += coef;
			}
		});

		if (denominator === 0) {
			setNote(0);
		} else {
			setNote(Number((numerator / denominator).toFixed(2)));
		}
	}
    const t = returnT(lang)
    lang != "fr" && H4 === "Moyenne générale" ? H4 = t.calculator.labels.generalAverage : null;
	return (
		<>
			<h4 className={styles.title}>{H4}</h4>
			<div className={styles.Grand_father}>
				<div className={styles.father}>
					<div>{t.calculator.Note}</div>
					{anneLevel.map((lev, i) => (
						<div key={i}>
							<input
								type="number"
								value={values[i]}
								onChange={e => handleChange(i, e)}
								placeholder={t.calculator.placeholders.defaultZero}
							/>
						</div>
					))}
					<div style={{ color: note < 10.0 ? "red" : "green" }}>
						{note}
					</div>
				</div>

				<div className={styles.father}>
					<div>{title}</div>
					{anneLevel.map((lev, i) => (
						<div
							key={i}
							style={{
								backgroundColor: "rgba(156, 163, 175, 0.502)"
							}}
						>
							{lev.subject}
						</div>
					))}
					<div
						onClick={anne}
						style={{ backgroundColor: "rgba(249, 115, 22, 0.794)" }}
					>
                    {t.calculator.buttons.calculate}
					</div>
				</div>
			</div>
		</>
	);
}
export const primarylev: niveauxType = {
    '3ac': [TAS3A, 'Troisième année collège'],
    tcsf: [TCSF, 'Tronc commun sciences Français'],
    tcal: [TCAL, 'Tronc commun lettres'],
    '1bac-lsh': [ABAC_LSH, '1bac lettres'],
    '1bac-sf': [ABAC_SCEXP, '1bac sciences expérimentales'],
    '2bac-sh': [BBAC_SH, '2bac lettres'],
    '2bac-pc': [BBAC_PC, '2bac sciences physiques'],
}

export const secondarylev: niveauxType ={
    '1ac': [AAC, 'Première année collège'],
    '2ac': [BAC, 'Deuxième année collège']
}

const niveaux: niveauxType = {
    ...secondarylev, ...primarylev
};
export default niveaux;
