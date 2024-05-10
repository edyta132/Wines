import { FavouritePage } from '../../components/FavouritePage/FavouritePage'
import { Navigation } from '../../components/Navigation/Navigation'
import { SavedPage } from '../../components/SavedPage/savedPage'
import styles from './Profil.module.scss'

export const Profil = () => {
    return (
        <div>
            <div className={styles.profilCnt}>
                <div className={styles.profilAvatar}></div>
                <h1 className={styles.profilName}>Edyta</h1>
            </div>
            <div className={styles.itemsCnt}>
                <ul className={styles.itemsList}>
                    <li className={styles.itemsLink}>Favourite</li>
                    <li className={styles.itemsLink}>Saved</li>
                    <li className={styles.itemsLink}>My wines</li>
                </ul>
                <div className={styles.wineListCnt}>
                    <div><FavouritePage /></div>
                    <div><FavouritePage /></div>
                    <div><FavouritePage /></div>
                    <div><FavouritePage /></div>
                </div>
                <div>
                    <div><SavedPage /></div>
                </div>
            </div>
            <div><Navigation /></div>

        </div>
    )
}