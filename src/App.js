import React, { Suspense, lazy } from "react";
import ReactDOM from 'react-dom/client'

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import About from "./components/About";
import ShimmerLoad from "./components/ShimmerLoading";
//import RestaurantPage from "./components/RestaurantPage";

const RestaurantPage = lazy(() => import("./components/RestaurantPage"))

const AppLayout = () => {
    return (
        <div className="main-container">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        children: [
            {
                path: '/',
                element: <Body/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/restaurant/:resId',
                element: <Suspense fallback={<ShimmerLoad/>}><RestaurantPage/></Suspense>
            },
        ],
        errorElement: <Error />
    }
])

console.log(<Body/>)

const appReact = ReactDOM.createRoot(document.getElementById('root'))

appReact.render(<RouterProvider router={appRouter}/>)