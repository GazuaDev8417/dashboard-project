import RecentOrdersTable from "@/components/dashboard/RecentOrdersTable"
import DashboardWidget from "@/components/dashboard/DashboardWidget"
import SalesChart from "@/components/dashboard/SalesChart"
import StatCard from "@/components/ui/StatCard"




export default function DashboardPage(){
    
    const statistics = [
    { title: 'Revenue', value: '$4, 500' },
    { title: 'Customer', value: '1,245' },
    { title: 'Orders', value: '325' },
    { title: 'Products', value: '98' }
]

    return(
        <section className="space-y-9">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {statistics.map((stat) => (
                    <StatCard
                        key={stat.title}
                        title={stat.title}
                        value={stat.value}/>
                ))}
            </div>
            <DashboardWidget title="Revenue Overview">
                <SalesChart/>
            </DashboardWidget>
            <DashboardWidget title="Recent Orders">
                <RecentOrdersTable/>
            </DashboardWidget>
        </section>
    )   
    
}