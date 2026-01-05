interface BlogInterface{
    name: string,
    title: string,
    description: string,
    date: string,
}

export function BlogComponent(props:BlogInterface){
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