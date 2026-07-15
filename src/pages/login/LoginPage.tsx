import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { Mail, Lock } from "lucide-react"
import { user } from "@/constants/user"
import Button from "@/components/ui/Button"
import z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"




const loginSchema = z.object({
    email: z.email('Invalid email address'),
    password: z.string().min(6, 'Password must contain at least 6 characters'),
    remember: z.boolean().default(false)
})

type LoginForm = z.output<typeof loginSchema>


export default function LoginPage(){
    const {register, handleSubmit, formState:{ errors }} = useForm<z.input<typeof loginSchema>,
        any,
        z.output<typeof loginSchema>
    >({ resolver: zodResolver(loginSchema), defaultValues: { email: '', password: '', remember: false }})


    const navigate = useNavigate()



    useEffect(()=>{
        const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'

        if(isAuthenticated){
            navigate('/')
        }
    }, [navigate])



    const onSubmit = (data:LoginForm)=>{
        if(data.email === user.email && data.password === user.password && data.remember){
            localStorage.setItem('isAuthenticated', 'true')
            localStorage.setItem('user', JSON.stringify(user))
            
            navigate('/')

            return
        }else if(data.email === user.email && data.password === user.password && !data.remember){
            sessionStorage.setItem('isAuthenticated', 'true')
            sessionStorage.setItem('user', JSON.stringify(user))

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
                        onSubmit={handleSubmit(onSubmit)}
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
                                    {...register('email')}
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
                                
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-500">
                                        {errors.email?.message}
                                    </p>
                                )}
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
                                    {...register('password')}
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

                                {errors.password && (
                                    <p className="mt-1 text-sm text-red-500">
                                        {errors.password?.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="mt-7 mb-7 flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    {...register('remember')} 
                                    type="checkbox" 
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