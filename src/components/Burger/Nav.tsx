import { useState } from "react"
import { Burger } from "./Burger"
import styles from "./Burger.module.scss"
import { Link } from "react-router-dom"

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
                    <div className={styles.navTasteList} style={{ display: subtitleRedOpen ? 'flex' : 'none' }}>
                        <Link to="/red-dry" className={styles.navTasteTitle}>Dry</Link>
                        <Link to='/red-semi-dry' className={styles.navTasteTitle}>Semi-Dry</Link>
                        <Link to='/red-semi-sweet' className={styles.navTasteTitle}>Semi-Sweet</Link>
                        <Link to='/red-sweet' className={styles.navTasteTitle}>Sweet</Link>
                    </div>
                    <li className={styles.navTitle} onClick={toggleWhiteSubtitle}>White</li>
                    <div className={styles.navTasteList} style={{ display: subtitleWhiteOpen ? 'flex' : 'none' }}>
                        <Link to="/white-dry" className={styles.navTasteTitle}>Dry</Link>
                        <Link to='/white-semi-dry' className={styles.navTasteTitle}>Semi-Dry</Link>
                        <Link to='/white-semi-sweet' className={styles.navTasteTitle}>Semi-Sweet</Link>
                        <Link to='/white-sweet' className={styles.navTasteTitle}>Sweet</Link>
                    </div>
                    <li className={styles.navTitle} onClick={toggleRoseSubtitle}>Rose</li>
                    <div className={styles.navTasteList} style={{ display: subtitleRoseOpen ? 'flex' : 'none' }}>
                        <Link to="/rose-dry" className={styles.navTasteTitle}>Dry</Link>
                        <Link to='/rose-semi-dry' className={styles.navTasteTitle}>Semi-Dry</Link>
                        <Link to='/rose-semi-sweet' className={styles.navTasteTitle}>Semi-Sweet</Link>
                        <Link to='/rose-sweet' className={styles.navTasteTitle}>Sweet</Link>
                    </div>
                    <Link to='/sparkling' className={styles.navTitle}>Sparkling</Link>
                </ul>
            </div>
        </div>
    )
}