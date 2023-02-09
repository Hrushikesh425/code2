import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";


function IndivisualCard ({event}){
  const navigate = useNavigate()

//   const base64 = Buffer.from(event.image.data).toString('base64');
// const src = `data:${event.image.type};base64,${base64}`;

    return (
      <Card style={{ width: "18rem" , height:"400px"}} className="box">
        <img src={`http://localhost:5000/images/${event.image.filename}`} alt="My Image" />
        <h4>
          {
            event.eventName
          }
        </h4>
        <Card.Body>
          <Card.Title>{event.eventname}</Card.Title>
          <button onClick={()=>{navigate(`/event/${event._id}`)}} className="bg-purple-700 text-white px-3 py-2 rounded-xl">
            Details
          </button>
          
        </Card.Body>
      </Card>
     
    );
  };


  export default IndivisualCard;