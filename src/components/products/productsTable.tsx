import { Pencil, Trash2 } from "lucide-react"
import ProductsStatusBadge from "./productsStatusBadge"
import type { Product } from "@/constants/products"



interface ProductsTableProps{
    products:Product[]
    onEdit: (product:Product) => void
    onDelete: (product:Product) => void
}



export default function ProductsTable({ products, onEdit, onDelete }:ProductsTableProps){
    return(
        <div className="overflow-x-auto rounded-xl bg-white shadow-sm">
            <table className="min-w-full">
                <thead>
                    <tr className="border-b border-slate-200 text-left">
                        <th className="p-4">Product</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product)=>(
                        <tr 
                           key={product.id}
                           className="border-b border-slate-100 hover:bg-slate-50">
                            <td className="p-4 font-medium">
                                {product.name}
                            </td>
                            <td>{product.category}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                            <td>
                                <ProductsStatusBadge
                                    status={product.status}/>
                            </td>
                            <td>
                                <div className="flex gap-3">
                                    <button 
                                        className="text-blue-600 cursor-pointer"
                                        onClick={() => onEdit(product)}>
                                        <Pencil
                                            size={18}/>
                                    </button>
                                    <button
                                        className="text-red-600 cursor-pointer"
                                        onClick={() => onDelete(product)}>
                                        <Trash2
                                            size={18}/>
                                    </button>
                                </div>
                            </td>
                           </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}