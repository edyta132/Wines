import styles from './Favourite.module.scss'

export const FavouritePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wineImgCnt}>
                <img className={styles.wineImage} src="https://images.vivino.com/thumbs/CdTojlE9Tn-Ty3QR0k-DSg_pb_x300.png"></img>
            </div>
            <p className={styles.wineTitle}>Title</p>
            <p className={styles.wineCategory}>Rose Wine</p>
            <p className={styles.wineCategory}>Sweet</p>
        </div>
    )
}