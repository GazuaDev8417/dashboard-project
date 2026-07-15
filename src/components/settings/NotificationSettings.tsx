import { useState } from "react"



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
                    <input
                        type="checkbox"
                        checked={email}
                        onChange={() =>
                            setEmail(!email)
                        }/>
                </label>

                <label className="flex items-center justify-between">
                    <span>Push Notifications</span>
                    <input
                        type="checkbox"
                        checked={push}
                        onChange={() =>
                            setPush(!push)
                        }/>
                </label>

                <label className="flex items-center justify-between">
                    <span>Marketing Emails</span>
                    <input
                        type="checkbox"
                        checked={marketing}
                        onChange={() =>
                            setMarketing(!marketing)
                        }/>
                </label>

            </div>
        </section>
    )
}