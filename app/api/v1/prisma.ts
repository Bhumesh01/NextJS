import { PrismaClient } from "@/app/generated/prisma/client";
import {Pool} from "pg";
import dotenv from "dotenv"
import { PrismaPg } from "@prisma/adapter-pg"
dotenv.config();
const pool = new Pool({connectionString: process.env.DATABASE_URL});
const adapter = new PrismaPg(pool);
const client = new PrismaClient({adapter});

export default client;