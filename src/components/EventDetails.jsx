
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getallEvents } from "../services/api";
export default function EventDetails(){
  const [Event,setEvent ]=useState({})

  // const {nom }= useParams();
    
  const {id }= useParams();
  // const event=listEvent.find((e=>e.name==nom));
    // console.log(event)

    useEffect(()=>{
      const  fetchlistbyid=async()=>{
         const events=await getallEvents(id);
         setEvent(events.data);
      }
      fetchlistbyid();
   },[])



    return  <>
        {
            // event? <p>{event.name}</p>: <p>event not found</p>
            Event? <p>{Event.name}</p>: <p>event not found</p>

        }
    </>
    

    

    }