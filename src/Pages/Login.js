import React, { useContext, useEffect, useState } from 'react'
import {LoginReigster} from "./Auth";
import { AxiosCont } from './AxiosCont';
import {create} from "../App";
function Login() {
   const {playSound,setShowalert,setBox} = useContext(create);
    const{setLogin} =useContext(LoginReigster);
    const ChangeState=()=>{
       setLogin(false);
    }
    const locals = sessionStorage.getItem("queue_data");
    useEffect(()=>{
      if(locals){
         window.location = "/";
      }
    },[]);
    const[logintxt,setLogintxt]=useState("Login")
    const[username,setUsername]=useState("");
    const [email,setEmail]=useState(null);
    const[password,setPassword]=useState("");
    const[LoginData,setLoginData]=useState(null);
    const LoginRequest=(e)=>{
       setLogintxt('Loading...')
      AxiosCont.post("/login-details",{username,password})
      .then(response=>{
         if(response.data.length==0){
            setBox({type:"cancel",message:`No match `,time:7,des:"Ensure you use the right login info"});
            setShowalert(true);
            setLogintxt('Login')
         }else{
            setBox({type:"green",message:"Logged In",time:7,des:"Redirecting to homepage"});
            setShowalert(true);
            setLoginData(response.data);
           playSound("good")
            sessionStorage.setItem("queue_data",JSON.stringify(response&&response.data));
         window.location= "/";
         setLogintxt('Login')
      }
      })
      .catch(err=>{
         playSound("cancel")
         setBox({type:"cancel",message:`Error occured ${err}`,time:7,des:"Try again later"});
         setShowalert(true);
         setLogintxt('Login') 
      });
   }
   const ForgotPassword=()=>{
      
      AxiosCont.get(`/forgot-password/${email}`,{password})
      .then(response=>{
         playSound("good");
         alert("Password change. \n relaod page before trying again");
      }).catch(err=>{
         alert(`"ERROR" ${err}`);
         playSound("cancel");
      })
   }
   const promptalert=(e)=>{
     
var promval = prompt("Please enter your email and password in the following syntax", "Joe.emaple@gmail.com,newPaswword"); 
if (promval != null&&promval.split(",")[0].length>6) { 
setEmail(promval.split(",")[0]);
setPassword(promval.split(",")[1])
console.log(promval.split(","))
ForgotPassword()
return true;
} 
else {
   playSound("cancel");
return false;
}
}
   
  return (
    <div>
       
         <section class=" py-20 lg:py-[120px]">
        <div class="container">
           <div class="flex flex-wrap  mx-2">
              <div class="w-full px-4">
                 <div
                    class="
                    max-w-[525px]
                    mx-auto
                    text-center
                    bg-white
                    rounded-lg
                    relative
                    overflow-hidden
                    py-16
                    px-10
                    sm:px-12
                    md:px-[60px]
                    "
                    >
                    <div class="mb-10 md:mb-16 text-center">
                       <a
                          href="javascript:void(0)"
                          class="inline-block max-w-[160px] mx-auto"
                          >
                       <img src="img/L.png" style={{height:"60px"}} alt="Qtree" />
                       </a>
                    </div>
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
                             type="password"
                             placeholder="Password"
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
                             value={password}
                             onChange={(e)=>setPassword(e.target.value)}
                             />
                             <button onClick={(e)=>LoginRequest(e)} class="bg-[#ffba44] py-3 px-12 mx-2 my-5 rounded-md shadow-md text-white"
                              style={{fontFamily:"inherit",fontWeight:"600"}}>{logintxt}</button>

                       </div>
                       
                    </div>
                    <ul class="flex justify-between -mx-2 mb-12">
                      
                       <li class="px-2 w-full">
                          <a
                             href="javascript:void(0)"
                             class="
                             flex
                             h-11
                             font-bold
                             items-center
                             justify-center
                             rounded-md
                             bg-white
                             hover:bg-opacity-90
                             "
                             >
                             
                          </a>
                       </li>
                    </ul>
                    <a onClick={(e)=>promptalert(e)}
                       
                       class="
                       text-base
                       inline-block
                       mb-2
                       text-[#ffba44]
                       hover:underline hover:text-primary
                       "
                       style={{cursor:"pointer"}}
                       >
                    Forget Password?
                    </a>
                    <p class="text-base text-[#adadad]">
                       Not a member yet?
                       <a onClick={ChangeState}
                          href="javascript:void(0)"
                          class="text-primary hover:underline"
                          >
                       Sign Up
                       </a>
                    </p>
                   
                 </div>
              </div>
           </div>
        </div>
     </section>
    </div>
  )
}

export default Login