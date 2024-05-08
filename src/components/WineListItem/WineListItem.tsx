import styles from "./WineListItem.module.scss"
import Favourite from '../../assets/icon_favourite.svg?react'
import Saved from '../../assets/icon_saved.svg?react'
import { Stars } from "../Stars/Starts"

type WineListItemProps = {
    name: string,
    categories: string[],
    image: string,
    rating: number
}

export const WineListItem = ({ name, image, rating }: WineListItemProps) => {
    return (
        <div className={styles.mainCnt}>
            <div className={styles.itemCnt}>
                <div className={styles.iconsCnt}>
                    <div><Favourite style={{ width: 15, height: 15 }} /></div>
                    <div ><Saved style={{ width: 15, height: 15 }} /></div>
                </div>
                <div className={styles.titleCnt}>
                    <div className={styles.title}>{name}</div>
                    <div><Stars rating={rating} /></div>
                </div>
                <div className={styles.itemPhotoCnt}>
                    <div className={styles.itemPhoto}>
                        <img src={image} width={30} height={120}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
