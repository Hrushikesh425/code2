import React, { useContext, useEffect } from "react";
import EventContext from "../context/event/EventContext";
import IndivisualCard from "./IndivisualCard";
import Card from './IndivisualCard'





function EventCard() {

  const eventContext = useContext(EventContext);
  const {getEvents, events} = eventContext;
  console.log(events)

  useEffect(()=>{
    getEvents()
  },[])
  
 
 
  return (
    <>
      <br></br>
      <center>
        <h2>
          <b>
            <i>Recent Events</i>
          </b>
        </h2>
      </center>
      <div className="grid">{events.slice(0,6)?.map(e=>{
        return(
        <IndivisualCard event = {e} />
        )
      })}</div>
    </>
  );
}

export default EventCard;
