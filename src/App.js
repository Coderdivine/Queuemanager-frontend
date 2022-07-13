import React, { useEffect } from "react";
import {BrowserRouter,Routes,Route, Link} from "react-router-dom";
import { createContext, useState } from 'react';
import Auth from "./Pages/Auth";
import Homepage from "./Pages/Homepage";
import Queue from "./Pages/Queue";
import Getstarted from "./Pages/Getstarted";
import Manage from "./Pages/Manage";
import Create from "./Pages/Create";
import GetUser from "./Pages/GetUser";
import { COLOR } from "./Color";
import Scares from "./Pages/Scares";
import logo from "./L.png";
export const create = createContext(null)
function App() {
  const[showNav,setShowNav]=useState(false);
  const ControlOff=(dir)=>{
    setShowNav(dir)
  }
  const[soundoff,setSoundoff]=useState(false);
  const[box,setBox]=useState({type:"green",message:"Hello to you",time:10,des:"This is a description"});
  function playSound(type) { 
    if(!soundoff){
     if(type=="good"){
      const audio = new Audio('https://res.cloudinary.com/axgura/video/upload/v1654104934/mp3_ibyj3h.wav'); 
      audio.play();
     }else{
      const audio = new Audio('https://res.cloudinary.com/axgura/video/upload/v1654105451/mixkit-western-guitar-drum-single-2333_k25pf3.wav'); 
      audio.play();
     }
    }
    }
    useEffect(()=>{
       if(window.innerWidth>960){
          setShowNav(true)
       }
    },[window.innerWidth]);
    const[timing,setTiming]=useState(0);
    const[showalert,setShowalert]=useState(false);
    const CountDown=()=>{
       playSound("cancel");
       setShowalert(false);
       
    };
    useEffect(()=>{
      if(timing>Number(box.time)){
        setTiming(0)
      }
      if(showalert){
       
      if(timing>Number(box.time)){
        setTiming(0)
       CountDown();
       
       // console.clear()
      }
      setTimeout(()=>{
        setTiming(timing+1)
      },1000) 
      }
    },[timing,box])
    
  return (
     <create.Provider value={{box,setBox,playSound,setShowalert}}>
     <BrowserRouter>
     {
       showalert?
       <div
       style={{background:box.type=="green"?"#34D399":COLOR[2],border:box.type=="green"?"1px solid #34D399":"1px solid #F87171",opacity:"65%"}}
        class="
       w-full
       bg-opacity-[15%]
       px-6
       py-5
       md:p-5
       rounded-lg
       shadow-md
       flex
       border-l-[6px]
       ">
       <div
       style={{background:box.type=="green"?"#34D399":COLOR[2]}}
        class="
          max-w-[36px]
          w-full
          h-8
          flex
          items-center
          justify-center
          rounded-lg
          mr-5
          
          ">
            {box.type=="green"?
            <svg width="16" height="12" viewBox="0 0 16 12" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.2984 0.826822L15.2868 0.811827L15.2741 0.797751C14.9173 0.401867 14.3238 0.400754 13.9657 0.794406L5.91888 9.45376L2.05667 5.2868C1.69856 4.89287 1.10487 4.89389 0.747996 5.28987C0.417335 5.65675 0.417335 6.22337 0.747996 6.59026L0.747959 6.59029L0.752701 6.59541L4.86742 11.0348C5.14445 11.3405 5.52858 11.5 5.89581 11.5C6.29242 11.5 6.65178 11.3355 6.92401 11.035L15.2162 2.11161C15.5833 1.74452 15.576 1.18615 15.2984 0.826822Z" fill="white" stroke="white"></path>
         </svg>
            :
            <svg width="13" height="13" viewBox="0 0 13 13" fill="white" xmlns="http://www.w3.org/2000/svg">
         <path d="M6.4917 7.65579L11.106 12.2645C11.2545 12.4128 11.4715 12.5 11.6738 12.5C11.8762 12.5 12.0931 12.4128 12.2416 12.2645C12.5621 11.9445 12.5623 11.4317 12.2423 11.1114C12.2422 11.1113 12.2422 11.1113 12.2422 11.1113C12.242 11.1111 12.2418 11.1109 12.2416 11.1107L7.64539 6.50351L12.2589 1.91221L12.2595 1.91158C12.5802 1.59132 12.5802 1.07805 12.2595 0.757793C11.9393 0.437994 11.4268 0.437869 11.1064 0.757418C11.1063 0.757543 11.1062 0.757668 11.106 0.757793L6.49234 5.34931L1.89459 0.740581L1.89396 0.739942C1.57364 0.420019 1.0608 0.420019 0.740487 0.739944C0.42005 1.05999 0.419837 1.57279 0.73985 1.89309L6.4917 7.65579ZM6.4917 7.65579L1.89459 12.2639L1.89395 12.2645C1.74546 12.4128 1.52854 12.5 1.32616 12.5C1.12377 12.5 0.906853 12.4128 0.758361 12.2645L1.1117 11.9108L0.758358 12.2645C0.437984 11.9445 0.437708 11.4319 0.757539 11.1116C0.757812 11.1113 0.758086 11.111 0.75836 11.1107L5.33864 6.50287L0.740487 1.89373L6.4917 7.65579Z" fill="#ffffff" stroke="#ffffff"></path>
      </svg>}
          
       </div>
       <div class="w-full">
          <h5 class="text-lg font-semibold mb-3 text-dark">
             {box.message}
          </h5>
          <p class="text-base text-body-color leading-relaxed">
             {box.des}
          </p>
       </div>
    </div>
       :<div></div>
     }
 <header 
     class="relative w-full left-0 top-0" style={{border:"1px solid white",zIndex:"100"}}
   >
     <div class="container">
     <div class="flex mx-2 items-center justify-between ">
         <div class="px-4 w-60 max-w-full">
           <a href="/" class="w-full block py-2">
             <img
               src={logo}
               alt="qtree"
               class="w-full"
               style={{width:"45%",height:"50%"}}
             />
           </a>
         </div>
         <div class="flex px-4 justify-between items-center w-full">
         <div>
             {
                showNav?
                <button 
             onClick={()=>ControlOff(false)}
             style={{backgroundColor:COLOR[0]}} 
               class="
                 block
                 absolute           
                 text-white
                 cursor-pointer
                 right-4
                 top-1/
                 -translate-y-1/2
                 lg:hidden
                 focus:ring-2
                 ring-bluebg-blue-400
                 px-3
                 py-[6px]
                 rounded-lg
               "
             >
               <span
                 class="relative w-[30px] h-[2px] my-[6px] block bg-white"
               ></span>
               <span
                 class="relative w-[30px] h-[2px] my-[6px] block bg-white"
               ></span>
               <span
                 class="relative w-[30px] h-[2px] my-[6px] block bg-white"
               ></span>
             </button>
                :
                <button 
             onClick={()=>ControlOff(true)}
             style={{backgroundColor:COLOR[0]}} 
               class="
                 block
                 absolute           
                 text-white
                 cursor-pointer
                 right-4
                 top-1/
                 -translate-y-1/2
                 lg:hidden
                 focus:ring-2
                 ring-bluebg-blue-400
                 px-3
                 py-[6px]
                 rounded-lg
               "
             >
               <span
                 class="relative w-[30px] h-[2px] my-[6px] block bg-white"
               ></span>
               <span
                 class="relative w-[30px] h-[2px] my-[6px] block bg-white"
               ></span>
               <span
                 class="relative w-[30px] h-[2px] my-[6px] block bg-white"
               ></span>
             </button>
             }
             {
               showNav?
               <nav
               style={{border:"1px solid white",zIndex:"100"}}
               class="
                 absolute
                 py-5
                 px-6
                 bg-white
                 shadow
                 rounded-lg
                 max-w-[250px]
                 w-full
                 lg:max-w-full lg:w-full
                 right-4
                 z-100
                 lg:block lg:static lg:shadow-none
                 transition-all
                 top-full
               "
             >
               <ul class="blcok lg:flex">
                 <li>
                 <Link to="/">
                 <a
                     
                     class="
                       text-base
                       font-medium
                       text-dark
                       hover:text-primary
                       py-2
                       cursor-pointer
                       lg:inline-flex
                       flex
                       lg:ml-12
                     "
                   >
                     Home
                   </a>
                 </Link>
                 </li>
                 <li>
                   <Link  to="/queue/create">
                   <a
                    
                     class="
                       text-base
                       font-medium
                       text-dark
                       hover:text-primary
                       py-2
                       cursor-pointer
                       lg:inline-flex
                       flex
                       lg:ml-12
                     "
                   >
                     Create queue
                   </a></Link>
                 </li>
                 <li>
                   <a
                   href="/queue/join"
                     class="
                       text-base
                       font-medium
                       text-dark
                       hover:text-primary
                       py-2
                       cursor-pointer
                       lg:inline-flex
                       flex
                       lg:ml-12
                     "
                   >
                     Join a queue
                   </a>
                 </li>
                 <li>
                   <a
                   href="/auth"
                     class="
                       text-base
                       font-medium
                       text-dark
                       hover:text-primary
                       py-2
                       cursor-pointer
                       lg:inline-flex
                       flex
                       lg:ml-12
                     "
                   >
                     Login
                   </a>
                 </li>
               </ul>
             </nav>
               :<div></div>
             }
           </div>
           <div class="sm:flex justify-end hidden pr-16 lg:pr-0">
             <Link to="/auth">
             <a
               
               class="
                 text-base
                 font-medium
                 text-dark
                 bg-grey-200
                 hover:text-primary
                 py-3
                 px-7
               "
             >
               Login
             </a></Link>
            <Link to="/auth">
            <a
               
               class="
                 text-base
                 font-medium
                 text-white
                 bg-[#ffba44]
                 rounded-lg
                 py-3
                 px-7
                 hover:bg-opacity-90
               "
             >
               Sign Up
             </a></Link>
           </div>
         </div>
       </div>
     </div>
   </header> 

     <Routes>
       <Route  path='/' element={<Homepage/>} />
       <Route  path='/auth' element={<Auth/>} />
       <Route  path='/queue' element={<Queue/>} />
       <Route  path='/queue/create' element={<Create/>} />
       <Route  path='/queue/join' element={<Scares/>} />
       <Route  path='/manage/:id' element={<Manage/>} />
       <Route  path='/get-user-item/:username/:number/:names' element={<GetUser/>} />
       <Route  path='/getstarted' element={<Getstarted/>} />
       </Routes>
       <footer class="bg-grey-200 pl-6 pt-20 lg:pt-[120px] pb-10 lg:pb-20 relative z-10">
    <div class="container">
       <div class="flex flex-wrap mx-2">
          <div class="w-full sm:w-2/3 lg:w-3/12 px-4">
             <div class="w-full mb-10">
                <a
                   
                   class="inline-block max-w-[160px] mb-6"
                   >
                <img src={logo} style={{heigth:"40%",width:"40%"}} />
                </a>
                <p class="text-base text-body-color mb-7">
                   We ensure a systematic  queue discipline
                </p>
                <p class="flex items-center text-sm text-dark font-medium">
                   <span class="text-primary mr-3">
                      <svg
                         width="19"
                         height="21"
                         viewBox="0 0 19 21"
                         class="fill-current"
                         >
                         <path
                            d="M17.8076 11.8129C17.741 11.0475 17.1088 10.5151 16.3434 10.5151H2.16795C1.40261 10.5151 0.803643 11.0808 0.703816 11.8129L0.00502514 18.8008C-0.0282506 19.2001 0.104853 19.6327 0.371059 19.9322C0.637265 20.2317 1.03657 20.398 1.46916 20.398H17.0755C17.4748 20.398 17.8741 20.2317 18.1736 19.9322C18.4398 19.6327 18.5729 19.2334 18.5396 18.8008L17.8076 11.8129ZM17.2751 19.1668C17.2419 19.2001 17.1753 19.2667 17.0422 19.2667H1.46916C1.36933 19.2667 1.2695 19.2001 1.23623 19.1668C1.20295 19.1336 1.1364 19.067 1.16968 18.9339L1.86847 11.9127C1.86847 11.7463 2.00157 11.6465 2.16795 11.6465H16.3767C16.5431 11.6465 16.6429 11.7463 16.6762 11.9127L17.375 18.9339C17.3417 19.0337 17.3084 19.1336 17.2751 19.1668Z"
                            />
                         <path
                            d="M9.25704 13.1106C7.95928 13.1106 6.92773 14.1422 6.92773 15.4399C6.92773 16.7377 7.95928 17.7693 9.25704 17.7693C10.5548 17.7693 11.5863 16.7377 11.5863 15.4399C11.5863 14.1422 10.5548 13.1106 9.25704 13.1106ZM9.25704 16.6046C8.6248 16.6046 8.09239 16.0722 8.09239 15.4399C8.09239 14.8077 8.6248 14.2753 9.25704 14.2753C9.88928 14.2753 10.4217 14.8077 10.4217 15.4399C10.4217 16.0722 9.88928 16.6046 9.25704 16.6046Z"
                            />
                         <path
                            d="M0.802807 6.05619C0.869358 7.52032 2.16711 8.11928 2.83263 8.11928H5.16193C5.19521 8.11928 5.19521 8.11928 5.19521 8.11928C6.19348 8.05273 7.19175 7.38722 7.19175 6.05619V5.25757C8.28985 5.25757 10.8188 5.25757 11.9169 5.25757V6.05619C11.9169 7.38722 12.9152 8.05273 13.9135 8.11928H13.9467H16.2428C16.9083 8.11928 18.206 7.52032 18.2726 6.05619C18.2726 5.95636 18.2726 5.59033 18.2726 5.25757C18.2726 4.99136 18.2726 4.75843 18.2726 4.72516C18.2726 4.69188 18.2726 4.6586 18.2726 4.6586C18.1727 3.72688 17.84 2.96154 17.2743 2.36258L17.241 2.3293C16.4091 1.56396 15.4109 1.13138 14.6455 0.865169C12.416 0 9.62088 0 9.48778 0C7.52451 0.0332757 6.26003 0.199654 4.36331 0.865169C3.63125 1.0981 2.63297 1.53068 1.80108 2.29603L1.7678 2.3293C1.20212 2.92827 0.869359 3.69361 0.769531 4.62533C0.769531 4.6586 0.769531 4.69188 0.769531 4.69188C0.769531 4.75843 0.769531 4.95809 0.769531 5.22429C0.802807 5.52377 0.802807 5.92308 0.802807 6.05619ZM2.5997 3.12792C3.26521 2.52896 4.09711 2.16292 4.7959 1.89672C6.52624 1.26448 7.65761 1.13138 9.55433 1.0981C9.68743 1.0981 12.2829 1.13138 14.2795 1.89672C14.9783 2.16292 15.8102 2.49568 16.4757 3.12792C16.8417 3.52723 17.0746 4.05964 17.1412 4.69188C17.1412 4.79171 17.1412 4.95809 17.1412 5.22429C17.1412 5.55705 17.1412 5.92308 17.1412 6.02291C17.1079 6.78825 16.3759 6.95463 16.276 6.95463H13.98C13.6472 6.92135 13.1148 6.78825 13.1148 6.05619V4.69188C13.1148 4.42567 12.9485 4.22602 12.7155 4.12619C12.5159 4.05964 6.69262 4.05964 6.49296 4.12619C6.26003 4.19274 6.09365 4.42567 6.09365 4.69188V6.05619C6.09365 6.78825 5.56124 6.92135 5.22848 6.95463H2.93246C2.83263 6.95463 2.10056 6.78825 2.06729 6.02291C2.06729 5.92308 2.06729 5.55705 2.06729 5.22429C2.06729 4.95809 2.06729 4.82498 2.06729 4.72516C2.00073 4.05964 2.23366 3.52723 2.5997 3.12792Z"
                            />
                      </svg>
                   </span>
                   <span>+234 91 (619) 11394</span>
                </p>
             </div>
          </div>
          
          <div class="w-full sm:w-1/2 lg:w-2/12 px-4">
             <div class="w-full mb-10">
                <h4 class="text-dark text-lg font-semibold mb-9">Quick Links</h4>
                <ul>
                   <li>
                      <Link to="/getstarted">
                      <a
                         
                         class="
                         inline-block
                         text-base text-body-color
                         hover:text-primary
                         leading-loose
                         mb-2
                         "
                         >
                     Get Started
                      </a></Link>
                   </li>
                   <li>
                      <Link to="/queue/create">
                      <a
                         
                         class="
                         inline-block
                         text-base text-body-color
                         hover:text-primary
                         leading-loose
                         mb-2
                         "
                         >
                      Create a Queue
                      </a></Link>
                   </li>
                   <li>
                      <Link to="/qeueu/join">
                      <a
                         
                         class="
                         inline-block
                         text-base text-body-color
                         hover:text-primary
                         leading-loose
                         mb-2
                         "
                         >
                     Join a Queue
                      </a></Link>
                   </li>
                   <li>
                      <a
                      
                         class="
                         inline-block
                         text-base text-body-color
                         hover:text-primary
                         leading-loose
                         mb-2
                         "
                         style={{cursor:"pointer"}}
                         onClick={()=>alert("Would you like us to have a app")}
                         >
                      Download App
                      </a>
                   </li>
                </ul>
             </div>
          </div>
          <div class="w-full sm:w-1/2 lg:w-3/12 px-4">
             <div class="w-full mb-10">
                <h4 class="text-dark text-lg font-semibold mb-9">Follow Us On</h4>
                <div class="flex items-center mb-6">
                 
                   <a
                      href="https://www.twitter.com/@Qtree11"
                      class="
                      w-8
                      h-8
                      flex
                      items-center
                      justify-center
                      rounded-full
                      border border-[#E5E5E5]
                      text-dark
                      hover:text-white hover:bg-primary hover:border-primary
                      mr-3
                      sm:mr-4
                      lg:mr-3
                      xl:mr-4
                      "
                      >
                      <svg
                         width="16"
                         height="12"
                         viewBox="0 0 16 12"
                         class="fill-current"
                         >
                         <path
                            d="M15.6645 1.88018C15.4839 1.13364 14.9419 0.552995 14.2452 0.359447C13.0065 6.59222e-08 8 0 8 0C8 0 2.99355 6.59222e-08 1.75484 0.359447C1.05806 0.552995 0.516129 1.13364 0.335484 1.88018C0 3.23502 0 6 0 6C0 6 0 8.79263 0.335484 10.1198C0.516129 10.8664 1.05806 11.447 1.75484 11.6406C2.99355 12 8 12 8 12C8 12 13.0065 12 14.2452 11.6406C14.9419 11.447 15.4839 10.8664 15.6645 10.1198C16 8.79263 16 6 16 6C16 6 16 3.23502 15.6645 1.88018ZM6.4 8.57143V3.42857L10.5548 6L6.4 8.57143Z"
                            />
                      </svg>
                   </a>
                   <a
                      href="https://www.youtube.com/channel/UCv5vTCyFqzDjazM2KBXbnng"
                      class="
                      w-8
                      h-8
                      flex
                      items-center
                      justify-center
                      rounded-full
                      border border-[#E5E5E5]
                      text-dark
                      hover:text-white hover:bg-primary hover:border-primary
                      mr-3
                      sm:mr-4
                      lg:mr-3
                      xl:mr-4
                      "
                      >
                      <svg
                         width="14"
                         height="14"
                         viewBox="0 0 14 14"
                         class="fill-current"
                         >
                         <path
                            d="M13.0214 0H1.02084C0.453707 0 0 0.451613 0 1.01613V12.9839C0 13.5258 0.453707 14 1.02084 14H12.976C13.5432 14 13.9969 13.5484 13.9969 12.9839V0.993548C14.0422 0.451613 13.5885 0 13.0214 0ZM4.15142 11.9H2.08705V5.23871H4.15142V11.9ZM3.10789 4.3129C2.42733 4.3129 1.90557 3.77097 1.90557 3.11613C1.90557 2.46129 2.45002 1.91935 3.10789 1.91935C3.76577 1.91935 4.31022 2.46129 4.31022 3.11613C4.31022 3.77097 3.81114 4.3129 3.10789 4.3129ZM11.9779 11.9H9.9135V8.67097C9.9135 7.90323 9.89082 6.8871 8.82461 6.8871C7.73571 6.8871 7.57691 7.74516 7.57691 8.60323V11.9H5.51254V5.23871H7.53154V6.16452H7.55423C7.84914 5.62258 8.50701 5.08065 9.52785 5.08065C11.6376 5.08065 12.0232 6.43548 12.0232 8.2871V11.9H11.9779Z"
                            />
                      </svg>
                   </a>
                </div>
                <p class="text-base text-body-color convert">&copy; {new Date().toISOString().substring(0,10).split("-")[0]} Qtree</p>
             </div>
          </div>
       </div>
    </div>
    <div>
       <span class="absolute left-0 bottom-0 z-[-1]">
          <svg
             width="217"
             height="229"
             viewBox="0 0 217 229"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
             >
             <path
                d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
                fill="url(#paint0_linear_1179_5)"
                />
             <defs>
               
             </defs>
          </svg>
       </span>
      
    </div>
 </footer>
     </BrowserRouter>
     </create.Provider>
  );
}

export default App;
