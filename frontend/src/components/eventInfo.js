import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import banner1 from "../images/banner1.jpg";
import { Table } from "@mui/material";
import InteractiveList from "./list";
import { NavLink, useParams } from "react-router-dom";
import EventContext from "../context/event/EventContext";
import axios from "axios";
import Razorpay from "react-razorpay";
import { data } from "autoprefixer";
import NavScrollExample from "./Navbar";

export default function EventInfo() {
  const eventContext = React.useContext(EventContext);
  const { getEvent, event, setEvent } = eventContext;
  const params = useParams();
  const [booked, setBooked] = React.useState(null);
  const [user, setUser] = React.useState(null);

  const handleRegister = async () => {
    const res = await axios.post("/orders", {
      amount: event.eventPrice,
    });

    var options = {
      key: "rzp_test_mpvBiAPOgFk0Za", // Enter the Key ID generated from the Dashboard
      amount: res.data.order.amount,
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      // image: "https://example.com/your_logo",
      order_id: res.data.order.id,
      handler: async function (response) {
        const res = await axios.post(
          `/event/bookEvent/${event._id}`,
          response,
          {
            headers: {
              token: localStorage.getItem("token"),
            },
          }
        );
        // console.log("our res",res)
      },
      prefill: {
        name: user?.name,
        email: user?.email,
        contact: user?.phone,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();

    // console.log(res.data)
  };

  React.useEffect(() => {
    axios
      .get("/u/getUser", { headers: { token: localStorage.getItem("token") } })
      .then((res) => {
        setUser(res.data.user);
        // console.log(res.data.user)
      });
  }, []);

  React.useEffect(() => {
    getEvent(params.eid);
    event?.bookedUsers?.forEach((e) => {
      if (e == user?._id) {
        setBooked(true);
      } else {
        setBooked(false);
      }
    });
  }, [event]);

  return (
    <>
      <NavScrollExample />
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="s">
          <Box sx={{ height: "70vh" }}>
            <p>
              <h2>Registration Count:{event?.bookedUsers?.length}</h2>
            </p>
            <img
              src={`http://localhost:5000/images/${event?.image?.filename}`}
              alt="banner1"
              style={{ height: "66vh", width: "200vh" }}
            ></img>
          </Box>
        </Container>
        <br />
        <div className="grid">
          <Container maxWidth="sm">
            <Table sx={{ bgcolor: "#fff0f0  ", height: "70vh", width: "70vh" }}>
              <InteractiveList event={event}></InteractiveList>
            </Table>
          </Container>
         
          <Container maxWidth="sm">
            <Box sx={{ bgcolor: "#fff0f0  ", height: "70vh", width: "70vh" }}>
              <h2>Roll Of Volunteer kasa ahes re</h2>
              <h3>{event?.eventRoll}</h3>
            </Box>
          </Container>
          

          <Container maxWidth="sm">
            <Box sx={{ bgcolor: "#fff0f0  ", height: "70vh", width: "70vh" }}>
              <center>
                <h1>Registration</h1>
                <h4>
                  Rs.
                  {event?.eventPrice}
                </h4>
                <center>
                  {/* <NavLink to={`/payment/${event._id}`}>Register to This Event</NavLink> */}
                  {booked ? (
                    <h4>Already Registered</h4>
                  ) : (
                    <button
                      className="border-2 border-black rounded-xl p-2"
                      onClick={handleRegister}
                    >
                      Register To event
                    </button>
                  )}
                </center>
              </center>
            </Box>
          </Container>
        </div>
      </React.Fragment>
    </>
  );
}
