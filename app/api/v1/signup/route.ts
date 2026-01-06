import { NextRequest, NextResponse } from "next/server"
interface Details{
  name: string,
  password: string,
  email: string,
  address:{
    city: string,
    state: string,
    houseNumber: number
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

  return NextResponse.json({
    message: "Successfully Signed Up"
    }, {status: 200})
}