import { Search, Plus } from 'lucide-react'
import Button from '@/components/ui/Button'



interface CustomersToolbarProps{
    search:string
    onSearchChange: (value:string) => void
    onAddCustomer: () => void
}


export default function CustomersToolbar({
    search,
    onSearchChange,
    onAddCustomer
}:CustomersToolbarProps){
    return(
        <div className="flex flex-col gap-4 rounded-xl bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">

            <div className="relative w-full md:w-80">

                <Search
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                    value={search}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="Search customers..."
                    className="w-full rounded-lg border border-slate-300 py-2 pl-10 pr-4 outline-none focus:border-blue-500"
                />

            </div>

            <Button onClick={onAddCustomer}>
                <div className="flex items-center gap-2">
                    <Plus size={18} />
                    <span>Add Customer</span>
                </div>
            </Button>

        </div>
    )
}