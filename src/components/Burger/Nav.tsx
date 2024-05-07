import { useState } from "react"
import { Burger } from "./Burger"
import styles from "./Burger.module.scss"

// type burgerOpen = {
//     isOpen: boolean
// }

export const Nav = () => {
    const [burgerOpen, setBurgerOpen] = useState(false)
    const [subtitleRedOpen, setSubtitleRedOpen] = useState(false)
    const [subtitleWhiteOpen, setSubtitleWhiteOpen] = useState(false)
    const [subtitleRoseOpen, setSubtitleRoseOpen] = useState(false)


    const toggleBurger = () => {
        setBurgerOpen(!burgerOpen)
    }

    const toggleRedSubtitle = () => {
        setSubtitleRedOpen(!subtitleRedOpen)
    }

    const toggleWhiteSubtitle = () => {
        setSubtitleWhiteOpen(!subtitleWhiteOpen)
    }
    const toggleRoseSubtitle = () => {
        setSubtitleRoseOpen(!subtitleRoseOpen)
    }

    return (
        <div>
            <div className={styles.burger} onClick={toggleBurger}>
                <Burger isOpen={burgerOpen} />
            </div>
            <div style={{ display: burgerOpen ? 'inline' : "none" }}>
                <ul className={styles.navList}>
                    <li className={styles.navTitle} onClick={toggleRedSubtitle}>Red</li>
                    <div className={styles.navTasteList} style={{ display: subtitleRedOpen ? 'inline' : 'none' }}>
                        <li className={styles.navTasteTitle}>Dry</li>
                        <li className={styles.navTasteTitle}>Semi-Dry</li>
                        <li className={styles.navTasteTitle}>Semi-Sweet</li>
                        <li className={styles.navTasteTitle}>Sweet</li>
                    </div>
                    <li className={styles.navTitle} onClick={toggleWhiteSubtitle}>White</li>
                    <div className={styles.navTasteList} style={{ display: subtitleWhiteOpen ? 'inline' : 'none' }}>
                        <li className={styles.navTasteTitle}>Dry</li>
                        <li className={styles.navTasteTitle}>Semi-Dry</li>
                        <li className={styles.navTasteTitle}>Semi-Sweet</li>
                        <li className={styles.navTasteTitle}>Sweet</li>
                    </div>
                    <li className={styles.navTitle} onClick={toggleRoseSubtitle}>Rose</li>
                    <div className={styles.navTasteList} style={{ display: subtitleRoseOpen ? 'inline' : 'none' }}>
                        <li className={styles.navTasteTitle}>Dry</li>
                        <li className={styles.navTasteTitle}>Semi-Dry</li>
                        <li className={styles.navTasteTitle}>Semi-Sweet</li>
                        <li className={styles.navTasteTitle}>Sweet</li>
                    </div>
                    <li className={styles.navTitle}>Sparkling</li>
                </ul>
            </div>
        </div>
    )
}