import { Favourite } from '../Icons/Favourite'
import { Stars } from '../Stars/Starts'
import styles from './SavedPage.module.scss'

export const SavedItems = ({ name, subtitle, category, img, rating }) => {
    return (
        <div className={styles.mainCnt}>
            <div className={styles.itemCnt}>
                <div className={styles.titleCnt}>
                    <div className={styles.title}>{name}</div>
                    <div className={styles.subtitle}>{subtitle} {category}</div>
                    <div><Stars rating={rating} /></div>
                </div>
                <div className={styles.itemPhotoCnt}>
                    <div className={styles.itemPhoto}>
                        <img src={img} width={25} height={100}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}