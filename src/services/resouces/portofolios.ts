import { ENDPOINT } from "@/config/endpoint";
import RequestHandler from "../request-handler";

class Portofolios extends RequestHandler {
    constructor() {
        super(ENDPOINT.PORTOFOLIOS)
    }

    storePortofolios(body?:any) {
       return new Promise(async(resolve, reject) => {
            try {
                const response = await fetch(`${this.api}/${ENDPOINT.PORTOFOLIOS}`, {
                    method: 'POST',
                    body: body,
                    // When sending a form with fetch in the frontend, 
                    // don't set Content-Type header yourself. 
                    // If you do, it won't have the form boundary and 
                    // the multipart/form-data request will be parsed incorrectly in the backend.
                   
                    // headers: {
                    //     'Content-Type': 'multipart/form-data', 
                    // },
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

const PortofoliosApi = new Portofolios()

export default PortofoliosApi