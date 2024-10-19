'use client'

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

function IndexScreen() {
    const router = useRouter()

    return (
        <div className="flex justify-center items-center w-full gap-6 pt-6">
            <Button 
                variant="outline" 
                className="text-primary border-primary hover:bg-primary hover:text-white transition-colors duration-200"
                onClick={() => router.push('portofolios/edit')}
            >
                Edit
            </Button>
            <Button 
                className="text-white bg-primary hover:bg-primary/80 transition-colors duration-200"
                onClick={() => router.push('portofolios/add')}
            >
                Add
            </Button>
        </div>
    )
}

export default IndexScreen
