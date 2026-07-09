import type { ReactNode } from "react"

interface ButtonProps{
    children:ReactNode
}


export default function Button({ children }:ButtonProps){
    return(
        <button className="reounded-log bg-blue-600 px-4 py-2 text-white">
            { children }
        </button>
    )
}