import { auth } from "../../core/services/firebase"

export const MainPage = () => {
    console.log(auth.currentUser?.displayName)
    return (
        <div> main page</div>
    )
}