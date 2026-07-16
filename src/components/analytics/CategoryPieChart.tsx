import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
} from "recharts"
import { categoryData } from "@/constants/analytics"
import { useTranslation } from "react-i18next"



const COLORS = [
    "#2563eb",
    "#10b981",
    "#f59e0b",
    "#ef4444",
]


export default function CategoryPieChart(){
    const { t } = useTranslation()

    return(
        <div className="rounded-xl bh-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold">
                {t("Product Categories")}
            </h2>
            <div className="h-80">
                <ResponsiveContainer width='100%' height='100%'>
                    <PieChart>
                        <Pie
                            data={categoryData}
                            dataKey='value'
                            nameKey='name'
                            outerRadius={110}
                            label>
                            
                            {categoryData.map((_, index)=>(
                                <Cell
                                    key={index}
                                    fill={COLORS[index % COLORS.length]}/>
                            ))}
                        </Pie>
                        <Tooltip/>
                        <Legend/>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}