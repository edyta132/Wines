import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Login/Register";
import { Category } from "../pages/MainPage/Category";
import { MainPage } from "../pages/MainPage/MainPage";
import { ListOfWine } from "../pages/ListOfWine/ListOfWine"
import { RedDry } from "../pages/FilterList/RedDry";
import { RedSemiDry } from "../pages/FilterList/RedSemiDry";
import { RedSemiSweet } from "../pages/FilterList/RedSemiSweet";
import { RedSweet } from "../pages/FilterList/RedSweet";
import { WhiteDry } from "../pages/FilterList/WhiteDry";
import { WhiteSemiDry } from "../pages/FilterList/WhiteSemiDry";
import { WhiteSemiSweet } from "../pages/FilterList/WhiteSemiSweet";
import { WhiteSweet } from "../pages/FilterList/WhiteSweet";
import { RoseDry } from "../pages/FilterList/RoseDry";
import { RoseSemiDry } from "../pages/FilterList/RoseSemiDry";
import { RoseSemiSweet } from "../pages/FilterList/RoseSemiSweet";
import { RoseSweet } from "../pages/FilterList/RoseSweet";
import { Sparkling } from "../pages/FilterList/Sparkling";
import { WineDescription } from "../pages/WineDescription/WineDescription";
import { Profil } from "../pages/Profil/Profil";
import { FavouritePage } from "../components/FavouritePage/FavouritePage";


export const routes = [
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path: '/', element: <MainPage /> },
    { path: '/category', element: <Category /> },
    { path: '/list-of-wine', element: <ListOfWine /> },
    { path: '/red-dry', element: <RedDry /> },
    { path: '/red-semi-dry', element: <RedSemiDry /> },
    { path: '/red-semi-sweet', element: <RedSemiSweet /> },
    { path: '/red-sweet', element: <RedSweet /> },
    { path: '/white-dry', element: <WhiteDry /> },
    { path: '/white-semi-dry', element: <WhiteSemiDry /> },
    { path: '/white-semi-sweet', element: <WhiteSemiSweet /> },
    { path: '/white-sweet', element: <WhiteSweet /> },
    { path: '/rose-dry', element: <RoseDry /> },
    { path: '/rose-semi-dry', element: <RoseSemiDry /> },
    { path: '/rose-semi-sweet', element: <RoseSemiSweet /> },
    { path: '/rose-sweet', element: <RoseSweet /> },
    { path: '/sparkling', element: <Sparkling /> },
    { path: '/wine-description', element: <WineDescription /> },
    { path: '/profil', element: <Profil /> },

] as const