import {
    createContext,
    useContext,
    useState,
    type ReactNode,
} from "react"

interface SidebarContextType {
    isOpen: boolean
    openSidebar: () => void
    closeSidebar: () => void
    toggleSidebar: () => void
}

const SidebarContext = createContext({} as SidebarContextType)



export function SideBarProvider({ children }: { children:ReactNode }){
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const openSidebar = () => setIsOpen(true)
    const closeSidebar = () => setIsOpen(false)
    const toggleSidebar = () =>
        setIsOpen((prev) => !prev)


    return(
        <SidebarContext.Provider value={{ isOpen, openSidebar, closeSidebar, toggleSidebar }}>
            {children}
        </SidebarContext.Provider>
    )
}


export function useSidebar(){
    return useContext(SidebarContext)
}