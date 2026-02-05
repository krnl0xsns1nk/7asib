"use client";
import React from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
//import { primarylev, secondarylev } from "@/lib/calculator";
//import { niveaux } from "@/lib/calculator"
//import { Metadata } from "next";
import niveaux from "@/lib/calculator";
import {Locale, translations} from "@/lib/locales";
import { createT } from "@/lib/creatT"; 
import type { ComponentType, ReactNode } from "react";

const Niveau: React.FC = () => {
	const params = useParams();
  const lang  = params.lang as string
  if (!['ar', 'fr'].includes(lang)) {
    notFound();
  }
	const niveau = params.niveau as string;
	const Comp = niveaux[niveau] ?? null
    const t = translations[lang as Locale] || translations.ar;


	if (Comp) {
//        const Component: ComponentType<{lang: string}> = Comp[0]
        const Component: ComponentType<{ lang: string }> = Comp[0] as unknown as ComponentType<{ lang: string }>; 
		return (
			<div style={{paddingBottom: "100px"}} className="animate-on-scroll">
				<Component lang={lang}/>
			</div>
		);
    }
    let plzWork = createT(t)
	return (
		<div
			style={{
				textAlign: "center",
				padding: "100px 20px"
			}}
            className="animate-on-scroll"
		>
			<h4 style={{ color: "#dc2626", marginBottom: "20px" }}>
                {t.niveauNotFound.title}
			</h4>
			<p style={{ marginBottom: "30px", color: "#6b7280" }}>
                {plzWork("niveauNotFound.description", { niveau })}
			</p>

			<div style={{ marginBottom: "10px" }}>
				<h3 style={{ marginBottom: "5px" }}>{t.niveauNotFound.availableLevels}</h3>
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
								href={`/${lang}/${key}`}
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
				href={`/${lang}`}
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
            {t.niveauNotFound.backHome}
			</Link>
		</div>
	);
};

export default Niveau;
