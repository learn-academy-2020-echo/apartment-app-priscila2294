import React, { Component } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';


class Header extends Component {
    render(){
        const {
          logged_in,
          sign_in_route,
          sign_out_route,
        } = this.props
        return (
      <>
  
      <Nav>
        <NavItem>
          <NavLink href="#">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Apartments Available</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Favorites</NavLink>
        </NavItem>
      </Nav>
      <hr />
            {
              !logged_in &&
              <a href={ sign_in_route }>Sign In</a>
            }
            {
              logged_in &&
              <a href= { sign_out_route }>Sign Out</a>
            }
          </>
        )
      }
    }
    export default Header
    