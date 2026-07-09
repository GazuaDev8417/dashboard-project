import NavItem from "@/components/ui/NavItem"



export default function Sidebar(){
    return(
        <aside className="flex flex-col bg-slate-900 w-72 h-screen p-4">
            <h1 className="text-2xl font-bold text-white">Dashboard SaaS</h1>

            <nav className="mt-8 flex flex-col gap-2">
                <NavItem to="/" label="Dashboard"/>
                <NavItem to="/products" label="Products"/>
                <NavItem to="/customers" label="Customers"/>
                <NavItem to="/analytics" label="Analytics"/>
                <NavItem to="/settings" label="Settings"/>
            </nav>
        </aside>
    )
}