import axios from "axios";
import { BlogComponent } from "@/app/components/Blog";
async function getBlogs(id: string): Promise<BlogType| null>{
    try{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if(response.status == 200){
            return response.data;
        }
        return null;
    }
    catch(err){
        return null;
    }
}
type BlogType = {
    userId: number,
    id: number,
    title: string,
    body: string
};
export default async function Blogs({params}: {
    params: Promise<{ postId: string }>;
}){ 
    const {postId} = await params;
    const blog = await getBlogs(postId);
    const date = new Date();
    return(
        <div className="h-screen">
            <div className="flex flex-col gap-5 justify-center items-center m-5 pb-10">
                {blog?(
                        <BlogComponent name="Anonymous" title={blog.title} description={blog.body} date={String(date.getDate()).padStart(2, "0")+"/"+String(date.getMonth()+1).padStart(2, "0")+"/"+String(date.getFullYear())}></BlogComponent>
                    ):
                    (
                        <div>Invalid id</div>
                    )
                }
            </div>
        </div>
    )
}
