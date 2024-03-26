'use client'

import { useRouter } from "next/navigation"

function IndexScreen() {
    const router = useRouter()
    return (
        <div className="flex justify-center items-center w-full gap-20">
            <button type="button" className="px-2 bg-yellow-400 rounded rounded-sm my-2" onClick={() => router.push('portofolios/edit')}>Edit</button>
            <button type="button" className="px-2 bg-green-400 rounded rounded-sm my-2" onClick={() => router.push('portofolios/add')}>Add</button>
        </div>
    )
}

export default IndexScreen