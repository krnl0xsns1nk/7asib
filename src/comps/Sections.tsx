"use client"
import Link from "next/link";
import createLocalizedData from '@/comps/secCon';
import styles from '@/styles/sections.module.css';
import Writer from "@/lib/Writer";
import {useParams} from "next/navigation";

const Button = ({ href, text, icon, isDownload, clas }: any) => (
  <Link href={href} download={isDownload}>
    <button className={ clas ? styles.mainbtn : styles.secbtn}>
      {text} {icon && icon}
    </button>
  </Link>
);
const Sections = () => {
    const params = useParams();
    const { lang } = params
    const secData = createLocalizedData(lang as string)
  return (
    <div className={`${styles.container} animate-on-scroll`}>
      <div className={styles.grid}>
        {secData.map((section, index) => {
          let s = section.call[0].text.trim();
          const isPwaSection = s === 'Installer' || s === "تثبيت";
          return (
            <div
              key={index}
              className={styles.card}
              id={isPwaSection ? 'pwa' : ''}
            >
              <div className={styles.icon}>{section.icon}</div>
              <h3 className={styles.title}>
                <Writer text={section.title} />
              </h3>
              <p className={styles.text}>{section.text}</p>
              <div className={styles.father}>
                {section.call[1] && (
                  <Button
                    href={section.call[1].url}
                    text={section.call[1].text}
                    icon={section.call[1].icon}
                    isDownload={false}
                    clas={false}
                  />
                )}
                <Button
                  href={section.call[0].url}
                  text={section.call[0].text}
                  icon={section.call[0].icon}
                  isDownload={isPwaSection}
                  clas={true}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sections;
