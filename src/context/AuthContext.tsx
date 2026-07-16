import { useState, createContext, useContext, type ReactNode } from "react"




type User = {
    name:string
    email:string
    role:string
    password:string
}

type AuthContextType = {
    user:User
    updateProfile: (data: Omit<User, 'password'>) => void
    updatePassword: (password:string) => void
    defaultUser:User
}

const defaultUser:User = {
    name: 'Flamarion França',
    email: 'francadasilvaflamarion@gmail.com',
    role: 'Full Stack Developer',
    password: '123456'
}


const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }:{ children:ReactNode}){
    const [user, setUser] = useState<User>(()=>{
        const savedUser = localStorage.getItem('user')

        return savedUser
            ? JSON.parse(savedUser)
            : defaultUser
    })


    const updateProfile = (data: Omit<User, 'password'>)=>{
        setUser(current=>{
            const updatedUser = {
                ...current,
                ...data
            }

            localStorage.setItem('user', JSON.stringify(updatedUser))

            return updatedUser
        })
    }

    const updatePassword = (password:string)=>(
        setUser(current=>{
            const updatedUser = {
                ...current,
                password
            }

            localStorage.setItem('user', JSON.stringify(updatedUser))

            return updatedUser
        })
    )

    return(
        <AuthContext.Provider value={{ user, updatePassword, updateProfile, defaultUser }}>
            {children}
        </AuthContext.Provider>
    )
}


export function useAuth(){
    const context = useContext(AuthContext)

    if(!context){
        throw new Error('useAuth must be used inside AuthProvider')
    }

    return context
}




