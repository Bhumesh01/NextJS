import { NextResponse } from "next/server";
import client from "../../prisma";
export async function GET(){
    try{
      const response = await client.user.findFirst({});
      return NextResponse.json({
        name: response?.username,
        email: response?.email,
        address: {
          city: response?.city,
          state: response?.state,
          houseNumber: response?.houseNumber
    }}, {status: 200});
    }
    catch(err){
      console.log(err);
      return NextResponse.json({
        message: "Error While Fetching details"
      }, {status: 500});
    }
}