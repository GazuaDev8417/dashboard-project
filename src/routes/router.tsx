import { createBrowserRouter } from "react-router-dom"
import AnalyticsPage from "@/pages/analytics/AnalyticsPage"
import CustomersPage from "@/pages/customers/CustomersPage"
import DashboardPage from "@/pages/dashboard/DashboardPage"
import NotFoundPage from "@/pages/not-found/NotFoundPage"
import ProductsPage from "@/pages/products/ProductsPage"
import SettingsPage from "@/pages/settings/SettingsPage"
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
            },
            {
                path: 'analytics',
                element: <AnalyticsPage/>
            },
            {
                path: 'customers',
                element: <CustomersPage/>
            },
            {
                path: 'products',
                element: <ProductsPage/>
            },
            {
                path: 'settings',
                element: <SettingsPage/>
            }
        ]
    }
])


export default router