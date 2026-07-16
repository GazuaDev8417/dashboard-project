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
        { month: "Jan", revenue: 4000 },
        { month: "Feb", revenue: 3000 },
        { month: "Mar", revenue: 5200 },
        { month: "Apr", revenue: 4700 },
        { month: "May", revenue: 6200 },
        { month: "Jun", revenue: 7100 },
    ]


    const translatedData = data.map((item)=>({
        ...item,
        month: t(item.month)
    }))

    return(
        <div className="h-80">
            <ResponsiveContainer>
                <LineChart data={translatedData}>
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