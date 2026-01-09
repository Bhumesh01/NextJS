import NextAuth from "next-auth"
import  CredentialsProvider  from "next-auth/providers/credentials"
import client from "@/app/lib/db";
const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Login with Email & Username",
            credentials:{
                username: {label: "Username", type:"text", placeholder: "Enter Your username"},
                email: {label: "Email", type:"text", placeholder: "Enter Your Email"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials:any){
                if (!credentials?.email || !credentials?.password) {
                     return null;
                }
                const user = await client.user.findFirst({
                    where:{
                        username: credentials?.username,
                        password: credentials?.password,
                        email: credentials?.email
                    }
                })
                if(user){
                    return{
                        id: user.id.toString(),
                        email: user.email,
                        username: user.username,
                    }
                }
                return null;
            }
        })
    ],
    secret: "hi"
})

export { handler as GET, handler as POST }