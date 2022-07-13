import React, { createContext, useEffect,useState} from 'react'
import { COLOR } from '../Color';
import Join from './Join'
import Myqueue from './Myqueue'
export  const AuthContext = createContext(null);
function Scares() {
    const[showQueue,setShowQueue]=useState(true);
    const locals = sessionStorage.getItem("queue_data")?JSON.parse(sessionStorage.getItem("queue_data")):null;
    useEffect(()=>{
        if(!locals){
     window.location = "/auth";
        }
    },[]);
    const Control=(val)=>{
        setShowQueue(val)
    }
    const GO=()=>{
        window.location = "/getstarted";
    }
  return (
    <div>
 <div>
<div class="py-8 mt-6 mb-2 px-4">
  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
    <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
      <span class="block"style={{color:COLOR[3]}}>Start by</span>
      <span class="block text-indigo-600" style={{color:COLOR[0]}}>{locals&locals?"Viewing your queue status":"joining a queue if you haven't."}</span>
      <small onClick={GO} class="block py- px-2 my-2 text-bold kanit" style={{fontFamily:" 'Kanit', sans-serif",fontSize:"14px",color:COLOR[3],cursor:"pointer"}}>Learn more</small>
    </h2>
    <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
      <div class="inline-flex rounded-md shadow">
        <a onClick={()=>Control(true)} class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white
       cursor-pointer  bg-indigo-600 hover:bg-indigo-700" style={{background:COLOR[0]}}>Recent </a>
      </div>
      <div class="ml-3 inline-flex rounded-md shadow">
        <a onClick={()=>Control(false)} class="inline-flex items-center justify-center px-5 py-3 border border-transparent 
        text-base font-medium rounded-md cursor-pointer
        text-indigo-600 bg-white hover:bg-indigo-50" style={{color:COLOR[0]}}>Join queue</a>
      </div>
    </div>
  </div>
</div>
</div>
 <AuthContext.Provider value={{setShowQueue}}>
        {
            showQueue?
            <Myqueue/>
            :
            <Join/>

        }
    </AuthContext.Provider>
            </div>

  )
}

export default Scares