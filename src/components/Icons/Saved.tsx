import style from './Icons.module.scss'
import { useContext } from 'react'
import Save from '../../assets/icon_saved.svg?react'
import { AppContext } from '../../App'


export const Saved = ({ id }) => {
    const { userData, modifyUserDataSaved } = useContext(AppContext)

    const isChecked = userData?.saved.includes(id)

    const handleModifyData = () => {
        modifyUserDataSaved(id)
    }
    return (
        <div><Save className={style.icon} onClick={handleModifyData} style={{ color: isChecked ? '#A68AEE' : "#FFFFFF" }} /></div>
    )

}