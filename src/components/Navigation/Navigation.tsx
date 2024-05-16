// import { Link } from "react-router-dom"
import Home from '../../assets/icon_home.svg?react'
import Favourite from '../../assets/icon_favourite.svg?react'
import Plus from '../../assets/icon_plus.svg?react'
import Saved from '../../assets/icon_saved.svg?react'
import Profil from '../../assets/icon_profil.svg?react'
import styles from './Navigation.module.scss'
import { Link } from 'react-router-dom'

export const Navigation = () => {
    return (
        <>
            <div className={styles.navigation}>
                <div className={styles.navigationCnt}>
                    <div><Link to='/'><Home /></Link></div>
                    <div><Link to='/profil'><Favourite className={styles.heart} /></Link></div>
                    <div className={styles.plus}><Plus /></div>
                    <div><Link to='/profil'><Saved className={styles.saved} /></Link></div>
                    <div><Link to='/profil'><Profil /></Link></div>
                </div>
            </div >
            <div className={styles.placeholder}></div>
        </>
    )
}