"use client";
import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
	TCSF,
	TCAL,
	ABAC_LSH,
	ABAC_SCEXP,
	BBAC_SH,
	BBAC_PC,
	TAS3A
} from "./calculator";
const LEVEL_MAP: Record<string, React.ComponentType> = {
	"3ac": TAS3A,
	tcsf: TCSF,
	tcal: TCAL,
	"1bac-sf": ABAC_SCEXP,
	"1bac-lsh": ABAC_LSH,
	"2bac-pc": BBAC_PC,
	"2bac-sh": BBAC_SH
};
const LEVEL_NAMES: Record<string, string> = {
	"3ac": "Troisième année préparatoire",
	tcsf: "Tronc commun scientifique",
	tcal: "Tronc commun lettres",
	"1bac-sf": "1ère année bac sciences ex",
	"1bac-lsh": "1ère année bac lettres et sciences humaines",
	"2bac-pc": "2ème année bac sciences physiques",
	"2bac-sh": "2ème année bac sciences humaines"
};

const Niveau: React.FC = () => {
	const params = useParams();
	const niveau = params.niveau as string;
	const Component = LEVEL_MAP[niveau];
	if (Component) {
		return (
			<div style={{paddingBottom: "100px"}}>
				<Component />
			</div>
		);
    }
	return (
		<div
			style={{
				textAlign: "center",
				padding: "100px 20px",
				direction: "rtl"
			}}
		>
			<h4 style={{ color: "#dc2626", marginBottom: "20px" }}>
				Désolé, le niveau n'existe pas !
			</h4>
			<p style={{ marginBottom: "30px", color: "#6b7280" }}>
				Le niveau "{niveau}" n'est pas disponible actuellement
			</p>

			<div style={{ marginBottom: "10px" }}>
				<h3 style={{ marginBottom: "5px" }}>Niveaux disponibles :</h3>
				<ul
					style={{
						listStyle: "none",
						padding: 0,
						maxWidth: "400px",
						margin: "0 auto"
					}}
				>
					{Object.entries(LEVEL_NAMES).map(([key, name]) => (
						<li key={key} style={{ marginBottom: "5px" }}>
							<Link
								href={`/${key}`}
								style={{
									color: "#f97316",
									textDecoration: "none",
									padding: "8px 4px",
									display: "block",
									borderRadius: "6px",
									transition: "background-color 0.2s"
								}}
							>
								{name}
							</Link>
						</li>
					))}
				</ul>
			</div>

			<Link
				href="/"
				style={{
					display: "inline-block",
					padding: "6px 15px",
					backgroundColor: "#f97316",
					color: "white",
					textDecoration: "none",
					borderRadius: "8px",
					fontWeight: "bold"
				}}
			>
				Retour à la page d'accueil
			</Link>
		</div>
	);
};

export default Niveau;
