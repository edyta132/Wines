import styles from './Favourite.module.scss'
import { useContext } from 'react'
import { FavouriteItem } from './FavouriteItem'
import { AppContext } from '../../App'
import { Link } from 'react-router-dom'

export const FavouritePage = () => {
    const { userData, wines } = useContext(AppContext)

    const favouritesWines = wines.filter(el => {
        if (userData?.favourites.includes(el.id)) {
            return true
        }
        return false

    })

    return (
        <ul className={styles.wineListCnt}>{favouritesWines.map((el, idx) => <Link className={styles.link} to={`/wine-description/${el.id}`} key={idx}><li className={styles.wineList} key={idx}><FavouriteItem name={el.name} subtitle={el.categories[0]} category={el.categories[1]} img={el.image} /></li></Link>)}</ul>
    )
}