import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json({
  "name": "Harkirat",
  "email": "harkirat@gmail.com",
  "address": {
    "city": "Delhi",
    "state": "Delhi",
    "houseNumber": "21"
  }
})
}