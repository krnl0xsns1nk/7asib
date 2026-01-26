import type { Metadata } from "next";
import "./globals.css";
import Header from "@/comps/Header";
import Footer from "@/comps/footer"
//import Vbg from "@/components/bg";
export const metadata: Metadata = {
	title: "7asib",
	description:
		"منصة دراسية لحساب المعدل الدراسي بسهولة ودقة. أدخل نتائجك واحصل على معدلك فورًا مع نصائح دراسية مفيدة. تدعم جميع المستويات. - Une plateforme éducative pour calculer facilement votre moyenne scolaire. Entrez vos notes et obtenez instantanément votre moyenne avec des conseils utiles.",
	keywords: [
		"حساب المعدل الدراسي",
		"منصة دراسية",
		"تعليم",
		"مساعدة دراسية",
		"نصائح دراسية",
		"moyenne scolaire",
		"plateforme éducative",
		"احسب معدلك الدراسي",
		"les notes",
		"كيفية حساب معدلي الدراسي",
		"نقاط الامتحانات",
		"معدل الجهوي",
		"المعدل الوطني",
		"نقطة الباك"
	],
	authors: "7asib devlopper",
	robots: "index, follow",
	openGraph: {
		title: "7asib - منصة دراسية لحساب المعدل الدراسي",
		description:
			"احصل على معدلك الدراسي فورًا مع نصائح دراسية مفيدة وسهلة الاستخدام.",
		url: "https://7asib.vercel.app",
		siteName: "7asib",
		locale: "ar_MA",
		type: "website"
	}
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr">
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
