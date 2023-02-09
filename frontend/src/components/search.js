import React, { useContext, useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { NavLink, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "../App.css";
import EventContext from "../context/event/EventContext";
import IndivisualCard from "./IndivisualCard";
import axios from "axios";
import NavScrollExample from "./Navbar";

function Search() {
  const params = useParams();
  const [filteredEvents, setFilteredEvents] = useState([]);

  const getSearchedEvents = async () => {
    const res = await axios.get(`/event/searchEvents?search=${params.search}`, {
      headers: {
        token: localStorage.getItem("token"),
      },
    });
    setFilteredEvents(res.data.events);
    // console.log(res.data.events)
  };

  useEffect(() => {
    getSearchedEvents();
  }, [params.search]);

  return (
    <>
      <NavScrollExample />
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="s">
          <Box sx={{ bgcolor: "pink", height: "100vh" }}>
            <center>
              <h1>
                {params.filter}
                <span className="ml-3">Deparment</span>
              </h1>
            </center>
            <div className="grid">
              {filteredEvents.map((e) => {
                return <IndivisualCard event={e} />;
              })}
            </div>
          </Box>
        </Container>
      </React.Fragment>
    </>
  );
}

export default Search;
