import RecentOrdersTable from "@/components/dashboard/RecentOrdersTable"
import DashboardWidget from "@/components/dashboard/DashboardWidget"
import SalesChart from "@/components/dashboard/SalesChart"



export default function DashboardPage(){
    return(
        <section className="space-y-9">
            <DashboardWidget title="Revenue Overview">
                <SalesChart/>
            </DashboardWidget>
            <DashboardWidget title="Recent Orders">
                <RecentOrdersTable/>
            </DashboardWidget>
        </section>
    )   
    
}