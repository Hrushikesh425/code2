import React, { useContext, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"


export default function AdminSignup() {
    const navigate = useNavigate()
    const [user, setUser] = useState({ name: "", email: "", password: "" });

    const handleOnChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user)
    }

    const handleSignUp = (e) => {
        console.log(user)
        axios.post('/u/signUpAdmin', user)
             .then(function (response) {
                 if(response?.data?.success){
                     localStorage.setItem('token', response.data.token)
                     navigate('/admin')
                 }else{
                     alert("cant sign up")
                 }
             })
             .catch(function (error) {
                 console.log(error);
                 alert("can't signup")
             });
    

       

    }


    return (
        <>
            <Container className="pt-5 fs-4">
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Faculty Name</Form.Label>
                                <Form.Control name="name" type="text" placeholder="Enter Your Name" onChange={handleOnChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name="email" type="email" placeholder="Enter email" onChange={handleOnChange} />
                                <Form.Text className="text-muted text-left">
                                    <small>Email must contain only callege Email ID</small>
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="password" placeholder="Password" onChange={handleOnChange} />
                            </Form.Group>
                            <Button onClick={handleSignUp} variant="primary" type="button" size="lg">
                                SignUp
                            </Button>
                            <br /><br />
                            <Link to="/admin-login" className="text-danger">Already! Faculty, Login Instead</Link>
                        </Form>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
