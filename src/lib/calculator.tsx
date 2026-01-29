"use client";
import { useState, ReactNode, cloneElement, isValidElement } from "react";
import styles from "@/styles/cal.module.css";
interface Subject {
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
}
interface niveauxType {
    [key: string] : [JSX.Element, string | null | undefined]
}
function Structure({ children, className }: StructureProps) {
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
			<p style={{ padding: "0 10px" }}>
				Vous pouvez calculer votre moyenne ici, veillez à remplir le
				tableau ci-dessous et cliquez sur le bouton Calculer pour voir
				votre résultat !
			</p>
			<table>
				<thead>
					<tr>
						<th>Activités</th>
						<th>Note 4</th>
						<th>Note 3</th>
						<th>Note 2</th>
						<th>Note 1</th>
						<th>Matière</th>
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
				Calculer !
			</button>
		</div>
	);
}
function Trs({ matier, ceof, updateRow }: GradeInputProps) {
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
function TrM({ matier, ceof, updateRow }: GradeInputProps) {
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
function /* dont care about that 🗿=> */ Sndala999({
	anneLevel,
	title,
	H4 = "Moyenne générale"
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
	return (
		<>
			<h4 className={styles.title}>{H4}</h4>
			<div className={styles.Grand_father}>
				<div className={styles.father}>
					<div>Note</div>
					{anneLevel.map((lev, i) => (
						<div key={i}>
							<input
								type="number"
								value={values[i]}
								onChange={e => handleChange(i, e)}
								placeholder="défaut : 0"
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
						Calculer
					</div>
				</div>
			</div>
		</>
	);
}
function TAS3A() {
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
			<Sndala999 H4="Moyenne régionale" anneLevel={sub} title="Matière" />
			<Sndala999 H4="Moyenne locale" anneLevel={sub} title="Matière" />
			<Sndala999 anneLevel={anneLevel} title="Période" />
		</>
	);
}
function TCSF() {
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
			<Sndala999 anneLevel={anneLevel} title="Semestre" />
		</>
	);
}
function TCAL() {
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
function ABAC_SCEXP() {
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
			<Sndala999
				anneLevel={subjects}
				H4="Moyenne régionale"
				title="Matière"
			/>
			<Sndala999 anneLevel={anneLevel} title="Période" />
		</>
	);
}
function ABAC_LSH() {
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
			<Sndala999
				anneLevel={subjects}
				H4="Moyenne régionale"
				title="Matière"
			/>
			<Sndala999 anneLevel={anneLevel} title="Période" />
		</>
	);
}
function BBAC_PC() {
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
			<Sndala999
				anneLevel={subjects}
				H4="Moyenne nationale"
				title="Matière"
			/>
			<Sndala999 anneLevel={anneLevel} title="Période" />
		</>
	);
}
function BBAC_SH() {
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
			<Sndala999
				anneLevel={subjects}
				H4="Moyenne nationale"
				title="Matière"
			/>
			<Sndala999 anneLevel={anneLevel} title="Période" />
		</>
	);
}

export const primarylev: niveauxType = {
    '3ac': [TAS3A, 'Troisième année préparatoire'],
    tcsf: [TCSF, 'Tronc commun sciences Français'],
    tcal: [TCAL, 'Tronc commun lettres'],
    '1bac-lsh': [ABAC_LSH, '1bac lettres'],
    '1bac-sf': [ABAC_SCEXP, '1bac sciences expérimentales'],
    '2bac-sh': [BBAC_SH, '2bac lettres'],
    '2bac-pc': [BBAC_PC, '2bac sciences physiques'],
}
const Bingo : React.FC = () => {
    return <h1>Hello world</h1>
}
export const secondarylev: niveauxType ={
    bingo: [Bingo, 'fulan fulnai']
}

export const niveaux: niveauxType = {
    ...secondarylev, ...primarylev
};
