import { useContext } from "react"
import styles from "./MainPage.module.scss"
import { AppContext } from "../../App"
import { Navigation } from "../../components/Navigation/Navigation"
import Serach from '../../assets/search.svg?react'
import Dry from '../../assets/dry.png'
import SemiDry from '../../assets/semi-dry.png'
import SemiSweet from '../../assets/semi-sweet.png'
import Sweet from '../../assets/sweet.png'
import Arrow from '../../assets/arrow_left.svg?react'
import { Link } from "react-router-dom"


export const Category = () => {
    const { user } = useContext(AppContext)
    console.log(user?.displayName)
    return (
        <div className={styles.mainPage}>
            <div className={styles.mainContainer}>
                <Link to="/"><Arrow /></Link>
                <div className={styles.serach}>
                    <h3>Search</h3>
                    <div><Serach /></div>
                </div>
                <div className={styles.categoryCnt}>
                    <div className={styles.categorySingleWine}>
                        <img src={Dry} />
                        <h2 className={styles.subTitle}>Dry</h2>
                    </div>
                    <div className={styles.categorySingleWine}>
                        <img src={SemiDry} />
                        <h2 className={styles.subTitle}>Semi-Dry</h2>
                    </div>
                    <div className={styles.categorySingleWine}>
                        <img src={SemiSweet} />
                        <h2 className={styles.subTitle}>Semi-Sweet</h2>
                    </div>
                    <div className={styles.categorySingleWine}>
                        <img src={Sweet} />
                        <h2 className={styles.subTitle}>Sweet</h2>
                    </div>
                </div>
            </div>
            <div><Navigation /></div>
        </div >
    )
}