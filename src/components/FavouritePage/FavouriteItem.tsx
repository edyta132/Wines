import styles from './Favourite.module.scss'

export const FavouriteItem = ({ name, subtitle, category, img }) => {
    return (
        <div className={styles.container}>
            <div className={styles.wineImgCnt}>
                <img className={styles.wineImage} src={img}></img>
            </div>
            <p className={styles.wineTitle}>{name}</p>
            <p className={styles.wineCategory}>{subtitle} wine</p>
            <p className={styles.wineCategory}>{category}</p>
        </div>
    )
}