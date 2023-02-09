import axios from "axios"
import { useState } from "react"
import EventContext from "./EventContext"

const EventState = (props)=>{

    const [events, setEvents] = useState([]);
    const [event, setEvent] = useState({});


    const createEvent = async(event)=>{
        console.log("oure",event)
        const res = await axios.post('/event/create', event, {
            headers:{
                'token':localStorage.getItem('token'),
                'content-type': 'multipart/form-data',

            }
        })
        // console.log(res.data)
    }

    const getEvents = async()=>{
        const res = await axios.get('/event/getEvents', {
            headers:{
                'token':localStorage.getItem('token')
            }
        });

        setEvents(res.data.events);
    }
    const getEvent = async(id)=>{
       try{
        const res = await axios.get(`/event/getEvent/${id}`, {
            headers:{
                'token':localStorage.getItem('token')
            }
        });
        // console.log(res.data)
        setEvent(res.data.event)
       }catch(err){
        console.log(err)
       }
    }
    const editEvent = async(id, update)=>{
        try{
            console.log("oure",update)

        const res = await axios.put(`/event/edit/${id}`,update, {
            headers:{
                'token':localStorage.getItem('token'),
                // 'content-type': 'multipart/form-data',

            }
        });
        }catch(err){
            console.log(err)
        }
        // console.log(res.data)
    }
    const editEventImg = async(id, update)=>{
        try{
            // console.log("oure",update)

        const res = await axios.put(`/event/editimage/${id}`,update, {
            headers:{
                'token':localStorage.getItem('token'),
                'content-type': 'multipart/form-data',

            }
        });
        console.log(res.data)
        }catch(err){
            console.log(err)
        }
    }


   

    return(
        <EventContext.Provider value={{getEvents, events, setEvents, getEvent, event, setEvent, createEvent, editEvent, editEventImg}}>
            {
                props.children
            }
        </EventContext.Provider>
    )    
}

export default EventState;