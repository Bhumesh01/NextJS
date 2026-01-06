import { NextRequest, NextResponse } from "next/server"
import client from "../../../lib/db"
interface Details{
  name: string,
  password: string,
  email: string,
  address:{
    city: string,
    state: string,
    houseNumber: string
  }
}
export async function POST(req:NextRequest){
  const body:Details = await req.json();
  if (
  !body.name ||
  !body.email ||
  !body.password ||
  !body.address?.city ||
  !body.address?.state
) {
  return NextResponse.json(
    { error: "Invalid input" },
    { status: 400 }
  );
}
  try{
    const response = await client.user.create({
      data: {
        username: body.name,
        password: body.password,
        email: body.email,
        houseNumber: body.address.houseNumber,
        city: body.address.city,
        state: body.address.state
      }
    });
    return NextResponse.json({
      message: "Successfully Signed Up"
      }, {status: 200})
  }
  catch(err){
    console.log(err);
    return NextResponse.json({
      message: "Internal Server Error"
    }, {status: 500})
  }
}