'use client'
import { useSession } from "next-auth/react"
import {useRouter} from 'next/navigation'
import ClientProject from "../actions/Client_Projects";
export default function RoleBasedDashboard(){
    const {data:session} = useSession();
    const route = useRouter();
    // async function clientongoingProject(){
    //     const id = session?.user.id
    //     try{
    //         const data = await ClientProject(id);
    //         console.log("Id of the client is",id);
    //     }
    //     catch(err){
    //         return -1;
    //     }
    // }
    return(
        <div className="flex flex-col">
        <div className="flex flex-col h-[10rem] bg-red-500">
            <div className="flex flex-row justify-end gap-[2rem] mt-[2.5rem]">
                {
                    session?.user.whichuser === 'Client'  ? (
                        <div className="flex flex-row justify-end gap-[2rem] mt-[2.5rem] mr-[1rem]">
                            <button className="bg-white text-red-500 px-4 py-2 rounded">Client Completed Project</button>
                            <button className="bg-white text-red-500 px-4 py-2 rounded" onClick={()=>route.push('/ongoingproject')}>Client Ongoing Project</button>
                            <button className="bg-white text-red-500 px-4 py-2 rounded" onClick={()=>{
                                route.push('/postjob')
                            }}>Post Job</button>
                        </div>
                    ) : session?.user.whichuser === 'Job Seeker' ? (
                        <div className="flex flex-row justify-end gap-[2rem] mt-[2.5rem]">
                            <button className="bg-white text-red-500 px-4 py-2 rounded">User Completed Project</button>
                            <button className="bg-white text-red-500 px-4 py-2 rounded">User Ongoing Project</button>
                        </div>
                    ) : null
                }
            </div>
        </div>
    </div>
    )
}