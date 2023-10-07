import { query } from '../../database/db'


export async function GET(req: Request) {
        try {
            const filename = 'CV Krisna Dwi Setyaadi'
            const queryString = process.env.NEXT_PUBLIC_ENVIRONMENT === 'DEV' ? 'SELECT name, content, type FROM files WHERE id = $1' :  'SELECT name, content, type FROM files WHERE name = $1' ;
            const value =  process.env.NEXT_PUBLIC_ENVIRONMENT === 'DEV' ? [6] : [filename]
            const result = await query(queryString, value)
            if(result.rows && result.rows[0].length === 0 ) {
              return new Response('Error data not available', { status: 400 })
            } else if (result.rows) {
            const { name, content, type } = result.rows[0]
            console.log('name', name)
            const headers = new Headers()
            headers?.append('Content-type', type)
            headers?.append('Content-Disposition', `attachment; filename="${name}"`)
            return new Response(content, { headers, status: 200 })
            }
    
        } catch (error) {
            console.log('error', error)
            return new Response('Error: Internal Server Error', { status: 500 });
        }
}