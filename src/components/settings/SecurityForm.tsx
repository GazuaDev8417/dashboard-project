import Button from "@/components/ui/Button"



export default function SecurityForm() {

    return (
        <section className="rounded-xl bg-white p-6 shadow-sm">
            
            <h2 className="mb-6 text-xl font-semibold">Security</h2>
            <div className="space-y-5">
                <input
                    type="password"
                    placeholder="Current password"
                    className="w-full rounded-lg border border-slate-300 p-3"/>

                <input
                    type="password"
                    placeholder="New password"
                    className="w-full rounded-lg border border-slate-300 p-3"/>

                <input
                    type="password"
                    placeholder="Confirm password"
                    className="w-full rounded-lg border border-slate-300 p-3"/>
            </div>

            <div className="mt-6 flex justify-end">
                <Button>Update Password</Button>
            </div>

        </section>

    )
}