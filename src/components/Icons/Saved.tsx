import style from './Icons.module.scss'
import { useState } from 'react'
import Save from '../../assets/icon_saved.svg?react'


export const Saved = () => {
    const [color, setColor] = useState(true)

    const toggleColor = () => {
        setColor(!color)
    }
    return (
        <div><Save className={style.icon} onClick={toggleColor} style={{ color: color ? "#FFFFFF" : '#A68AEE' }} /></div>
    )
}