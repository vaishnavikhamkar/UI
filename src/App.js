import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import "../src/timer";
import Logo from "./images/Logo.png";
import "./App.css";
import ProgressTimer from 'react-progress-timer';

function App(){
    return (
      <div className="App">
        <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <ReactBootStrap.Navbar.Brand><img src={Logo} width="150" height="50" className="d-inline-block align-top" alt="REact BootStrap Logo"></img></ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="me-auto">
      <ReactBootStrap.Nav.Link href="#features">Home</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#pricing">Plan & Pricing</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#pricing">FAQs</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#pricing">Contact us</ReactBootStrap.Nav.Link>
      {/* <ReactBootStrap.NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown> */}
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
      <ReactBootStrap.Nav.Link href="#deets"><button className="btn">Login</button></ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
      <button className="btn">Sign Up</button>
      </ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
  </ReactBootStrap.Navbar>

           <h1 id="haider">Buy a Plan and be Interview Ready!</h1>
           {/* <ProgressTimer
        percentage={1}
    /> */}
          

          {/* Cards */}
  <ReactBootStrap.CardGroup className='Cards'>
  <ReactBootStrap.Card >
    {/* <ReactBootStrap.Card.Img variant="top" src="holder.js/100px160" /> */}
    <ReactBootStrap.Card.Body>
      <ReactBootStrap.Card.Title><h1>FLAT 30% OFF</h1></ReactBootStrap.Card.Title>
      <ReactBootStrap.Card.Text>
        <h6>Offer ends in </h6>
        {/* <p className="demo"></p> */}
       <p><h4>Weekly Plans</h4>
       <h3>Practice on Weekends</h3>
       <ul>
         <li> Live Practice Sessions PER Week</li>
         <li> Value-Packed # sessions Per Week</li>
         <li> Live Feedback in Every Session</li>
         <li> Live Feedback in Every Session</li>
         <li> Rs.175 per session</li>
       </ul>
       <p>This plan suits if you're already busy with academic projects and classes.</p>
       <h5>Flat 30% OFF for being referred by Saurabh</h5>
       </p>
      </ReactBootStrap.Card.Text>
    </ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Footer>
      <small className="text-muted"><div className='Price'>Rs.1399<h6>Save30%</h6><h2>Rs.2999</h2></div></small>
      <button className="btn-1">100% Booked</button>
    </ReactBootStrap.Card.Footer>
  </ReactBootStrap.Card>
  <ReactBootStrap.Card>
    {/* <ReactBootStrap.Card.Img variant="top" src="holder.js/100px160" /> */}
    <ReactBootStrap.Card.Body>
      <ReactBootStrap.Card.Title><h1>FLAT 30% OFF</h1></ReactBootStrap.Card.Title>
      <ReactBootStrap.Card.Text>
      <h6>Offer ends in </h6>
      {/* <p className="demo"></p> */}
      <p><h4>Weekly Plans</h4>
       <h3>Communication Along with College</h3>
       <ul>
         <li> 12 Live Practise Sessions</li>
         <li> Value-Packed 3 sessions Per Week</li>
         <li> Live Feedback in Every Session</li>
         <li> Live Feedback in Every Session</li>
         <li> Rs.128 per session</li>
       </ul>
       <p>This plan suits if you're already busy with academic projects and classes.</p>
       <h5>Flat 30% OFF for being referred by Saurabh</h5>
       </p>
      </ReactBootStrap.Card.Text>
    </ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Footer>
    <small className="text-muted"><div className='Price'>Rs.1399<h6>Save30%</h6><h2>Rs.2999</h2></div></small>
    <button className="btn-1">100% Booked</button>
    </ReactBootStrap.Card.Footer>
  </ReactBootStrap.Card>
  <ReactBootStrap.Card>
    {/* <ReactBootStrap.Card.Img variant="top" src="holder.js/100px160" /> */}
    <ReactBootStrap.Card.Body>
      <ReactBootStrap.Card.Title><h1>FLAT 30% OFF</h1></ReactBootStrap.Card.Title>
      <ReactBootStrap.Card.Text>
      <h6>Offer ends in </h6>
      {/* <p className="demo"></p> */}
      <p><h4>Weekly Plans</h4>
       <h3>Be Interview Ready In Less-Time</h3>
       <ul>
         <li> 20 Live PRactice Sessions PER Week</li>
         <li> Value-Packed 5 sessions Per Week</li>
         <li> Live Feedback in Every Session</li>
         <li> Live Feedback in Every Session</li>
         <li> Rs.105 per session</li>
       </ul>
       <p>This plan suits if you're already busy with academic projects and classes.</p>
       <h5>Flat 30% OFF for being referred by Saurabh</h5>
       </p>
      </ReactBootStrap.Card.Text>
    </ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Footer>
    <small className="text-muted"><div className='Price'>Rs.1399<h6>Save30%</h6><h2>Rs.2999</h2></div></small>
    <button className="btn-1">100% Booked</button>
    </ReactBootStrap.Card.Footer>
  </ReactBootStrap.Card>
</ReactBootStrap.CardGroup>










      </div>
    );
  
}

export default App;
