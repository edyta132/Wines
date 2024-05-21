import styles from "./ListOfWine.module.scss"
import { Navigation } from "../../components/Navigation/Navigation"
import { Link } from "react-router-dom"
import Arrow from "../../assets/arrow_left.svg?react"
import { useContext } from "react"
import { WineListContainer } from "../../components/WineListContainer/WineListContainer";
import { AppContext } from "../../App";
import { Nav } from "../../components/Burger/Nav"

export const ListOfWine = () => {
    const { wines } = useContext(AppContext)


    console.log(wines)
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.icons}>
                    <Link to="/category"><Arrow /></Link>
                    <Nav />
                </div>
                <WineListContainer title="rose" subtitle='sweet' winesList={wines} color="rose" taste="sweet" />
            </div>
            <div><Navigation /></div>
        </div>
    )
}