import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid
} from 'recharts'
import { revenueData } from '@/constants/analytics'
import { useTranslation } from "react-i18next"




export default function RevenueChart(){
    const { t } = useTranslation()

    const tanslatedData = revenueData.map((item)=>({
        ...item,
        month: t(item.month)
    }))

    return(
        <div className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold">
                {t("Revenue Overview")}
            </h2>
            <div className="h-80">
                <ResponsiveContainer width='100%' height='100%'>
                    <LineChart data={tanslatedData}>
                        <CartesianGrid strokeDasharray='3 3'/>
                        <XAxis dataKey='month'/>
                        <YAxis/>
                        <Tooltip/>
                        <Line
                            type='monotone'
                            dataKey='revenue'
                            stroke='#2563eb'
                            strokeWidth={3}/>                        
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}