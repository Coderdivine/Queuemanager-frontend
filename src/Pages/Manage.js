import React,{useContext, useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import Qrcode from "qrcode";
import {create} from "../App";
function Manage() {
  const {playSound,setBox,setShowalert} = useContext(create);
    const {id}  = useParams();
    const locals = sessionStorage.getItem("queue_data")?JSON.parse(sessionStorage.getItem("queue_data")):null;
    //hashs,firstname,email,username;
    //creator,creatorhash
    const[src,setSrc]=useState(null);
    const[showup,setShowup]=useState(false);
    const[changs,setChangs]=useState(false);
    const creatorhash = locals&&locals[0].hashs;
    const creator = locals&&locals[0].username;
    const[username,setUsername]=useState("");
    const[email,setEmail]=useState("");
    const[img,setImg]=useState(null);
    const[msg,setMsg]=useState("");
    const[cont,setCont]=useState(false);
    const ChangeStatus=(id,status)=>{
      axios.get(`https://qtree.herokuapp.com/update-status/${id}/${status}`)
      .then(response=>{
        setMsg(response.data);
        playSound("good");
        setBox({type:"green",message:`Status changed to :${status}`,time:10,des:`User notifed already`});
        setShowalert(true);
      })
      .catch(err=>{
        setBox({type:"red",message:`Can't change status to ${status}`,time:7,des:`Try again later`});
        setShowalert(true);
      })
    }
    const[details,setDetails]=useState(null);
    const getQueueItem=(queuehash)=>{
      const data ={creatorhash,queuehash}
      axios.post("https://qtree.herokuapp.com/queue-item",data)
      .then(response=>{
        setDetails(response.data);

      }).catch(err=>{
        //alert(err);
      })
    }
    const getQrcodes=(data)=>{
      //creator,creatorhash
      const to_Scan = `${data.creator}/${data.creatorhash}`;
      Qrcode.toDataURL(to_Scan)
     .then(result=>{
       setSrc(result);
     }).catch(err=>alert(err));
    }
    const[mag,setMag]=useState(null);
     const getQueue=()=>{
       axios.get(`https://qtree.herokuapp.com/get/${id}`)
       .then(response=>{
        setMag(response.data)
        getQueueItem(response.data[0].queuehash);
        getQrcodes(response.data[0])
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
     const[ischecked,setIschecked]=useState(false);
     const HandleChecked=(id)=>{
       setIschecked(!ischecked)
       let status = "DONE";
       axios.get(`https://qtree.herokuapp.com/update-status/${id}/${status}`)
       .then(response=>{
        playSound("good");
        setBox({type:"green",message:`Status changed to : DONE`,time:7,des:`User notifed already`});
        setShowalert(true);
        getQueue()
       })
       .catch(err=>{
        playSound("red");
        setBox({type:"red",message:`Can't change status`,time:7,des:`User not notifed`});
        setShowalert(true);
       })
     };
    
     const controlShows=()=>{
      setShowup(true);
       setChangs(true);
     };
     const showQR=()=>{
       setShowup(true);
       setChangs(false);
     }
     const onUpload=(e)=>{
      if(img){

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
        console.log(response.data.secure_url)
        setCont(true);
        setMsg("Uploaded");
        getQueue()
      }).catch((err)=>{
        setMsg("Please select an image");
        playSound("cancel")
      })
    }else{
      alert('Please upload an image')
    }
     }
     const AddRequest=(e)=>{
       //username,firstname,lastname,creatorhash,queuehash,queuenumber,date,nameofqueue,status
       setMsg("Adding user...")
       if(mag&&details){
        const data ={
          username,
         firstname:img,
         lastname:"Added manually",
        creatorhash,
        queuehash:mag&&mag[0].queuehash,
        queuenumber:details&&details.length.toString(),
        date:new Date().toISOString().substring(0,10),
        nameofqueue:mag&&mag[0].nameofqueue,
        status:"START"};
        
       axios.post("https://qtree.herokuapp.com/queueitem",data)
        .then(response=>{
          playSound("good");
         setMsg("User added");
         setShowup(false)
        })
        .catch(err=>{
          alert(err)
        });
       }
       
     }
     const kkk=()=>{
       setShowup(false)
     };
     const japEd=(number)=>{
       // console.log(Number(number)-1);
       const num = (Number(number)-1);
       if(num==-1){
        return true
      }else{
       //console.log(Number(number)-1);
       const what__ = details&&details.find(el=>Number(el.queuenumber)==num);
       const what__is = what__.status;
       //console.log(what__is)
       if(what__is=="HOLD"||what__is=="START")
       {
         //console.log(what__is)
         return false
       }else{
        //console.log(what__is)
         return true
       }
      }
     }
     const[lap,setLap]=useState(false);
     const ViewPerson=()=>{
      setLap(true);
     }
     const closeLap=()=>{
       setLap(false);
     }
  return (
    <div>
     <div class="rounded-md shadow-mg my-3  py-3 px-2" style={{background:"white",height:"76%",width:"100%",justifyContent:"space-between",alignItems:"center",textAlign:"center"}}>
    <button onClick={controlShows} class="rounded-md ml-1 mr-4 shadow-sm py-3 px-10 text-white  font-bold bg-[#F9A826]">
      Add User
      </button>
      <button onClick={showQR} class="rounded-md ml-4 mr-1 shadow-sm py-3 px-10 text-white  font-bold bg-[#F9A826]">
      Use Qrcode
      </button>
     </div>
     <div>
       {
         showup?
         <div>
           {
             changs?
             <div class="my-4 mx-2 py-4 px-2 bg-white shadow-md rounded-md">
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
                <label for="last-name" class="block text-sm font-medium text-gray-700">User image</label>
                <input type="file"onChange={(e)=>setImg(e.target.files[0])}  name="last-name" id="last-name" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>
                  {
                    cont?
                    <button onClick={(e)=>AddRequest(e)} class="bg-[#ffba44] py-3 px-12 mx-2 my-5 rounded-md shadow-md text-white"
                style={{fontFamily:"inherit",fontWeight:"600"}}>Add user</button>
               :<button onClick={(e)=>onUpload(e)} class="bg-[#ffba44] py-3 px-12 mx-2 my-5 rounded-md shadow-md text-white"
               style={{fontFamily:"inherit",fontWeight:"600"}}>Upload image</button>
              
                  }
                <p style={{color:"green",textAlign:"center"}} class="py-1">{msg}</p>
                       </div>
                       
                    </div>
             </div>
             :<div style={{justifyContent:"center",alignItems:"center",textAlign:"center"}} class="my-4 py-4 px-2 bg-white shadow-md rounded-md">
                <img src={src} style={{width:"100%",height:"40%"}}/>
                <a href={src} onClick={kkk} download className='my-5 mx-2 py-2 px-12 bg-[#0ec023] rounded-md shadow-md text-white font-bold'>Download</a>
             </div>
           }
         </div>
         :<div></div>
       }
     </div>
      {
          details?details.map(x=>
            <div key={x.id} style={{opacity:x.status=='DONE'?'0.2':'1'}}>
              <div class="w-full px-2 py-2 my-3 shadow-lg rounded-md">
<div id="group" class="w-full rounded-md  font-bold py-1 px-2 ">
<div class="rounded-md bg-white md:w-auto shadow-md">
<div class="flex flexed py-2 px-2 my-2">
<p class="px-1" style={{color:'grey'}}>Firstname: {x.username}<br/>
{x.lastname!=='Added manually'?
<small>Lastname: {x.lastname}</small>:<small>{x.lastname}</small>}
<br/>
<small>Number: {x.queuenumber}</small><br/>
<p class="px-1" style={{color:'grey'}}>Status: {x.status}<br/>
{
  x.lastname!=="Added manually"?<a></a>:
  <a class="py-1 ml-1 cursor-pointer px-1 text-[#F9A826] shadow-sm font-bold " onClick={()=>ViewPerson()}>view image
</a>
}
</p>
</p>
<div class="py-1">
<a class="py-2 ml-2 cursor-pointer px-4 text-white shadow-sm font-bold rounded-md bg-[#F9A826]" onClick={()=>ChangeStatus(x.id,"HOLD")}>Hold</a>
{
  japEd(x.queuenumber)?
  <a class="py-2 ml-2 cursor-pointer px-4 text-white shadow-sm font-bold rounded-md bg-[#3fed0a]"onClick={()=>ChangeStatus(x.id,"NEXT")}>NEXT</a>
  :<a></a>
}
{
//console.log(details.length>0&&details.find(el=>el.queuenumber==(x.queuenumber-1)?x.status:"HOLD"))
}

</div>

{
  lap?<div>
<div tabindex="-1" aria-hidden="true" style={{zIndex:'100',display:'flex',justifyContent:'center',alignItems:'center'}}  class=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center">
<div class="relative p-4 w-full max-w-2xl h-full md:h-auto">

<div class="relative bg-white rounded-lg shadow dark:bg-gray-700">

<div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
<h3 class="text-xl font-semibold text-gray-900 dark:text-white">
User image
</h3>
<button  onClick={closeLap} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</button>
</div>

<div class="p-6 space-y-6">
<img style={{width:'100%',height:'auto'}} src={x.firstname} alt={x.username} />
</div>

<div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
<button data-modal-toggle="defaultModal" onClick={closeLap} type="button" class="text-white bg-[#F9A826] hover:bg-[#F9A826] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Close</button>
</div>
</div>
</div>
</div>

  </div>:<div></div>
}
</div>
<details class="ml-2 px-1 font-bolder">
<summary style={{color:'grey'}}>Show details</summary>
<div>
<span style={{color:'grey'}}>Date: {x.date}</span>
<p style={{color:'grey'}}>Queue hashs:{x.queuehash.length>20?x.queuehash.substring(0,20)+"...":x.queuehash}</p>
<p style={{color:'grey'}}>Createhashs hashs:{x.creatorhash.length>20?x.creatorhash.substring(0,20)+"..."+x.creatorhash.substring(0,x.creatorhash.length):x.queuehash}</p>
<input class="py-2 my-4 ml-2 px-4 text-white shadow-sm font-bold rounded-md bg-[#3ace0d]" type="button" value={"Done"}  onClick={()=>HandleChecked(x.id)} />
</div>
</details>
</div>

</div>
</div>
            </div>):<p style={{color:"grey",textAlign:"center",fontSize:"18px",fontWeight:"400"}}>No queue list yet</p>
        }
     <p style={{color:"grey",textAlign:"center",fontSize:"18px",fontWeight:"400"}}>{msg}</p>   
    </div>
  )
}

export default Manage