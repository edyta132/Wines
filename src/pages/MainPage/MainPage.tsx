import { useContext } from "react"
import styles from "./MainPage.module.scss"
import { AppContext } from "../../App"
import { Navigation } from "../../components/Navigation/Navigation"
import Serach from '../../assets/search.svg?react'
import Red from '../../assets/red.png'
import White from '../../assets/white.png'
import Rose from '../../assets/rose.png'
import Sparkling from '../../assets/sparkling.png'
import { Link } from "react-router-dom"


export const MainPage = () => {
    const { user } = useContext(AppContext)
    console.log(user?.displayName)
    return (
        <div className={styles.mainPage}>
            <div className={styles.mainContainer}>
                <h1 className={styles.mainTitle}>Welcome!</h1>
                <div className={styles.serach}>
                    <h3>Search</h3>
                    <div><Serach /></div>
                </div>
                <div className={styles.categoryCnt}>
                    <Link to='/category' className={styles.categorySingleWine}>
                        <img src={Red} />
                        <h2 className={styles.subTitle}>Red</h2>
                    </Link>
                    <Link to='/category' className={styles.categorySingleWine}>
                        <img src={White} />
                        <h2 className={styles.subTitle}>White</h2>
                    </Link>
                    <Link to='/category' className={styles.categorySingleWine}>
                        <img src={Rose} />
                        <h2 className={styles.subTitle}>Rose</h2>
                    </Link>
                    <Link to='/category' className={styles.categorySingleWine}>
                        <img src={Sparkling} />
                        <h2 className={styles.subTitle}>Sparkling</h2>
                    </Link>
                </div>
            </div>
            <div><Navigation /></div>
        </div>


    )
} 