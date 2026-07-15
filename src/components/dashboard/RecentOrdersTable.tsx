

interface Order{
    id:number
    customer:string
    product:string
    total:string
    status: 'completed' | 'pending'
}


const orders:Order[] = [
    {
        id: 1,
        customer: 'John Smith',
        product: 'Premium Plan',
        total: '$120',
        status: 'completed'
    },
    {
        id: 2,
        customer: 'Emma Wilson',
        product: 'Starter Plan',
        total: '$49',
        status: 'pending'
    },
    {
        id: 3,
        customer: 'Michael Brown',
        product: 'Business Plan',
        total: '$299',
        status: 'completed'
    },
    {
        id: 4,
        customer: 'Sophia Davis',
        product: 'Enterprise Plan',
        total: '$599',
        status: 'pending'
    }
]



export default function RecentOrdersTable(){
    return(
        <div className="overflow-x-auto">
            <table className="w-full">
                <thead>
                    <tr className="border-b border-slate-200 text-left">
                        <th className="pb-3">Customer</th>
                        <th className="pb-3">Product</th>
                        <th className="pb-3">Total</th>
                        <th className="pb-3">Status</th>
                    </tr>
                </thead>

                <tbody>
                    {orders.map((order)=>(
                        <tr
                            key={order.id}
                            className="border-b border-slate-100">
                            
                            <td className="py-4">{order.customer}</td>
                            <td className="py-4">{order.product}</td>
                            <td className="py-4">{order.total}</td>

                            <td>
                                <span className={
                                    order.status === 'completed'
                                    ? 'rounded-full bg-green-100 px-3 py-1 text-sm text-green-700'
                                    : 'rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-700'
                                }>
                                    {order.status}
                                </span>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}