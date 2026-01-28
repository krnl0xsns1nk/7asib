import React from "react"
import Link from "next/link"
import niveaux from "@/lib/levels"
import styles from "@/styles/levels.module.css"

const First: React.FC = () => {
    const links = Object.entries(niveaux).filter(([k, [j, name]]) => name === null || name === undefined)
    return (
        <>
        {links.map(([key, [j, n]], i) => (
            <Link href={`/${key}`}  key={i}>{key}</Link>
        ))}
        </>
    )
}
const Second: React.FC = () => {
    const links = Object.entries(niveaux).filter(([k, [j, name]]) => name);
    return (
        <>
            {links.map(([key, [j, n]], i) => (
                <Link href={`/${key}`} key={i}>{key}</Link>
            ))}
        </>
    )
}


const Levels: React.FC = () => {
    return (
        <section className='boo'>
            <h2>Voici les niveaux disponibles</h2>
            <p>Bien sûr, vous pouvez nous contacter pour ajouter votre niveau s'il n'est pas disponible.</p>
            <First />
            <Second />
        </section>
    )
}
export default Levels;
