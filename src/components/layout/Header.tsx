import { Bell } from "lucide-react"


export default function Header(){
    return(
        <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
            {/* left side */}
            <div>
                <h1 className="text-lg font-semibold text-slate-800">
                    Dashboard SaaS
                </h1>
            </div>

            {/* right side */}
            <div className="flex items-center gap-4">
                <Bell
                    size={20}
                    className="cursor-pointer text-slate-600 hover:text-slate-900"/>

                <div className="h-10 w-10 rounded-full bg-slate-300"/>
            </div>
        </header>
    )
}