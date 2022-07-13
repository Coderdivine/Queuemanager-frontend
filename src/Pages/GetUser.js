import axios from 'axios';
import React, { useEffect, useState,useContext } from 'react'
import {useParams} from "react-router-dom";
import {create} from "../App";
function GetUser() {
    const {username,number,names} = useParams();
    const {playSound,setBox,setShowalert} = useContext(create)
    const[details,setDetails]=useState([]);
    const[timing,setTiming]=useState(0);
    const[allow,setAllow]=useState(true);
    var locals = sessionStorage.getItem("queue_data")?JSON.parse(sessionStorage.getItem("queue_data")):null;
    const mmm=()=>{
      const data = {username,number,names,hashs:locals[0].hashs}
     console.log(data)
     axios.post("https://qtree.herokuapp.com/mmmm",data)
     .then(response=>{
       console.log(response.data)
       setAllow(false);
     }).catch(err=>{
       console.log(err);
     })
    }
    const save_the_following=async()=>{
    
      const data = {username,number,names,hashs:locals[0].hashs}
      await axios.post("https://qtree.herokuapp.com/exist-queue",data)
      .then(response=>{
        console.log(response.data)
        if(response.data){
          if(allow){
            mmm()
          }
        }else{
          console.log("Already exist")
        }
      }).catch(err=>alert(err));
 
    }
   useEffect(()=>{
     if(!locals){
       window.location =  "/auth";
     }
   },[locals])
    const getQueue=()=>{
        axios.post(`https://qtree.herokuapp.com/get-user-item`,{username:username,queuenumber:number.toString(),nameofqueue:names})
        .then(response=>{
          setDetails(response.data);
        });
    };
    const RequestLeave=(id)=>{
      const confirms = prompt("By requesting a leave, you would be added to the queue reneging list.","What do you think ?");
      if(confirms){let status = "HOLD"
      axios.get(`https://qtree.herokuapp.com/update-status/${id}/${status}`)
      .then(response=>{
        playSound("good");
       setBox({type:"green",message:`Status changed to : HOLD`,time:7,des:`Queue manager notified already`});
       setShowalert(true);
      })//
    }else{
      playSound("red");
      setBox({type:"red",message:`Request Rejected`,time:7,des:``});
      setShowalert(true);
    }
  }
 useEffect(()=>{
  save_the_following();
 },[])
    useEffect(()=>{
        getQueue();
    },[username,number]);
   
    useEffect(()=>{
      if(timing==11){
        setTiming(0);
        getQueue()
      }
      setTimeout(()=>{
        setTiming(timing+1);
      },1000) 
    },[timing,username,number]);
    const us_date=(d)=>{
      const date = Date.now();
      const sec = (Number(d)-date)/1000;
      const min = sec/60;
      const hrs = min/60;
      return Math.floor(hrs)+" hrs remaining"
    }
  return (
    <div>
        {
          details?details.map(x=>
            <div key={x.id}>
              <div class="w-full px-2 py-2 my-3 shadow-lg rounded-md">
<div id="group" class="w-full rounded-md  font-bold py-1 px-2 ">
<div class="rounded-md bg-white md:w-auto shadow-md">
<div class="flex flexed py-2 px-2 my-2">
<p class="px-1" style={{color:'grey'}}>Firstname: {x.firstname}<br/>
<small>Lastname: {x.lastname}</small><br/>
<p class="px-1" style={{color:'grey'}}>Queue name: {x.nameofqueue.length>9?x.nameofqueue.substring(0,8)+"...":x.nameofqueue}</p><br/>
<small>Number: {x.queuenumber}</small>
<p class="px-1" style={{color:'grey'}}>Status: {x.status=="START"?<span>waiting</span>:<span style={{color:x.status=="HOLD"?"blue":"green"}}>{x.status}</span>}<br/></p>
</p>
<div class="py-2">
{
  x.status=="START"?
  <a onClick={()=>RequestLeave(x.id)} class="py-2 ml-2 px-2 text-white shadow-sm font-bold rounded-md bg-[#F9A826]" >Request leave</a>
  :<p></p>
}
</div>
</div>
<details class="ml-2 px-1 font-bolder">
<summary style={{color:'grey'}}>Show details</summary>
<div>
<span style={{color:'grey'}}>Date: {us_date(x.createdAt)}</span>
<p style={{color:'grey'}}>Queue hashs: {x.queuehash.length>20?x.queuehash.substring(0,20)+"..."+x.queuehash.substring(x.queuehash.length-10,x.queuehash.length):x.queuehash}</p>
<p style={{color:'grey'}}>Createhashs hashs: {x.creatorhash.length>20?x.creatorhash.substring(0,20)+"..."+x.creatorhash.substring(x.creatorhash.length-10,x.creatorhash.length):x.queuehash}</p>
</div>
</details>
</div>

</div>
</div>
            </div>):<p style={{color:"grey",textAlign:"center",fontSize:"18px",fontWeight:"400"}}>No queue list yet</p>
        }
    </div>
  )
}

export default GetUser