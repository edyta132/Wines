import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Login/Register";
import { Category } from "../pages/MainPage/Category";
import { MainPage } from "../pages/MainPage/MainPage";

export const routes = [
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path: '/', element: <MainPage /> },
    { path: '/category', element: <Category /> }

] as const