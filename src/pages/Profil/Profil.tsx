import { FavouritePage } from '../../components/FavouritePage/FavouritePage'
import { useContext, useState } from 'react'
import { Navigation } from '../../components/Navigation/Navigation'
import styles from './Profil.module.scss'
import { AppContext } from '../../App'
import { SavedPage } from '../../components/SavedPage/savedPage'
import { MyWines } from '../../components/MyWines/MyWines'
import { getAuth, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router'
import { Link, useSearchParams } from 'react-router-dom'



export const Profil = () => {
    const { user } = useContext(AppContext)
    // const [activeTab, setActiveTab] = useState(false)
    const [toggle, setToggle] = useState(1)
    const navigate = useNavigate();
    // const [queryParams] = useSearchParams()
    // const selectedCategory = queryParams.get('tab')

    // console.log(queryParams.get('tab'))
    // const getCategory = () => {
    //     switch (selectedCategory) {
    //         case 'favourite':
    //             return '/favourite'
    //         case 'saved':
    //             return '/saved'
    //         case 'my wines':
    //             return '/my-wines'
    //         default:
    //             return '';
    //     }
    // }

    const updateToggle = (id) => {
        setToggle(id)
    }

    const handleLogOut = () => {
        const auth = getAuth()
        signOut(auth)
            .then(() => {
                console.log("Sign out successful")
                navigate('/login')
            }).catch((error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <div className={styles.profilCnt}>
                <div className={styles.profilAvatar}></div>
                <div className={styles.profilNameCnt}>
                    <h1 className={styles.profilName}>{user?.displayName}</h1>
                    <p onClick={handleLogOut}>Sign out</p>
                </div>
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


