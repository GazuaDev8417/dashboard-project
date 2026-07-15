import { useState } from "react"



export default function PreferencesForm(){
    const [darkMode, setDarkMode] = useState<boolean>(false)
    

    return(
        <section className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold">Preferences</h2>
            <div className="space-y-5">
                <div className="flex items-center justify-between">
                    <span>Dark Mode</span>
                    <input
                        type="checkbox"
                        checked={darkMode}
                        onChange={() => setDarkMode(!darkMode)}/>
                </div>
                <div>
                    <label className="mb-2 block">Language</label>
                    <select className="w-full rounded-lg border border-slate-300 p-3">
                        <option value="">English</option>
                        <option value="">Portuguese</option>
                        <option value="">Spanish</option>
                    </select>
                </div>
                <div>
                    <label className="mb-2 block">Timezone</label>
                    <select className="w-full rounded-lg border border-slate-300 p-3">
                        <option value="">UTC</option>
                        <option value="">GMT-3</option>
                        <option value="">GMT-5</option>
                    </select>
                </div>
            </div>
        </section>
    )
}