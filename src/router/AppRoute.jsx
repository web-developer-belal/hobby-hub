import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ErrorPage from "../pages/ErrorPage";
import Root from "../layouts/Root";
const router =createBrowserRouter([
    {
        path:'/',
        Component:Root,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                index:true,
                element:<Home></Home>,
            },
            {
                path:'/login',
                element:<Login></Login>,
                
            },
            {
                path:'/register',
                element:<Register></Register>,
            }
        ]
    }
]);

export default router;