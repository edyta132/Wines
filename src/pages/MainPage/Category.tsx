import { useContext } from "react"
import styles from "./MainPage.module.scss"
import { AppContext } from "../../App"
import { Navigation } from "../../components/Navigation/Navigation"
import Dry from '../../assets/dry.png'
import SemiDry from '../../assets/semi-dry.png'
import SemiSweet from '../../assets/semi-sweet.png'
import Sweet from '../../assets/sweet.png'
import { Link } from "react-router-dom"
import { Search } from "../../components/Search/Search"
import Arrow from "../../assets/arrow_left.svg?react"



export const Category = () => {
    const { user } = useContext(AppContext)
    console.log(user?.displayName)
    return (
        <div className={styles.mainPage}>
            <div className={styles.mainContainer}>
                <Link to="/"><Arrow /></Link>
                <div>
                    <Search />
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