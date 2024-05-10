import { Link } from 'react-router-dom'
import { Navigation } from '../../components/Navigation/Navigation'
import styles from './WineDescription.module.scss'
import Arrow from "../../assets/arrow_left.svg?react"
import { Favourite } from '../../components/Icons/Favourite'
import { Saved } from '../../components/Icons/Saved'
import { Stars } from '../../components/Stars/Starts'
import { useParams } from "react-router"
import { AppContext } from "../../App"
import { useContext } from "react"



export const WineDescription = () => {
    const { wines } = useContext(AppContext)
    const { id } = useParams()
    const findWineObject = wines.find(el => el.id === Number(id))

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.iconsRow}>
                    <div className={styles.iconsCol}>
                        <Link to={`/${findWineObject?.categories.join('-')}`}><Arrow /></Link>
                        <div className={styles.iconsCnt}>
                            <div><Favourite /></div>
                            <div><Saved /></div>
                        </div>
                    </div>
                    <div className={styles.imgCnt}>
                        <img className={styles.wineImage} src={findWineObject?.image}></img>
                    </div>
                </div>
                <div className={styles.descriptionCnt}>
                    <div className={styles.descriptionRow}>
                        <div className={styles.descriptionCol}>
                            <h2 className={styles.descriptionTitle}>{findWineObject?.name}</h2>
                            <p className={styles.descriptionCategory}>{findWineObject?.categories.join(', ')}</p>
                            <p className={styles.descriptionCategory}>{findWineObject?.country}</p>
                        </div>
                        <Stars rating={findWineObject?.rating ?? 0} />
                    </div>
                    <div>{findWineObject?.description}</div>
                </div>
            </div>

            <div><Navigation /></div>
        </div>
    )
}
