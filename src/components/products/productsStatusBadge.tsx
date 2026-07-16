import { useTranslation } from "react-i18next"

interface ProductsStatusBadgeProps{
    status: 'Active' | 'Inactive' | 'Low Stock'
}



export default function ProductsStatusBadge({ status }:ProductsStatusBadgeProps){
    const { t } = useTranslation()
    const styles = {
        Active: 'bg-green-100 text-green-700',
        Inactive: 'bg-red-100 text-red-700',
        'Low Stock': 'bg-yellow-100 text-yellow-700'
    }

    return(
        <span
            className={`rounded-full px-3 py-1 text-sm font-medium ${styles[status]}`}>
            {status}
        </span>
    )
}