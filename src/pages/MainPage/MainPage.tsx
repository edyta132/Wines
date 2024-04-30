import { useContext } from "react"

import { AppContext } from "../../App"

export const MainPage = () => {
    const { user } = useContext(AppContext)
    console.log(user?.displayName)
    return (
        <div> main page</div>
    )
} 