import StatCard from "@/components/ui/StatCard"


export default function AnalyticsStats(){
    return(
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <StatCard
                title="Revenue"
                value="$45,280"
            />

            <StatCard
                title="Orders"
                value="1,254"
            />

            <StatCard
                title="Customers"
                value="860"
            />

            <StatCard
                title="Growth"
                value="+12%"
            />

        </section>
    )
}