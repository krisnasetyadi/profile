const baseUrl = process.env.NEXT_PUBLIC_ENVIRONMENT === 'DEV' ? `http://localhost:${process.env.NEXT_PUBLIC_PORT}` : `${process.env.SERVICE_PROFILE_URL}`

export default class RequestHandler {
    public url: string;
    public baseUrl: string
    constructor(url: string) {
        this.url = url
        this.baseUrl = baseUrl
    } 

    get<T extends Record<string, any>>(params?: NonNullable<T>, url = this.url) {
        return new Promise(async(resolve, reject) => {
            let fullUrl = `${baseUrl}/${url}`
            if(params) {
                const queryString = Object.keys(params)
                .map((key: string) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
                .join('&')
                console.log('queryString', queryString)
                fullUrl += `?${queryString}`
            }
            
            try {
                const response = await fetch(fullUrl,{
                    
                    method: 'GET',
                    
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
  
    find<T extends Record<string, any>>(params:T | string | number | undefined, url = this.url) {
        return new Promise(async(resolve, reject) => {
            try {
                const response = await fetch(`${baseUrl}/${url}/${params}`, {
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
        return new Promise(async(resolve, reject) => {
            try {
                const response = await fetch(`${baseUrl}/${url}`, {
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

    delete(id?: number | string, url = this.url) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(`${baseUrl}/${url}/${id}`, {
                    method: 'DELETE'
                })
                if(response.ok) {
                    resolve(response.json())
                } else {
                    reject(response)
                }

            } catch (error) {
                resolve(error)
            }
        })
    }

    download(params?: any, url = this.url) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(`${baseUrl}/${url}/download`, {
                    method: 'GET'
                  })

                  if(response.ok) {
                    const link = document.createElement('a')
                    link.href = response.url
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
            const response = await fetch(`${baseUrl}/${url}/upload`, {
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