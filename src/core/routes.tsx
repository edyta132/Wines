import { Login } from "../pages/Login/Login";
import { MainPage } from "../pages/MainPage/MainPage";

export const routes = [
    { path: '/login', exact: true, element: <Login /> },
    { path: '/', exact: true, element: <MainPage /> }
] as const