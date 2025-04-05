'use client'
import {useSession} from 'next-auth/react'
export default function(){
  // If only client is login then show these page
  const {data:session} = useSession();
  console.log("The session is",session);
  console.log("The data is",session?.user?.id);
    return(
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Enter the Details of the Project
      </h2>

      <div className="flex flex-col gap-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Project Title
          </label>
          <input
            placeholder="Enter the title of the project"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Project Description
          </label>
          <textarea
            placeholder="Enter the description of the job"
            rows={4}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Budget
          </label>
          <input
            placeholder="Enter the budget of your project"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Timeline
          </label>
          <input
            placeholder="Enter the timeline of the project"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button className="bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition duration-300">
          Create Job
        </button>
      </div>
    </div>
  </div>
    )
}