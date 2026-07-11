import { Bell, Search } from "lucide-react"


export default function Header(){
    return(
        <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
            {/* Search */}
            <div className="relative w-80">
                <Search
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"/>
                
                <input
                    type='text'
                    placeholder="Search..."
                    className="w-full rounded-lg border border-slate-300 py-2 pl-10 pr-4 outline-none transition focus:border-blue-500"/>
            </div>
            

            {/* right side */}
            <div className="flex items-center gap-5">
                <button className="relative rounded-full p-2 transition hover:bg-slate-100">
                    <Bell size={20}/>

                    <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"/>
                </button>

                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
                        FF
                    </div>

                    <div>
                        <p className="text-sm font-semibold text-slate-800">
                            Flamarion França
                        </p>

                        <p className="text-xs text-slate-500">
                            Full Stack Developer
                        </p>
                    </div>
                </div>
            </div>
        </header>
    )
}