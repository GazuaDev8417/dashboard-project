import Button from "@/components/ui/Button"
import { useAuth } from "@/context/AuthContext"
import { useState } from "react"



export default function ProfileForm(){
    const { updateProfile, user } = useAuth()
    const [name, setName] = useState<string>(user.name)
    const [email, setEmail] = useState<string>(user.email)
    const [role, setRole] = useState<string>(user.role)



    return(
        <section className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold">Profile</h2>
            <div className="grid gap-5 md:grid-colors-2">
                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Full Name
                    </label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-lg border border-slate-300 p-3"/>
                    
                </div>
                <div>
                    <label className="mb-2 block text-sm font-medium">Email</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-lg border border-slate-300 p-3"/>
                </div>
            </div>
            <div className="mt-5">
                <label className="mb-2 block text-sm font-medium">Role</label>
                <input
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 p-3"/>
            </div>
            <div className="mt-6 justify-end">
                <Button onClick={()=>{
                    updateProfile({ name, email, role })
                }}>
                    Save Profile
                </Button>
            </div>
        </section>
    )
}