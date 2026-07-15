import DataTable, { type Column } from "@/components/common/DateTable"


interface Product{
    id: number
    name: string
    category: string
    price: number
    stock: number
    status: "Active" | "Inactive" | "Low Stock"
}



export default function ProductsTable(){
    const columns:Column<Product>[] = [
        {
            key: "name",
            header: "Product",
        },
        {
            key: "category",
            header: "Category",
        },
        {
            key: "price",
            header: "Price",
        },
        {
            key: "stock",
            header: "Stock",
        },
        {
            key: "status",
            header: "Status",
        },
    ]

    return(
        <>product table</>
    )
}