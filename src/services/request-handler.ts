const api = process.env.NEXT_PUBLIC_ENVIRONMENT === 'DEV' ? `http://localhost:${process.env.NEXT_PUBLIC_PORT}` : 'https://krisnadwisetyaadi.vercel.app/'

export default class RequestHandler {
    public url: string;
    public api: string
    constructor(url: string) {
        this.url = url
        this.api = api
    } 

  
    find(params: string | number, url = this.url) {
        return new Promise(async(resolve, reject) => {
            try {
                const response = await fetch(`${api}/${url}/${params}`, {
                    method: 'GET',
                    headers:{
                        'Content-Type': 'application/json', 
                    }
                })
                if(response.ok) {
                    resolve(response.json())
                } else {
                    reject(response)
                }
            } catch (error) {
                reject(error)
            }
        })
    }

    store(body?:any, url = this.url) {
        console.log('bodystore', body)
        console.log('apiiii', api)
        return new Promise(async(resolve, reject) => {
            try {
                const response = await fetch(`${api}/${url}`, {
                    method: 'POST',
                    body:  JSON.stringify(body),
                    headers: {
                        'Content-Type': 'application/json', 
                    },
                })
                console.log('responsestore', response)
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

    download(params?: any, url = this.url) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(`${api}/${url}/download`, {
                    method: 'GET'
                  })

                  if(response.ok) {
                    const link = document.createElement('a')
                    link.href = `/${url}/download`
                    link.setAttribute('download', '')
                    link.click()
                    resolve(response)    
                  } else {
                    reject(response)    
                  }
            } catch (error) {
                reject(error)
            }
        })
    }

    upload(params?: any, url = this.url ) {
        return new Promise(async(resolve, reject) => {
            try {
            const formData = new FormData;
            formData.append('file', params);
            const response = await fetch(`${api}/${url}/upload`, {
                method: 'POST',
                body: formData
            });
            if(response.ok) {   
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