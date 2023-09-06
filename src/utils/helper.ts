import swal from "sweetalert2"

export interface ErrorProps {
    error: any | undefined 
}

export const handleError = (error: ErrorProps) => {
    console.log('errprrr', error)
    swal.fire({ 
        toast: true, 
        text: 'Sucessfuly download.', 
        icon: 'error', 
        position: 'top', 
        timer: 3000,
        showConfirmButton: false
      })
}