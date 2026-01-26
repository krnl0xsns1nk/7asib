import React from "react";
import Link from "next/link";
const Footer: React.FC = () => {
	return (
		<footer
			style={{
				background: "#f5f5f5",
				padding: "10px 10px 10px 10px ",
				marginTop: "10px"
			}}
		>
			<hr style={{ margin: "0 0 0.5rem 0" }} />
			<p
				style={{
					textAlign: "center",
					fontSize: ".9rem",
					color: "#555"
				}}
			>
				© 2025-2026 <Link href="/about">7asib</Link> – Code{" "}
				<a href="https://github.com/krnl0xsns1nk/7asib" target="_blank">
					Open source
				</a>{" "}
				Marocain
			</p>
		</footer>
	);
};

export default Footer;
