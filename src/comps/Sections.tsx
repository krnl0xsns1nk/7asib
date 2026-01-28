"use client"
import Link from "next/link";
// import { useState } from 'react';
import { sectionsData } from '@/comps/secCon';
import styles from '@/styles/sections.module.css';

const Sections = () => {
    let pwaSecStatus: boolean = false;
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {sectionsData.map((section, index) => { 
            pwaSecStatus = section.call[0].text.trim() == 'Installer' ? true : false;
            return (
          <div
            key={index}
            className={styles.card}
          >
            <div className={styles.icon}>{section.icon}</div>
            <h3 className={styles.title}>{section.title}</h3>
            <p className={styles.text}>{section.text}</p>
            <div className={styles.father}>
            {/*            <Link href={section.call[0].url} className={styles.mainbtn} download={pwaSecStatus}>
                  {section.call[0].text}
            { !pwaSecStatus ? 
                (<svg width="12px" height="12px" viewBox="-1.44 -1.44 26.88 26.88" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / External_Link"> <path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="#ffffff" strokeWidth="1.464" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g></svg>) 
                :
                ( <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={12}
                    fill="#fff"
                    stroke="#fff"
                    strokeWidth={0}
                    viewBox="0 0 36 36">
                    <title>Download</title>
                    <path
                      stroke="none"
                      d="M30.92 8h-4.37a1 1 0 0 0 0 2H31v20H5V10h4.38a1 1 0 0 0 0-2h-4.3A2 2 0 0 0 3 10v20a2 2 0 0 0 2.08 2h25.84A2 2 0 0 0 33 30V10a2 2 0 0 0-2.08-2Z"
                      className="clr-i-outline clr-i-outline-path-1"
                    />
                    <path
                      stroke="none"
                      d="m10.3 18.87 7 6.89a1 1 0 0 0 1.4 0l7-6.89a1 1 0 0 0-1.4-1.43L19 22.65V4a1 1 0 0 0-2 0v18.65l-5.3-5.21a1 1 0 0 0-1.4 1.43Z"
                      className="clr-i-outline clr-i-outline-path-2"
                    />
                    <path fill="none" stroke="none" d="M0 0h36v36H0z" />
                  </svg> )
            } </Link>
*/}
            { section.call[1] ? 
                (<Link href={section.call[1].url} >
                 <button className={styles.secbtn}>
                 {section.call[1].text} 
                { section.call[1].text== "code source" ?
                    (<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m7 8-4 3.692L7 16m10-8 4 3.692L17 16M14 4l-4 16"
                    />
                      </svg> )
                    : null }
                    </button>
                </Link>) : null}

            <Link href={section.call[0].url} download={pwaSecStatus}>
              <button className={styles.mainbtn}>
                  {section.call[0].text}
            { !pwaSecStatus ?
                (<svg width="12px" height="12px" viewBox="-1.44 -1.44 26.88 26.88" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / External_Link"> <path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="#ffffff" strokeWidth="1.464" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g></svg>)
                :
                ( <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={12}
                    fill="#fff"
                    stroke="#fff"
                    strokeWidth={0}
                    viewBox="0 0 36 36">
                    <title>Download</title>
                    <path
                      stroke="none"
                      d="M30.92 8h-4.37a1 1 0 0 0 0 2H31v20H5V10h4.38a1 1 0 0 0 0-2h-4.3A2 2 0 0 0 3 10v20a2 2 0 0 0 2.08 2h25.84A2 2 0 0 0 33 30V10a2 2 0 0 0-2.08-2Z"
                      className="clr-i-outline clr-i-outline-path-1"
                    />
                    <path
                      stroke="none"
                      d="m10.3 18.87 7 6.89a1 1 0 0 0 1.4 0l7-6.89a1 1 0 0 0-1.4-1.43L19 22.65V4a1 1 0 0 0-2 0v18.65l-5.3-5.21a1 1 0 0 0-1.4 1.43Z"
                      className="clr-i-outline clr-i-outline-path-2"
                    />
                    <path fill="none" stroke="none" d="M0 0h36v36H0z" />
                  </svg> )
            }
            </button>
            </Link>


            </div>
          </div>
        )})}
      </div>
    </div>
  );
};

export default Sections;
