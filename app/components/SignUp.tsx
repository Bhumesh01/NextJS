"use client"
import axios from "axios"
import { useRouter } from "next/navigation";
import {useRef, useState, forwardRef} from "react"
export function SignUpComponent() {
  const router = useRouter();
  const [message, setMessage] = useState<string>("");
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const houseNumberRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const stateRef = useRef<HTMLInputElement>(null);
  async function Submit(){
    const username = usernameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const houseNumber = houseNumberRef.current?.value;
    const city = cityRef.current?.value;
    const state = stateRef.current?.value;
    if(!username || !email || !password || !city || !state || !houseNumber){
      setMessage("Please Fill all the details!");
      return;
    }
    try{
      const response = await axios.post("http://localhost:3000/api/v1/signup", 
        {
          name: username,
          email: email,
          password: password,
          address:{
            city: city,
            state: state,
            houseNumber: houseNumber
          }
        });
      if(response.status == 200){
        setMessage(response.data.message);
        router.push("/signin");
        return;
      }
    }
    catch(err){
      setMessage("Error while signing up");
    }
  }
  return (
    <div className="flex justify-center items-center h-full flex-col">
      {message&&(<div className="relative shadow shadow-blue-500 mb-5 text-white font-semibold text-xl bg-blue-950 w-fit p-5 rounded-2xl h-fit">{message}</div>)}
      <div className="bg-white border border-borderColor w-fit rounded-xl p-10 text-lg">
        <h1 className="text-5xl text-center font-extrabold">Sign Up</h1>
        <LabelledInput ref={usernameRef} label="Username" type="text" placeholder="Enter your username"></LabelledInput>
        <LabelledInput ref={emailRef} label="Email" type="text" placeholder="Enter your email"></LabelledInput>
        <LabelledInput ref={passwordRef} label="Password" type="password" placeholder="Enter your password"></LabelledInput>
        <LabelledInput ref={houseNumberRef} label="House Number:" type="text" placeholder="Enter your house number"></LabelledInput>
        <LabelledInput ref={cityRef} label="City:" type="text" placeholder="Enter your city"></LabelledInput>
        <LabelledInput ref={stateRef} label="State:" type="text" placeholder="Enter your state"></LabelledInput>
        <div className="text-center m-3">
          <button className="bg-bgButton text-textButton rounded-2xl p-3 font-medium w-full  hover:bg-hoverbutton active:bg-hoverbutton" onClick={Submit}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}
interface LabelledInputType{
    label: string,
    placeholder: string,
    type?: string
}

const LabelledInput = forwardRef<HTMLInputElement, LabelledInputType>(({label, placeholder, type="text"}, ref)=>{
    return(
        <div className="mt-5 mb-5">
          <h3 className="text-xl font-medium">{label}</h3>
          <input ref={ref} className="p-2 border border-borderColor rounded-lg w-xs h-10" placeholder={placeholder} type={type} ></input>
        </div>
    )
});
