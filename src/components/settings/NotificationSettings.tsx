import { useState } from "react"
import Switch from "@/components/ui/Switch"
import { toast } from "sonner"
import { useTranslation } from "react-i18next"




export default function NotificationsSettings(){
    const { t } = useTranslation()
    const [email, setEmail] = useState<boolean>(true)
    const [push, setPush] = useState<boolean>(false)
    const [marketing, setMarketing] = useState<boolean>(false)


    return(
        <section className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold">{t('Notifications')}</h2>
            <div className="space-y-5">
                <label className="flex items-center justify-between">
                    <span>{t('Email Notifications')}</span>
                    <Switch
                        checked={email}
                        onChange={() =>{
                            const next = !email
                            setEmail(next)

                            toast.success(next ? 'Email notification enabled' : 'Email notification disabled')
                        }}/>
                </label>

                <label className="flex items-center justify-between">
                    <span>{t('Push Notifications')}</span>
                    <Switch
                        checked={push}
                        onChange={() =>{
                            const next = !push
                            setPush(next)

                            toast.success(next ? 'Push notification enabled' : 'Push notification disabled')
                        }}/>
                </label>

                <label className="flex items-center justify-between">
                    <span>{t('Marketing Emails')}</span>
                    <Switch
                        checked={marketing}
                        onChange={() =>{
                            const next = !marketing
                            setMarketing(next)

                            toast.success(next ? 'Marketing emails enabled' : 'Marketing email disabled')
                        }}/>
                </label>

            </div>
        </section>
    )
}