import { NextRequest, NextResponse } from "next/server"
interface Details{
  name: string,
  password: string,
  email: string
}
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

  return NextResponse.json({
    message: "Successfully Signed In",
    name: body.name,
    password: body.password,
    email: body.email
  }, {status: 200})
}