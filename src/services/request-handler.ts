const api = process.env.NEXT_PUBLIC_ENVIRONMENT === 'DEV' ? `http://localhost:${process.env.NEXT_PUBLIC_PORT}` : 'https://krisnadwisetyaadi.vercel.app/'

export default class RequestHandler {
    private url: string;
    private api: string
    constructor(url: string) {
        this.url = url
        this.api = api
    } 

    download(params?: any, url = this.url) {
        return new Promise(async (resolve, reject) => {
            // try {
            //     const response = await fetch(`${api}/api/${url}/download`, {
            //         method: 'GET'
            //       })
            //       console.log('response', response)
            //       if(response.ok) {
            //         const link = document.createElement('a')
            //         link.href = `/api/${url}/download`
            //         link.setAttribute('download', '')
            //         link.click()
            //         resolve(response)    
            //       } else {
            //         reject(response)    
            //       }
            // } catch (error) {
            //     reject(error)
            // }
        })
    }
}