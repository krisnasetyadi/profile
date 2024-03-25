import { ENDPOINT } from "@/config/endpoint"
import RequestHandler from "../request-handler"

class CV extends RequestHandler {
    constructor() {
        super(ENDPOINT.CV)
    }
    updateCV(body?:any) {
        return new Promise(async(resolve, reject) => {
             try {
                 const response = await fetch(`${this.baseUrl}/${ENDPOINT.CV}`, {
                     method: 'PUT',
                     body: body,
                    
                 })
                 if (response.ok) {
                     resolve(response)
                 } else {
                     reject(response)
                 }
             } catch (error) {
                 reject(error)
             }
         })
        
     }
}
const CVApi = new CV()
export default CVApi