import ProfileForm from "@/components/settings/ProfileForm"
import PreferencesForm from "@/components/settings/PreferencesForm"
import NotificationSettings from "@/components/settings/NotificationSettings"
import SecurityForm from "@/components/settings/SecurityForm"
import { useTranslation } from "react-i18next"





export default function SettingsPage(){
    const { t } = useTranslation()

    return(
        <section className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-slate-800">{t('Settings')}</h1>
                
                <p className="text-slate-500">
                    {t('Manage your account preferences')}
                </p>
            </div>

            <ProfileForm/>

            <div className="grid gap-8 xl:grid-cols-2">
                <PreferencesForm/>
                <NotificationSettings/>
            </div>

            <SecurityForm/>
        </section>
    )
}