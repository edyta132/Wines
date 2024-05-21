import { useContext } from 'react'
import styles from './SavedPage.module.scss'
import { AppContext } from '../../App'
import { SavedItems } from './SavedItems'
import { Link } from 'react-router-dom'

export const SavedPage = () => {
    const { userData, wines } = useContext(AppContext)

    const savedWines = wines.filter(el => {
        if (userData?.saved.includes(el.id)) {
            return true
        }
        return false

    })

    return (
        <ul className={styles.wineListCnt}>{savedWines.map((el, idx) => <Link className={styles.link} to={`/wine-description/${el.id}`} key={idx}> <li className={styles.wineList} key={idx}><SavedItems name={el.name} subtitle={el.categories[0]} category={el.categories[1]} img={el.image} rating={el.rating} /></li></Link>)}</ul>
    )
}