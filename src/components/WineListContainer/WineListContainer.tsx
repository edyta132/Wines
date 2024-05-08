import { WineListItemType } from "../../pages/ListOfWine/types"
import { WineListItem } from "../WineListItem/WineListItem"
import styles from "./WineListContainer.module.scss"


type WineListContainerProps = {
    title: string,
    subtitle: string
    color: string,
    taste: string
    winesList: WineListItemType[]
}

export const WineListContainer = ({ title, subtitle, winesList, color, taste }: WineListContainerProps) => {


    const filterList = winesList.filter(el => el.categories.includes(color)).filter(el => {
        if (taste === "") {
            return true
        }
        return el.categories.includes(taste)
    })



    return (
        <div>
            <h1 className={styles.title}>{title}</h1>
            <h2 className={styles.subtitle}>{subtitle}</h2>
            <ul>{filterList.map((item, id) => <li className={styles.list} key={id}><WineListItem name={item.name} categories={item.categories} image={item.image} rating={item.rating} /></li>)}</ul>
        </div>
    )
}