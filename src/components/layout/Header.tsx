import { Menu } from 'lucide-react'
import { useSidebar } from '@/context/SideBarContext'
import NotificationMenu from './NotificationMenu'
import UserMenu from './UserMenu'
/* import { useStackId } from 'recharts/types/cartesian/BarStack' */



export default function Header(){
    const { toggleSidebar } = useSidebar()

    
    return(
        <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 md:px-6">
            {/* left side */}
            <div className="flex items-center gap-3">
                <button 
                    className='rounded-lg p-2 hover:bg-slate-100 lg:hidden'
                    onClick={toggleSidebar}>
                    <Menu size={22}/>
                </button>
            </div>            

            {/* right side */}
            <div className="flex items-center gap-2 md:gap-5">
                <NotificationMenu/>
                <UserMenu/>
            </div>
        </header>
    )
}