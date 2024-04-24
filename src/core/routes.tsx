import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Login/Register";
import { MainPage } from "../pages/MainPage/MainPage";

export const routes = [
    { path: '/login', element: <Login /> },
    { path: '/account', element: <Register /> },
    { path: '/', element: <MainPage /> }
] as const