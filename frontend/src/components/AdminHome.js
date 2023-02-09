import React, { useContext, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { DataGrid } from "@mui/x-data-grid";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import EventContext from "../context/event/EventContext";
import moment from "moment/moment";
import { v4 as uuidv4 } from "uuid";
import NavScrollExample from "./Navbar";

function AdminHome() {
  const navigate = useNavigate();

  const eventContext = useContext(EventContext);
  const { getEvents, events } = eventContext;

  useEffect(() => {
    if (!localStorage.getItem("token")) navigate("/");

    getEvents();
  }, []);

  const columns = [
    // {
    //   key:uuidv4(),
    //   field: "_id",
    //   headerName: "Event ID",
    //   width: 200,
    // },
    // {
    //   key:uuidv4(),
    //   field: "image",
    //   headerName: "Event Avatar",
    //   width: 200,
    //   editable: true,

    // },

    {
      key: uuidv4(),
      field: "eventName",
      headerName: "Event Name",
      width: 200,
      // editable: true,
    },
    {
      key: uuidv4(),
      field: "eventVenue",
      headerName: "Event Venue",
      width: 200,
      // editable: true,
    },
    {
      key: uuidv4(),
      field: "eventDate",
      headerName: "Event Date",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 200,
      renderCell: ({ value }) => moment(value).format("DD-MM-YYYY"),
    },
    {
      key: uuidv4(),
      field: "eventTime",
      headerName: "Event Time",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 200,
    },
    {
      key: uuidv4(),
      field: "bookedUsers",
      headerName: "No of registers",
      type: "number",
      width: 220,
      // editable: true,
      renderCell: ({ value }) => value.length,
      key: uuidv4(),
    },
    {
      key: uuidv4(),
      field: "_id",
      renderCell: ({ value }) => {
        return (
          <>
            <button
              onClick={() => {
                navigate(`/adminevent/${value}`);
              }}
            >
              Details
            </button>
          </>
        );
      },
    },
  ];
  console.log(events);

  // const rows = [
  //   { id: 1, eventName:"avi", lastName: "Snow", firstName: "Jon", age: 35 },
  //   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  //   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  //   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  //   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  //   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  //   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  //   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  //   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  // ];
  return (
    <>
      <NavScrollExample />
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="s">
          <Box sx={{ bgcolor: "pink", height: "75vh" }}>
            <center>
              <h1>Event List</h1>
            </center>
            <DataGrid
              rows={events ? events : [{ _id: -2 }]}
              columns={events && columns}
              pageSize={10}
              rowsPerPageOptions={[10]}
              disableSelectionOnClick
              experimentalFeatures={{ newEditingApi: true }}
              getRowId={(events) => events?._id + uuidv4()}
            />
          </Box>
        </Container>
      </React.Fragment>

      <br />
      <br />
      <br />
      <center>
        <Button
          onClick={() => navigate("/addEvent")}
          variant="contained"
          color="success"
        >
          Add Event
        </Button>
      </center>
    </>
  );
}

export default AdminHome;
