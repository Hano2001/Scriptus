import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const StyledNav = styled.nav`
display:flex;
height:50px;
justify-content: space-between;
background-color: grey;
button{
  padding: 10px;
  color: white;
  font-weight: bold;
  background-color: black;
}
`

export default function Navbar({login}) {

    const guestLinks = [
        {
            path: '/',
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
            path: '/',
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
