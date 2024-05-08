import styles from "./Burger.module.scss"

// export const Burger = () => {
//     return (
//         <div className={styles.menuCnt}>
//             <button className={styles.burgerCnt}>
//                 <span className={styles.burgerLine}></span>
//                 <span className={styles.burgerLine}></span>
//                 <span className={styles.burgerLine}></span>
//             </button>
//             <div className={styles.menuItemsCnt}>
//                 <p className={styles.menuItems}>Red
//                     <li className={styles.menuItem}>Dry</li>
//                     <li className={styles.menuItem}>Semi-Dry</li>
//                     <li className={styles.menuItem}>Semi-Sweet</li>
//                     <li className={styles.menuItem}>Sweet</li>
//                 </p>
//                 <p className={styles.menuItems}>White
//                     <li className={styles.menuItem}>Dry</li>
//                     <li className={styles.menuItem}>Semi-Dry</li>
//                     <li className={styles.menuItem}>Semi-Sweet</li>
//                     <li className={styles.menuItem}>Sweet</li>
//                 </p>
//                 <p className={styles.menuItems}>Rose
//                     <li className={styles.menuItem}>Dry</li>
//                     <li className={styles.menuItem}>Semi-Dry</li>
//                     <li className={styles.menuItem}>Semi-Sweet</li>
//                     <li className={styles.menuItem}>Sweet</li>
//                 </p>
//                 <p className={styles.menuItems}>Sparkling</p>
//             </div>
//         </div>
//     )
// }
export const Burger = ({ isOpen }) => {
    return (
        <div className={styles.burger}>
            <span className={styles.burgerLine1} style={{ transform: isOpen ? "rotate(45deg) translate(10px, 8px)" : "rotate(0)" }}></span>
            <span className={styles.burgerLine2} style={{ transform: isOpen ? 'scale(0)' : 'scale(100%)' }}></span>
            <span className={styles.burgerLine3} style={{ transform: isOpen ? 'rotate(-45deg)' : 'rotate(0)' }}></span>
        </div>
    )
}