import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "@/lib/queryClient"
import { Toaster } from "sonner"
import { SideBarProvider } from "./context/SideBarContext"
import { ThemeProvider } from "./context/ThemeContext"
import router from "./routes/router"

import './styles/global.css'



createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <SideBarProvider>
            <ThemeProvider>
                <QueryClientProvider client={queryClient}>
                    <RouterProvider router={router}/>
                    <Toaster position="top-right" richColors/>
                </QueryClientProvider>
            </ThemeProvider>
        </SideBarProvider>
    </StrictMode>
)