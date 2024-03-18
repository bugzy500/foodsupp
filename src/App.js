import React from "react";
import ReactDOM from 'react-dom/client'

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import About from "./components/About";

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
        ],
        errorElement: <Error />
    }
])

console.log(<Body/>)

const appReact = ReactDOM.createRoot(document.getElementById('root'))

appReact.render(<RouterProvider router={appRouter}/>)