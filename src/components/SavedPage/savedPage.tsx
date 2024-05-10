import { Favourite } from '../Icons/Favourite'
import { Stars } from '../Stars/Starts'
import styles from './SavedPage.module.scss'

export const SavedPage = () => {
    return (
        <div className={styles.mainCnt}>
            <div className={styles.itemCnt}>
                <div className={styles.iconsCnt}>
                    <div><Favourite style={{ width: 8, height: 8, color: "#FAFAFA" }} /></div>
                </div>
                <div className={styles.titleCnt}>
                    <div className={styles.title}>Title</div>
                    <div><Stars /></div>
                </div>
                <div className={styles.itemPhotoCnt}>
                    <div className={styles.itemPhoto}>
                        <img src="https://images.vivino.com/thumbs/CdTojlE9Tn-Ty3QR0k-DSg_pb_x300.png" width={30} height={120}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}