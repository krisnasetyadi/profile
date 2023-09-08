import { Pool, QueryResult } from 'pg'

const defConfig = {
    user: process.env.NEXT_PUBLIC_USER,
    password: process.env.NEXT_PUBLIC_PASSWORD,
    port: Number(process.env.NEXT_PUBLIC_PORT),
    host: process.env.NEXT_PUBLIC_HOST,
    database: process.env.NEXT_PUBLIC_ENVIRONMENT,
}

const prodConfig = {
  connectionString: process.env.POSTGRES_URL + '?sslmode=require',
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
}

const pool =  new Pool(process.env.NEXT_PUBLIC_ENVIRONMENT === 'DEV' ? defConfig : prodConfig)

export const query = async (text: string, params?: any[]): Promise<QueryResult> => {
    const client = await pool.connect()
    try {
        return await client.query(text, params)
    } finally {
        client.release 
    }
}