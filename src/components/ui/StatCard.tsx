import { useTranslation } from "react-i18next"

interface StatCardProps{
    title:string
    value:string
}



export default function StatCard({ title, value }:StatCardProps){
    const { t } = useTranslation()

    return(
        <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-sm text-slate-500">{t(title)}</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">{value}</h2>
        </div>
    )
}