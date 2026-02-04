"use client";
import {translations, Locale} from "@/lib/locales";
import styles from "@/styles/home.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import React from "react";
interface HeaderProp {
	sidebar?: boolean;
}
const Header: React.FC<HeaderProp> = ({
	sidebar = true,
}) => {
	const [showSide, setShowSide] = React.useState<boolean>(false);
	const pathname = usePathname();
	React.useEffect(
        () => {
			setShowSide(false);
		},
		[pathname]
	);
    const params = useParams();
    let lang  = params.lang as string
    if (!['ar', 'fr'].includes(lang)) {
        lang = 'ar'
   }

	return (
		<>
			<header className={styles.header}>
				<div>
					<Image
						src="/favicon.svg"
						alt="7asib logo"
						width={30}
						height={30}
						priority
					/>
					<h1>
						7asib <span>v0.2</span>
					</h1>
				</div>
				{sidebar ? (
					<span
						onClick={_ => {
							setShowSide(prev => !prev);
						}}
					>
					<div className={`${styles.burger} ${showSide ? styles.hideMePls : ''}`}>
                        <div className={styles.c1}></div>
                        <div className={styles.c2}></div>
                        <div className={styles.c3}></div>
                    </div>
					</span>
				) : null}
			</header>
			{showSide ? (
				<SideBar clas={styles.hideSide} lang={lang}/>
			) : (
				<SideBar lang={lang} />
			)}
		</>
	);
};
interface SideBarProp {
	clas?: string;
    lang: string
}
const SideBar: React.FC<SideBarProp> = ({ clas, lang }) => {
    const t = translations[lang as Locale] || translations.fr
	return (
		<nav className={`${styles.nav} ${clas}`}>
			<Link href={`/${lang}`}>{t.nav.home}</Link>
            <Link href={`/${lang}/#pwa`}>{t.nav.app}</Link> 
			<Link href={`/${lang}/about`}>{t.nav.about}</Link>
		</nav>
	);
};

export default Header;
