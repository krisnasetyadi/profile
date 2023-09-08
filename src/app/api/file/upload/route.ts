import { query } from '../../database/db';
import { blobToBuffer } from '../../lib/file';
interface FileType {
    size: number;
    type: string;
    name: string;
    lastModified: number
}

export async function POST(req: Request) {
    const formData = await req.formData()
    const file = formData.get('file') as Blob
    const contentBuffer = await blobToBuffer(file)
    const queryString = 'INSERT INTO files (name, type, content, created_at) VALUES ($1, $2, $3, $4)';
    const values = [file.name , file.type, contentBuffer, new Date()]

    try {
        query(queryString, values)
        return new Response('OK', { status: 200 })
    } catch (error) {
        console.log('error', error)
        return new Response('ERROR', { status: 400 })
    }   
}