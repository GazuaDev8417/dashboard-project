import Button from "@/components/ui/Button"



export default function ProfileForm(){
    return(
        <section className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold">Profile</h2>
            <div className="grid gap-5 md:grid-colors-2">
                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Full Name
                    </label>
                    <input
                        defaultValue='Flamarion França'
                        className="w-full rounded-lg border border-slate-300 p-3"/>
                    
                </div>
                <div>
                    <label className="mb-2 block text-sm font-medium">Email</label>
                    <input
                        defaultValue='francadasilvaflamarion@gmail.com'
                        className="w-full rounded-lg border border-slate-300 p-3"/>
                </div>
            </div>
            <div className="mt-5">
                <label className="mb-2 block text-sm font-medium">Role</label>
                <input
                    defaultValue="Full Stack Developer"
                    className="w-full rounded-lg border border-slate-300 p-3"/>
            </div>
            <div className="mt-6 justify-end">
                <Button>
                    Save Profile
                </Button>
            </div>
        </section>
    )
}