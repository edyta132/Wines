import { useParams } from "react-router"
import { AppContext } from "../../App"
import { useContext } from "react"


export const CheckId = () => {
    const { wines } = useContext(AppContext)

    const { id } = useParams()
    console.log(wines)
    console.log(typeof id)

    const findWineObject = wines.find(el => el.id === Number(id))

    console.log(findWineObject)
    return (
        <div>
            <div>{findWineObject?.categories}</div>
            <div>{findWineObject?.name}</div>
            <div>{findWineObject?.country}</div>
            <div>{findWineObject?.description}</div>
            <div>{findWineObject?.image}</div>
        </div>
    )
}