interface DashboardWidgetProps{
    title:string
    children:React.ReactNode
}


export default function DashboardWidget({ title, children }:DashboardWidgetProps){
    return(
        <section className="reounded-xl bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
                {title}
            </h2>
            {children}
        </section>
    )
}









