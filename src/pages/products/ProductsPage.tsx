import { useState } from "react"
import Button from "@/components/ui/Button"
import ProductsToolBar from "@/components/products/productsToolBar"
import ProductsTable from "@/components/products/productsTable"
import { products as initialProducts } from "@/constants/products"
import type { Product } from "@/constants/products"
import ProductModal from "@/components/products/ProductModal"
import type { ProductFormData } from "@/components/products/ProductModal"
import type { ProductStatus } from "@/constants/products"
import { Plus } from "lucide-react"
import ConfirmDialog from "@/components/common/ConfirmDialog"



export default function ProductsPage(){
    const [products, setProducts] = useState(initialProducts)
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [search, setSearch] = useState<string>('')
    const [category, setCategory] = useState<string>('')
    const [status, setStatus] = useState<string>('')
    const [editingProduct, setEditingProduct] = useState<Product | null>(null)
    const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false)
    const [productToDelete, setProductToDelete] = useState<Product | null>(null)



    const filteredProducts = products.filter((product)=>{
        const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase())
        const matchesCategory = category === '' || product.category === category
        const matchesStatus = status === '' || product.status === status

        return matchesSearch && matchesCategory && matchesStatus
    })


    const handleAddProduct = (product:ProductFormData)=>{
        const status:ProductStatus = product.stock > 5 ? 'Active' : 'Low Stock'
        const newProduct = {
            id: products.length + 1,
            ...product,
            status
        }

        setProducts((current) => [...current, newProduct])
    }


    const handleUpdateProduct = (updateProduct:Product)=>{
        setProducts((current) =>
            current.map((product) =>
                product.id === updateProduct.id
                    ? updateProduct
                    : product
            )
        )
        setEditingProduct(null)    
    }


    const handleDeleteProduct = (product:Product)=>{
        setProductToDelete(product)
        setIsDeleteOpen(true)
    }

    const confirmDeleteProduct = ()=>{
        if(!productToDelete) return null

        setProducts((current) =>
            current.filter(
                (product) => product.id !== productToDelete.id
            )
        )

        setProductToDelete(null)
        setIsDeleteOpen(false)
    }

    return(
        <section className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="flex-3xl font-bold text-slate-800">Products</h1>
                    <p className="mt-1 text-slate-500">
                        Manage your products and inventory
                    </p>
                </div>
                <Button
                    onClick={() => setIsModalOpen(true)}>
                    <div className="flex items-center gap-2">
                        <Plus size={18}/>
                        <span>Add Product</span>
                    </div>
                </Button>
            </div>
            <ProductsToolBar
                search={search}
                onSearchChange={setSearch}
                category={category}
                onCategoryChange={setCategory}
                status={status}
                onStatusChange={setStatus}
                />
            <ProductsTable 
                products={filteredProducts}
                onEdit={(product)=>{
                    setEditingProduct(product)
                    setIsModalOpen(true)
                }}
                onDelete={handleDeleteProduct}/>
            <ProductModal 
                open={isModalOpen} 
                onClose={() =>{
                    setIsModalOpen(false)
                    setEditingProduct(null)
                }}
                onAddProduct={handleAddProduct}
                onUpdateProduct={handleUpdateProduct}
                product={editingProduct}/>
            <ConfirmDialog
                open={isDeleteOpen}
                title="Delete Product"
                message={`Are you sure you want to delete "${productToDelete?.name}"?`}
                onCancel={()=>{
                    setIsDeleteOpen(false)
                    setProductToDelete(null)
                }}
                onConfirm={confirmDeleteProduct} />
        </section>
    )
}