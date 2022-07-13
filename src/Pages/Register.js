import React, { useContext, useEffect, useState } from 'react'
import {LoginReigster} from "./Auth";
import { AxiosCont } from './AxiosCont';
import {create} from "../App";
function Register() { 
    const {setLogin}= useContext(LoginReigster);
    const[regtxt,setRegtxt]=useState('Signup')
     const {playSound,setShowalert,setBox} = useContext(create);
    const[username,setUsername]=useState("");
    const[firstname,setFirstname]=useState("");
    const[lastname,setLastname]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[c_password,setC_password]=useState("");
    const locals = sessionStorage.getItem("queue_data");
    useEffect(()=>{
       if(locals){
         window.location = "/"
       }
    },[])
    const random=()=>{
       return  Math.floor(Math.random()*9).toString();
    }
    const RandomToSix=(no)=>{
       let result ='';
       for(let i=0;i<no;i++){
          result= result + random();
       }
      return result;
    }
    const hashs=`qtree_live-${RandomToSix(2)}-${RandomToSix(9)}-${RandomToSix(5)}-user`;
    const date =  new Date().toISOString().substring(0,10).toString();
    const[leave,setLeave]=useState([]);
    useEffect(()=>{
      /*  if(password.match(/[0-9]/)){
          setLeaveL([...leaveL,"1"]);
          console.log("@0-9-"+leaveL.length+JSON.stringify(leaveL))
       }else{
          setLeave({msg:"At least one Number",stat:false})
       }
       if(password.match(/[a-z]/)){
         setLeaveL([...leaveL,"2"]);
         console.log("@a-z-"+leaveL.length+JSON.stringify(leaveL))
          }else{
             setLeave({msg:"At least one Special Symbol",stat:false})
          }
          if(password.match(/[1\@\$\%\^\&\*\(\)\_\-\+\>\<]/)){
            setLeaveL([...leaveL,"3"]);
            console.log("@specials-"+leaveL.length+JSON.stringify(leaveL))
           }else{
              setLeave({msg:"At least one Character",stat:false})
           }
       */
           if(password.length>3&&password==c_password){
            setLeave([...leave,{msg:"",stat:true}])
            console.log(leave)
          }else{
             if(c_password.length>1){
               setLeave({msg:"Not matched with password",stat:false})
             }
            }

    },[password]);
    const[dis,setDis]=useState(false);
    const RegisterUser=(e)=>{
       setDis(true);
      const data = {
         username,firstname,lastname,email,password,hashs,date
      };
      if(username.length>4&&firstname.length>4&&lastname.length>1&&c_password==password){
        setRegtxt('Signing up')
         AxiosCont.post("/userdetails",data)
         .then(response=>{
            setBox({type:"green",message:`Registered`,time:9,des:"Redirecting to homepage"});
            setShowalert(true);
            sessionStorage.setItem("queue_data",JSON.stringify([data]));
            window.location = "/";
            setDis(false)
         }).catch(err=>{
            setBox({type:"cancel",message:"Erroe occured",time:7,des:`${err}`});
            setShowalert(true);
            setDis(false);
            setRegtxt('Signing up')
         })
      }else{
         setBox({type:"cancel",message:"Invalid credentials",time:7,des:"Please fiil in all credentials \n or make sure your password matches confirm password"});
         setShowalert(true);
         setDis(false);
         setRegtxt('Signing up')
         alert("Please fiil in all credentials \n or make sure your password matches confirm password")
      }
   }
   const ControlLogin=()=>{
      setLogin(true)
   }
    return (
        <section class="bg- py-20 lg:py-[120px]">
        <div class="container">
           
           <div class="flex flex-wrap mx-2">
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
                       <img src="img/L.png" style={{height:"60px"}} alt="logo" />
                       </a>
                    </div>
                    <div>
                       <div class="mb-6">
                          <input
                             type="text"
                             onChange={(e)=>setUsername(e.target.value)}
                             value={username}
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
                             />
                             
                       </div>
                       <div class="mb-6">
                          <input
                             type="text"
                             value={firstname}
                             onChange={(e)=>setFirstname(e.target.value)}
                             placeholder="First Name"
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
                             />
                       </div>
                       <div class="mb-6">
                          <input
                             type="text"
                             value={lastname}
                             onChange={(e)=>setLastname(e.target.value)}
                             placeholder="Last Name"
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
                             />
                             
                       </div>
                       <div class="mb-6">
                          <input
                             type="email"
                             placeholder="Email"
                             value={email}
                             onChange={(e)=>setEmail(e.target.value)}
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
                             />
                       </div>
                       <div class="mb-6">
                          <input
                             type="password"
                             placeholder="Password"
                             value={password}
                             onChange={(e)=>setPassword(e.target.value)}
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
                             />
                             
                       </div>
                       <div class="mb-6">
                          <input
                             type="password"
                             value={c_password}
                             onChange={(e)=>setC_password(e.target.value)}
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
                             />
                            <p style={{color:"red"}}> {leave&&leave.msg}</p>
                       </div>
                       <button onClick={(e)=>RegisterUser(e)} disabled={dis} class="bg-[#ffba44] py-3 px-12 mx-2 my-5 rounded-md shadow-md text-white"
                              style={{fontFamily:"inherit",fontWeight:"600"}}>{regtxt}</button>

                    </div>
                    
                    
                    <p class="text-base text-[#adadad]">
                       Already ahve an account?
                       <a
                       onClick={ControlLogin}
                          href="javascript:void(0)"
                          class="text-primary hover:underline"
                          >
                       Sign in
                       </a>
                    </p>
                    <div>
                       <span class="absolute left-1 bottom-1">
                          <svg
                             width="29"
                             height="40"
                             viewBox="0 0 29 40"
                             fill="none"
                             xmlns="http://www.w3.org/2000/svg"
                             >
                             <circle
                                cx="2.288"
                                cy="25.9912"
                                r="1.39737"
                                transform="rotate(-90 2.288 25.9912)"
                                fill="#ffba44"
                                />
                             <circle
                                cx="14.5849"
                                cy="25.9911"
                                r="1.39737"
                                transform="rotate(-90 14.5849 25.9911)"
                                fill="#ffba44"
                                />
                             <circle
                                cx="26.7216"
                                cy="25.9911"
                                r="1.39737"
                                transform="rotate(-90 26.7216 25.9911)"
                                fill="#ffba44"
                                />
                             <circle
                                cx="2.288"
                                cy="13.6944"
                                r="1.39737"
                                transform="rotate(-90 2.288 13.6944)"
                                fill="#ffba44"
                                />
                             <circle
                                cx="14.5849"
                                cy="13.6943"
                                r="1.39737"
                                transform="rotate(-90 14.5849 13.6943)"
                                fill="#ffba44"
                                />
                             <circle
                                cx="26.7216"
                                cy="13.6943"
                                r="1.39737"
                                transform="rotate(-90 26.7216 13.6943)"
                                fill="#ffba44"
                                />
                             <circle
                                cx="2.288"
                                cy="38.0087"
                                r="1.39737"
                                transform="rotate(-90 2.288 38.0087)"
                                fill="#ffba44"
                                />
                             <circle
                                cx="2.288"
                                cy="1.39739"
                                r="1.39737"
                                transform="rotate(-90 2.288 1.39739)"
                                fill="#ffba44"
                                />
                             <circle
                                cx="14.5849"
                                cy="38.0089"
                                r="1.39737"
                                transform="rotate(-90 14.5849 38.0089)"
                                fill="#ffba44"
                                />
                             <circle
                                cx="26.7216"
                                cy="38.0089"
                                r="1.39737"
                                transform="rotate(-90 26.7216 38.0089)"
                                fill="#ffba44"
                                />
                             <circle
                                cx="14.5849"
                                cy="1.39761"
                                r="1.39737"
                                transform="rotate(-90 14.5849 1.39761)"
                                fill="#ffba44"
                                />
                             <circle
                                cx="26.7216"
                                cy="1.39761"
                                r="1.39737"
                                transform="rotate(-90 26.7216 1.39761)"
                                fill="#ffba44"
                                />
                          </svg>
                       </span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </section>
  )
}

export default Register