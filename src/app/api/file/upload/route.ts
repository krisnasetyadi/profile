import { query } from '../../database/db';
import { blobToBuffer } from '../../lib/file';
interface FileType {
    size: number;
    type: string;
    name: string;
    lastModified: number
}

export async function POST(req: Request) {
    try {
        const formData = await req.formData()
        const file = formData.get('file') as Blob
        const contentBuffer = await blobToBuffer(file)
        console.log('file', [file.name, file.type, contentBuffer])
        const queryString = 'INSERT INTO files (name, type, content, created_at) VALUES ($1, $2, $3, $4)';
        const values = [file.name , file.type, contentBuffer, new Date()]
        const response = await query(queryString, values)
        if (response.rowCount > 0) {
            console.log('File inserted successfully');
            return new Response('OK', { status: 200 });
          } else {
            console.log('File insertion failed');
            return new Response('Error: File insertion failed', { status: 500 }); 
          }
    } catch (error) {
        return new Response('ERROR', { status: 400 })
    }   
}