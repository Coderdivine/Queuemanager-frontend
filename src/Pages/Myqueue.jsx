import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {COLOR} from "../Color" ;
export const AuthenicationBase = axios.create({
    baseURL:"https://qtree.herokuapp.com/"
})
function Myqueue() {
   const[details,setDetails]=useState(null);
   var locals = sessionStorage.getItem("queue_data")?JSON.parse(sessionStorage.getItem("queue_data")):null;

    const getLists=async()=>{
      const data = {username:locals[0].username,hashs:locals[0].hashs};
      await AuthenicationBase.post("/get-existing-queue",data)
      .then(response=>{
        setDetails(response.data);
        console.log(response.data)
      }).catch(err=>console.log(err));
    }
    useEffect(()=>{
      getLists();
    },[]);
    const RequestDelete=(id)=>{
     console.log(id)
    AuthenicationBase.get(`/delete-exist/${id}`)
    .then(response=>{
      getLists()
    }).catch(err=>console.log(err))
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
<p class="px-1" style={{color:'grey'}}>Queue name: {x.names}<br/>
<small>User: {x.username}</small><br/>
<small>Number: {x.number}</small><br/>
</p>
<div class="py-1">
<a class="py-2 ml-2 cursor-pointer px-4 text-white shadow-sm font-bold rounded-md" style={{background:COLOR[2]}} onClick={()=>RequestDelete(x.id)}>Delete</a>
<Link to={`/get-user-item/${x.username}/${x.number}/${x.names}`}>
<a class="py-2 ml-2 cursor-pointer px-4 text-white shadow-sm font-bold rounded-md bg-[#F9A826]">View</a>
</Link>
</div>
</div>

</div>

</div>
</div>
            </div>):<p style={{color:"grey",textAlign:"center",fontSize:"18px",fontWeight:"400"}}>You are not on any queue . Join a queue to get your number.</p>
        }
    </div>
  )
}

export default Myqueue