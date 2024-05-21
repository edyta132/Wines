import styles from "./MainPage.module.scss"
import { Navigation } from "../../components/Navigation/Navigation"
import Dry from '../../assets/dry.png'
import SemiDry from '../../assets/semi-dry.png'
import SemiSweet from '../../assets/semi-sweet.png'
import Sweet from '../../assets/sweet.png'
import { Link, useSearchParams } from "react-router-dom"
import { Search } from "../../components/Search/Search"
import Arrow from "../../assets/arrow_left.svg?react"



export const Category = () => {
    const [queryParams] = useSearchParams()
    const selectedCategory = queryParams.get('selectedCat')


    const getDryLink = () => {
        switch (selectedCategory) {
            case 'red':
                return '/red-dry'
            case 'white':
                return '/white-dry'
            case 'rose':
                return '/rose-dry'
            default:
                return '';
        }
    }

    const getSemiDryLink = () => {
        switch (selectedCategory) {
            case 'red':
                return '/red-semi-dry'
            case 'white':
                return '/white-semi-dry'
            case 'rose':
                return '/rose-semi-dry'
            default:
                return '';
        }
    }

    const getSemiSweetLink = () => {
        switch (selectedCategory) {
            case 'red':
                return '/red-semi-sweet'
            case 'white':
                return '/white-semi-sweet'
            case 'rose':
                return '/rose-semi-sweet'
            default:
                return '';
        }
    }

    const getSweetLink = () => {
        switch (selectedCategory) {
            case 'red':
                return '/red-sweet'
            case 'white':
                return '/white-sweet'
            case 'rose':
                return '/rose-sweet'
            default:
                return '';
        }
    }


    return (
        <div className={styles.mainPage}>
            <div className={styles.mainContainer}>
                <Link to="/"><Arrow /></Link>
                <div>
                    <Search />
                </div>
                <div className={styles.categoryCnt}>
                    <Link className={styles.link} to={getDryLink()}>
                        <div className={styles.categorySingleWine}>
                            <img src={Dry} />
                            <h2 className={styles.subTitle}>Dry</h2>
                        </div>
                    </Link>
                    <Link className={styles.link} to={getSemiDryLink()}>
                        <div className={styles.categorySingleWine}>
                            <img src={SemiDry} />
                            <h2 className={styles.subTitle}>Semi-Dry</h2>
                        </div>
                    </Link>
                    <Link className={styles.link} to={getSemiSweetLink()}>
                        <div className={styles.categorySingleWine}>
                            <img src={SemiSweet} />
                            <h2 className={styles.subTitle}>Semi-Sweet</h2>
                        </div>
                    </Link>
                    <Link className={styles.link} to={getSweetLink()}>
                        <div className={styles.categorySingleWine}>
                            <img src={Sweet} />
                            <h2 className={styles.subTitle}>Sweet</h2>
                        </div>
                    </Link>
                </div>
            </div>
            <div><Navigation /></div>
        </div >
    )
}