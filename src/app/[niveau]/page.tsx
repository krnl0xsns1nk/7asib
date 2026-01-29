"use client";
import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { primarylev, secondarylev } from "@/lib/calculator";
import { niveaux } from "@/lib/calculator";

const Niveau: React.FC = () => {
    console.log('niveaux:', niveaux);
    console.log('primarylev:', primarylev);
    console.log('secondarylev:', secondarylev);
    console.log('Object.entries(primarylev):', Object.entries(primarylev || {}));
	const params = useParams();
	const niveau = params.niveau as string;
	const Comp = niveaux[niveau] ?? null

	if (Comp) {
        const Component = Comp[0]
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
				direction: "ltr"
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
				>{/*     key: [jsx, name]         */}
					{Object.entries(niveaux)
                        .map(([key, [j, label]]) => (
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
								{label}
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
