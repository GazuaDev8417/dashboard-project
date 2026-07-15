import { Menu } from 'lucide-react'
import { useSidebar } from '@/context/SideBarContext'
import { Search } from "lucide-react"
import NotificationMenu from './NotificationMenu'
import UserMenu from './UserMenu'
/* import { useStackId } from 'recharts/types/cartesian/BarStack' */



export default function Header(){
    const { toggleSidebar } = useSidebar()

    
    return(
        <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
            {/* Search */}
            <div className="relative hidden w-80 md:block">
                <Search
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"/>
                
                <button 
                    className='rounded-lg p-2 hover:bg-slate-100 lg:hidden'
                    onClick={toggleSidebar}>
                    <Menu size={22}/>
                </button>
                <input
                    type='text'
                    placeholder="Search..."
                    className="w-full rounded-lg border border-slate-300 py-2 pl-10 pr-4 outline-none transition focus:border-blue-500"/>
            </div>
            

            {/* right side */}
            <div className="flex items-center gap-5">
                <NotificationMenu/>
                <UserMenu/>
                {/* <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
                        FF
                    </div>

                    <div className='hidden md:block'>
                        <p className="text-sm font-semibold text-slate-800">
                            Flamarion França
                        </p>

                        <p className="text-xs text-slate-500">
                            Full Stack Developer
                        </p>
                    </div>
                </div> */}
            </div>
        </header>
    )
}