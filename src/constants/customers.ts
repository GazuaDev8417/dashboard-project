export interface Customer{
    id:number
    name:string
    email:string
    phone:string
    status: 'Active' | 'Inactive'
}



export const customers:Customer[] = [
     {
        id: 1,
        name: "John Smith",
        email: "john@example.com",
        phone: "+1 (555) 123-4567",
        status: "Active",
    },
    {
        id: 2,
        name: "Emma Wilson",
        email: "emma@example.com",
        phone: "+1 (555) 987-6543",
        status: "Active",
    },
    {
        id: 3,
        name: "Michael Brown",
        email: "michael@example.com",
        phone: "+1 (555) 456-7890",
        status: "Inactive",
    },
]