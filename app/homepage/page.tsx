'use client'
import { useSession } from "next-auth/react"
export default function () {
    const { data: session } = useSession();
    return (
        <div className="flex flex-col">
            <div className="flex flex-col h-[10rem] bg-red-500">
                <div className="flex flex-row justify-end gap-[2rem] mt-[2.5rem]">
                    {
                        session?.user.whichuser === 'Client' ? (
                            <div className="flex flex-row justify-end gap-[2rem] mt-[2.5rem] mr-[1rem]">
                                <div className="bg-white text-red-500 px-4 py-2 rounded">Client Completed Project</div>
                                <div className="bg-white text-red-500 px-4 py-2 rounded">Client Ongoing Project</div>
                                <div className="bg-white text-red-500 px-4 py-2 rounded">Post Job</div>
                            </div>
                        ) : session?.user.whichuser === 'Job Seeker' ? (
                            <div className="flex flex-row justify-end gap-[2rem] mt-[2.5rem]">
                                <div className="bg-white text-red-500 px-4 py-2 rounded">User Completed Project</div>
                                <div className="bg-white text-red-500 px-4 py-2 rounded">User Ongoing Project</div>
                            </div>
                        ) : null
                    }
                </div>
            </div>
        </div>
    )
}