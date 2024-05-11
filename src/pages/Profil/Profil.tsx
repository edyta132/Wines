import { FavouritePage } from '../../components/FavouritePage/FavouritePage'
import { useContext } from 'react'
import { Navigation } from '../../components/Navigation/Navigation'
// import { SavedPage } from '../../components/SavedPage/savedPage'
import styles from './Profil.module.scss'
import { AppContext } from '../../App'

export const Profil = () => {
    const { user, wines, userData } = useContext(AppContext)
    console.log(user?.displayName)
    console.log(wines)
    console.log(userData)

    return (
        <div>
            <div className={styles.profilCnt}>
                <div className={styles.profilAvatar}></div>
                <h1 className={styles.profilName}>{user?.displayName}</h1>
            </div>
            <div className={styles.itemsCnt}>
                <ul className={styles.itemsList}>
                    <li className={styles.itemsLink}>Favourite</li>
                    <li className={styles.itemsLink}>Saved</li>
                    <li className={styles.itemsLink}>My wines</li>
                </ul>
                <div className={styles.wineListCnt}>
                    <FavouritePage wineList={wines} />
                </div>
                <div>
                    {/* <div><SavedPage /></div> */}
                </div>
            </div>
            <div><Navigation /></div>

        </div>
    )
}