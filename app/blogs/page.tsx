import axios from "axios";
async function getBlogs(){
    try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        if(response.status == 200){
            return response.data;
        }
    }
    catch(err){
        return [];
    }
}
type BlogType = {
    userId: number,
    id: number,
    title: string,
    body: string
};
export default async function Blogs(){
    const blogs:BlogType[] = await getBlogs();
    return(
        <div className="h-screen">
            <div className="p-5 flex justify-between border-b xl:pl-15 xl:pr-15  mb-5 border-b-borderColor">
                <h1 className="animate-pulse font-extrabold text-3xl "> BLOGS</h1>
                <div className="flex gap-5">
                    <Button name="Add Blogs"></Button>
                    <Button  name="Login"></Button>
                </div>
            </div>
            <div className="flex flex-col gap-5 justify-center items-center m-5 pb-10">
                {blogs.map((b, id)=>{
                    const date = new Date();
                    return(
                        <BlogComponent key={id} name="Anonymous" title={b.title} description={b.body} date={String(date.getDate()).padStart(2, "0")+"/"+String(date.getMonth()+1).padStart(2, "0")+"/"+String(date.getFullYear())}></BlogComponent>
                    )
                })}
            </div>
        </div>
    )
}

function Button(props:{name: string}){
    return(
    <button className="bg-bgButton text-textButton rounded-2xl p-3 pl-10 pr-10 font-medium w-fit hover:bg-hoverbutton active:bg-hoverbutton">{props.name}</button>
    );
}

interface BlogInterface{
    name: string,
    title: string,
    description: string,
    date: string,
}

function BlogComponent(props:BlogInterface){
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