import { Pool, QueryResult } from 'pg'

const defConfig = {
    user: process.env.NEXT_PUBLIC_USER,
    password: process.env.NEXT_PUBLIC_PASSWORD,
    port: Number(process.env.NEXT_PUBLIC_DB_PORT),
    host: process.env.NEXT_PUBLIC_HOST,
    database: process.env.NEXT_PUBLIC_DATABASE,
}

const railwayConfig = {
    user: process.env.PGUSERRAILWAY,
    database: process.env.PGDATABASERAILWAY,
    host: process.env.PGHOSTRAILWAY,
    password: process.env.PGPASSWORDRAILWAY,
    port: Number(process.env.PGPORTRAILWAY),

}

const pool =  new Pool(process.env.NEXT_PUBLIC_ENVIRONMENT === 'DEV' ? defConfig : railwayConfig)

export const query = async (text: string, params?: any[]): Promise<QueryResult> => {
    const client = await pool.connect()
    try {
        return await client.query(text, params)
    } finally {
        client.release 
    }
}