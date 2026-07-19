import { useNavigate } from "react-router-dom"
import { useEffect, useState, type SubmitEvent, type ChangeEvent} from "react"
import { Mail, Lock } from "lucide-react"
import { useAuth } from "@/context/AuthContext"
import Button from "@/components/ui/Button"




interface FormData{
    email:string
    password:string
}




export default function LoginPage(){
    const navigate = useNavigate()
    const { user } = useAuth()
    const [checked, setChecked] = useState<boolean>(false)
    const [form, setForm] =useState<FormData>({
        email: user.email,
        password: user.password
    })
    

    useEffect(()=>{
        const isLocalAuth = localStorage.getItem('isAuthenticated') === 'true'
        const isSessionAuth = sessionStorage.getItem('isAuthenticated') === 'true'

        if(isLocalAuth || isSessionAuth){
            navigate('/')
        }
    }, [navigate])



    const onChange = (e:ChangeEvent<HTMLInputElement>):void=>{
        const { name, value } = e.target
        setForm({ ...form, [name]:value })
    }


    const login = (e:SubmitEvent<HTMLFormElement>)=>{
        e.preventDefault()
        
        if(form.email === user.email && form.password === user.password){
            const { password, ...userProfile } = user

            if(checked){
                localStorage.setItem('isAuthenticated', 'true')
                localStorage.setItem('user', JSON.stringify(userProfile))
            }else{
                sessionStorage.setItem('isAuthenticated', 'true')
                sessionStorage.setItem('user', JSON.stringify(userProfile))
            }

            navigate('/')
            return
        }

        alert('Invalid email or password')
    }



    return(
        <div className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
            <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-xl">

                <div className="mb-8 flex flex-col gap-3 items-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                        FF
                    </div>

                    <h1 className="text-3xl font-bold text-slate-800">
                        Welcome Back
                    </h1>

                    <p className="mt-2 text-sm text-slate-500">
                        Sign in to continue to your dashboard
                    </p>

                    <form 
                        onSubmit={login}
                        className="space-y-5">
                        <div>
                            <label 
                                htmlFor="email" 
                                className="mb-2 block text-sm font-medium text-slate-700">
                                Email
                            </label>

                            <div className="relative">
                                <Mail
                                    size={18}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"/>
                                <input 
                                    name="email"
                                    value={form.email}
                                    onChange={onChange}
                                    type="email"
                                    placeholder="your@email.com"
                                    className="
                                        w-full
                                        rounded-lg
                                        border
                                        border-slate-300
                                        py-3
                                        pl-10
                                        pr-4
                                        outline-none
                                        transition
                                        focus:border-blue-500
                                    " />
                            </div>
                        </div>

                        <div>
                            <label 
                                htmlFor="password" 
                                className="mb-2 mt-4 block text-sm font-medium text-slate-700">Password</label>
                            
                            <div className="relative">
                                <Lock
                                    size={18}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"/>
                                
                                <input
                                    name="password"
                                    value={form.password}
                                    onChange={onChange}
                                    type="password"
                                    placeholder="Your password" 
                                    className="
                                        w-full
                                        rounded-lg
                                        border
                                        border-slate-300
                                        py-3
                                        pl-10
                                        pr-4
                                        outline-none
                                        transition
                                        focus:border-blue-500
                                    " />
                            </div>
                        </div>

                        <div className="mt-7 mb-7 flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox" 
                                    checked={checked}
                                    onChange={(e) => setChecked(e.target.checked)}
                                    className="rounded border-slate-300" />
                                Remember me
                            </label>

                            <button
                                onClick={()=>{
                                    alert('Password recovery is not available in the demo version.')
                                }}
                                type="button"
                                className="text-blue-600 hover:text-blue-700 cursor-pointer">
                                Forgot password?
                            </button>
                        </div>

                        <Button
                            type="submit"
                            className="w-full">
                            Sign in
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}