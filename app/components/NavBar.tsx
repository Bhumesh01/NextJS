// import { SessionProvider, signIn, useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { getServerSession } from "next-auth";

export async function Navbar(){
    const session = await getServerSession();
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
                 {session ? (
          <Link href="/api/auth/signout">
            <Button name="Logout" />
          </Link>
        ) : (
          <Link href="/api/auth/signin">
            <Button name="Sign In" />
          </Link>
        )}
                 
            </div>
        </div>
    )
}
function Button(props:{name: string}){
    return(
    <button className="bg-bgButton text-textButton rounded-2xl p-3 pl-10 pr-10 font-medium w-fit hover:bg-hoverbutton active:bg-hoverbutton">{props.name}</button>
    );
}