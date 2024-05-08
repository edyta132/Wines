import { useContext } from "react"
import { AppContext } from "../../App"
import { WineListContainer } from "../../components/WineListContainer/WineListContainer"
import { Navigation } from "../../components/Navigation/Navigation"
import Arrow from "../../assets/arrow_left.svg?react"
import styles from "../ListOfWine/ListOfWine.module.scss"
import { Link } from "react-router-dom"
import { Nav } from "../../components/Burger/Nav"



export const WhiteSemiSweet = () => {
    const { wines } = useContext(AppContext)

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.icons}>
                    <Link to="/category?selectedCat=white"><Arrow /></Link>
                    <Nav />
                </div>
                <WineListContainer title="White" subtitle='semi-sweet' winesList={wines} color="white" taste="semi-sweet" />
            </div>
            <div><Navigation /></div>
        </div>
    )
}