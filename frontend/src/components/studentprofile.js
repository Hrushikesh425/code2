import { CssBaseline } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import profile from "../images/profile.png";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Grid from "@mui/material/Grid";
import { ListItemText } from "@mui/material";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import { NavLink } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import NavScrollExample from "./Navbar";

const columns = [
  {
    field: "eventId",
    headerName: "Event ID",
    width: 90,
  },
  {
    field: "eventName",
    headerName: "Event name",
    width: 150,
    // editable: true,
  },
  {
    field: "date",
    headerName: "Event Date",
    width: 150,
    // editable: true,
  },
  {
    field: "time",
    headerName: "Event Time",
    type: "number",
    width: 110,
    // editable: true,
  },
];

export const StudProfile = () => {
  const [user, setUser] = React.useState(null);
  const [bookedEvents, setBookedEvents] = React.useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  React.useEffect(() => {
    axios
      .get("/u/getUser", { headers: { token: localStorage.getItem("token") } })
      .then((res) => {
        setUser(res.data.user);
        // console.log(res.data.user)
      });

    axios
      .get("/event/getBookedEvents", {
        headers: { token: localStorage.getItem("token") },
      })
      .then((res) => {
        setBookedEvents(res.data.events);
        // console.log(res.data.events)
      });
  }, []);

  const handleOnChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user)
  };

  const handleEditDone = async (e) => {
    e.preventDefault();
    const res = await axios.put("/u/edit", user, {
      headers: {
        token: localStorage.getItem("token"),
      },
    });
    // console.log(res)
  };

  return (
    <>
      <NavScrollExample />
      <center>
        <React.Fragment>
          <CssBaseline>
            <Box sx={{ bgcolor: "#fffff0", width: "100vh" }}>
              <br />
              <Container maxWidth="s">
                {/* <Box sx={{ bgcolor: "#ffffff", height: "30vh", width: "30vh" }}>
                <img
                  src={profile}
                  alt="profile"
                  sx={{ height: "30vh", width: "30vh" }}
                />
                <br />
                <Button variant="contained" component="label">
                  Upload
                  <input hidden accept="image/*" multiple type="file" />
                </Button>
              </Box> */}
              </Container>
              <br />
              <Container maxWidth="s">
                <Box sx={{ bgcolor: "#ffffff", height: "55vh" }}>
                  <h1>
                    <center>Student Info</center>
                  </h1>
                  <p>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <center>
                          <List>
                            <ListItem>
                              <ListItemText>
                                Student Name: {user?.name}
                              </ListItemText>
                            </ListItem>
                            <ListItem>
                              <ListItemText>
                                Student ID: {user?.studentid}
                              </ListItemText>
                            </ListItem>
                            <ListItem>
                              <ListItemText>
                                Student Email: {user?.email}
                              </ListItemText>
                            </ListItem>
                            <ListItem>
                              <ListItemText>
                                Phone Number: {user?.phone}
                              </ListItemText>
                            </ListItem>
                            <ListItem>
                              <ListItemText>
                                Branch: {user?.branch}
                              </ListItemText>
                            </ListItem>
                            <ListItem>
                              <ListItemText>Division: {user?.div}</ListItemText>
                            </ListItem>
                          </List>
                        </center>
                      </Grid>
                    </Grid>
                  </p>
                  <center>
                    <Button
                      onClick={handleShow}
                      variant="contained"
                      color="success"
                    >
                      Edit Info
                    </Button>
                  </center>
                </Box>
              </Container>
            </Box>
            <br />
            <Container>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Event Name</th>
                    <th>Event Host</th>
                    <th>Type</th>
                    <th>Venue</th>
                    <th>Price</th>
                    <th>Date</th>
                    <th>Branch</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {bookedEvents?.map((value, index) => {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{value.eventName}</td>
                        <td>{value.eventHost}</td>
                        <td>{value.eventType}</td>
                        <td>{value.eventVenue}</td>
                        <td>{value.eventPrice} .Rs</td>
                        <td>{value.eventDate}</td>
                        <td>{value.eventBranch}</td>
                        <td>{value.eventTime}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Container>
          </CssBaseline>
        </React.Fragment>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>edit Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="bg-neon-800 flex flex-col justify-center">
              <form className="max-w-[500px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
                <h2 className="text-4xl dark:text-white font-bold text-center"></h2>
                <div className="flex flex-col text-gray-400 py-2">
                  <label>Name</label>
                  <input
                    value={user?.name}
                    onChange={handleOnChange}
                    name="name"
                    type="text"
                    className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                  ></input>
                </div>
                <div className="flex flex-col text-gray-400 py-2">
                  <label>Email</label>
                  <input
                    value={user?.email}
                    onChange={handleOnChange}
                    name="email"
                    type="text"
                    className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                  ></input>
                </div>
                <div className="flex flex-col text-gray-400 py-2">
                  <label>Username</label>
                  <input
                    value={user?.username}
                    onChange={handleOnChange}
                    name="username"
                    type="text"
                    className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                  ></input>
                </div>
                <div className="flex flex-col text-gray-400 py-2">
                  <label>College Name</label>
                  <input
                    value={user?.collegname}
                    onChange={handleOnChange}
                    name="collegname"
                    type="text"
                    className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                  ></input>
                </div>
                <div className="flex flex-col text-gray-400 py-2">
                  <label>Student Id</label>
                  <input
                    value={user?.studentid}
                    onChange={handleOnChange}
                    name="studentid"
                    type="text"
                    className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                  ></input>
                </div>
                <div className="flex flex-col text-gray-400 py-2">
                  <label>Branch</label>
                  <input
                    value={user?.branch}
                    onChange={handleOnChange}
                    name="branch"
                    type="text"
                    className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                  ></input>
                </div>
                <div className="flex flex-col text-gray-400 py-2">
                  <label>phone no</label>
                  <input
                    value={user?.phone}
                    onChange={handleOnChange}
                    name="phone"
                    type="number"
                    className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                  ></input>
                </div>
                <div className="flex flex-col text-gray-400 py-2">
                  <label>div</label>
                  <input
                    value={user?.div}
                    onChange={handleOnChange}
                    name="div"
                    type="text"
                    className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                  ></input>
                </div>
                <button
                  className="text-white bg-green-500 p-2 rounded-xl"
                  onClick={handleEditDone}
                >
                  Done
                </button>
              </form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            {/* <Button   variant="primary" onClick={handleDoneEdit}>
            Save Changes
          </Button> */}
          </Modal.Footer>
        </Modal>
      </center>
    </>
  );
};
