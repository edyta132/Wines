// import { Link } from "react-router-dom"
import Home from '../../assets/icon_home.svg?react'
import Favourite from '../../assets/icon_favourite.svg?react'
import Plus from '../../assets/icon_plus.svg?react'
import Saved from '../../assets/icon_saved.svg?react'
import Profil from '../../assets/icon_profil.svg?react'
import styles from './Navigation.module.scss'

export const Navigation = () => {
    return (
        <>
            <div className={styles.navigation}>
                <div className={styles.navigationCnt}>
                    <div><Home /></div>
                    <div><Favourite className={styles.heart} /></div>
                    <div className={styles.plus}><Plus /></div>
                    <div><Saved className={styles.saved} /></div>
                    <div><Profil /></div>
                </div>
            </div>
            <div className={styles.placeholder}></div>
        </>
    )
}