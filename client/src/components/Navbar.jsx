import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logout from './Logout';

const StyledNav = styled.nav`
background-color: orange;
`

export default function Navbar({login}) {
    console.log(login);
    const links = [
        {
            path: '/',
            name: 'Home',
          },
          {
            path: '/upload',
            name: 'Upload Script',
          },
          
    ]
    const links2 = [
        {
            path: '/',
            name: 'HEM',
          },
          {
            path: '/upload',
            name: 'Upload Scriptett',
          },
          
    ]
    let linkArray = [];
    if(login){
        linkArray = links2;
    }

    else{
        linkArray = links;
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
      
          <Logout/>
        
    </StyledNav>   
        </div>
    )
}
