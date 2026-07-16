import Button from "@/components/ui/Button"
import { useAuth } from "@/context/AuthContext"
import { useState } from "react"



export default function SecurityForm() {
    const { user, updatePassword } = useAuth()
    const [currentPassword, setCurrentPassword] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')



    function changePassord(){
        if(currentPassword !== user.password){
            alert('Current password incorrect')

            return
        }else if(password !== confirmPassword){
            alert('The password and its confirmation does not match')

            return
        }

        updatePassword(password)
        alert('Password changed successfully')

        setCurrentPassword('')
        setPassword('')
        setConfirmPassword('')
    }



    return (
        <section className="rounded-xl bg-white p-6 shadow-sm">
            
            <h2 className="mb-6 text-xl font-semibold">Security</h2>
            <div className="space-y-5">
                <input
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    type="password"
                    placeholder="Current password"
                    className="w-full rounded-lg border border-slate-300 p-3"/>

                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="New password"
                    className="w-full rounded-lg border border-slate-300 p-3"/>

                <input
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type="password"
                    placeholder="Confirm password"
                    className="w-full rounded-lg border border-slate-300 p-3"/>
            </div>

            <div className="mt-6 flex justify-end">
                <Button onClick={changePassord}>Update Password</Button>
            </div>

        </section>

    )
}