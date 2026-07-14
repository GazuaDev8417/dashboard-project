import { Search } from "lucide-react"



interface ProductsToolBarProps{
    search:string
    onSearchChange: (value:string) => void

    category:string
    onCategoryChange: (value:string) => void

    status:string
    onStatusChange: (value:string) => void
}


export default function ProductsToolBar({
    search,
    onSearchChange,
    category,
    onCategoryChange,
    status,
    onStatusChange
}:ProductsToolBarProps){
    return(
        <div className="flex flex-col gap-4 rounded-xl bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:w-80">
                <Search
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"/>
                
                <input 
                    type="text"
                    value={search}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="Search products"
                    className="w-full rounded-lg border border-slate-300 py-2 pl-10 pr-4 outline-none focus:border-blue-500" />
            </div>
            <div className="flex gap-3">
                <select 
                    value={category}
                    onChange={(e) => onCategoryChange(e.target.value)}
                    className="rounded-lg border border-slate-300 px-3 py-2">
                    <option value="">All Categories</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Accessories">Accessories</option>
                </select>

                <select 
                    value={status}
                    onChange={(e) => onStatusChange(e.target.value)}
                    className="rounded-lg border border-slate-300 px-3 py-2">
                    <option value="">All Status</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Low Stock">Low Stock</option>
                </select>
            </div>
        </div>
    )
}