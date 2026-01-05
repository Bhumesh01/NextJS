export function SignUpComponent() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border border-borderColor w-fit rounded-xl p-10 text-lg shadow-xl">
        <h1 className="text-5xl text-center font-extrabold">Sign Up</h1>
        <div className="mt-5 mb-5">
          <h3 className="text-xl font-medium">Username</h3>
          <input className="p-2 border border-borderColor rounded-lg w-xs h-10" type="text" placeholder="Enter your username"></input>
        </div>
        <div className="mt-5 mb-5">
          <h3 className="text-xl font-medium">Password</h3>
          <input className="p-2 border border-borderColor rounded-lg w-xs h-10" type="password" placeholder="Enter your password"></input>
        </div>
        <div className="text-center m-3">
          <button className="bg-bgButton text-textButton rounded-2xl p-3 font-medium w-full hover:bg-hoverbutton active:bg-hoverbutton">Sign In</button>
        </div>
      </div>
    </div>
  );
}
