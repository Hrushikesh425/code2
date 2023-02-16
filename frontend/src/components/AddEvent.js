import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext, useState } from "react";
import EventContext from "../context/event/EventContext";
import { useNavigate } from "react-router-dom";
import NavScrollExample from "./Navbar";
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from "@mui/material";
import { GridExpandMoreIcon } from "@mui/x-data-grid";

function AddEvent() {
  const eventcontext = useContext(EventContext);
  const { createEvent } = eventcontext;
  const [venue, setvenue] = useState({
    venueName: "",
    venueAddress: "",
  })

  const [event, setEvent] = useState({
    eventName: "",
    eventHost: "",
    eventDescription: "",
    eventBranch: "",
    eventDate: "",
    endTime: "",
    eventendTime: "",
    eventVenue: "",
    eventType: "",
    eventMode: "",
    eventRoll: ""
  });
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const handleAdd = (e) => {
    e.preventDefault();
    createEvent({ ...event, image: image,eventVenue:venue.venueName+"-"+venue.venueAddress });
    navigate("/home");
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]);
    console.log(typeof image);
  };

  const handleOnChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
    console.log(event);
  };

  return (
    <>
      <NavScrollExample />
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Event Name</Form.Label>
                <Form.Control
                  onChange={handleOnChange}
                  type="text"
                  placeholder="Event Name"
                  name="eventName"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Event Host</Form.Label>
                <Form.Control
                  onChange={handleOnChange}
                  type="text"
                  placeholder="Event Host"
                  name="eventHost"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Event Description</Form.Label>
                <Form.Control
                  as="textarea"
                  name="eventDescription"
                  type="textarea"
                  placeholder="Event Description"
                  rows={5}
                  onChange={handleOnChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Rolls</Form.Label>
                <Form.Control
                  as="textarea"
                  name="eventRoll"
                  type="textarea"
                  placeholder="Rolls"
                  rows={5}
                  onChange={handleOnChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  onChange={handleOnChange}
                  type="number"
                  placeholder="Event Price"
                  name="eventPrice"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Event Branch</Form.Label>
                <Form.Control
                  onChange={handleOnChange}
                  type="text"
                  placeholder="Event Branch"
                  name="eventBranch"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Event Date</Form.Label>
                <Form.Control
                  onChange={handleOnChange}
                  type="date"
                  placeholder="Event Date"
                  name="eventDate"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Event Time</Form.Label>
                <Form.Control
                  onChange={handleOnChange}
                  type="time"
                  placeholder="Event Time"
                  name="eventTime"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>End Time</Form.Label>
                <Form.Control
                  onChange={handleOnChange}
                  type="time"
                  placeholder="Event End Time"
                  name="endTime"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Event Head Volunteer</Form.Label>
                <Form.Control
                  onChange={handleOnChange}
                  type="text"
                  placeholder="Event Head Volunteer"
                  name="eventHeadVolunteer"
                />
              </Form.Group>
              <Accordion>
                <AccordionSummary
                  expandIcon={<GridExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Select Venue</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={2}>
                    <Grid item xs={6} sm={6}>
                      <Form.Group className="mb-3">
                        <Form.Select
                          aria-label="Default select example"
                          placeholder="Select Event Venue"
                          name="eventVenue"
                          onChange={(e) => { setvenue({ ...venue, venueName: e.target.value }) }}
                        >
                          <option>Select Event Mode</option>
                          <option value="Classroom">Classroom</option>
                          <option value="Lab">Lab</option>
                        </Form.Select>
                      </Form.Group>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          onChange={(e) => { setvenue({ ...venue, venueAddress: e.target.value }) }}
                          type="text"
                          placeholder="Enter Name of Venue"
                          name="eventVenue"
                        />
                      </Form.Group>
                    </Grid>
                  </Grid>

                </AccordionDetails>
              </Accordion>

              <Form.Group className="mb-3">
                <Form.Label>Event Type</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  placeholder="Select Event Type"
                  name="eventType"
                  onChange={handleOnChange}
                >
                  <option>Select Event Type</option>
                  <option value="Technical">Technical</option>
                  <option value="Non-Technical">Non-Technical</option>
                  <option value="Cultural">Cultural</option>
                  <option value="Seasonal">Seasonal</option>
                  <option value="Sports">Sports</option>
                  <option value="Workshop">Workshop</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Event mode</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  placeholder="Select Event Mode"
                  name="eventMode"
                  onChange={handleOnChange}
                >
                  <option>Select Event Mode</option>
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                </Form.Select>
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Image Input</Form.Label>
                <Form.Control onChange={handleImage} type="file" name="image" />
              </Form.Group>

              <button
                className="border-2 border-black p-2 rounded-xl bg-green-500 text-white"
                onClick={handleAdd}
                type="submit"
              >
                Add
              </button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default AddEvent;
