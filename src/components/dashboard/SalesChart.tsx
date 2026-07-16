import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    YAxis
} from 'recharts'
import { useTranslation } from "react-i18next"




export default function SalesChart(){
    const { t } = useTranslation()


    const data = [
        { month: t("months.jan"), revenue: 4000 },
        { month: t("months.feb"), revenue: 3000 },
        { month: t("months.mar"), revenue: 5200 },
        { month: t("months.apr"), revenue: 4700 },
        { month: t("months.may"), revenue: 6200 },
        { month: t("months.jun"), revenue: 7100 },
    ]

    return(
        <div className="h-80">
            <ResponsiveContainer>
                <LineChart data={data}>
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
    )
}