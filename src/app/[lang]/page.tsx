import React from "react";
import Link from "next/link";
import { notFound } from 'next/navigation';
//import Image from "next/image";
//import Writer from "@/lib/Writer";
import styles from "@/styles/cal.module.css";
import Sections from "@/comps/Sections";
import { Metadata } from 'next';
import { translations, Locale } from '@/lib/locales'

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  let { lang } = await params;
  if (!['ar', 'fr'].includes(lang)) {
      lang = 'ar'
  }
  const t = translations[lang as Locale] || translations.ar;
  return {
    title: t.meta.title,
    description: t.meta.description
      
  };
}


const App: React.FC<Props> = async ({params}) => {
  const { lang } = await params;
  if (!['ar', 'fr'].includes(lang)) {
    notFound();
  }
  const t = translations[lang as Locale] || translations.ar;
	return (
        <>
		<section className={`${styles.main} animate-on-scroll`}>
			<h2>
            {t.hero.title}
			</h2>
			<p>
				{t.hero.description}<br/>
                <span className={styles.check}><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" stroke="#3f0" strokeWidth={0} viewBox="0 0 20 20"> <path fill="#0f0" fillRule="evenodd" stroke="none" d="M3 10a7 7 0 0 1 9.307-6.611 1 1 0 0 0 .658-1.889 9 9 0 1 0 5.98 7.501 1 1 0 0 0-1.988.22A7 7 0 1 1 3 10zm14.75-5.338a1 1 0 0 0-1.5-1.324l-6.435 7.28-3.183-2.593a1 1 0 0 0-1.264 1.55l3.929 3.2a1 1 0 0 0 1.38-.113l7.072-8z" /></svg><i> {t.hero.noAds}</i></span>
                <span className={styles.check}><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" stroke="#3f0" strokeWidth={0} viewBox="0 0 20 20"> <path fill="#0f0" fillRule="evenodd" stroke="none" d="M3 10a7 7 0 0 1 9.307-6.611 1 1 0 0 0 .658-1.889 9 9 0 1 0 5.98 7.501 1 1 0 0 0-1.988.22A7 7 0 1 1 3 10zm14.75-5.338a1 1 0 0 0-1.5-1.324l-6.435 7.28-3.183-2.593a1 1 0 0 0-1.264 1.55l3.929 3.2a1 1 0 0 0 1.38-.113l7.072-8z" /></svg><i> {t.hero.easy}</i></span>
                <span className={styles.check}><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" stroke="#3f0" strokeWidth={0} viewBox="0 0 20 20"> <path fill="#0f0" fillRule="evenodd" stroke="none" d="M3 10a7 7 0 0 1 9.307-6.611 1 1 0 0 0 .658-1.889 9 9 0 1 0 5.98 7.501 1 1 0 0 0-1.988.22A7 7 0 1 1 3 10zm14.75-5.338a1 1 0 0 0-1.5-1.324l-6.435 7.28-3.183-2.593a1 1 0 0 0-1.264 1.55l3.929 3.2a1 1 0 0 0 1.38-.113l7.072-8z" /></svg><i> {t.hero.free}</i></span>
                {t.hero.note}
			</p>
			<div style={{ flexDirection: "column" }} className={styles.options}>
				<div>
					<div style={{ flexDirection: "column" }}>
						<Link href={`/${lang}/tcsf`}>tcsf</Link>
						<Link href={`/${lang}/1bac-sf`}>1bac-sf</Link>
						<Link href={`/${lang}/2bac-pc`}>2bac-pc</Link>
					</div>
					<div style={{ flexDirection: "column" }}>
						<Link href={`/${lang}/tcal`}>tcal</Link>
						<Link href={`/${lang}/1bac-lsh`}>1bac-lsh</Link>
						<Link href={`/${lang}/2bac-sh`}>2bac-sh</Link>
					</div>
				</div>
				<div style={{ flexDirection: "column" }}>
					<Link style={{ width: "calc(100% - 14px" }} href={`/${lang}/3ac`}>
						3ac
					</Link>
                    <Link style={{ width: "calc(100% - 14px)" }} href={`/${lang}/levels`}>{t.levels.otherLevels}</Link>
				</div>
			</div>
		</section>
        <Sections />
      </>
	);
};

export default App;
