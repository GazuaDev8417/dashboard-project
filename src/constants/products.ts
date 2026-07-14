export type ProductStatus = 'Active' | 'Inactive' | 'Low Stock'

export interface Product{
    id:number
    name: string
    category: string
    price: number
    stock: number
    status: "Active" | "Inactive" | "Low Stock"
}



export const products: Product[] = [
    {
        id: 1,
        name: "MacBook Pro",
        category: "Electronics",
        price: 2499,
        stock: 15,
        status: "Active",
    },
    {
        id: 2,
        name: "iPhone 16",
        category: "Electronics",
        price: 999,
        stock: 42,
        status: "Active",
    },
    {
        id: 3,
        name: "AirPods Pro",
        category: "Accessories",
        price: 249,
        stock: 6,
        status: "Low Stock",
    },
    {
        id: 4,
        name: "Magic Mouse",
        category: "Accessories",
        price: 99,
        stock: 0,
        status: "Inactive",
    },
]