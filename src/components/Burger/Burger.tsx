import styles from "./Burger.module.scss"


export const Burger = ({ isOpen }) => {
    return (
        <div className={styles.burger}>
            <span className={styles.burgerLine1} style={{ transform: isOpen ? "rotate(45deg) translate(10px, 8px)" : "rotate(0)" }}></span>
            <span className={styles.burgerLine2} style={{ transform: isOpen ? 'scale(0)' : 'scale(100%)' }}></span>
            <span className={styles.burgerLine3} style={{ transform: isOpen ? 'rotate(-45deg)' : 'rotate(0)' }}></span>
        </div>
    )
}