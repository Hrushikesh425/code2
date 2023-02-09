import React, { useContext, useEffect, useState, useRef } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Form from "react-bootstrap/Form";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import banner1 from "../images/banner1.jpg";
import Button from "@mui/material/Button";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Grid from "@mui/material/Grid";
import EventContext from "../context/event/EventContext";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { DownloadTableExcel } from "react-export-table-to-excel";
import NavScrollExample from "./Navbar";

function AdminEventInfo() {
  const tableRef = useRef(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showImgInput, setShowImgInput] = useState(false);
  const eventContext = useContext(EventContext);
  const { getEvent, event, setEvent, editEvent, editEventImg } = eventContext;
  const params = useParams();

  const [bookedUsers, setBookeUsers] = useState([]);
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    getEvent(params.eid);
  }, []);

  useEffect(() => {
    axios
      .get(`/u/getUsersWhoBookedEvent/${params.eid}`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setBookeUsers(res.data.users);
        // console.log("booked", bookedUsers)
      });
  }, [event]);

  const handleDelete = async () => {
    const res = await axios.delete(`/event/delete/${params.eid}`, {
      headers: {
        token: localStorage.getItem("token"),
      },
    });

    // console.log(res)
    if (res.data.success) {
      navigate("/admin");
    }
  };

  const handleOnChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]);

    // console.log(event)
    // console.log("new evetn",newEvent);
    // console.log("This is", event)
  };

  const handleDoneEdit = (e) => {
    // console.log("this is image", image)
    editEvent(params.eid, event);
    // setImage(null)
    e.preventDefault();
    handleClose();
  };
  const handleDoneEditImg = (e) => {
    // console.log("this is image", image)
    editEventImg(params.eid, { ...event, image });
    // setImage(null)
    e.preventDefault();
    getEvent(params.eid);
    setShowImgInput(false);
  };

  // console.log(event)
  return (
    <>
      <NavScrollExample />
      <React.Fragment>
        <CssBaseline />
        <Container className="relative" maxWidth="s">
          <button
            onClick={handleDelete}
            className="absolute z-50 right-12 top-6 bg-red-600 text-white p-2 rounded-2xl font-bold"
          >
            Delete Event
          </button>
          <Box sx={{ bgcolor: "#cfe8fc", height: "200vh" }}>
            <br />
            <center className="relative p-6">
              <Box sx={{ width: "100vh", height: "60vh" }}>
                {event?.image?.filename ? (
                  <img
                    src={`http://localhost:5000/images/${event?.image?.filename}`}
                    alt="banner1"
                    style={{ height: "60vh", width: "100vh" }}
                  />
                ) : (
                  <></>
                )}

                <button
                  onClick={() => setShowImgInput(true)}
                  className="bg-green-400 text-white my-1 font-bold p-2 rounded-xl"
                >
                  Edit image
                </button>
              </Box>
              {showImgInput ? (
                <div className="border-2 border-black absolute z-100 bg-white w-fit right-[5%] left-[5%] mx-auto top-[15%] rounded-xl p-3">
                  <Form>
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>Image Input</Form.Label>
                      <Form.Control
                        onChange={handleImage}
                        type="file"
                        name="image"
                      />
                    </Form.Group>
                    <button
                      onClick={() => setShowImgInput(false)}
                      className="bg-red-500 text-white mr-2 font-bold p-2 rounded-xl"
                    >
                      close
                    </button>
                    <button
                      onClick={handleDoneEditImg}
                      className="border-2 border-black p-2 rounded-xl bg-green-500 text-white"
                      type="submit"
                    >
                      Done
                    </button>
                  </Form>
                </div>
              ) : (
                <></>
              )}
            </center>
            <center></center>
            <br />
            <center>
              <Box sx={{ bgcolor: "#ffffff", height: "100vh", width: "170vh" }}>
                <center>
                  <h1>Event Information</h1>
                </center>
                <center>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <List>
                        <ListItem>
                          <div className="flex gap-3">
                            <span>Event Name:</span>
                            <span>{event?.eventName}</span>
                          </div>
                        </ListItem>
                        <ListItem>
                          <div className="flex gap-3">
                            <span>Event Description:</span>
                            <span>{event?.eventDescription}</span>
                          </div>
                        </ListItem>
                        <ListItem>
                          <div></div>
                          <div className="flex gap-3">
                            <span>Event Venue:</span>
                            <span>{event?.eventVenue}</span>
                          </div>
                        </ListItem>
                        <ListItem>
                          <div className="flex gap-3">
                            <span>Event Date:</span>
                            <span>
                              {new Date(event.eventDate).toDateString()}
                            </span>
                          </div>
                        </ListItem>
                        <ListItem>
                          <div className="flex gap-3">
                            <span>Event Time:</span>
                            <span>{event.eventTime}</span>
                          </div>
                        </ListItem>
                        <ListItem>
                          <div className="flex gap-3">
                            <span>Event Type:</span>
                            <span>{event.eventType}</span>
                          </div>
                        </ListItem>
                        <ListItem>
                          <div className="flex gap-3">
                            <span>Branch:</span>
                            <span>{event.eventBranch}</span>
                          </div>
                        </ListItem>
                      </List>
                    </Grid>
                  </Grid>
                </center>

                <br />
                <br />
                <h2>Registered Students</h2>
                <Table striped bordered hover ref={tableRef}>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Student Name</th>
                      <th>Phone No</th>
                      <th>Email</th>
                      <th>Branch</th>
                      <th>Division</th>
                      <th>Student ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookedUsers?.map((value, index) => {
                      return (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{value.name}</td>
                          <td>{value.phone}</td>
                          <td>{value.email}</td>
                          <td>{value.branch}</td>
                          <td>{value.div}</td>
                          <td>{value.studentid}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Box>
            </center>
            <br />
            <br />
            <center className=" flex w-full justify-center items-center h-[100px]">
              <Button variant="contained" color="success">
                <NavLink to="/admin">Back</NavLink>
              </Button>
              {/* <Button variant="contained" color="success">
              </Button> */}
              <Button variant="primary" onClick={handleShow}>
                edit
              </Button>

              <DownloadTableExcel
                filename="users table"
                sheet="users"
                currentTableRef={tableRef.current}
              >
                <button> Export excel </button>
              </DownloadTableExcel>
            </center>
          </Box>
        </Container>
      </React.Fragment>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Event Name</Form.Label>
              <Form.Control
                value={event?.eventName}
                onChange={handleOnChange}
                type="text"
                placeholder="Event Name"
                name="eventName"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Event Host</Form.Label>
              <Form.Control
                value={event?.eventHost}
                onChange={handleOnChange}
                type="text"
                placeholder="Event Host"
                name="eventHost"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Event Description</Form.Label>
              <Form.Control
                value={event?.eventDescription}
                onChange={handleOnChange}
                type="text"
                placeholder="Event Description"
                name="eventDescription"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                value={event?.eventPrice}
                onChange={handleOnChange}
                type="number"
                placeholder="Event Price"
                name="eventPrice"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Event Branch</Form.Label>
              <Form.Control
                value={event?.eventBranch}
                onChange={handleOnChange}
                type="text"
                placeholder="Event Branch"
                name="eventBranch"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Event Date</Form.Label>
              <Form.Control
                value={event?.eventDate}
                onChange={handleOnChange}
                type="text"
                placeholder="Event Date"
                name="eventDate"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Event Time</Form.Label>
              <Form.Control
                value={event?.eventTime}
                onChange={handleOnChange}
                type="text"
                placeholder="Event Time"
                name="eventTime"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Event Venue</Form.Label>
              <Form.Control
                value={event?.eventVenue}
                onChange={handleOnChange}
                type="text"
                placeholder="Event Venue"
                name="eventVenue"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Event Type</Form.Label>
              <Form.Control
                value={event?.eventType}
                onChange={handleOnChange}
                type="text"
                placeholder="Event Type"
                name="eventType"
              />
            </Form.Group>

            <button
              onClick={handleDoneEdit}
              className="border-2 border-black p-2 rounded-xl bg-green-500 text-white"
              type="submit"
            >
              Done
            </button>
          </Form>
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
    </>
  );
}

export default AdminEventInfo;
