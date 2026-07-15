import { NavLink } from "react-router-dom"
import type { LucideIcon } from "lucide-react"


interface NavItemProps{
    to:string
    label:string
    icon:LucideIcon
    onClick?: () => void
}



export default function NavItem({ to, label, icon, onClick }:NavItemProps){
    const Icon = icon
    const baseClasses = "flex items-center gap-3 rounded-md px-3 py-2 transition-colors"
    const activeClasses = "bg-slate-800 text-white font-medium"
    const inactiveClasses = "text-slate-300 hover:bg-slate-800 hover:text-white"

    return(
        <NavLink
            to={to}
            onClick={onClick}
            className={({ isActive })=> `${baseClasses} ${isActive ? activeClasses : inactiveClasses}` }>
            <Icon size={20}/>
            <span>{label}</span>            
        </NavLink>
    )
}