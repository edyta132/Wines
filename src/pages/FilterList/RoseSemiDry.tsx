import { useContext } from "react"
import { AppContext } from "../../App"
import { WineListContainer } from "../../components/WineListContainer/WineListContainer"
import { Navigation } from "../../components/Navigation/Navigation"
import Arrow from "../../assets/arrow_left.svg?react"
import styles from "../ListOfWine/ListOfWine.module.scss"
import { Link } from "react-router-dom"



export const RoseSemiDry = () => {
    const { wines } = useContext(AppContext)

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.icons}>
                    <Link to="/category"><Arrow /></Link>
                    {/* <div><Filter /></div> */}
                </div>
                <WineListContainer title="Rose" subtitle='semi-dry' winesList={wines} color="rose" taste="semi-dry" />
            </div>
            <div><Navigation /></div>
        </div>
    )
}