'use client'
import { getCookie, setCookie } from "cookies-next";
import { useState } from "react";
interface Props {
  user: string;
}

export default function ApplyClinetDetailButton({ user}: Props) {
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
  return (
    <div>
      {
        user === 'Job Seeker' ? (
          <div className="flex flex-row gap-[0.5rem]">
            <button className="bg-lime-200 text-purple-400 px-4 py-2 rounded">Apply</button>
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