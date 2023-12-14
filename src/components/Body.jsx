import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "../pages/Login";
import Browse from "../components/Browse"

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browser",
            element: <Browse />
        },
    ]);
    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body