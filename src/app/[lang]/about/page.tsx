import React from "react";
import styles from "@/styles/about.module.css";
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {Locale, translations} from "@/lib/locales";
type Props = {
  params: Promise<{ lang: string }>;
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const t = translations[lang as Locale] || translations.ar;
  return {
    title: t.meta.title,
    description: t.meta.description
  };

}

const About: React.FC<Props> = async ({params}) => {
  const { lang } = await params;
  if (!['ar', 'fr'].includes(lang)) {
    notFound();
  }
  const t = translations[lang as Locale] || translations.ar;
    return (
        <>
        <section className={`${styles.main} animate-on-scroll`}>
            <div>
                <h1>7asib-v1</h1>
                <p>{t.about.hero.subtitle}</p>
            </div>
            <hr />
            <h2>{t.about.howToUseTitle} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}><path d="M10.2 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM1 22a9.71 9.71 0 0 1 9-7c4.12 0 7.63 2.91 9 7M17.82 4.44a4 4 0 0 1-1.34 7.53M17.32 14.57A7.998 7.998 0 0 1 23 20" /></g></svg>: </h2>
            <article>
                <h3>{t.about.whoWeAre.title}</h3>
                <p>{t.about.whoWeAre.content}</p>
            </article>
            <article>
                <h3>{t.about.howCalculationWorks.title}</h3>
                <p>{t.about.howCalculationWorks.content}</p>
            </article>
            <article>
                <h4>{t.about.helpMe.title}</h4>
                <p>{t.about.helpMe.content}</p>
            </article>
            <hr />
            <h2>{t.about.developers.title} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>{"github"}</title><path fill="#000" fillRule="evenodd" d="M10 0c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.219-.687-.492 0-.338.012-1.442.012-2.814 0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.059 0-1.12-.388-2.034-1.03-2.752.104-.259.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051A9.396 9.396 0 0 0 10 4.958a9.375 9.375 0 0 0-2.503.345C5.586 3.977 4.746 4.252 4.746 4.252c-.543 1.412-.2 2.455-.097 2.714-.639.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.371-.57.262-2.018.715-2.91-.852 0 0-.529-.985-1.533-1.057 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .271-.184.588-.683.493C2.865 18.627 0 14.783 0 10.253 0 4.59 4.478 0 10 0" /></svg>: </h2>
            <article>
                <p>
                {t.about.developers.content}
                </p>
            </article>
            
        </section>
        <div className={`${styles.footer} animate-on-scroll`}>
            <hr />
            <article>
               <p>
                    <i>"The developer behind this website is a self-driven individual who stumbled upon programming driven by curiosity and a passion for creative expression. A self-taught developer, they acquired their skills through solo efforts, leveraging their phone and online resources while working from their own room. With a strong foundation in web development, they possess a keen understanding of the field and are committed to ongoing learning and exploration across multiple disciplines."</i>
               </p> 
            </article>
            <div className={styles.footerHeart}>
                <svg className={styles.heartIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
            <span>{t.about.footer.madeWithLove}</span>
            </div>
               
        </div>
        </>
    )
}

export default About;
