"use client"
import { SessionProvider, signIn, useSession } from "next-auth/react";
import Link from "next/link";
import {signOut} from "next-auth/react"
export function Navbar(){
    return<div>
        <SessionProvider>
            <NavbarComponent></NavbarComponent>
        </SessionProvider>
    </div>
}

function NavbarComponent(){
    const session = useSession();
    return(
        <div className="p-5 flex justify-between border-b xl:pl-15 xl:pr-15  mb-5 border-b-borderColor">
            <Link href="/">
                <h1 className="animate-pulse font-extrabold text-3xl "> BLOGS</h1>
            </Link>
            <div className="flex gap-5">
                <Link href="/usercard">
                    <Button name="Profile"></Button>
                </Link>
                <Link href="/signup">
                    <Button name="Sign Up"></Button>
                </Link>
                <button className="bg-bgButton text-textButton rounded-2xl p-3 pl-10 pr-10 font-medium w-fit hover:bg-hoverbutton active:bg-hoverbutton" onClick={()=>{
                    if(session.status==="authenticated")signOut();
                    else signIn();
                }} >{`${session.status==='authenticated'?'LogOut':'SignIn'}`}</button>
                
            </div>
        </div>
    )
}
function Button(props:{name: string}){
    return(
    <button className="bg-bgButton text-textButton rounded-2xl p-3 pl-10 pr-10 font-medium w-fit hover:bg-hoverbutton active:bg-hoverbutton">{props.name}</button>
    );
}