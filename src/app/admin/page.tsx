'use client'

import { FileApi } from "@/services"
import Swal from "sweetalert2"

function AdminScreen() {
    const handleUpload = async (e: any) => {
      try {
        const file =  e.target.files[0]
        const response = await FileApi.upload(file)
        console.log('handleUploadresponse', response)
        if (response) {
          Swal.fire({ 
            toast: true, 
            text: 'File uploaded.', 
            icon: 'success', 
            position: 'top', 
            timer: 3000,
            showConfirmButton: false
          })
        }

      } catch (error) {
          Swal.fire({ 
            toast: true, 
            text: 'Oops! Something went wrong', 
            icon: 'error', 
            position: 'top', 
            timer: 3000,
            showConfirmButton: false
          })
      }

    }
    return (
        <div>
            <input onChange={handleUpload} type="file" />
        </div>
    )
}

export default AdminScreen