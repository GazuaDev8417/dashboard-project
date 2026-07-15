import { useMemo, useState } from "react"
import { customers as initialCustomers } from '@/constants/customers'
import CustomersToolbar from "@/components/customers/CustomersToolbar"
import CustomersTable from "@/components/customers/CustomersTable"
import CustomerModal, { type CustomerFormData } from "@/components/customers/CustomerModal"
import ConfirmDialog from "@/components/common/ConfirmDialog"
import type { Customer } from "@/constants/customers"
import { toast } from "sonner"



export default function CustomersPage(){
    const [customers, setCustomers] = useState(initialCustomers)
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [editingCustomer, setEditingCustomer] = useState<Customer | null>(null)
    const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false)
    const [customerToDelete, setCustomerToDelete] = useState<Customer | null>(null)
    const [search, setSearch] = useState('')
    


    const filteredCustomers = useMemo(()=>{
        return customers.filter((customer) =>
            customer.name.toLowerCase().includes(search.toLowerCase())
        )
    }, [customers, search])


    const handleAddCustomer = (customer:CustomerFormData)=>{
        const newCustomer:Customer = {
            id: Date.now(),
            ...customer
        }

        setCustomers((current)=>[
            ...current,
            newCustomer
        ])

        toast.success('Customer created successfully')
    }


    const handleUpdateCustomer = (updateCustomer:Customer)=>{
        setCustomers((current) =>
            current.map((customer) =>
                customer.id === updateCustomer.id
                ? updateCustomer
                : customer
            )
        )

        toast.success('Customer updated successfully')
    }


    const handleDeleteCustomer = (customer:Customer)=>{
        setCustomerToDelete(customer)
        setIsDeleteOpen(true)
    }


    const confirmDeleteCustomer = ()=>{
        if(!customerToDelete) return

        setCustomers((current) =>
            current.filter(
                (customer) =>
                    customer.id !== customerToDelete.id
            )
        )

        toast.success('Customer deleted successfully')
        setCustomerToDelete(null)
        setIsDeleteOpen(false)
    }


    return(
        <section className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-slate-800">Customers</h1>
                    <p className="text-slate-500">
                        Manage your customer base
                    </p>
                </div>
            </div>

            <CustomersToolbar
                search={search}
                onSearchChange={setSearch}
                onAddCustomer={() => {
                    setEditingCustomer(null)
                    setIsModalOpen(true)
                }}/>
            
            <CustomersTable
                customers={filteredCustomers}
                onEdit={(customer) => {
                    setEditingCustomer(customer)
                    setIsModalOpen(true)
                }}
                onDelete={handleDeleteCustomer}/>

            <CustomerModal
                open={isModalOpen}
                customer={editingCustomer}
                onClose={()=>{
                    setIsModalOpen(false)
                    setEditingCustomer(null)
                }}
                onAddCustomer={handleAddCustomer}
                onUpdateCustomer={handleUpdateCustomer}/>

            <ConfirmDialog
                open={isDeleteOpen}
                title="Delete Customer"
                message={`Delete "${customerToDelete?.name}"`}
                onCancel={()=>{
                    setCustomerToDelete(null)
                    setIsDeleteOpen(false)
                }}
                onConfirm={confirmDeleteCustomer}
            />
        </section>
    )
}