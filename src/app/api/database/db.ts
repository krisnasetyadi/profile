import { Pool, QueryResult } from 'pg'

const pool = new Pool({
    user: 'postgres',
    password: 'qwerty123',
    port: 5433,
    host: 'localhost',
    database: 'personal_profile',
})

export const query = async (text: string, params?: any[]): Promise<QueryResult> => {
    const client = await pool.connect()
    try {
        return await client.query(text, params)
    } finally {
        client.release 
    }
}