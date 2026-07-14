import Button from "@/components/ui/Button"


interface ConfirmDialogProps{
    open:boolean
    title:string
    message:string
    onCancel: () => void
    onConfirm: () => void
}


export default function ConfirmDialog({
    open,
    title,
    message,
    onCancel,
    onConfirm
}:ConfirmDialogProps){
    if(!open) return null

    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

            <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">

                <h2 className="text-xl font-semibold text-slate-800">
                    {title}
                </h2>

                <p className="mt-3 text-slate-600">
                    {message}
                </p>

                <div className="mt-8 flex justify-end gap-3">

                    <button
                        type="button"
                        onClick={onCancel}
                        className="rounded-lg border border-slate-300 px-4 py-2 hover:bg-slate-100 cursor-pointer"
                    >
                        Cancel
                    </button>

                    <Button
                        onClick={onConfirm}
                        className="bg-red-600 hover:bg-red-700"
                    >
                        Delete
                    </Button>

                </div>

            </div>

        </div>
    )
}