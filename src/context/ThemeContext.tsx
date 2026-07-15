import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode
} from "react"


interface ThemeContextType{
    darkMode:boolean
    toggleTheme: () => void
}

const ThemeContext = createContext({} as ThemeContextType)


export function ThemeProvider({ children }: { children:ReactNode }){
    const [darkMode, setDarkMode] = useState(()=>{
        return localStorage.getItem('theme') === 'dark'
    })



    function toggleTheme(){
        setDarkMode((prev) => !prev)
    }


    useEffect(()=>{
        localStorage.setItem('theme', darkMode ? 'dark' : 'light')

        document.documentElement.classList.toggle('dark', darkMode)

    }, [darkMode])


    return(
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}


export function useTheme(){
    return useContext(ThemeContext)
}