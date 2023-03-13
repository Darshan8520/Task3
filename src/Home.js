import React from "react";
// import React from 'react'
import './App.css'
import logo from './logo.svg';
import {Link} from 'react-router-dom'
import Contact from "./Contact";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
function Home() {
  return (
    <>
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
    <div className="card">
    <Card className="bg-dark text-white">
      <Card.Img src="https://images.unsplash.com/photo-1678178092123-7763d2975fbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"  className="img" alt="Card image" />
      {/* <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay> */}
     
      <Link to="/contact"> <p id="text">To Enter Your Details Go To Contact Page!!</p></Link>
    </Card>
    </div>
    </>
  )
}

export default Home
