import type { Metadata } from "next";
import "./globals.css";
import Header from "@/comps/Header";
import { headers } from 'next/headers'
import Footer from "@/comps/Footer"
import {getBrowserLocale} from "./page";

export const metadata: Metadata = {
	title: "أحسب معدلك - 7asib",
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
    languages: {
        'ar': 'https://7asib.vercel.app/ar',
        'fr': 'https://7asib.vercel.app/fr',
        'x-default': 'https://7asib.vercel.app/ar',
     },
	authors: ["krnl0xsns1nk"],
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

interface LayoutProp {
  children: ReactNode;
}

export default async function RootLayout({children}: LayoutProp) {
   const headersList = await headers();
   /*const url = headersList.get('x-url') || headersList.get('referer');
   const pathname = new URL(url).pathname;
   console.log(url)
   const { lang } = await params;
   console.log(await params, lang)
   const validLang = ['ar', 'fr'].includes(lang) ? lang : 'fr';
   let direc: "rtl" | "ltr" = validLang === 'fr' ? "ltr" : "rtl";*/
    const acceptLanguage = headersList.get('accept-language') || ''
    let lang = getBrowserLocale(acceptLanguage)
	return (
		<html lang={lang} dir={lang === 'ar' ? "rtl" : "ltr"}>
            <body>
				<Header />
				 {children}
				<Footer />
			</body>
        </html>
	);
}
