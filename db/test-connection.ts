import { Pool } from "pg";
import dotenv from 'dotenv'

dotenv.config()

const db = new Pool({
    connectionString: process.env.TEST_DATABASE_URL,
})

console.log("Log in connection: Using database:", process.env.TEST_DATABASE_URL);
export default db