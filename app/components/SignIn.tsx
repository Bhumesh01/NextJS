export function SignInComponent() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white border border-borderColor w-fit rounded-xl p-10 text-lg">
        <h1 className="text-5xl text-center font-extrabold">Sign In</h1>
        <LabelledInput label="Username" type="text" placeholder="Enter your username"></LabelledInput>
        <LabelledInput label="Password" type="password" placeholder="Enter your password"></LabelledInput>
        <div className="text-center m-3">
          <button className="bg-bgButton text-textButton rounded-2xl p-3 font-medium w-full  hover:bg-hoverbutton active:bg-hoverbutton">Sign In</button>
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

function LabelledInput(props:LabelledInputType){
    return(
        <div className="mt-5 mb-5">
          <h3 className="text-xl font-medium">{props.label}</h3>
          <input className="p-2 border border-borderColor rounded-lg w-xs h-10" placeholder={props.placeholder} type={props.type} ></input>
        </div>
    )
}
