import styles from "./ListOfWine.module.scss"
import { Navigation } from "../../components/Navigation/Navigation"
import { Link } from "react-router-dom"
import Arrow from "../../assets/arrow_left.svg?react"
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../../core/services/firebase"
import { useEffect, useState } from "react"
// import { api } from "../../core/api/api";
// import { WineListItem } from "./types";
import { WineListItem } from "../../components/WineListItem/WineListItem";
import { WineListItemType } from "./types";

// console.log(api)

export const ListOfWine = () => {
    const [winesList, setWineList] = useState<WineListItemType[]>([])

    const winesCollectionRef = collection(db, "wines")

    useEffect(() => {
        const getWinesList = async () => {
            try {
                const data = await getDocs(winesCollectionRef);
                const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                // console.log(filteredData)
                setWineList(filteredData)
            } catch (err) {
                console.log(err)
            }
        }

        getWinesList()

    }, [])

    // console.log(winesCollectionRef)
    // console.log(winesList)
    // useEffect(() => {
    //     const sendData = async (el: WineListItem) => {
    //         try {
    //             await setDoc(doc(winesCollectionRef, `${el.id}`), el);
    //             console.log('poszlo')
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     // api.forEach(item => {
    //     //     sendData(item)
    //     // })
    //     // sendData()
    // }, [])

    const redWine = winesList.filter((el) => el.categories.includes("red"))
    console.log(redWine);
    const redSweetWine = redWine.filter((el) => el.categories.includes("sweet"))
    console.log(redSweetWine)

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.icons}>
                    <Link to="/category"><Arrow /></Link>
                    {/* <div><Filter /></div> */}
                </div>
                <h1 className={styles.title}>Tytuł</h1>
                <h2 className={styles.subtitle}>Subtytuł</h2>
                <ul>{redSweetWine.map((item, id) => <li className={styles.list} key={id}><WineListItem name={item.name} categories={item.categories} image={item.image} rating={item.rating} /></li>)}</ul>
            </div>
            <div><Navigation /></div>
        </div>
    )
}