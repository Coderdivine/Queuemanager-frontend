import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import { COLOR } from '../Color';
import {create} from "../App"
function Create() {
  const {playSound,setBox,setShowalert} = useContext(create)
  const[show,setShow]=useState(false);
  const Control=(num)=>{
    setShow(num);
  }
  
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
 const queuehash=`qtree_live-${RandomToSix(2)}-${RandomToSix(9)}-${RandomToSix(5)}-queue`;
 const date = new Date().toISOString().substring(0,10).split("-");
 const startDate= Date.now();
 const[longitude,setLongitude]=useState("");
 const[latitude,setLatitude]=useState("");
 const getGeoLocation=()=>{
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
      setLongitude(position.coords.longitude)
      setLatitude(position.coords.latitude)

    })
  }
   
};
useEffect(()=>{
  getGeoLocation()
},[]);
 const[nameofqueue,setNameofqueue]=useState("");
 const defaultKm =20;
 let createdAt;
 createdAt=date;

 const dates = new Date();
 const expires = dates.setDate(Number(date[2])+1);

 const[img,setImg]=useState(null);
 const[isSvaed,setIsSvaed]=useState(false)
 const[msg,setMsg]=useState("");
 const locals = sessionStorage.getItem("queue_data")?JSON.parse(sessionStorage.getItem("queue_data")):null;

 const creatorhash = locals&&locals[0].hashs;
 const creator = locals&&locals[0].username;
 const emails = locals&&locals[0].email;
 const onUpload=(e)=>{
  
  const form = new FormData()
  form.append("file",img)
  form.append("upload_preset","jawkxoys");
  setMsg("Uploading...")
  axios({
    method:"POST",
    url:"https://api.cloudinary.com/v1_1/axgura/image/upload",
    data:form,
    header:{"Content-Type":"multipart/form-data"},
  })
  .then((response)=>{
    setImg(response.data.secure_url)
    setIsSvaed(true);
    setMsg("Uploaded");
    playSound("good")
  }).catch((err)=>{
    setMsg("Please select an image");
    playSound("cancel")
  })
 }

 const CreateQueue=(e)=>{
   e.preventDefault();
   if(nameofqueue.length>3){
     //request to cloudinary
     if(isSvaed){
      setMsg("Creating new queue...")
      const data ={
        longitude,latitude,defaultKm,nameofqueue,creator,createdAt:startDate,expires,creatorhash,queuehash,img       
           }
 console.log(data)
      axios.post("https://qtree.herokuapp.com/queuedetails",data)
       .then(response=>{
        setBox({type:"green",message:"Posted",time:7,des:"New queue created"});
        setShowalert(true);
         setMsg("New queue created");
         playSound("good");
         //console.clear();
         
       })
       .catch(err=>{
        setBox({type:"cancel",message:"Error",time:7,des:`Type ${err}`});
        setShowalert(true);
       })
     }
   }else{
     setMsg("Name of queue most be greater than 3") 
      }
 }

const[details,setDetails]=useState([]);
 const getQueue=()=>{
   const data ={creator,creatorhash}
   axios.post("https://qtree.herokuapp.com/queue-details",data)
   .then(response=>{
 setDetails(response.data);
   }).catch(err=>{
     console.error(err);
   })
 }
 const fff=()=>{
  if(locals){
    getQueue()
   }
   else{
     window.location = "/auth";
   }
 }
const delete_queue_details=async(id,hashs)=>{

 await axios.get(`https://qtree.herokuapp.com/delete-queue/${id}/${hashs}`)
  .then((response)=>{
    console.log("deleted");
  })
}
const[sent,setSent]=useState(localStorage.getItem("saves")?localStorage.getItem("saves"):true);
const sendAlert=(x)=>{
const data = {creator,creatorhash:x,emails}
  if(sent!==false){
    axios.post("https://qtree.herokuapp.com/sendalert",data)
    .then((response)=>{
     console.log(x +" will soon be deleted");
     setSent(false);
     localStorage.setItem("saves",false)
    })
  }else{
    console.log("sent")
  }
 
}
const run__for=()=>{
  details.forEach(x=>{
    const date = Date.now();
    const sec = (Number(x.expires)-date)/1000;
      const min = sec/60;
      const hrs = min/60 
    if(hrs<=0){
       delete_queue_details(x.id,x.queuehash);
    }else{
    /**  console.log("Today's date"+date);
      console.log("Expires"+Number(x.expires))
      console.log("Minus____");
      console.log(Number(x.expires)-date); */
     
      if(hrs<=3){
        if(sent){
          sendAlert(x.nameofqueue);
        }
      }
    }
    
  })
}
const changeDate=(d)=>{
  const date = Date.now();
  const sec = (Number(d)-date)/1000;
  const min = sec/60;
  const hrs = min/60;
  return Math.floor(hrs)+" hrs remaining"
}
useEffect(()=>{
 run__for();
},[details])
 useEffect(()=>{
fff();
 },[]);
 const[timing,setTiming]=useState(0);
     useEffect(()=>{
      if(timing==6){
        setTiming(0);
        getQueue();
      }
      setTimeout(()=>{
        setTiming(timing+1);
      },1000) 
    },[timing]);
  return (
    <div>
<div class="py-8 mt-6 mb-2 px-4">
  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
    <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
      <span class="block"style={{color:COLOR[3]}}>Ready to use?</span>
      <span class="block text-indigo-600" style={{color:COLOR[0]}}>Create or manage queue.</span>
    </h2>
    <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
      <div class="inline-flex rounded-md shadow">
        <a onClick={()=>Control(true)} class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white
       cursor-pointer  bg-indigo-600 hover:bg-indigo-700" style={{background:COLOR[0]}}>Create</a>
      </div>
      <div class="ml-3 inline-flex rounded-md shadow">
        <a onClick={()=>Control(false)} class="inline-flex items-center justify-center px-5 py-3 border border-transparent 
        text-base font-medium rounded-md cursor-pointer
        text-indigo-600 bg-white hover:bg-indigo-50" style={{color:COLOR[0]}}>Manage</a>
      </div>
    </div>
  </div>
</div>
   
        
    {
      show?
      <div class="px-2 py-2 my-4 mx-2 rounded-lg shadow-md bg-[#fff]">
<div>
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
        <h3 class="text-lg font-medium leading-6 text-gray-900">Queue</h3>
        <p class="mt-1 text-sm text-gray-600">This information is what your customers will use to identify your queue</p>
      </div>
    </div>
   
  </div>
</div>

<div class="hidden sm:block" aria-hidden="true">
  <div class="py-5">
    <div class="border-t border-gray-200"></div>
  </div>
</div>

<div class="mt-10 sm:mt-0">
  <div class="md:grid md:grid-cols-3 md:gap-6">

    <div class="mt-5 md:mt-0 md:col-span-2">
      <div>
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label for="first-name" class="block text-sm font-medium text-gray-700">Queue name</label>
                <input value={nameofqueue} onChange={(e)=>setNameofqueue(e.target.value)} type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="last-name" class="block text-sm font-medium text-gray-700">Queue image</label>
                <input type="file"onChange={(e)=>setImg(e.target.files[0])}  name="last-name" id="last-name" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>

            </div>
          </div>
          {
            isSvaed?
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button style={{background:COLOR[0]}}  onClick={(e)=>CreateQueue(e)} class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none
             focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Create</button>
             <p style={{color:"green",textAlign:"center"}} class="py-1">{msg}</p>
          </div>:
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button style={{background:COLOR[0]}} onClick={(e)=>onUpload(e)} class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none
           focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Upload image</button>
        </div>
          }
          
        </div>
      </div>
    </div>
  </div>
</div>

<div class="hidden sm:block" aria-hidden="true">
  <div class="py-5">
    <div class="border-t border-gray-200"></div>
  </div>
</div>


      </div>
      :<div>
        {
           details&&details?details.map(x=>
            <div key={x.id}>
              <div class="w-full px-2 py-2 my-3 shadow-lg rounded-md">
<p class="mx-2 my-1 font-bold px-1 py-2" style={{color:"grey"}}><img src={x.img} style={{width:"50px",height:"50px",borderRadius:"26px"}}/>{x.nameofqueue}</p>
<div id="group" class="w-full rounded-md  font-bold py-1 px-2 ">
<div class="rounded-md bg-white md:w-auto shadow-md">
<div class="flex flexed py-2 px-2 my-2">
<p class="px-1" style={{color:'grey'}}>Created by: {x.creator}<br/>
<small>expire: {changeDate(x.expires)}</small>
</p>
<div class="py-1">
<Link to={`/manage/${x.id}`}><a class="py-2 ml-2 px-4 text-white shadow-sm font-bold rounded-md bg-[#F9A826]">Manage</a>
</Link>
</div>
</div>
<details class="ml-2 px-1 font-bolder">
<summary style={{color:'grey'}}>Show details</summary>
<div>
<span style={{color:'grey'}}>Date:2022-15</span>
<p style={{color:'grey'}}>Queue hashs:{x.queuehash.length>20?x.queuehash.substring(0,20)+"...":x.queuehash}</p>
</div>
</details>
</div>

</div>
</div>
            </div>):<p>No queue list yet</p>
        }
        </div>
    }
      </div>
  )
}

export default Create