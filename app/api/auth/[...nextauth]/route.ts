import NextAuth from "next-auth"
import  CredentialsProvider  from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import client from "@/app/lib/db";
import dotenv from "dotenv"
dotenv.config();
const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Email & Username",
            credentials:{
                username: {label: "Username", type:"text", placeholder: "Enter Your username"},
                email: {label: "Email", type:"text", placeholder: "Enter Your Email"},
                password: {label: "Password", type: "password", placeholder: "Enter your Password"}
            },
            async authorize(credentials:any){
                if (!credentials?.email || !credentials?.username || !credentials?.password) {
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
        }),
        GoogleProvider({
            clientId: "fsv",
            clientSecret: "klk"
        }),
        GithubProvider({
            clientId: "",
            clientSecret: ""
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }