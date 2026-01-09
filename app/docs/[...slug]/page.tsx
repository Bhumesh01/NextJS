export default async function Doc({params}:{
    params: Promise<{slug ?: string[]}>
}){
    const folderId = (await params).slug??[];
    console.log(folderId);
    return <div className="flex justify-center text-2xl font-semibold">
        <h1>The your on: localhost:3000/docs/ </h1>
        {folderId.map((d, id)=>{
            return(
                <span key={id}>{d}/</span>
            )})
        }
    </div>
}