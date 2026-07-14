import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from "recharts"

import { ordersData } from "@/constants/analytics"

export default function OrdersChart() {
    return (
        <div className="rounded-xl bg-white p-6 shadow-sm">

            <h2 className="mb-6 text-xl font-semibold">
                Orders by Month
            </h2>

            <div className="h-80">

                <ResponsiveContainer width="100%" height="100%">

                    <BarChart data={ordersData}>

                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="month" />

                        <YAxis />

                        <Tooltip />

                        <Bar
                            dataKey="orders"
                            fill="#2563eb"
                            radius={[8, 8, 0, 0]}
                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </div>
    )
}