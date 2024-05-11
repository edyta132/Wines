// import styles from './Favourite.module.scss'
import { useContext, useState } from 'react'
import { FavouriteItem } from './FavouriteItem'
import { AppContext } from '../../App'

export const FavouritePage = ({ wineList }) => {
    const { userData } = useContext(AppContext)


    // const isFavourite = userData?.favourites.includes(id)

    return (
        <ul>{wineList.map((el, idx) => <li key={idx}><FavouriteItem name={el.name} subtitle={el.categories[0]} category={el.categories[1]} img={el.image} /></li>)}</ul>
    )
}