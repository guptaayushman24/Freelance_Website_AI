import {create} from 'zustand'
interface AppState{
    userid:number,
    setuserid:(id:number)=>void
    client_name:string,
    setclient_name:(client_name:string)=>void,
    client_email:string,
    setclient_email:(client_email:string)=>void,
    projecttitle:string,
    setprojecttitle:(projecttitle:string)=>void,
    budget:string,
    setbudget:(budget:string)=>void,
    timeline:string,
    settimelime:(timeline:string)=>void
}


export const useStore = create<AppState>((set)=>({
    userid:0,
    setuserid:(userid=>set({userid:userid})),
    client_name:'',
    setclient_name:(client_name=>set({client_name:client_name})),
    client_email:'',
    setclient_email:(client_email=>set({client_email:client_email})),
    projecttitle:'',
    setprojecttitle:(projecttitle=>set({projecttitle:projecttitle})),
    budget:'',
    setbudget:(budget=>set({budget:budget})),
    timeline:'',
    settimelime:(timeline=>set({timeline:timeline}))

}))