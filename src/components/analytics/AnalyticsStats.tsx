import StatCard from "@/components/ui/StatCard"
import { useTranslation } from "react-i18next"



export default function AnalyticsStats(){
    const { t } = useTranslation()

    return(
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <StatCard
                title={t("Revenue")}
                value="$45,280"
            />

            <StatCard
                title={t("Orders")}
                value="1,254"
            />

            <StatCard
                title={t("Customers")}
                value="860"
            />

            <StatCard
                title={t("Growth")}
                value="+12%"
            />

        </section>
    )
}