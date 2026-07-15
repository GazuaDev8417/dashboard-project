import type { ReactNode } from "react"


export interface Column<T> {
    key: keyof T
    header: string
    render?: (value: T[keyof T], row: T) => ReactNode
}

interface DataTableProps<T> {
    columns: Column<T>[]
    data: T[]
}




export default function DataTable<T>({
    columns,
    data,
}: DataTableProps<T>) {
    return (
        <div className="overflow-x-auto rounded-xl bg-white shadow-sm">
            
            <table className="min-w-full">
                <thead className="border-b bg-slate-100">
                    <tr>
                        {columns.map((column) => (
                            <th
                                key={String(column.key)}
                                className="px-6 py-3 text-left text-sm font-semibold text-slate-700"
                            >
                                {column.header}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {data.map((row, index) => (
                        <tr
                            key={index}
                            className="border-b hover:bg-slate-50">

                            {columns.map((column) => (
                                <td
                                    key={String(column.key)}
                                    className="px-6 py-4">

                                    {column.render
                                        ? column.render(
                                            row[column.key],
                                            row
                                        )
                                        : String(
                                            row[column.key]
                                        )
                                    }
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}