import React, { Component } from 'react';
import UperHeader from './uperHeader';
import logo from './images/logo.jpg';
import { Link } from 'react-router-dom';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
// import { LinkContainer } from "react-router-bootstrap";
import { IndexLinkContainer } from 'react-router-bootstrap';
export default class Header extends Component {
  

  render() {
    return (
      <div className="container-flued ">
        <UperHeader />
        <div className="container">
        <Navbar  collapseOnSelect className="navbarCustom">

          <div className="row ">
            <div className="col-sm-4">
              <Link to="/">
                <img src={logo} className="img-responsive" alt="logo here" /> </Link>
            </div>

            <div className="col-sm-8 pull-right margin-nav">

              {/* <!-- /.navbar-header --> */}

              {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
              
                <Navbar.Header>

                  <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Brand>

                </Navbar.Brand>

                <Navbar.Collapse>
                  <Nav>

                      


                    <IndexLinkContainer to="/">
                      <NavItem className="navItem" >Home</NavItem>
                    </IndexLinkContainer>
                    <IndexLinkContainer to="/about">
                      <NavItem className="navItem" >About</NavItem>
                    </IndexLinkContainer>






                  



                    <IndexLinkContainer to="/chairmanMessage">
                      <NavItem>Chairman Message</NavItem>
                    </IndexLinkContainer>


                    <IndexLinkContainer to="/services">
                      <NavItem>Services</NavItem>
                    </IndexLinkContainer>


                    <IndexLinkContainer to="/ourClints">
                      <NavItem>Our clients</NavItem>
                    </IndexLinkContainer>

                    <NavDropdown eventKey={6} title="Dropdown" id="basic-nav-dropdown">
                    <IndexLinkContainer to="/contact">
                      <MenuItem eventKey={6.1}>Requrement procedure</MenuItem>
                      </IndexLinkContainer>
                      
                      <IndexLinkContainer to="/contact">
                      <MenuItem eventKey={6.2}>Visa Processing</MenuItem>
                      </IndexLinkContainer>
                      
                      <IndexLinkContainer  to="/ourClints">
                      <MenuItem eventKey={6.3}>Our clients</MenuItem>
                      </IndexLinkContainer>
                      
                    </NavDropdown>

                    <IndexLinkContainer to="/contact">
                      <NavItem>Contact</NavItem>
                    </IndexLinkContainer>
                  </Nav>



                </Navbar.Collapse>
              
              {/* <!-- /.navbar-collapse --> */}

            </div>

          </div>
          </Navbar>
        </div>
      </div>
    )
  }
}
