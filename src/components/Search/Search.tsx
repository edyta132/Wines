import styles from "./Search.module.scss"
import Loupe from '../../assets/search.svg?react'


export const Search = () => {
    return (
        <div className={styles.search}>
            <h3>Search</h3>
            <div><Loupe /></div>
        </div>
    )
}