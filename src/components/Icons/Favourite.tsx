import style from './Icons.module.scss'
import Heart from '../../assets/icon_favourite.svg?react'
import { useContext } from 'react'
import { AppContext } from '../../App'



export const Favourite = ({ id }) => {
    const { userData, modifyUserDataFavourites, } = useContext(AppContext)

    const isChecked = userData?.favourites.includes(id)

    const handleModifyData = () => {
        modifyUserDataFavourites(id)
    }
    return (
        <div><Heart className={style.icon} onClick={handleModifyData} style={{ color: isChecked ? '#A68AEE' : "#FFFFFF" }} /></div>
    )
}