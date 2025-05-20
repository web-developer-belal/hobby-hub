import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
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
            }]
    }
]);

export default router;