import { useState } from "react"
import Switch from "@/components/ui/Switch"



export default function NotificationsSettings(){
    const [email, setEmail] = useState<boolean>(true)
    const [push, setPush] = useState<boolean>(false)
    const [marketing, setMarketing] = useState<boolean>(false)


    return(
        <section className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold">Notifications</h2>
            <div className="space-y-5">
                <label className="flex items-center justify-between">
                    <span>Email Notifications</span>
                    <Switch
                        checked={email}
                        onChange={() =>
                            setEmail(!email)
                        }/>
                </label>

                <label className="flex items-center justify-between">
                    <span>Push Notifications</span>
                    <Switch
                        checked={push}
                        onChange={() =>
                            setPush(!push)
                        }/>
                </label>

                <label className="flex items-center justify-between">
                    <span>Marketing Emails</span>
                    <Switch
                        checked={marketing}
                        onChange={() =>
                            setMarketing(!marketing)
                        }/>
                </label>

            </div>
        </section>
    )
}