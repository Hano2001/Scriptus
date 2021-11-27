import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logout from './Logout';

const StyledNav = styled.nav`
background-color: orange;
`

export default function Navbar({login}) {

    const guestLinks = [
        {
            path: '/home',
            name: 'Home',
          },
          {
            path: '/register',
            name: 'Register',
          },
          {
            path: '/login',
            name: 'Login',
          },
          
    ]
    const userLinks = [
        {
            path: '/home',
            name: 'Home',
          },
          {
            path: '/upload',
            name: 'Upload Script',
          },
          {
            path: '/logout',
            name: 'Logout',
          },
          
    ]
    let linkArray = guestLinks;
    if(login){
        linkArray = userLinks;
    }

    return (
        <div>
          <StyledNav>
      {linkArray.map((link) => (
        <Link to={link.path} key={`${link.name}`}>
          <button>
            <span type="button" className="nav-link ml-2">
              {link.name}
            </span>
          </button>
        </Link>
      ))}
      
          
        
    </StyledNav>   
        </div>
    )
}
