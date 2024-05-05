import styles from "./ListOfWine.module.scss"
import { Navigation } from "../../components/Navigation/Navigation"
import { Link } from "react-router-dom"
import Arrow from "../../assets/arrow_left.svg?react"
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../core/services/firebase"
import { useContext, useEffect, useState } from "react"
// import { api } from "../../core/api/api";
// import { WineListItem } from "./types";
// import { WineListItem } from "../../components/WineListItem/WineListItem";
import { WineListItemType } from "./types";
import { WineListContainer } from "../../components/WineListContainer/WineListContainer";
import { AppContext } from "../../App";

export const ListOfWine = () => {
    const { wines } = useContext(AppContext)

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.icons}>
                    <Link to="/category"><Arrow /></Link>
                    {/* <div><Filter /></div> */}
                </div>
                <WineListContainer title="Red" winesList={wines} color="red" taste="sweet" />
            </div>
            <div><Navigation /></div>
        </div>
    )
}