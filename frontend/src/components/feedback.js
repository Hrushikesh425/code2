import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import NavScrollExample from "./Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useContext } from "react";
import UserContext from "../context/user/UserContext";
import { useNavigate } from "react-router-dom";

const UserFeedback = () => {
  const userContext = useContext(UserContext);

  const navigate =useNavigate()

  const [feed, setfeed] = useState({
    name: "",
    email: "",
    department: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feed.name === "" || feed.email === "" || feed.department === "" || feed.message === "") {
      alert("Please fill all the fields")
    }
    else {
      fetch("http://localhost:5000/api/v1/feed/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: feed.name,
          email: feed.email,
          department: feed.department,
          message: feed.message,
        }),
      })
        .then((res) => res.json().then((data) => {
          console.log(data);
          if (data.success) {
            alert("Feedback Submitted");
          } else {
            alert("Feedback not Submitted");
          }

        }))
    }
  };

  const handleOnChange = (e) => {
    setfeed({ ...feed, [e.target.name]: e.target.value });
  };

  return (
    <>
      <NavScrollExample />
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box sx={{ height: "70vh" }}>
            <center>
              <h1>FeedBack Form</h1>
            </center>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your Name"
                  onChange={handleOnChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Deparment</Form.Label>
                <Form.Control
                  name="department"
                  type="text"
                  placeholder="Enter Department Name"
                  onChange={handleOnChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  type="text"
                  placeholder="Enter Email Address"
                  onChange={handleOnChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Feedback</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  type="textarea"
                  placeholder="Enter Email Address"
                  rows={5}
                  onChange={handleOnChange}
                />
              </Form.Group>

              <Button variant="primary" onClick={(e)=>{handleSubmit(e)}}>
                Submit
              </Button>
            </Form>
          </Box>
        </Container>
      </React.Fragment>
    </>
  );
};

export default UserFeedback;
