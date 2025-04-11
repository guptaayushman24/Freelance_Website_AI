'use client'
import { getCookie, setCookie } from "cookies-next";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Apply_Project from '../actions/Apply_Project'
interface Props {
  user: string,
  clientid:number,
  jobtitle:string,
  budget :string,
  timeline : string
}

export default  function ApplyClinetDetailButton({ user,clientid,jobtitle,budget,timeline}: Props) {
  // const [visibledata, Setvisibledata] = useState<boolean>(false);
  // const [showdata,Setshowdata] = useState<string>('');
  // function togglebutton() {
  //   const newVisibility = !visibledata;
  //   Setvisibledata(newVisibility);
  //   console.log("Cookie set to:", newVisibility);
  //   if (newVisibility===true){
  //       setCookie('buttonvisibility','true');
  //   }
  //   else if (newVisibility===false){
  //     setCookie('buttonvisibility','false')
  //   }
  //   console.log("The index of the div is",index);
  // }
  const [loading,Setloading] = useState(false);
  const {data:session} = useSession();
  async function applyforproject(){
    try{
      Setloading(true);
      const userid =  session?.user.id;
     console.log("The client id is",clientid);
     console.log("The user id is",userid);
      const jobapply = await Apply_Project (clientid,userid,jobtitle,budget,timeline);
      if (jobapply==1){
        Setloading(false);
      } 
      else if (jobapply==-1){
        alert("Server goes does try after some time");
        console.log(jobapply);
        console.log("The budget  is",budget);
        console.log("The timeline  is",timeline);
        return;
      }
    }
    catch(err){
      console.log("Something is wrong for applying the project");
    }
  }
  return (
    <div>
      {
        user === 'Job Seeker' ? (
          <div className="flex flex-row gap-[0.5rem]">
            {
              loading?(
                <button className="bg-lime-200 text-purple-400 px-4 py-2 rounded">Project is submitting to client</button>
              ):(
                <button className="bg-lime-200 text-purple-400 px-4 py-2 rounded" onClick={()=>applyforproject()}>Apply</button>
              )
            }
            <button className="bg-lime-200 text-purple-400 px-4 py-2 rounded">See Client Details</button>
          </div>
        ) : user === 'Client' ? (
          <div className="flex flex-row gap-[0.5rem]">
            <button className="bg-lime-200 text-purple-400 px-4 py-2 rounded">See Client Details</button>

          </div>
        ) : null
      }
    </div>
  );
}