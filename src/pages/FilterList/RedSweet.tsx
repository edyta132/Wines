import { useContext } from "react"
import { AppContext } from "../../App"
import { WineListContainer } from "../../components/WineListContainer/WineListContainer"
import { Navigation } from "../../components/Navigation/Navigation"
import Arrow from "../../assets/arrow_left.svg?react"
import styles from "../ListOfWine/ListOfWine.module.scss"
import { Link } from "react-router-dom"
import { Nav } from "../../components/Burger/Nav"



export const RedSweet = () => {
    const { wines } = useContext(AppContext)

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.icons}>
                    <Link to="/category?selectedCat=red"><Arrow /></Link>
                    <Nav />
                </div>
                <WineListContainer title="Red" subtitle='sweet' winesList={wines} color="red" taste="sweet" />
            </div>
            <div><Navigation /></div>
        </div>
    )
}