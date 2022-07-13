import React, { useContext, useEffect, useState } from 'react'
import {QUICKAUTH} from './Join';
function QuickLogin() {
    const {setQuickLogin} = useContext(QUICKAUTH)
    const[data,setData] = useState(localStorage.getItem('quick_login')?JSON.stringify(localStorage.getItem('quick_login')):[]);
    const[username,setUsername]=useState("");
    const[email,setEmail]=useState("");
    const[img,setImg]=useState(null);
    const[msg,setMsg]=useState("Hello ...");
    const[cont,setCont]=useState(false)
    const QuickLogin=()=>{
      //Add users
    };
    const QuickLoginImage=()=>{
        //upload image
    };
 
      return (
    <div>
        <div>
<div tabindex="-1" aria-hidden="true" style={{zIndex:'100',display:'flex',justifyContent:'center',alignItems:'center'}}  class=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center">
<div class="relative p-4 w-full max-w-2xl h-full md:h-auto">

<div class="relative bg-white rounded-lg shadow dark:bg-gray-700">

<div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
<h3 class="text-xl font-semibold text-gray-900 dark:text-white">
Quick Join
</h3>
<button onClick={close}   type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</button>
</div>

<div class="p-6 space-y-6">
    <small class='text-grey-400'>Quick login allows users to join a queue fast.
        To use quick join, interaction will be done via email.
    </small>
<div>
<div>
                       <div class="mb-6">
                          <input
                             type="text"
                             placeholder="Username"
                             class="
                             w-full
                             rounded-md
                             border
                             bordder-[#E9EDF4]
                             py-3
                             px-5
                             bg-[#FCFDFE]
                             text-base text-body-color
                             placeholder-[#ACB6BE]
                             outline-none
                             focus-visible:shadow-none
                             focus:border-primary
                             "
                             value={username}
                             onChange={(e)=>setUsername(e.target.value)}
                             />
                             
                       </div>
                       <div class="mb-6">
                          <input
                             type="email"
                             placeholder="Email"
                             class="
                             w-full
                             rounded-md
                             border
                             bordder-[#E9EDF4]
                             py-3
                             px-5
                             bg-[#FCFDFE]
                             text-base text-body-color
                             placeholder-[#ACB6BE]
                             outline-none
                             focus-visible:shadow-none
                             focus:border-primary
                             "
                             value={email}
                             onChange={(e)=>setEmail(e.target.value)}
                             />
                             <div class="col-span-6 my-4 py-4 sm:col-span-3">
                           
                             </div>
              <div class="col-span-6 my-4 py-4 sm:col-span-3">
                <label for="last-name" class="block text-sm font-medium text-gray-700">Take a selfie of ourself</label>
                <input type="file"onChange={(e)=>setImg(e.target.files[0])}  name="last-name" id="last-name" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>
                  {
                    cont?
                    <button onClick={(e)=>QuickLogin(e)} class="bg-[#ffba44] py-3 px-12 mx-2 my-5 rounded-md shadow-md text-white"
                style={{fontFamily:"inherit",fontWeight:"600"}}>Add user</button>
               :<button onClick={(e)=>QuickLoginImage(e)} class="bg-[#ffba44] py-3 px-12 mx-2 my-5 rounded-md shadow-md text-white"
               style={{fontFamily:"inherit",fontWeight:"600"}}>Upload image</button>
              
                  }
                <p style={{color:"green",textAlign:"center"}} class="py-1">{msg}</p>
                       </div>
                       
 </div>
</div>
<a class='text-[#F9A826]' href='/auth'>
<span>Login instead</span>
</a>
</div>

<div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
<button onClick={close} data-modal-toggle="defaultModal"  type="button" class="text-white bg-[#F9A826] hover:bg-[#F9A826] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Close</button>
</div>
</div>
</div>
</div>

  </div>
    </div>
  )
}

export default QuickLogin
