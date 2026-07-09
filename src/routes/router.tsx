import { createBrowserRouter } from "react-router-dom"
import DashboardPage from "@/pages/dashboard/DashboardPage"
import NotFoundPage from "@/pages/not-found/NotFoundPage"
import AppLayout from "@/layouts/AppLayout"



const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        errorElement: <NotFoundPage/>,
        children: [
            {
                index: true,
                element: <DashboardPage/>,
            }
        ]
    }
])


export default router