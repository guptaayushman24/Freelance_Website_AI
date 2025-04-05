import {create} from 'zustand'
interface AppState{
    userid:number,
    setuserid:(id:number)=>void
}


export const useStore = create<AppState>((set)=>({
    userid:0,
    setuserid:(userid=>set({userid:userid}))
}))