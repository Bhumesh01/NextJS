import { PrismaClient } from "@/app/generated/prisma/client";
import {Pool} from "pg";
import dotenv from "dotenv"
import { PrismaPg } from "@prisma/adapter-pg"
dotenv.config();
const prismaClientSingleton = ()=>{
    const pool = new Pool({connectionString: process.env.DATABASE_URL});
    const adapter = new PrismaPg(pool);
    return new PrismaClient({adapter});
}

declare global{
    var client: undefined | ReturnType<typeof prismaClientSingleton>
}

const client = globalThis.client??prismaClientSingleton();

if(process.env.NODE_ENV!=='production') globalThis.client = client;
export default client;