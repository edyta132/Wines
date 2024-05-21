import styles from './Favourite.module.scss'

type FavouriteItemsProps = {
    name: string;
    subtitle: string;
    category: string;
    img: string;
    rating: number
}
export const FavouriteItem = ({ name, subtitle, category, img }: FavouriteItemsProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.wineImgCnt}>
                <img className={styles.wineImage} src={img}></img>
            </div>
            <div className={styles.textCnt}>
                <p className={styles.wineTitle}>{name}</p>
                <p className={styles.wineCategory}>{subtitle} wine</p>
                <p className={styles.wineCategory}>{category}</p>
            </div>
        </div>
    )
}