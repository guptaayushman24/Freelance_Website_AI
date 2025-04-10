'use server'
import { PrismaClient } from "@/db/generated/prisma";
const client = new PrismaClient();
export default async function Apply_Project(client_id:number,user_id:number,jobtitle:string){
    try{    
        await client.applyJob.createMany({
            data:{
                clientid:client_id,
                userid:user_id,
                jobtitle:jobtitle

            },
        })
        console.log("Apply Project data is",jobtitle);
        return 1;
    }
    catch(err){
        return -1;
    }
}
