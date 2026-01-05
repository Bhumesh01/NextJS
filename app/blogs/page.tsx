import axios from "axios";
import {BlogComponent} from "../components/Blog"
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
