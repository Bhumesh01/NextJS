import { NextRequest, NextResponse } from "next/server";
import client from "../../../../lib/db";
import dotenv from "dotenv"
import jwt from "jsonwebtoken"
dotenv.config();
const SECRET = process.env.JWT_PASSWORD!;
export async function GET(req: NextRequest){
    try{
      const authHeader = req.headers.get("authorization");
      if (!authHeader) {
        return NextResponse.json(
          { message: "Authorization header missing" },
          { status: 401 }
        );
      }
      const token = authHeader.split(" ")[1];
      if(!SECRET){
        console.log("No JWT SECRET");
        return;
      }
      const decoded = jwt.verify(token, SECRET) as {userId: string};

      const userId = decoded?.userId;
      const response = await client.user.findUnique({
        where: {
          id: Number(userId)
        }
      });
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