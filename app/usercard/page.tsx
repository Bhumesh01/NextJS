import axios from "axios";

async function getDetails(){
    try{
        const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details");
        return response.data;
    }
    catch(err){
        console.log("Error fetching details");
        return "";
    }
}

interface responseType{
  name: string,
  email: string,
  address: {
    city: string,
    state: string,
    houseNumber: string
  }
}


export default async function User(){
    // await new Promise(r=> setTimeout(r, 5000));
    const data:responseType = await getDetails();
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