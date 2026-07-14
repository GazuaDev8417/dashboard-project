import AnalyticsStats from "@/components/analytics/AnalyticsStats"
import RevenueChart from "@/components/analytics/RevenueChart"
import OrdersChart from "@/components/analytics/OrderChart"
import CategoryPieChart from "@/components/analytics/CategoryPieChart"



export default function AnalyticsPage(){
    return(
        <section className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-slate-800">
                    Analytics
                </h1>
                <p className="text-slate-500">
                    Monitor your business performance
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