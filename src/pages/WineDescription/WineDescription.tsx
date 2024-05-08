import { Link } from 'react-router-dom'
import { Navigation } from '../../components/Navigation/Navigation'
import styles from './WineDescription.module.scss'
import Arrow from "../../assets/arrow_left.svg?react"
import Favourite from '../../assets/icon_favourite.svg?react'
import Saved from '../../assets/icon_saved.svg?react'


export const WineDescription = () => {
    return (
        <div>
            <div className={styles.container}>
                <Link to="/category"><Arrow /></Link>
                <div className={styles.iconsCnt}>
                    <div><Favourite style={{ width: 30, height: 25 }} /></div>
                    <div><Saved style={{ width: 30, height: 25 }} /></div>
                </div>
            </div>
            <div><Navigation /></div>
        </div>
    )
}