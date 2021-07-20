import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import "../Pages/Styles.css";

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
             isOpen:false,
        }
    }

    toggleBar =()=>{
        this.setState({isOpen:!this.state.isOpen})
    }
  render() {
    const {isActive}=this.props
    // console.log("Header Active",isActive)
    return (
      <React.Fragment>
        <div>
          <Navbar  light expand="md" style={{borderRadius:'15px',margin:'10px',backgroundColor:'#b3aaaa'}}>
            <NavbarBrand style={{ marginLeft: "30px", fontSize: "30px" }}>
              LOGO
            </NavbarBrand>
            <NavbarToggler onClick={()=>this.toggleBar()} />
            <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink  disabled={isActive}  className="links" href="/home">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink disabled={isActive}  className="links" href="/tasks">
                  Task
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink  disabled={isActive}  className="links" href="/login">
                  User
                </NavLink>
              </NavItem>
              <NavItem>
              <NavLink 
               
               >

              </NavLink>
              </NavItem>
            </Nav>
            </Collapse>
          </Navbar>
        </div>
      </React.Fragment>
    );
  }
}
