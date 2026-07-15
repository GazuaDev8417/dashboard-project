import NavItem from "@/components/ui/NavItem"
import { useSidebar } from "@/context/SideBarContext"
import {
    LayoutDashboard,
    Package,
    Users,
    BarChart3,
    Settings
} from 'lucide-react'



export default function Sidebar(){
    const { isOpen, closeSidebar } = useSidebar()


    
    return(
        <aside className={`
            fixed
            left-0
            top-0
            z-50
            min-h-screen
            w-72
            bg-slate-900
            p-4
            transition-transform
            duration-300
            ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
            }
            lg:relative
            lg:translate-x-0
            lg:shrink-0
        `}>
            <h1 className="text-2xl font-bold text-white">Dashboard SaaS</h1>

            <nav className="mt-8 flex flex-col gap-2">
                <NavItem to="/" label="Dashboard" icon={LayoutDashboard} onClick={closeSidebar} />
                <NavItem to="/products" label="Products" icon={Package} onClick={closeSidebar} />
                <NavItem to="/customers" label="Customers" icon={Users} onClick={closeSidebar}/>
                <NavItem to="/analytics" label="Analytics" icon={BarChart3} onClick={closeSidebar}/>
                <NavItem to="/settings" label="Settings" icon={Settings} onClick={closeSidebar}/>
            </nav>
        </aside>
    )
}