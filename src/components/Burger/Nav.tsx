import { useState } from "react"
import { Burger } from "./Burger"
import styles from "./Burger.module.scss"

// type burgerOpen = {
//     isOpen: boolean
// }

export const Nav = () => {
    const [burgerOpen, setBurgerOpen] = useState(false)

    const toggleBurger = () => {
        setBurgerOpen(!burgerOpen)
    }

    return (
        <div>
            <div className={styles.burger} onClick={toggleBurger}>
                <Burger isOpen={burgerOpen} />
            </div>
            <div style={{ display: burgerOpen ? 'inline' : "none" }}>
                <ul className={styles.navList}>
                    <li className={styles.navTitle}>Red</li>
                    <div className={styles.nav}></div>
                    <li className={styles.navTitle}>White</li>
                    <li className={styles.navTitle}>Rose</li>
                    <li className={styles.navTitle}>Sparkling</li>
                </ul>
            </div>
        </div>
    )
}