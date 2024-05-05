import Star from "../../assets/star.svg?react"
import styles from "./Stars.module.scss"

type StarsProps = {
    rating: number
}

export const Stars = ({ rating }: StarsProps) => {
    return (
        <div className={styles.starsCnt}>
            {[...Array(5)].map((star, index) => <Star key={index} style={{ color: index + 1 <= rating ? "#A68AEE" : "#E7DDFF" }} />)}
        </div>
    )
}