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
				</a>
                <svg width="16px" height="16px" viewBox="-1.44 -1.44 26.88 26.88" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / External_Link"> <path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="#000000" strokeWidth="1.464" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g></svg>
				Marocain
			</p>
		</footer>
	);
};

export default Footer;
