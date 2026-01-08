import { NextRequest, NextResponse } from "next/server"
import dotenv from "dotenv"
import jwt from "jsonwebtoken"
import client from "@/app/lib/db"
dotenv.config();
interface Details{
  name: string,
  password: string,
  email: string
}
const SECRET = process.env.JWT_PASSWORD;
export async function POST(req:NextRequest){
  const body:Details = await req.json();
  if (
  !body.name ||
  !body.email ||
  !body.password 
) {
  return NextResponse.json(
    { error: "Invalid input" },
    { status: 400 }
  );
}
  try{
    const data = await client.user.findFirst({
      where:{
        username: body.name,
        email: body.email,
        password: body.password
      }
    });
    if(!data){
      return NextResponse.json({
        message: "Incorrect password or email or  email, please check if new user then signUp"
      }, {status: 404});
    }
    const userId = data.id;
    if(!SECRET){
      console.log("NO JWT SECRET FOUND");
      return;
    } 
    const token = jwt.sign({userId}, SECRET);
    return NextResponse.json({
    message: "Successfully Signed In",
    token: token
   }, {status: 200})
  }
  catch(err){
    console.log(err);
    return NextResponse.json({
    message: "Error Signing In",
   }, {status: 500})
  }
}