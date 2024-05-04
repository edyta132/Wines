import styles from "./ListOfWine.module.scss"
import { Navigation } from "../../components/Navigation/Navigation"
import { Link } from "react-router-dom"
import Arrow from "../../assets/arrow_left.svg?react"
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../../core/services/firebase"
import { useEffect, useState } from "react"
import { api } from "../../core/api/api";
import { WineListItem } from "./types";

console.log(api)


// const citiesRef = collection(db, "wines");
export const ListOfWine = () => {
    const [winesList, setWineList] = useState([])

    const winesCollectionRef = collection(db, "wines")

    useEffect(() => {
        const getWinesList = async () => {
            try {
                const data = await getDocs(winesCollectionRef);
                const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                console.log(filteredData)
                setWineList(filteredData)
            } catch (err) {
                console.log(err)
            }
        }

        getWinesList()

    }, [])
    console.log(winesCollectionRef)
    console.log(winesList)
    // // const alovelaceDocumentRef = doc(db, 'wine-list', 'list');
    useEffect(() => {
        const sendData = async (el: WineListItem) => {
            try {
                await setDoc(doc(winesCollectionRef, `${el.id}`), el);
                console.log('poszlo')
            } catch (error) {
                console.log(error)
            }
        }
        // api.forEach(item => {
        //     sendData(item)
        // })
        // sendData()
    }, [])
    // // console.log({ alovelaceDocumentRef })
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.icons}>
                    <Link to="/category"><Arrow /></Link>
                    {/* <div><Filter /></div> */}
                </div>
                <h1 className={styles.title}>Tytuł</h1>
                <h2 className={styles.subtitle}>Subtytuł</h2>
            </div>
            <div><Navigation /></div>
        </div>
    )
}