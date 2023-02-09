import React, { useContext, useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserContext from "../context/user/UserContext";
import { Link } from "react-router-dom";

export default function AdmiLogin() {

    const userContext = useContext(UserContext);
  const {login} = userContext;

  const [user, setUser] = useState({email:"", password:""});

  const handleLogin = (e)=>{
    e.preventDefault();
    login(user)
  }

  const handleOnChange = (e)=>{
    setUser({...user, [e.target.name]: e.target.value})
  }


    return (
        <>
            <Container className="pt-5 fs-4">
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form>
                            <Form.Group onChange={handleOnChange} className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name="email" type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group onChange={handleOnChange} className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="password" placeholder="Password" />
                            </Form.Group>
                            <Button onClick={handleLogin} variant="primary" type="submit" size="lg">
                                Log In
                            </Button>
                            <br /><br />
                            <Link to="/admin-signup" className="text-danger">New Faculty, Signup Instead</Link>
                        </Form>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
