import Link from "next/link";
export function Navbar(){
    return(
        <div className="p-5 flex justify-between border-b xl:pl-15 xl:pr-15  mb-5 border-b-borderColor">
            <h1 className="animate-pulse font-extrabold text-3xl "> BLOGS</h1>
            <div className="flex gap-5">
                <Link href="/signup">
                    <Button name="Sign Up"></Button>
                </Link>
                <Link href="/signin">
                    <Button name="Sign In"></Button>
                </Link>
            </div>
        </div>
    )
}
function Button(props:{name: string}){
    return(
    <button className="bg-bgButton text-textButton rounded-2xl p-3 pl-10 pr-10 font-medium w-fit hover:bg-hoverbutton active:bg-hoverbutton">{props.name}</button>
    );
}