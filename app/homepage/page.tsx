import RoleBasedDashboard from "../components/Role_Based_Dashboard";
import { PrismaClient } from "@/db/generated/prisma";
import { NEXT_AUTH } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { cookies } from 'next/headers'
import Apply_Client_details_button from '../components/Apply_Client_details_button'
const client = new PrismaClient();
export default async function ServerClientInfo() {
    const session = await getServerSession(NEXT_AUTH);
    const whichuser = session.user.whichuser;

    const cookieStore = await cookies();
    const cookieindex = await cookies();
    const datastate = cookieStore.get('buttonvisibility')?.value
    console.log("The datastate is", datastate);
    async function getAllJobs() {
        try {
            const jobs = await client.jobSchema.findMany({
                include: {
                    client: {
                        select: {
                            client_name: true,
                            Email: true
                        }
                    }
                }
            });
            if (!jobs) {
                console.log("No jobs found in the db");
                return (
                    <div>Server is down try after some time</div>
                )
            }
            // const clientname = jobs.client.client_name;

            return jobs.map((job) => ({
                jobbtitle: job.Job_titile,
                jobdescription: job.Job_description,
                budget: job.Budget,
                timeline: job.Timeline,
                clientName: job.client.client_name,
                clientEmail: job.client.Email
            }))

        }
        catch (error) {
            console.error("Database Error:", error)
        }
    }

    const jobdetails = await getAllJobs();
    console.log("The jobdetails is", jobdetails);
    return (
        <div>
            <RoleBasedDashboard></RoleBasedDashboard>
            <div className="p-6 space-y-4">
                {jobdetails?.map((job: any, index: any) => (
                    <div
                        key={index}
                        className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
                    >
                        <h2 className="text-xl font-bold text-blue-600">{job.jobbtitle}</h2>
                        <p className="text-gray-700 mt-2">{job.jobdescription}</p>
                        <div className="mt-3 flex justify-between text-sm text-gray-600">
                            <span>💰 Budget: <strong>{job.budget}</strong></span>
                            <div className="flex flex-col gap-[1rem]">
                                <span>Client Name :{job.clientName || 'N/A'}</span>
                                <span>Client Name :{job.clientEmail || 'M/A'}</span>

                                <span>🕒 Timeline: <strong>{job.timeline}</strong></span>
                            </div>

                        </div>

                        <Apply_Client_details_button user={whichuser}></Apply_Client_details_button>

                    </div>
                ))}
            </div>
        </div>
    )
}

// We will write the seperate function in the action for the client name and the clinet email and handle it seperatly and will call the final component here