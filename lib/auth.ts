import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import GitHubProvider from "next-auth/providers/github";
import {signinobject} from '@/app/zod/validation'
import { PrismaClient } from "@/db/generated/prisma";
import { debug } from "node:util";
import { redirect } from "next/dist/server/api-utils";
require('dotenv').config({path:'D:/Freelance_Project/freelance_ai/app/.env'})
const client = new PrismaClient();
export const  NEXT_AUTH = ({
    // What we will pass here we will pass providers here how we are doing authentication
    providers: [
        CredentialsProvider({
            name:'Email',
            credentials:{
                email:{label: "Email", type: "text", placeholder: "Enter your Email" },
                password: { label: "Password", type: "password" ,placeholder:"Enter your Password"},
            },
            async authorize(credentials:any) {
                // console.log("Github Credentials",process.env.GITHUB_ID);
                // console.log("Github Credentials",process.env.GITHUB_SECRET);
                const email = credentials.email;
                const password = credentials.password;
                if (!email || !password) {
                    throw new Error("Email and Password are required");
                  }
                // Add the zod validation on the email and password
                const success = signinobject.parse({
                    email:email,
                    password:password
                })
                if (!success){
                    return "Check credentials"
                }
                const user = await client.userSchema.findUnique({
                    where:{
                        Email:email
                    }
                })
                if (!user){
                    return null;
                }
                const userpassword = await client.userSchema.findUnique({
                    where:{
                        Email:email
                    }
                })
                if (userpassword?.Password==password){
                    return{
                        id:userpassword?.user_id,
                        name:userpassword?.Name
                    }
                }
                else{
                    return null;
                }
            },
        },
    ),
      GitHubProvider({
        clientId:process.env.GITHUB_ID || "MISSING_ID",
        clientSecret:process.env.GITHUB_SECRET || "MISSING_SECRET",
      }),
    ],
    secret: process.env.NEXTAUTH_SECRET || "secret",
    // Creating the JWT route
    callbacks:{
        async session({token,session}:any){
            session.user.id = token.sub;
            return session;
        }
    },
  }
);

  
  
  