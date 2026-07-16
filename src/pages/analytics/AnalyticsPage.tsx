import AnalyticsStats from "@/components/analytics/AnalyticsStats"
import RevenueChart from "@/components/analytics/RevenueChart"
import OrdersChart from "@/components/analytics/OrderChart"
import CategoryPieChart from "@/components/analytics/CategoryPieChart"
import { useTranslation } from "react-i18next"




export default function AnalyticsPage(){
    const { t } = useTranslation()
    
    return(
        <section className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-slate-800">
                    {t("Analytics")}
                </h1>
                <p className="text-slate-500">
                    {t("Monitor your business performance")}
                </p>
            </div>
            
            <AnalyticsStats/>
            <RevenueChart/>

            <div className="grid gap-8 xl:grid-cols-2">
                <OrdersChart/>
                <CategoryPieChart/>
            </div>
        </section>
    )
}