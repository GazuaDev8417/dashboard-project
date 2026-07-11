import NavItem from "@/components/ui/NavItem"
import {
    LayoutDashboard,
    Package,
    Users,
    BarChart3,
    Settings
} from 'lucide-react'



export default function Sidebar(){
    return(
        <aside className="flex flex-col bg-slate-900 w-72 p-4">
            <h1 className="text-2xl font-bold text-white">Dashboard SaaS</h1>

            <nav className="mt-8 flex flex-col gap-2">
                <NavItem to="/" label="Dashboard" icon={LayoutDashboard} />
                <NavItem to="/products" label="Products" icon={Package} />
                <NavItem to="/customers" label="Customers" icon={Users} />
                <NavItem to="/analytics" label="Analytics" icon={BarChart3} />
                <NavItem to="/settings" label="Settings" icon={Settings} />
            </nav>
        </aside>
    )
}