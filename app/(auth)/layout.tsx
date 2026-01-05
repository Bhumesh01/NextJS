export default function AuthLayout({children}: {children: React.ReactNode}){
    return<div>
        <div className="absolute bg-green-500 w-fit h-fit p-5  rounded-full top-30 right-5 animate-bounce text-white">
            <span className="text-lg font-semibold">Sign In To Get 20% Off</span>
            <span className="pl-1 text-red-500 text-2xl font-extrabold">!</span>
        </div>
        {children}
    </div>
}