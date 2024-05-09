import style from './Icons.module.scss'
import Heart from '../../assets/icon_favourite.svg?react'
import { useState } from 'react'

export const Favourite = () => {
    const [color, setColor] = useState(true)

    const toggleColor = () => {
        setColor(!color)
    }
    return (
        <div><Heart className={style.icon} onClick={toggleColor} style={{ color: color ? "#FFFFFF" : '#A68AEE' }} /></div>
    )
}