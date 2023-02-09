import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import Button2 from "@mui/material/Button";
import { useState } from "react";

function NavScrollExample() {
  const [search, setSearch] = useState("");
  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };

  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const handleSearchEvent = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <Navbar bg="blue" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">EventApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "500px" }}
            navbarScroll
          >
            <Nav.Link href="/home">
              <Button2>Home</Button2>
            </Nav.Link>
            <Nav.Link as={Link} to="/userfeedback">Feedback</Nav.Link>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Department
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => navigate("/department/IT")}>
                  Information Technology
                </Dropdown.Item>
                <Dropdown.Item onClick={() => navigate("/department/CS")}>
                  Computer Science
                </Dropdown.Item>
                <Dropdown.Item onClick={() => navigate("/department/EXTC")}>
                  Electronics & Telecommunication
                </Dropdown.Item>
                <Dropdown.Item onClick={() => navigate("/department/AUTO")}>
                  Automobile
                </Dropdown.Item>
                <Dropdown.Item onClick={() => navigate("/department/CIVIL")}>
                  Civil
                </Dropdown.Item>
                <Dropdown.Item onClick={() => navigate("/department/AIDS")}>
                  AIDS
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            &nbsp;&nbsp;
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Types
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => navigate("/type/technical")}>
                  Technical
                </Dropdown.Item>
                <Dropdown.Item onClick={() => navigate("/type/non-technical")}>
                  Non Technical
                </Dropdown.Item>
                <Dropdown.Item onClick={() => navigate("/type/seasonal")}>
                  Seasonal
                </Dropdown.Item>
                <Dropdown.Item onClick={() => navigate("/type/workshop")}>
                  workshop
                </Dropdown.Item>
                <Dropdown.Item onClick={() => navigate("/type/cultural")}>
                  cultural
                </Dropdown.Item>
                <Dropdown.Item onClick={() => navigate("/type/sports")}>
                  sports
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Mode
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => navigate("/mode/online")}>
                  Online
                </Dropdown.Item>
                <Dropdown.Item onClick={() => navigate("/mode/offline")}>
                  Offline
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              onChange={handleOnChange}
              name="search"
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button
              type="submit"
              onClick={handleSearchEvent}
              variant="outline-success"
            >
              Search
            </Button>
          </Form>
      
          {token ? <Button style={{ marginLeft: "1%" }} onClick={()=>{handleLogout()}}>Logout</Button> : ""}

          <Button variant="outline-sucess">
            <NavLink to="/profile">
              <AccountCircleRoundedIcon sx={{ fontSize: 55 }} />
            </NavLink>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
