import type { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children:ReactNode
}


export default function Button({ children, className = '', ...props }:ButtonProps){
    return(
        <button
            {...props} 
            className={`rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700 cursor-pointer ${className}`}>
            { children }
        </button>
    )
}