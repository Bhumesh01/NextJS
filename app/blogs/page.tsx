export default function Blogs(){
    return(
        <div className="h-screen">
            <div className="p-5 flex justify-between border-b xl:pl-15 xl:pr-15  mb-5 border-b-borderColor">
                <h1 className="font-extrabold text-3xl "> BLOGS</h1>
                <div className="flex gap-5">
                    <Button name="Add Blogs"></Button>
                    <Button  name="Login"></Button>
                </div>
            </div>
            <div className="flex flex-col gap-5 justify-center items-center m-5">
                <Blog name="Bhumi" title="100xDevs Bootcamp" date="January 1, 2026" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages"></Blog>
                <Blog name="Bhumi" title="100xDevs Bootcamp" date="January 1, 2026" description="First Ever bootcamp that will make you Job ready"></Blog>
                <Blog name="Bhumi" title="100xDevs Bootcamp" date="January 1, 2026" description="First Ever bootcamp that will make you Job ready"></Blog>
                <Blog name="Bhumi" title="100xDevs Bootcamp" date="January 1, 2026" description="First Ever bootcamp that will make you Job ready"></Blog>
                <Blog name="Bhumi" title="100xDevs Bootcamp" date="January 1, 2026" description="First Ever bootcamp that will make you Job ready"></Blog>
            </div>
        </div>
    )
}

function Button(props:{name: string}){
    return(
    <button className="bg-bgButton text-textButton rounded-2xl p-3 pl-10 pr-10 font-medium w-fit hover:bg-hoverbutton active:bg-hoverbutton">{props.name}</button>
    );
}

interface BlogType{
    name: string,
    title: string,
    description: string,
    date: string,
}

function Blog(props:BlogType){
    return(
        <div className="w-full max-w-4xl border p-5 rounded-2xl border-borderColor">
            <div className="flex justify-between text-sm mb-5">
                <div className="font-semibold">{props.name}</div>
                <div>{props.date}</div>
            </div>
            <div>
                <h1 className="text-2xl text-center mb-2">{props.title}</h1>
                <p className="text-center">{props.description}</p>
            </div>
        </div>
    )
}