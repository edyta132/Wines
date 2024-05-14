import { FavouritePage } from '../../components/FavouritePage/FavouritePage'
import { useContext, useState } from 'react'
import { Navigation } from '../../components/Navigation/Navigation'
// import { SavedPage } from '../../components/SavedPage/savedPage'
import styles from './Profil.module.scss'
import { AppContext } from '../../App'
import { SavedPage } from '../../components/SavedPage/savedPage'
import { MyWines } from '../../components/MyWines/MyWines'
// import { TabButtons } from '../../components/Tab/TabButtons'
// import { TabConntent } from '../../components/Tab/TabContent'

export const Profil = () => {
    const { user } = useContext(AppContext)
    // const [activeTab, setActiveTab] = useState(false)
    const [toggle, setToggle] = useState(1)

    const updateToggle = (id) => {
        console.log(id)
        setToggle(id)
    }

    return (
        <div>
            <div className={styles.profilCnt}>
                <div className={styles.profilAvatar}></div>
                <h1 className={styles.profilName}>{user?.displayName}</h1>
            </div>
            <div className={styles.itemsCnt}>
                <ul className={styles.itemsList}>
                    <li className={toggle === 1 ? styles.itemsLinkActive : styles.itemsLink} onClick={() => updateToggle(1)}>Favourite</li>
                    <li className={toggle === 2 ? styles.itemsLinkActive : styles.itemsLink} onClick={() => updateToggle(2)}>Saved</li>
                    <li className={toggle === 3 ? styles.itemsLinkActive : styles.itemsLink} onClick={() => updateToggle(3)}>My wines</li>
                </ul>
                <div className={toggle === 1 ? styles.showContent : styles.wineListCnt}>
                    <FavouritePage />
                </div>
                <div className={toggle === 2 ? styles.showContent : styles.wineListCnt}>
                    <div><SavedPage /></div>
                </div>
                <div className={toggle === 3 ? styles.showContent : styles.wineListCnt}>
                    <MyWines />
                </div>
            </div >
            < div > <Navigation /></div >

        </div >
    )
}


