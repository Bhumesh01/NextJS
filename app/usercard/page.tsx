import axios from "axios";
import client from "../lib/db";
// You don't need a separate endpoint for fetching user data, you can directly achieve this in this component itself, All the async logic remains in the server it is not sent to the client, only the HTML is sent to the client.
async function getDetails():Promise<ResponseType | null>{
    try{
        const response = await client.user.findFirst({});
        if (!response) return null;
        return {
            name: response.username,
            email: response.email,
            address: {
              city: response.city,
              state: response.state,
              houseNumber: response.houseNumber,
            },
        };
    }
    catch(err){
        console.log("Error fetching details");
        return null;
    }
}

async function getDetails2():Promise<ResponseType | null>{
    try{
        const token = localStorage.getItem("token");
        const response = await axios.get("http:localhost:3000/api/v1/user/details", {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        console.log(response, "Err")
        if (!response) return null;
        return {
            name: response.data.username,
            email: response.data.email,
            address: {
              city: response.data.city,
              state: response.data.state,
              houseNumber: response.data.houseNumber,
            },
        };
    }
    catch(err){
        console.log("Error fetching details");
        return null;
    }
}

interface ResponseType{
  name: string,
  email: string,
  address:{
    city: string,
    state: string,
    houseNumber: string
  }
};


export default async function User(){
    // await new Promise(r=> setTimeout(r, 5000));
    const data = await getDetails2();
    if(!data){
        return(
            <div className="flex justify-center items-center gap-2 flex-col ">
            <div className="border border-borderColor p-5 rounded-2xl shadow text-2xl">
                <h3>Error Fetching User</h3>
            </div>
            </div>
        )
    }
    return(
        <div className="flex justify-center items-center gap-2 flex-col ">
            <div className="border border-borderColor p-5 rounded-2xl shadow text-2xl">
                <h3><b>Name:</b> {data.name}</h3>
                <h3><b>Email:</b> {data.email}</h3>
                <h3><b>Address:</b> {data.address.houseNumber}, {data.address.city},{data.address.state}</h3>
            </div>
        </div>
    )
}