import { NavLink } from "react-router-dom"


interface NavItemProps{
    to:string
    label:string
}



export default function NavItem({ to, label }:NavItemProps){
    return(
        <NavLink
            to={to}
            className="block rounded-md px-3 py-2 text-slate-300 transition-colors hover:bg-slate-800 hover:text-white">
            {label}
        </NavLink>
    )
}