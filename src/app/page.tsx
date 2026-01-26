import React from "react";
import Link from "next/link";
import Image from "next/image";
import Writer from "@/lib/Writer";
import styles from "@/styles/cal.module.css";
import Sections from "@/comps/Sections";
//import Vbg from "@/components/bg";

const App: React.FC = () => {
	return (
        <>
		<section className={styles.main}>
			<h2>
            	<Writer text="Calculez votre moyenne facilement!" />
			</h2>
			<p>
				Vous pouvez choisir votre niveau scolaire et calculer facilement
				votre moyenne ou vos résultats. Il vous suffit de sélectionner
				l'une des options disponibles. Si votre niveau n'est pas encore
				pris en charge, veuillez nous le faire savoir et, si Dieu le
				veut, nous l’ajouterons bientôt
			</p>
			<div style={{ flexDirection: "column" }}>
				<div>
					<div style={{ flexDirection: "column" }}>
						<Link href="/tcsf">tcsf</Link>
						<Link href="/1bac-sf">1bac-sf</Link>
						<Link href="/2bac-pc">2bac-pc</Link>
					</div>
					<div style={{ flexDirection: "column" }}>
						<Link href="/tcal">tcal</Link>
						<Link href="/1bac-lsh">1bac-lsh</Link>
						<Link href="/2bac-sh">2bac-sh</Link>
					</div>
				</div>
				<div style={{ flexDirection: "column" }}>
					<Link style={{ width: "100%" }} href="/tas3a">
						tas3a
					</Link>
                    <Link style={{ width: "100%" }} href="/levels">autre niveaux</Link>
				</div>
			</div>
		</section>
        <Sections />
      </>
	);
};

export default App;
