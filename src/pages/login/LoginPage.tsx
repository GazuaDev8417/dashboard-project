import { Mail, Lock, FileX } from "lucide-react"
import Button from "@/components/ui/Button"



export default function LoginPage(){
    return(
        <div className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
            <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-xl">

                <div className="mb-8 flex flex-col gap-3 items-center">
                    <div className="mg-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                        FF
                    </div>

                    <h1 className="text-3x1 font-bold text-slate-800">
                        Welcome Back
                    </h1>

                    <p className="mt-2 text-sm text-slate-500">
                        Sign in to continue to your dashboard
                    </p>

                    <form className="space-y5">
                        <div>
                            <label 
                                htmlFor="email" 
                                className="mb-2 block text-sm font-medium text-slate-700">
                                Email
                            </label>

                            <div className="relative">
                                <Mail
                                    size={18}
                                    className="absolute left-3 top-1/2 -transition-y-1/2 text-slate-400"/>
                                <input 
                                    id="email"
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
                                    className="absolute left-3 top-1/2 -transition-y-1/2 text-slate-400"/>
                                
                                <input 
                                    id="password"
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
                                <input type="checkbox" className="rounded border-slate-300" />
                                Remember me
                            </label>

                            <button className="text-blue-600 hover:text-blue-700">
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