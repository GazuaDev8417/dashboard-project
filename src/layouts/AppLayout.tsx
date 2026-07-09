import { Outlet } from "react-router-dom"
import Header from "../components/layout/Header"
import Sidebar from "../components/layout/Sidebar"



export default function AppLayout(){
    return(
        <div className="flex h-screen">
            <Sidebar/>
            <div className="flex flex-1 flex-col">
                <Header/>

                <main className="flex-1 bg-gray-100 p-6">
                    <Outlet/>
                </main>
            </div>
        </div>
    )
}