"use client";
import styles from "@/styles/home.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
        _ => {
			setShowSide(false);
		},
		[pathname]
	);
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
						7asib <span>v0.1</span>
					</h1>
				</div>
				{sidebar ? (
					<span
						onClick={_ => {
							setShowSide(prev => !prev);
						}}
					>
						☓
					</span>
				) : null}
			</header>
			{showSide ? (
				<SideBar clas={styles.hideSide} />
			) : (
				<SideBar />
			)}
		</>
	);
};
interface SideBarProp {
	clas: string;
}
const SideBar: React.FC<SideBarProp> = ({ clas }) => {
	return (
		<nav className={`${styles.nav} ${clas}`}>
			<Link href="/">Home</Link>
					<Link href="/about">
						about
					</Link>
		</nav>
	);
};

export default Header;
