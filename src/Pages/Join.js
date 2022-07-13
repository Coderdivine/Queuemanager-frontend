import React,{createContext, useContext, useEffect, useState} from 'react'
import { QrReader } from 'react-qr-reader';
import axios from 'axios';
import { COLOR } from '../Color';
import { create } from '../App';
import logo from "../6.svg";
export const QUICKAUTH = createContext(null)
function Join() {
  const {playSound,setBox,setShowalert} = useContext(create)
  const [data, setData] = useState(null);
  const[toScan,setToScan]=useState(true);   
  const[msg,setMsg]=useState("");
  const Control=(val)=>{
    setToScan(val);
    setMsg("Please scan a queue qrcode")
  };
var locals = sessionStorage.getItem("queue_data")?JSON.parse(sessionStorage.getItem("queue_data")):null;
const[longitude,setLongitude]=useState(null);
 const[latitude,setLatitude]=useState(null);
 const[rows,setRows]=useState(true)
 const getGeoLocation=()=>{
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
      setLongitude(position.coords.longitude)
      setLatitude(position.coords.latitude)
     setRows(false)
    // console.log(position)

    })
  }
   
};
const row_to__=()=>{
  setRows(true)
}
  const changeState=(text)=>{
    setData(text); 
    Control(true);
    setMsg("Done, scan again")
  }
  const[details,setDetails]=useState(null);
  const QRcodes=()=>{
    if(data){
      setMsg("searching...")
      const creator = data.split("/")[0];
      const creatorhash = data.split("/")[1];
      //creator,creatorhash
      axios.post("https://qtree.herokuapp.com/queue-details",{creator,creatorhash})
      .then((response)=>{
        setDetails(response.data);
        console.log(response.data);
        setRows(false);
        setMsg("Scaned");
      }).catch(err=>{
        alert(err);
        setMsg("Make sure you use Qtree qrcode")
      })
    }
  }
  const toRad=(Value)=> 
    {
        return Value * Math.PI / 180;
    }
    const calcCrow=(lat1, lon1, lat2, lon2) =>
    {
      var R = 6371; // km
      var dLat = toRad(lat2-lat1);
      var dLon = toRad(lon2-lon1);
      var lat1 = toRad(lat1);
      var lat2 = toRad(lat2);

      var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c;
      return d;
    };
  useEffect(()=>{
   QRcodes();
  },[data]);
  const Filters___=(data)=>{
    let result = [];
    console.log("long"+longitude);
    console.log("lat"+latitude);
    console.log(data.length)
    for(let i=0;i<data.length;i++){
        //const R = 6371;
        const lat2 = Number(data[i].latitude);
        const lat1 = latitude ;
        const lon1 =  longitude
        const lon2 =  Number(data[i].longitude);
        const d = calcCrow(lat1,lon1,lat2,lon2);//meters
        const d_m = d/1000 ;//metres
        console.log("after"+d_m);
        console.log("___-----___")
        console.log("after_and _smae"+d/1000);//km
        const m = 0.01
     if(d_m<=m){
      result.push(data[i]);
     console.log(data[i])
    }else{
      console.log("above_2m"+JSON.stringify(data[i]))
    }
 

  }
  setDetails(result);
  if(result.length>0){
    setMsg(`Found ${result.length} queue around you`)
  }else{
    setMsg("Did not find any queue around you. Please make sure your below a distnace of 10m from a queue")
  }
  }
  const Location=()=>{
   if(longitude&&latitude){
     //every
     axios.get("https://qtree.herokuapp.com/every")
      .then((response)=>{
        Filters___(response.data);
      }).catch(err=>{
        alert(err);
        playSound("cancel")
      })
   }
  };
  useEffect(()=>{
    if(!locals){
 window.location = "/auth";
    }
},[]);
  const[quickLogin,setQuickLogin]=useState(false);
  useEffect(()=>{
    if(locals==null){
      setQuickLogin(true);
    }
  },[locals])
  useEffect(()=>{
    Location();
    setMsg("searching...")
  },[longitude,latitude]);
 
  const Join_User=async(one,two,three,four,names)=>{
    const use ={creatorhash:four,queuehash:one};
    console.log(use);
    setButton(false)
    const nan = await  axios.post(`https://qtree.herokuapp.com/lengths`,use)
    .then(response=>{
      return response.data;
    })
    .catch(err=>{
      alert(err);
    });
    const datas = {username:locals&&locals[0].username,firstname:locals&&locals[0].firstname,lastname:locals&&locals[0].lastname,creatorhash:four,queuehash:one,queuenumber:nan,date:new Date().toISOString().substring(0,10),nameofqueue:two,status:nan==0?"NEXT":"START"};
    axios.post("https://qtree.herokuapp.com/queueitem",datas)
    .then(response=>{
      setBox({type:"green",message:"Already in queue",time:8,des:`At number ${nan}`});
      setShowalert(true);
     setMsg("Already in queue");
     setMsg("Redirecting");
     window.location = `/get-user-item/${locals&&locals[0].username}/${nan}/${names}`;
    })
      
};
   const[button,setButton]=useState(true);
  return (
    <div>
     <div class="py-2 px-3 my-1 w-full rounded-md shadow-md">
      <div class="rounded-md shadow-sm my-1  py-4 px-2" style={{background:"white",height:"76%",width:"100%",justifyContent:"space-between",alignItems:"center",textAlign:"center"}}>
    <button onClick={row_to__} class="rounded-md ml-1 mr-4 shadow-sm py-3 px-6 text-white  font-bold bg-[#F9A826]">
      Scan qrcode
      </button>
      <button onClick={getGeoLocation}  class="rounded-md ml-1 mr-2 shadow-sm py-3 px-6  text-white  font-bold bg-[#F9A826]">
      Use Location
      </button>
     </div>
     {
       rows?
       <div>
          {toScan?
        <div>
          <img src={logo} style={{width:"100%",height:"426px"}} />
        </div>
      :<div>
<QrReader
        onResult={(result, error) => {
          if (!!result) {
            changeState(result?.text);
          }
          if (!!error) {
            //console.info(error);
          }
        }}
        style={{ width: '100%'}}
      />
     </div>}
     <div class="py-4 px-4 my-5" style={{alignItems:"center",textAlign:"center",justifyContent:"center"}}>
     <button class="py-2 px-10" onClick={()=>Control(false)} style={{background:COLOR[0],color:"white",margin:"6px 21px",textAlign:"center",borderRadius:"6px"}}>
       start scaning
      </button>
     </div>
       </div>
       :<div>
         
       </div>
     }
      {
        //longitude,latitude,defaultKm,nameofqueue,creator,createdAt,expires,creatorhash,queuehash,img
          details?details.map(x=>
            <div key={x.id}>
              <div class="w-full px-2 py-2 my-3 shadow-lg rounded-md">
<div id="group" class="w-full rounded-md  font-bold py-1 px-2 ">
<div class="rounded-md bg-white md:w-auto shadow-md">
<div class="flex flexed py-2 px-2 my-2">
<p class="px-1" style={{color:'grey'}}>Queue Name: {x.nameofqueue}<br/>
<small>Queue hash: {x.queuehash}</small>
</p>
<div class="py-1">
<a onClick={()=>Join_User(x.queuehash,x.nameofqueue,x.creator,x.creatorhash,x.nameofqueue)} class="py-2 cursor-pointer ml-2 px-7 text-white shadow-sm font-bold rounded-md bg-[#F9A826]" disabled={button}>Join</a>
</div>
</div>
</div>

</div>
</div>
            </div>):<p style={{color:"grey",textAlign:"center",fontSize:"18px",fontWeight:"400"}}>...</p>
        }
       
        </div>
    </div>
  )
}

export default Join;